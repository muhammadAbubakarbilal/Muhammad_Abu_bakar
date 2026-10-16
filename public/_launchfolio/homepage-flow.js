/* A single composition with independent content time and measured scroll geometry. */
(() => {
  if (location.pathname !== "/" || !window.businessQuestions) return;
  window.destroyBusinessShowcase?.();
  const config = window.businessQuestions;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const compact = matchMedia("(max-width: 1199px)");
  const abort = new AbortController(), { signal } = abort;
  let hero, destination, heroContent, geometry, frame = 0, clockFrame = 0;
  let dirty = true, lastTime = 0, elapsed = 0, active = 0, paused = false;
  let moving = false, visible = true, animations = [], observed = [];
  const element = document.createElement("section");
  element.className = "business-showcase";
  element.setAttribute("aria-label", "Questions about your business");
  const composition = document.createElement("div");
  composition.className = "business-showcase__composition";
  composition.setAttribute("aria-hidden", "true");
  const accessible = document.createElement("div");
  accessible.className = "business-showcase__sr";
  // Stable assistive-technology reading order; no repeated live announcements.
  config.groups.flat().forEach(text => {
    const p = document.createElement("p"); p.textContent = text; accessible.append(p);
  });
  const controls = document.createElement("div");
  controls.className = "business-showcase__controls";
  const toggle = document.createElement("button"), next = document.createElement("button");
  toggle.type = next.type = "button";
  next.textContent = "Next";
  next.setAttribute("aria-label", "Show next group of business questions");
  controls.append(toggle, next);
  element.append(composition, accessible, controls);
  // Outside the hydrated Framer root: React never owns this shared element.
  document.body.append(element);

  function duration() {
    return (config.groups[active].length - 1) * config.stagger + config.entrance + config.hold + config.exit;
  }
  function addWords(question, text) {
    const words = text.split(/\s+/);
    return words.map((word, index) => {
      const span = document.createElement('span');
      span.className = 'business-showcase__word';
      span.textContent = word;
      if (index) question.append(document.createTextNode(' '));
      question.append(span);
      return span;
    });
  }
  function showGroup() {
    animations.forEach(a => a.cancel());
    composition.replaceChildren();
    element.dataset.group = String(active);
    animations = config.groups[active].flatMap((text, index) => {
      const question = document.createElement("p");
      question.className = "business-showcase__question";
      const words = addWords(question, text);
      composition.append(question);
      return words.map((word, wordIndex) => {
      const revealDuration = config.entrance * .65;
      const delay = index * config.stagger + wordIndex / Math.max(1, words.length - 1) * (config.entrance - revealDuration);
      const animation = word.animate([
        { opacity: 0, transform: "translateY(.35em)", filter: "blur(3px)" },
        { opacity: 1, transform: "translateY(0)", filter: "blur(0)" }
      ], { duration: revealDuration, fill: "both", easing: "cubic-bezier(.22,1,.36,1)" });
      animation.showcaseDelay = delay;
      animation.showcaseDuration = revealDuration;
      animation.pause();
      animation.currentTime = reduced.matches || paused ? revealDuration : Math.max(0, elapsed - delay);
      return animation;
      });
    });
    composition.style.opacity = "1";
  }
  function label() {
    toggle.textContent = paused ? "Play" : "Pause";
    toggle.setAttribute("aria-label", paused ? "Play question rotation" : "Pause question rotation");
    toggle.hidden = reduced.matches;
  }
  function tick(time) {
    clockFrame = 0;
    const delta = lastTime ? Math.min(80, time - lastTime) : 0;
    lastTime = time;
    if (!paused && !reduced.matches && !document.hidden && visible && !moving) {
      elapsed += delta;
      if (elapsed >= duration()) { elapsed = 0; active = (active + 1) % config.groups.length; showGroup(); }
      animations.forEach(a => { a.currentTime = Math.min(a.showcaseDuration, Math.max(0, elapsed - a.showcaseDelay)); });
      composition.style.opacity = String(1 - Math.max(0, (elapsed - (duration() - config.exit)) / config.exit));
    }
    clockFrame = requestAnimationFrame(tick);
  }
  toggle.addEventListener("click", () => {
    paused = !paused;
    if (paused) { elapsed = (config.groups[active].length - 1) * config.stagger + config.entrance; showGroup(); }
    label();
  }, { signal });
  next.addEventListener("click", () => {
    active = (active + 1) % config.groups.length;
    elapsed = (config.groups[active].length - 1) * config.stagger + config.entrance;
    showGroup();
  }, { signal });

  const docRect = node => {
    const r = node.getBoundingClientRect();
    return { x: r.left + scrollX, y: r.top + scrollY, width: r.width, height: r.height };
  };
  function measure() {
    const h = docRect(hero), d = docRect(destination), content = docRect(heroContent);
    const startWidth = compact.matches ? Math.min(innerWidth - 44, d.width) : Math.min(560, innerWidth * .4);
    const scale = startWidth / d.width;
    const start = compact.matches
      ? { x: (innerWidth - startWidth) / 2, y: content.y + content.height - 20 }
      : { x: innerWidth - startWidth - 44, y: h.y + 110 };
    const ticker = docRect(hero.querySelector('.framer-w2n11f'));
    const heading = docRect(document.querySelector('.framer-ti4fmg .framer-cbxify'));
    const obstacles = [
      { x: 0, y: ticker.y, width: innerWidth, height: heading.y + heading.height + 32 - ticker.y },
      docRect(document.querySelector('.framer-ti4fmg .framer-1piggx9'))
    ];
    geometry = { d, start, scale, obstacles, end: Math.max(1, d.y - 150) };
    element.style.width = d.width + "px"; element.style.height = d.height + "px";
    // Fit the longest configured group once per geometry change, never on scroll.
    const probe = composition.cloneNode(false);
    probe.style.cssText = "position:absolute;visibility:hidden;width:" + d.width + "px;height:auto;";
    element.append(probe);
    let size = d.width >= 450 ? 28 : 20;
    for (; size > 16; size--) {
      probe.style.setProperty("--question-size", size + "px");
      let max = 0;
      for (const group of config.groups) {
        probe.replaceChildren(...group.map(text => {
          const p = document.createElement("p"); p.className = "business-showcase__question"; addWords(p, text); return p;
        }));
        max = Math.max(max, probe.scrollHeight);
      }
      if (max <= d.height) break;
    }
    probe.remove(); element.style.setProperty("--question-size", size + "px");
    document.documentElement.classList.add("business-showcase-ready");
  }
  function update() {
    frame = 0;
    if (location.pathname !== '/') { element.style.display = 'none'; visible = false; return; }
    element.style.display = '';
    if (!hero?.isConnected || !destination?.isConnected) {
      hero = document.querySelector("section.framer-13kxl6w");
      destination = document.querySelector("section.framer-ti4fmg .framer-1kqkoe");
      heroContent = hero?.querySelector(".framer-10ze9ym");
      if (!hero || !destination || !heroContent) return;
      dirty = true;
    }
    const nodes = [hero, destination, heroContent];
    if (nodes.some((n, i) => n !== observed[i])) {
      observer.disconnect(); nodes.forEach(n => observer.observe(n)); observed = nodes; dirty = true;
    }
    if (dirty) { dirty = false; measure(); }
    const { d, start, scale, end, obstacles } = geometry;
    const begin = compact.matches ? Math.max(0, start.y - 150) : 0;
    let progress = Math.min(1, Math.max(0, (scrollY - begin) / (end - begin))), x, y, s;
    // Browsers round scroll offsets; fractional Framer coordinates must still settle.
    if (scrollY >= end - 1) progress = 1;
    else if (scrollY <= begin + 1) progress = 0;
    if (reduced.matches) { progress = 1; x = d.x; y = d.y; s = 1; }
    else {
      const ease = progress * progress * (3 - 2 * progress);
      x = start.x + (d.x - start.x) * ease;
      y = start.y + (d.y - start.y) * ease;
      s = scale + (1 - scale) * ease;
    }
    moving = progress > 0 && progress < 1;
    controls.style.visibility = moving ? 'hidden' : '';
    controls.inert = moving;
    visible = y + d.height * s > scrollY && y < scrollY + innerHeight;
    element.dataset.position = moving ? "travel" : progress === 1 ? "about" : "hero";
    element.style.transform = "translate3d(" + x + "px," + y + "px,0) scale(" + s + ")";
    // The moving text passes behind the existing ticker, heading and copy.
    // Rectangles were measured on resize; scrolling only updates clip coordinates.
    const polygons = ['0px 0px', d.width + 'px 0px', d.width + 'px ' + d.height + 'px', '0px ' + d.height + 'px', '0px 0px'];
    if (moving) for (const obstacle of obstacles) {
      const left = Math.max(0, (obstacle.x - x) / s), top = Math.max(0, (obstacle.y - y) / s);
      const right = Math.min(d.width, (obstacle.x + obstacle.width - x) / s);
      const bottom = Math.min(d.height, (obstacle.y + obstacle.height - y) / s);
      if (right <= left || bottom <= top) continue;
      polygons.push(left + 'px ' + top + 'px', right + 'px ' + top + 'px', right + 'px ' + bottom + 'px', left + 'px ' + bottom + 'px', left + 'px ' + top + 'px', '0px 0px');
    }
    element.style.clipPath = moving ? 'polygon(evenodd, ' + polygons.join(',') + ')' : '';
    element.style.willChange = moving ? "transform" : "auto";
  }
  function schedule() { if (!frame) frame = requestAnimationFrame(update); }
  function invalidate() { dirty = true; schedule(); }
  const observer = new ResizeObserver(invalidate);
  const root = document.getElementById("main");
  const mutations = new MutationObserver(() => { if (!destination?.isConnected) invalidate(); });
  if (root) mutations.observe(root, { childList: true, subtree: true });
  addEventListener("scroll", schedule, { passive: true, signal });
  addEventListener("resize", invalidate, { passive: true, signal });
  addEventListener("pageshow", invalidate, { signal });
  addEventListener("popstate", invalidate, { signal });
  compact.addEventListener("change", invalidate, { signal });
  reduced.addEventListener("change", () => { elapsed = 0; showGroup(); label(); invalidate(); }, { signal });
  document.fonts.ready.then(() => { if (!signal.aborted) invalidate(); });
  window.destroyBusinessShowcase = () => {
    abort.abort(); observer.disconnect(); mutations.disconnect();
    cancelAnimationFrame(frame); cancelAnimationFrame(clockFrame);
    animations.forEach(a => a.cancel()); element.remove();
    document.documentElement.classList.remove("business-showcase-ready");
  };
  showGroup(); label(); update(); clockFrame = requestAnimationFrame(tick);
})();
