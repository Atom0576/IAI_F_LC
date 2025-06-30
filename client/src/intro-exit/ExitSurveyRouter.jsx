import React, { useEffect, useState } from "react";
import { usePlayer } from "@empirica/core/player/classic/react";
import { ExitSurveyCompetence } from "./ExitSurveyCompetence.jsx";
import { ExitSurveyGender } from "./ExitSurveyGender.jsx";

export function ExitSurveyRouter({ next }) {
  const player = usePlayer();
  const [version, setVersion] = useState(null);

  useEffect(() => {
    let assigned = player.get("exitSurveyVersion");
    if (!assigned) {
      assigned = Math.random() < 0.5 ? "C" : "G";
      player.set("exitSurveyVersion", assigned);
    }
    setVersion(assigned);
  }, [player]);

  if (!version) return <div>Loading survey...</div>;

  return version === "C" ? <ExitSurveyCompetence next={next} /> : <ExitSurveyGender next={next} />;
}
