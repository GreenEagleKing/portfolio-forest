import { MARQUEE } from '../data.js';

// Infinite horizontal marquee. The list is rendered twice inside a track that
// animates -50%, so the loop is seamless.
function Group({ ariaHidden }) {
  return (
    <div className="marquee-group" aria-hidden={ariaHidden || undefined}>
      {MARQUEE.map((word, i) => (
        <span className="marquee-item" key={i}>
          {word}
          <span className="marquee-star">&#10022;</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <Group />
        <Group ariaHidden />
      </div>
    </div>
  );
}
