import {
  Slider,
  usePlayer,
  useStage,
} from "@empirica/core/player/classic/react";
import React from "react";
//import { Avatar } from "../components/Avatar";
import { Button } from "../components/Button";
import "../../node_modules/@empirica/core/dist/player-classic-react.css";
//import glassPuzzle from "../components/glass_puzzle.png";
import robber1 from "../components/robber1.png";
import robber1_new from "../components/robber1_new.png";


export function JellyBeans() {

  const textStyle = {
    maxWidth: '600px',  // Adjust this value as needed
    margin: '0 auto',   // This centers the text block
  };

  const player = usePlayer();
  const stage = useStage();
  const initialSliderValue = 1; // Set this to your desired initial value
  const guessValue = player.round.get("guess") ?? initialSliderValue;
  //const playerId = player.id; // Get the player's ID
  // Convert player ID to a string and extract the last 3 characters
  const playerId = player.id.toString();
  const displayId = playerId.slice(-3); // Gets the last 3 characters

  function handleChange(e) {
    player.round.set("guess", e.target.valueAsNumber);
  }

  function handleSubmit() {
    // Assuming 'guess' is the value player submitted
    const guessValue = player.round.get("guess");
    // Store this value for the next round
    player.set("previousGuess", guessValue);

    player.stage.set("submit", true);
  }

  let jelly = <JellyBeanPile />;

  const isResultStage = stage.get("name") === "Result";

 // jelly = (
 //   <div className="grid grid-cols-2 items-center">
 //     {jelly}
 //     <div>
 //       {isResultStage ? PlayerScore(player, () => {}, isResultStage) : null}
 //     </div>
 //   </div>
 // );

  return (
    <div style = {textStyle} className="md:min-w-96 lg:min-w-128 xl:min-w-192 flex flex-col items-center space-y-1">
      <p>  <strong> You are assigned a random ID: {displayId} </strong> </p>

      <p className="text-left text-lg font-semibold mb-0"></p>
      <p>
        {isResultStage
          ? "Result"
          :  "A robber in blue pants, a striped hat, and a mustache stole a watch! Please help the police identify him. Use the slider bar to make your selection and click the submit button below. Please submit your answer within 2 minutes; otherwise, the default value will be recorded automatically."}
      </p>


      <div className="flex justify-end mr-10 w-full"> {/* Flex container to align to the right */}
        {jelly}
      </div>
        
      {!isResultStage ? (
        <Slider
          value={guessValue}
          onChange={handleChange} 
          //disabled={stage.get("name") !== "Answer"}
          min = {1}
          max={5}
        />
      ) : null}

    <Button handleClick={handleSubmit} style={{backgroundColor: 'blue', color: 'white' }}>
      Submit
    </Button>
    </div>
  );
}


function JellyBeanPile( ) { // Accept playerId as a prop
  return (
    <div className="h-96 w-96 pb-6 mx-auto flex justify-center items-center"> {/* previous h-96 Center the image horizontally */}
      <img
        //className="h-full w-full object-contain"
        className="h-auto w-auto max-w-none"
        style={{ height: '310px', width: '750px' }}
        src={robber1_new}
        alt="Jelly Beans Pile"
      />
    </div>
);
}


