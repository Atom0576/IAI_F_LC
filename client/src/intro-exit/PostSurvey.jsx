import { usePlayer } from "@empirica/core/player/classic/react";
import React, { useState } from "react";
import { Button } from "../components/Button";

export function PostSurvey({ next }) {
  const labelClassName = "block text-sm font-medium text-gray-700 my-2";
  const inputClassName =
    "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-empirica-500 focus:border-empirica-500 sm:text-sm";
  const player = usePlayer();

  const [unfair, setUnfair] = useState("");

  const [errors, setErrors] = useState({});
  const [satisfied, setSatisfied] = useState("");
  const [managertype, setManagertype] = useState("");

  function validateForm() {
    let newErrors = {};

    if (!satisfied.trim()) newErrors.satisfied = "This field is required";
    if (!managertype.trim()) newErrors.managertype = "This field is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleManagertypeChange(e) {
    setManagertype(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) return;

    player.set("postSurvey", {
      satisfied,
      managertype,
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
              <h3 className="text-lg leading-6 font-medium text-gray-900"></h3>
              <p className="mt-1 text-sm text-gray-500"></p>
            </div>

            <div className="space-y-8 mt-6">
              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                  How <strong>satisfied</strong> did you feel about the award
                  decision based on the teammate evaluations in the game?
                  0: very unsatisfied; 10: very satisfied
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={satisfied}
                    name="satisfied"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setSatisfied(e.target.value)}
                  />
                ))}
                {errors.satisfied && (
                  <p className="text-red-500 text-xs">{errors.satisfied}</p>
                )}
              </div>

              <div>
                <label className={labelClassName}>
                  What was the manager type in your group?
                </label>
                <div className="grid gap-2">
                  <Radio
                    selected={managertype}
                    name="managertype"
                    value="Human"
                    label="Human"
                    onChange={handleManagertypeChange}
                  />

                  <Radio
                    selected={managertype}
                    name="managertype"
                    value="AI"
                    label="AI"
                    onChange={handleManagertypeChange}
                  />

                  <Radio
                    selected={managertype}
                    name="managertype"
                    value="No manager"
                    label="No manager"
                    onChange={handleManagertypeChange}
                  />

                  {errors.managertype && (
                    <p className="text-red-500 text-xs">{errors.managertype}</p>
                  )}
                </div>
              </div>

              <div className="mb-12">
                <Button type="submit" disabled={Object.keys(errors).length > 0}>
                  Continue
                </Button>
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
