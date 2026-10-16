import { Bot, Check, Globe, Layers, ArrowRight, Workflow } from "lucide-react";

export function ServiceVisual({ kind }: { kind: string }) {
  return (
    <div className={`service-visual service-visual-${kind}`} aria-hidden="true">
      {kind === "website" ? (
        <div className="mini-browser">
          <div className="mini-browser-bar">
            <i />
            <i />
            <i />
            <span>yourbusiness.com</span>
          </div>
          <div className="mini-website">
            <Globe size={18} />
            <div className="mini-heading" />
            <div className="mini-line" />
            <div className="mini-line short" />
            <div className="mini-button" />
          </div>
        </div>
      ) : kind === "assistant" ? (
        <>
          <div className="mini-bot">
            <Bot size={24} />
          </div>
          <div className="mini-chat">
            <span>Answer a question</span>
            <span>
              Collect the details <Check size={13} />
            </span>
            <span>
              Pass it to a person <ArrowRight size={13} />
            </span>
          </div>
        </>
      ) : kind === "automation" ? (
        <div className="mini-workflow">
          <span>
            <Globe />
          </span>
          <div />
          <span className="accent-node">
            <Workflow />
          </span>
          <div />
          <span>
            <Layers />
          </span>
        </div>
      ) : (
        <div className="mini-app">
          <div className="mini-sidebar">
            <Layers size={16} />
            <i />
            <i />
            <i />
          </div>
          <div className="mini-app-content">
            <div className="mini-line" />
            <div className="mini-app-blocks">
              <i />
              <i />
            </div>
            <div className="mini-line" />
            <div className="mini-line" />
            <div className="mini-line short" />
          </div>
        </div>
      )}
    </div>
  );
}
