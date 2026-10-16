"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { animate, inView, motionValue, springValue } from "motion";
import Lenis from "lenis";

// Values measured from the published LaunchFolio motion definitions.
const ease = [0.4, 0, 0.2, 1] as const;
export function LaunchMotion() {
  const pathname = usePathname();
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let dispose = () => {};
    const setup = () => {
      dispose();
      if (preference.matches) return;
      const cleanups: (() => void)[] = [];
      let active = true;
      const lenis = new Lenis({
        duration: 0.8,
        smoothWheel: true,
        autoRaf: true,
        anchors: true,
        allowNestedScroll: true,
      });
      cleanups.push(() => lenis.destroy());
      const run = (
        el: Element,
        frames: Parameters<typeof animate>[1],
        options = {},
      ) => {
        const previousStyle=el.getAttribute('style');
        const animation = animate(el, frames, options);
        cleanups.push(() => {animation.stop();if(previousStyle===null)el.removeAttribute('style');else el.setAttribute('style',previousStyle)});
      };
      const reveal = (selector: string, delay = 0, words = false) => {
        document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
          const originals: { node: Text; holder: HTMLElement }[] = [];
          let targets: HTMLElement[] = [el];
          if (words) {
            targets = [];
            const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
            const nodes: Text[] = [];
            while (walker.nextNode()) nodes.push(walker.currentNode as Text);
            nodes.forEach((node) => {
              if (!node.textContent?.trim()) return;
              const holder = document.createElement("span");
              holder.className='lf-word-group';
              node.textContent.split(/(\s+)/).forEach((word) => {
                if (!word.trim()) holder.append(document.createTextNode(word));
                else {
                  const span = document.createElement("span");
                  span.className = "lf-motion-word";
                  span.textContent = word;
                  holder.append(span);
                  targets.push(span);
                }
              });
              node.replaceWith(holder);
              originals.push({ node, holder });
            });
          }
          targets.forEach((t) => {
            t.style.opacity = "0";
            t.style.filter = "blur(5px)";
            t.style.transform = "translateY(10px)";
          });
          const stop = inView(
            el,
            () => {
              targets.forEach((t, i) =>
                run(
                  t,
                  {
                    opacity: 1,
                    filter: "blur(0px)",
                    transform: "translateY(0px)",
                  },
                  {
                    duration: 0.8,
                    ease,
                    delay: delay + (words ? i * 0.05 : 0),
                  },
                ),
              );
            },
            { amount: 0.5 },
          );
          cleanups.push(stop, () => {
            targets.forEach((t) => {
              t.style.removeProperty("opacity");
              t.style.removeProperty("filter");
              t.style.removeProperty("transform");
            });
            originals.forEach(({ node, holder }) => holder.replaceWith(node));
          });
        });
      };
      reveal(".lf-hero h1", 0.2, true);
      reveal(".lf-hero-grid>div>p", 0.85);
      reveal(".lf-section h2, .lf-statement p", 0, true);
      reveal(
        ".lf-about-copy p, .lf-section-description, .lf-values article, .lf-articles>a",
        0.4,
      );
      document
        .querySelectorAll(
          ".lf-hero .lf-availability,.lf-hero .lf-button,.lf-trust",
        )
        .forEach((el) => {
          run(
            el,
            { opacity: [0, 1] },
            {
              duration: 0.6,
              delay: el.classList.contains("lf-trust") ? 0.6 : 0.4,
              ease,
            },
          );
        });
      document.querySelectorAll(".lf-services>a").forEach((el, i) => {
        cleanups.push(
          inView(
            el,
            () => {
              run(
                el,
                { opacity: [0, 1], x: [-5 * (i + 1), 0] },
                { duration: 0.6, delay: i * 0.1, ease },
              );
            },
            { amount: 0.5 },
          ),
        );
      });
      const bolt = document.querySelector(".lf-bolt>svg");
      if (bolt)
        run(
          bolt,
          { rotate: [0, -6], x: [0, 2], y: [0, -5] },
          {
            duration: 7,
            ease: [0.44, 0, 0.56, 1],
            repeat: Infinity,
            repeatType: "reverse",
          },
        );

      // Transform the real work cards into the hero stack, then back to their
      // measured grid positions. Geometry is responsive; the spring is original.
      const desktop = matchMedia("(min-width: 901px)");
      let stopCards = () => {};
      const cardsSetup = () => {
        stopCards();
        const stack = document.querySelector<HTMLElement>(".lf-stack");
        const grid = document.querySelector<HTMLElement>(".lf-project-grid");
        const cards = Array.from(
          document.querySelectorAll<HTMLElement>(".lf-project"),
        );
        if (!desktop.matches || !stack || !grid) return;
        const origin = stack.getBoundingClientRect();
        const positions = cards.map((c) => c.getBoundingClientRect());
        const end = Math.max(
          1,
          grid.getBoundingClientRect().top + scrollY - 220,
        );
        const progress = motionValue(Math.min(1, scrollY / end));
        const spring = springValue(progress, {
          stiffness: 1000,
          damping: 130,
          mass: 1,
        });
        document.documentElement.classList.add("lf-project-motion");
        const paint = (p: number) =>
          cards.forEach((card, i) => {
            const r = positions[i],
              remaining = 1 - p;
            const x =
              origin.left +
              origin.width / 2 -
              (r.left + r.width / 2) +
              (i - 1.5) * 12;
            const y =
              origin.top + origin.height / 2 - (r.top + 182.5) + (i - 1.5) * 8;
            card.style.transform = `translate(${x * remaining}px,${y * remaining}px) rotate(${[10, 15, -5, 5][i] * remaining}deg) scale(${1 - 0.3 * remaining})`;
            card.style.zIndex = String(p < 0.99 ? 5 - i : 1);
            const caption = card.querySelector<HTMLElement>(
              ".lf-project-caption",
            );
            if (caption) caption.style.opacity = String(p);
          });
        paint(progress.get());
        const unsubscribe = spring.on("change", paint);
        const scroll = () =>
          progress.set(Math.min(1, Math.max(0, scrollY / end)));
        addEventListener("scroll", scroll, { passive: true });
        stopCards = () => {
          removeEventListener("scroll", scroll);
          unsubscribe();
          spring.destroy();
          progress.destroy();
          document.documentElement.classList.remove("lf-project-motion");
          cards.forEach((c) => {
            c.style.removeProperty("transform");
            c.style.removeProperty("z-index");
            c.querySelector<HTMLElement>(
              ".lf-project-caption",
            )?.style.removeProperty("opacity");
          });
        };
      };
      cardsSetup();
      // Remeasure after font changes and viewport resizing, not on each frame.
      let resizeTimer: ReturnType<typeof setTimeout>;
      const resize = () => {
        if(!active)return;
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(cardsSetup, 120);
      };
      addEventListener("resize", resize);
      document.fonts.ready.then(resize);
      cleanups.push(() => {
        clearTimeout(resizeTimer);
        removeEventListener("resize", resize);
        stopCards();
      });
      dispose = () => {
        active=false;
        cleanups.reverse().forEach((fn) => fn());
      };
    };
    setup();
    preference.addEventListener("change", setup);
    return () => {
      dispose();
      preference.removeEventListener("change", setup);
    };
  }, [pathname]);
  return null;
}
