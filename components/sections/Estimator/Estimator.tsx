"use client";

import { useState } from "react";
import type { Dictionary } from "@/data/dictionary";
import {
  budgetOptions,
  landOptions,
  sizeOptions,
  timelineOptions,
  TOTAL_STEPS,
} from "@/data/estimator-options";
import { ChoiceGrid } from "./ChoiceGrid";

type Answers = {
  land?: string;
  size?: string;
  budget?: string;
  timeline?: string;
  location?: string;
  name?: string;
  email?: string;
  phone?: string;
};

type EstimatorProps = {
  copy: Dictionary;
};

export const Estimator = ({ copy }: EstimatorProps): React.JSX.Element => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [sqft, setSqft] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const percent = Math.round(((current + 1) / TOTAL_STEPS) * 100);
  const stepLabel = copy.stepOf.replace(
    "{current}",
    String(current + 1).padStart(2, "0"),
  );
  const percentLabel = copy.percentComplete.replace(
    "{percent}",
    String(percent),
  );

  const selectChoice = (group: string, value: string): void => {
    setAnswers((prev) => ({ ...prev, [group]: value }));
    if (group === "size") {
      setSqft("");
    }
    setError("");
  };

  const validateStep = (): Answers | null => {
    setError("");
    const nextAnswers: Answers = { ...answers };

    if (current === 0 && !nextAnswers.land) {
      setError(copy.errLand);
      return null;
    }

    if (current === 1) {
      if (sqft) {
        const value = Number(sqft);
        if (value < 500 || value > 20000) {
          setError(copy.errSizeRange);
          return null;
        }
        nextAnswers.size = `${value.toLocaleString()} sq ft`;
      } else if (!nextAnswers.size) {
        setError(copy.errSizeRequired);
        return null;
      }
    }

    if (current === 2 && !nextAnswers.budget) {
      setError(copy.errBudget);
      return null;
    }

    if (current === 3 && !nextAnswers.timeline) {
      setError(copy.errTimeline);
      return null;
    }

    if (current === 4) {
      const trimmed = location.trim();
      if (!trimmed) {
        setError(copy.errLocation);
        return null;
      }
      nextAnswers.location = trimmed;
    }

    if (current === 5) {
      const trimmedName = name.trim();
      const trimmedEmail = email.trim();
      const trimmedPhone = phone.trim();

      if (!trimmedName) {
        setError(copy.errName);
        return null;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
        setError(copy.errEmail);
        return null;
      }
      if (trimmedPhone.replace(/\D/g, "").length < 7) {
        setError(copy.errPhone);
        return null;
      }

      nextAnswers.name = trimmedName;
      nextAnswers.email = trimmedEmail;
      nextAnswers.phone = trimmedPhone;
    }

    return nextAnswers;
  };

  const goNext = (): void => {
    const nextAnswers = validateStep();
    if (!nextAnswers) {
      return;
    }

    setAnswers(nextAnswers);

    if (current < TOTAL_STEPS - 1) {
      setCurrent((prev) => prev + 1);
      setError("");
      return;
    }

    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goPrev = (): void => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
      setError("");
    }
  };

  const firstName = (answers.name ?? name).trim().split(" ")[0] || "";

  return (
    <section id="estimator" aria-labelledby="estimator-title">
      <div className="shell">
        <div className="intro">
          <div className="eyebrow">{copy.estimatorEyebrow}</div>
          <h2 id="estimator-title">{copy.estimatorTitle}</h2>
          <p>{copy.estimatorBody}</p>
        </div>

        {!submitted ? (
          <>
            <div className="progress-meta">
              <span>{stepLabel}</span>
              <span>{percentLabel}</span>
            </div>
            <div className="track" aria-hidden="true">
              <div
                className="fill"
                style={{ width: `${((current + 1) / TOTAL_STEPS) * 100}%` }}
              />
            </div>
          </>
        ) : null}

        <div className="panel">
          {submitted ? (
            <div className="success">
              <div className="seal" aria-hidden="true">
                ✓
              </div>
              <div className="step-kicker">{copy.successKicker}</div>
              <h3>{copy.successTitle.replace("{name}", firstName)}</h3>
              <p>{copy.successBody}</p>
              <div className="summary">
                <div>
                  <b>{copy.summaryLand}:</b> {answers.land || "—"}
                </div>
                <div>
                  <b>{copy.summarySize}:</b> {answers.size || "—"}
                </div>
                <div>
                  <b>{copy.summaryBudget}:</b> {answers.budget || "—"}
                </div>
                <div>
                  <b>{copy.summaryTimeline}:</b> {answers.timeline || "—"}
                </div>
                <div>
                  <b>{copy.summaryLocation}:</b> {answers.location || "—"}
                </div>
                <div>
                  <b>{copy.summaryContact}:</b> {answers.email} · {answers.phone}
                </div>
              </div>
              <a
                className="primary success-cta"
                href="https://coutohomes.com/contact-us/"
                rel="noopener noreferrer"
              >
                {copy.successCta}
              </a>
            </div>
          ) : (
            <>
              {current === 0 ? (
                <div className="step active">
                  <div className="step-kicker">{copy.landKicker}</div>
                  <h3>{copy.landTitle}</h3>
                  <p className="hint">{copy.landHint}</p>
                  <ChoiceGrid
                    options={landOptions}
                    group="land"
                    selected={answers.land}
                    onSelect={selectChoice}
                  />
                </div>
              ) : null}

              {current === 1 ? (
                <div className="step active">
                  <div className="step-kicker">{copy.sizeKicker}</div>
                  <h3>{copy.sizeTitle}</h3>
                  <p className="hint">{copy.sizeHint}</p>
                  <div className="field">
                    <label htmlFor="sqft">{copy.sizeLabel}</label>
                    <div className="suffix">
                      <input
                        id="sqft"
                        type="number"
                        min={500}
                        max={20000}
                        step={50}
                        placeholder={copy.sizePlaceholder}
                        inputMode="numeric"
                        value={sqft}
                        onChange={(event) => {
                          setSqft(event.target.value);
                          setAnswers((prev) => ({ ...prev, size: undefined }));
                          setError("");
                        }}
                      />
                    </div>
                  </div>
                  <ChoiceGrid
                    options={sizeOptions}
                    group="size"
                    selected={answers.size}
                    onSelect={selectChoice}
                  />
                </div>
              ) : null}

              {current === 2 ? (
                <div className="step active">
                  <div className="step-kicker">{copy.budgetKicker}</div>
                  <h3>{copy.budgetTitle}</h3>
                  <p className="hint">{copy.budgetHint}</p>
                  <ChoiceGrid
                    options={budgetOptions}
                    group="budget"
                    selected={answers.budget}
                    columns="two"
                    onSelect={selectChoice}
                  />
                </div>
              ) : null}

              {current === 3 ? (
                <div className="step active">
                  <div className="step-kicker">{copy.timelineKicker}</div>
                  <h3>{copy.timelineTitle}</h3>
                  <p className="hint">{copy.timelineHint}</p>
                  <ChoiceGrid
                    options={timelineOptions}
                    group="timeline"
                    selected={answers.timeline}
                    columns="two"
                    onSelect={selectChoice}
                  />
                </div>
              ) : null}

              {current === 4 ? (
                <div className="step active">
                  <div className="step-kicker">{copy.locationKicker}</div>
                  <h3>{copy.locationTitle}</h3>
                  <p className="hint">{copy.locationHint}</p>
                  <div className="field">
                    <label htmlFor="location">{copy.locationLabel}</label>
                    <input
                      id="location"
                      type="text"
                      placeholder={copy.locationPlaceholder}
                      autoComplete="address-level2"
                      value={location}
                      onChange={(event) => {
                        setLocation(event.target.value);
                        setError("");
                      }}
                    />
                  </div>
                  <div className="fine">{copy.locationFine}</div>
                </div>
              ) : null}

              {current === 5 ? (
                <div className="step active">
                  <div className="step-kicker">{copy.detailsKicker}</div>
                  <h3>{copy.detailsTitle}</h3>
                  <p className="hint">{copy.detailsHint}</p>
                  <div className="formgrid">
                    <div className="field">
                      <label htmlFor="name">{copy.nameLabel}</label>
                      <input
                        id="name"
                        type="text"
                        placeholder={copy.namePlaceholder}
                        autoComplete="name"
                        value={name}
                        onChange={(event) => {
                          setName(event.target.value);
                          setError("");
                        }}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="email">{copy.emailLabel}</label>
                      <input
                        id="email"
                        type="email"
                        placeholder={copy.emailPlaceholder}
                        autoComplete="email"
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                          setError("");
                        }}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="phone">{copy.phoneLabel}</label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder={copy.phonePlaceholder}
                        autoComplete="tel"
                        value={phone}
                        onChange={(event) => {
                          setPhone(event.target.value);
                          setError("");
                        }}
                      />
                    </div>
                  </div>
                  <div className="fine">{copy.detailsFine}</div>
                </div>
              ) : null}

              <div className="error" aria-live="polite">
                {error}
              </div>
              <div className="nav">
                <button
                  type="button"
                  className="back"
                  onClick={goPrev}
                  disabled={current === 0}
                >
                  {copy.back}
                </button>
                <button type="button" className="primary next" onClick={goNext}>
                  {current === TOTAL_STEPS - 1 ? copy.submit : copy.continue}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
