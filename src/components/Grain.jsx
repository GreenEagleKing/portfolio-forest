// Fine film-grain overlay. Pure CSS (see .grain in index.css) — sits above
// everything with mix-blend-mode and ignores pointer events.
export default function Grain() {
  return <div className="grain" aria-hidden="true" />;
}
