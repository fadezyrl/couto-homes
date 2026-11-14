"use client";

import { useState } from "react";
import { Footer } from "@/components/Footer/Footer";
import { Topbar } from "@/components/Topbar/Topbar";
import { Estimator } from "@/components/sections/Estimator/Estimator";
import { Hero } from "@/components/sections/Hero/Hero";
import { dictionary } from "@/data/dictionary";

export const HomePage = (): React.JSX.Element => {
  const copy = dictionary.en;
  const [started, setStarted] = useState(false);

  const startEstimate = (): void => {
    setStarted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="page">
      <Topbar copy={copy} />
      <main>
        {!started ? <Hero copy={copy} onStart={startEstimate} /> : null}
        {started ? <Estimator copy={copy} /> : null}
      </main>
      <Footer copy={copy} />
    </div>
  );
};
