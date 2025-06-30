import { usePlayer } from "@empirica/core/player/classic/react";
import React, { useState } from "react";
import { Alert } from "../components/Alert";
import { Button } from "../components/Button";

export function ExitBonus({ next }) {
  const labelClassName = "block text-sm font-medium text-gray-700 my-2";
  const inputClassName =
    "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-empirica-500 focus:border-empirica-500 sm:text-sm";
  const player = usePlayer();
  
  function handleSubmit(event) {
    event.preventDefault();

    // Save any final data
    player.set("exitBonus", {});

    // Redirect to external link (e.g., Prolific completion page or survey)
    window.location.href = "https://app.prolific.com/submissions/complete?cc=CR72AHV2";
  }

  return (
    
    <div className="py-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p>
        Thank you for completing the experiment. 
        </p>
        <p>
        In this experiment, the selection of the best player was made randomly.
        </p>
        <p>
        If you were chosen as the <strong>best player</strong>, a <strong>bonus payment</strong> will arrive at your account within <strong>three working days</strong>.
        </p>
        <p>
        If you have any questions, please feel free to contact <a href="mailto:HANR@tcd.ie" className="underline">HANR@tcd.ie</a> or <a href="mailto:taha.yasseri@ucd.ie" className="underline">taha.yasseri@ucd.ie</a>.        </p>
        <p className="pt-1">
        </p>

      <form
        className="mt-12 space-y-8 divide-y divide-gray-200"
        onSubmit={handleSubmit}
      >

        <div className="mb-12"> <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
    
  );
}

//In this experiment, there was no manager making the award decision; the selection was made randomly.