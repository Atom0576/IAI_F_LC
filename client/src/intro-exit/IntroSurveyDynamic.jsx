import React, { useState, useEffect } from "react";
import { usePlayer } from "@empirica/core/player/classic/react";
import { IntroSurveyMale } from "./IntroSurveyMale";
import { IntroSurveyFemale } from "./IntroSurveyFemale";

export function IntroSurveyDynamic({ next }) {
  const player = usePlayer();
  const [currentPage, setCurrentPage] = useState(0);
  const [surveyOrder, setSurveyOrder] = useState(null);

  useEffect(() => {
    // Check if order is already set, if not, randomize it
    let order = player.get("surveyOrder");
    if (order === undefined) {
      order = Math.random() < 0.5 ? 0 : 1; // 0 = male first, 1 = female first
      player.set("surveyOrder", order);
      player.set("maleFirst", order === 0);
      player.set("femaleFirst", order === 1);
    }
    setSurveyOrder(order);
  }, [player]);

  const handleNext = () => {
    if (currentPage === 0) {
      setCurrentPage(1); // Move to second page
    } else {
      next(); // Finished both pages, proceed to next stage
    }
  };

  if (surveyOrder === null) {
    return <div>Loading...</div>;
  }

  // Determine which component to show based on current page and order
  if (currentPage === 0) {
    // First page
    return surveyOrder === 0 ? 
      <IntroSurveyMale next={handleNext} /> : 
      <IntroSurveyFemale next={handleNext} />;
  } else {
    // Second page
    return surveyOrder === 0 ? 
      <IntroSurveyFemale next={handleNext} /> : 
      <IntroSurveyMale next={handleNext} />;
  }
}