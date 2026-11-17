import { useEffect, useId, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  LockKeyhole,
  X,
} from "lucide-react";
import type { CaseStudyScreenshot } from "../types/caseStudy";

import "../styles/screenshot-gallery.css";

type ImageDirectory = "shipping" | "voc-hap" | "daily-shipping";
function screenshotUrl(directory: ImageDirectory, asset: string) {
  if (
    !["shipping", "voc-hap", "daily-shipping"].includes(directory) ||
    !/^[a-z0-9][a-z0-9-]*\.png$/.test(asset)
  ) {
    throw new Error("Unsupported local screenshot path");
  }
  return `${import.meta.env.BASE_URL}images/${directory}/${asset}`;
}

export function ScreenshotGallery({
  screenshots,
  label,
  directory = "shipping",
}: {
  screenshots: readonly CaseStudyScreenshot[];
  label: string;
  directory?: ImageDirectory;
}) {
  const [active, setActive] = useState<CaseStudyScreenshot | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const captionId = useId();
  const available = screenshots.filter((image) => image.asset);

  useEffect(() => {
    if (!active) return;
    document.body.classList.add("image-viewer-open");
    return () => document.body.classList.remove("image-viewer-open");
  }, [active]);

  function open(image: CaseStudyScreenshot) {
    setActive(image);
    dialog.current?.showModal();
  }
  function close() {
    dialog.current?.close();
  }
  function move(direction: number) {
    if (!active || available.length < 2) return;
    const index = available.findIndex((image) => image.id === active.id);
    setActive(
      available[(index + direction + available.length) % available.length],
    );
  }

  return (
    <div className="screenshot-gallery" role="group" aria-label={label}>
      {screenshots.map((image) => (
        <figure className="screenshot-card" key={image.id}>
          {image.asset ? (
            <button
              className="screenshot-button"
              aria-haspopup="dialog"
              onClick={() => open(image)}
            >
              <img
                src={screenshotUrl(directory, image.asset)}
                width={image.width}
                height={image.height}
                alt={image.alt}
                loading="lazy"
                decoding="async"
              />
              <span className="screenshot-enlarge">
                <Expand size={15} aria-hidden="true" /> Enlarge screenshot
                <span className="sr-only">: {image.title}</span>
              </span>
            </button>
          ) : (
            <div
              className="screenshot-placeholder"
              role="img"
              aria-label={`${image.alt}. Screenshot withheld pending complete redaction.`}
            >
              <LockKeyhole size={28} aria-hidden="true" />
              <strong>Screenshot withheld</strong>
              <span>Awaiting complete redaction</span>
            </div>
          )}
          <figcaption>
            <h3>{image.title}</h3>
            <p>{image.description}</p>
            {image.withheldReason && (
              <p className="screenshot-review-note">{image.withheldReason}</p>
            )}
          </figcaption>
        </figure>
      ))}
      <dialog
        ref={dialog}
        className="image-viewer"
        aria-labelledby={titleId}
        aria-describedby={captionId}
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === "Tab") {
            const buttons =
              event.currentTarget.querySelectorAll<HTMLButtonElement>(
                "button:not([disabled])",
              );
            const first = buttons[0];
            const last = buttons[buttons.length - 1];
            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault();
              last?.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault();
              first?.focus();
            }
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          }
        }}
      >
        <div className="image-viewer-content">
          <div className="image-viewer-toolbar">
            <h2 id={titleId} aria-live="polite">
              {active?.title ?? "Screenshot preview"}
            </h2>
            <button
              autoFocus
              className="viewer-icon-button"
              aria-label="Close screenshot viewer"
              onClick={close}
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>
          {active?.asset && (
            <img
              className="image-viewer-image"
              src={screenshotUrl(directory, active.asset)}
              width={active.width}
              height={active.height}
              alt={active.alt}
            />
          )}
          <div className="image-viewer-footer">
            <p id={captionId}>{active?.description}</p>
            {available.length > 1 && (
              <div className="image-viewer-controls">
                <button
                  className="viewer-icon-button"
                  aria-label="Previous screenshot"
                  onClick={() => move(-1)}
                >
                  <ChevronLeft aria-hidden="true" />
                </button>
                <span>
                  {available.findIndex((image) => image.id === active?.id) + 1}{" "}
                  / {available.length}
                </span>
                <button
                  className="viewer-icon-button"
                  aria-label="Next screenshot"
                  onClick={() => move(1)}
                >
                  <ChevronRight aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </div>
      </dialog>
    </div>
  );
}
