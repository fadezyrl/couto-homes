import type { Dictionary } from "@/data/dictionary";

type HeroProps = {
  copy: Dictionary;
  onStart: () => void;
};

export const Hero = ({ copy, onStart }: HeroProps): React.JSX.Element => {
  return (
    <section className="hero" id="landing" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow">{copy.heroEyebrow}</div>
        <h1 id="hero-title">
          {copy.heroTitleBefore} <em>{copy.heroTitleEm}</em>
        </h1>
        <p>{copy.heroBody}</p>
        <button
          type="button"
          className="primary"
          onClick={onStart}
          aria-label={copy.heroCta}
        >
          {copy.heroCta} <span aria-hidden="true">→</span>
        </button>
        <div className="hero-meta">{copy.heroMeta}</div>
      </div>
      <div
        className="hero-photo"
        role="img"
        aria-label={copy.heroPhotoLabel}
      />
    </section>
  );
};
