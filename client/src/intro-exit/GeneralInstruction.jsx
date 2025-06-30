import React from "react";
import { Button } from "../components/Button";

export function GeneralInstruction({ next }) {
  const textStyle = {
    maxWidth: '900px',  // Adjust this value as needed
    margin: '0 auto',   // This centers the text block
  };

  return (
    <div className="mt-3 sm:mt-5 p-20" style={textStyle}>
      <h3 className="text-lg leading-6 font-medium text-gray-500 center-text">
      Welcome! 
       The experiment contains an entry-survey, two rounds of tasks, and an exit-survey.
           
       The experiment will take approximately ten minutes to complete.
      </h3>

      <div className="text-sm mt-5 mb-6 text-gray-700">
        <p className="text-lg leading-6 font-medium text-gray-500">
          At first, you will complete several short survey pages with the same questions about different types of managers. Please read each page carefully and provide thoughtful responses, as <strong><em>the categories being evaluated will vary between pages</em></strong>.
        </p>
        <p className="text-lg leading-6 font-medium text-gray-500 mt-3">
          Your attention to all pages is important for this research.
        </p>
      </div>
             
      <Button handleClick={next} autoFocus>
         <p> Continue </p>
       </Button>
    </div>
  );
}