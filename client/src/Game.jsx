import { Chat, useGame } from "@empirica/core/player/classic/react";
import { useRound } from "@empirica/core/player/classic/react";

import React from "react";
import { Profile } from "./Profile";
import { Stage } from "./Stage";

export function Game() {
  const game = useGame();
  const round = useRound();

  const { playerCount } = game.get("treatment");
  const roundName = round.get("name");
  const showChat = roundName !== "Round 1" && roundName !== "Instructions for Round 2";
  const disableChatInput = ["Teammate evaluation", "Please wait for decision", "Final decision - best player announcement"].includes(roundName);

  return (
    <div className="h-full w-full flex">
      <div className="h-full w-full flex flex-col">
        <Profile />
        <div className="h-full flex items-center justify-center">
          <Stage />
        </div>
      </div>

      {showChat && (
        <div id="mychat" className={`h-full w-128 border-l flex justify-center items-center ${disableChatInput ? 'disable-chat-input' : ''}`}>
          <Chat scope={game} attribute="chat" />
        </div>
      )}
    </div>
  );
}
