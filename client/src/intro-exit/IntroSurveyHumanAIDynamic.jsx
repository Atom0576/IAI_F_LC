import React, { useState, useEffect } from "react";
import { usePlayer } from "@empirica/core/player/classic/react";
import { IntroSurveyHuman } from "./IntroSurveyHuman";
import { IntroSurveyAI } from "./IntroSurveyAI";

export function IntroSurveyHumanAIDynamic({ next }) {
  const player = usePlayer();
  const [currentPage, setCurrentPage] = useState(0);
  const [humanAiOrder, setHumanAiOrder] = useState(null);

  useEffect(() => {
    // Check if order is already set, if not, randomize it
    let order = player.get("humanAiOrder");
    if (order === undefined) {
      order = Math.random() < 0.5 ? 0 : 1; // 0 = human first, 1 = AI first
      player.set("humanAiOrder", order);
      player.set("humanFirst", order === 0);
      player.set("aiFirst", order === 1);
    }
    setHumanAiOrder(order);
  }, [player]);

  const handleNext = () => {
    if (currentPage === 0) {
      setCurrentPage(1); // Move to second page
    } else {
      next(); // Finished both pages, proceed to next stage
    }
  };

  if (humanAiOrder === null) {
    return <div>Loading...</div>;
  }

  // Determine which component to show based on current page and order
  if (currentPage === 0) {
    // First page
    return humanAiOrder === 0 ? 
      <IntroSurveyHuman next={handleNext} /> : 
      <IntroSurveyAI next={handleNext} />;
  } else {
    // Second page
    return humanAiOrder === 0 ? 
      <IntroSurveyAI next={handleNext} /> : 
      <IntroSurveyHuman next={handleNext} />;
  }
}