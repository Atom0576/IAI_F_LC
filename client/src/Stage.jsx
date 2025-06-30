import {
  usePlayer,
  usePlayers,
  useRound,
} from "@empirica/core/player/classic/react";
import { Loading } from "@empirica/core/player/react";
import React from "react";
import { JellyBeans } from "./examples/JellyBeans";
import { JellyBeansCopy } from "./examples/JellyBeansCopy";
import { InstructionSecond } from "./examples/InstructionSecond";
import { InstructionSecond2 } from "./examples/InstructionSecond2";
import { InstructionSecond3 } from "./examples/InstructionSecond3";
import { AssignManager } from "./examples/AssignManager";

import { Announcement } from "./examples/Announcement";
import { Waitingtime } from "./examples/Waitingtime";
import { ContributionRating} from "./examples/ContributionRating";


export function Stage() {
  const player = usePlayer();
  const players = usePlayers();
  const round = useRound();

  if (player.stage.get("submit")) {
    if (players.length === 1) {
      return <Loading />;
    }

    return (
      <div className="text-center text-gray-400 pointer-events-none">
        Please wait for other player(s).
      </div>
    );
  }

  switch (round.get("task")) {
    case "jellybeans":
      return <JellyBeans />;
    case "instructionsecond":
      return <InstructionSecond />;
    case "instructionsecond2":
      return <InstructionSecond2 />;
    case "instructionsecond3":
      return <InstructionSecond3 />;
    case "assignmanager":
      return <AssignManager />
    case "jellybeanscopy":
      return <JellyBeansCopy />;
    case "waitingtime":
      return <Waitingtime />
    case "contributionrating":
        return <ContributionRating/>;
    case "announcement":
        return <Announcement/>;
    default:
      return <div>Unknown task</div>;
  }
}
