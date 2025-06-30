import { usePlayer } from "@empirica/core/player/classic/react";
import React, { useState } from "react";
import { Button } from "../components/Button";

export function PostSurvey2({ next }) {
  const labelClassName = "block text-sm font-medium text-gray-700 my-2";
  const inputClassName =
    "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-empirica-500 focus:border-empirica-500 sm:text-sm";
  const player = usePlayer();
 // const [familiar, setFamiliar] = useState("");
 // const [airole, setAirole] = useState("");
  
  const [unfair, setUnfair] = useState("");

// Add new state variables for validation
  const [errors, setErrors] = useState({});


  function validateForm() {
    let newErrors = {};

    // Add validation conditions for each field
    // ... other validation conditions ...
    //if (!familiar.trim()) newErrors.familiar = "This field is required";
    //if (!airole.trim()) newErrors.airole = "This field is required";
   
    setErrors(newErrors);
    // Form is valid if newErrors object is empty
    return Object.keys(newErrors).length === 0;
  }

  function handleManagertypeChange(e) {
    setManagertype(e.target.value);
  }

  function handleManagergenderChange(e) {
    setManagergender(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault()

    // Validate the form before proceeding
    if (!validateForm()) return;

    player.set("postSurvey2", {
        //familiar, 
        //airole,
        unfair
    });
    next();
  }


  return (
    <div className="py-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

      <form
        className="mt-12 space-y-8 divide-y divide-gray-200"
        onSubmit={handleSubmit}
      >
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
              </h3>
              <p className="mt-1 text-sm text-gray-500">
              </p>
            </div>

            <div className="space-y-8 mt-6">

              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                <label className={labelClassName}>
                Please provide any additional comments or insights regarding your experience with the experiment. 
                </label>
               
                <textarea
                  className={inputClassName}
                  dir="auto"
                  id="unfair"
                  name="unfair"
                  rows={4}
                  value={unfair} 
                  onChange={(e) => setUnfair(e.target.value)}
                />
              </div>

              <div className="mb-12">
                <Button type="submit" disabled={Object.keys(errors).length > 0}>Continue</Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export function Radio({ selected, name, value, label, onChange }) {
  return (
    <label className="text-sm font-medium text-gray-700">
      <input
        className="mr-2 shadow-sm sm:text-sm"
        type="radio"
        name={name}
        value={value}
        checked={selected === value}
        onChange={onChange}
      />
      {label}
    </label>
  );
}
