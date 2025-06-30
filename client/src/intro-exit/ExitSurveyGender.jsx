import { usePlayer } from "@empirica/core/player/classic/react";
import React, { useState } from "react";
import { Button } from "../components/Button.jsx";
import AIImage from "../components/visual.png";

export function ExitSurveyGender({ next }) {
  const labelClassName = "block text-sm font-medium text-gray-700 my-2";
  const player = usePlayer();

  const [bossfeminine, setBossfeminine] = useState("");
  const [bossmasculine, setBossmasculine] = useState("");
  const [bosscompetency, setBosscompetency] = useState("");
  const [bosstrust, setBosstrust] = useState("");
  const [allocationfair, setAllocationfair] = useState("");
  const [willingness, setWillingness] = useState("");
  const [leadership, setLeadership] = useState("");
  const [teammate, setTeammate] = useState("");

  const [errors, setErrors] = useState({});

  function validateForm() {
    let newErrors = {};
    if (!bossfeminine.trim()) newErrors.bossfeminine = "This field is required";
    if (!bossmasculine.trim()) newErrors.bossmasculine = "This field is required";
    if (!bosscompetency.trim()) newErrors.bosscompetency = "This field is required";
    if (!bosstrust.trim()) newErrors.bosstrust = "This field is required";
    if (!allocationfair.trim()) newErrors.allocationfair = "This field is required";
    if (!willingness.trim()) newErrors.willingness = "This field is required";
    if (!leadership.trim()) newErrors.leadership = "This field is required";
    if (!teammate.trim()) newErrors.teammate = "This field is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validateForm()) return;
    player.set("exitSurvey", {
      bossfeminine,
      bossmasculine,
      bosscompetency,
      bosstrust,
      allocationfair,
      willingness,
      leadership,
      teammate,
    });
    next();
  }

  return (
    <div className="py-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center mb-8">
        <img src={AIImage} alt="Visual Reference" className="w-64 h-64 object-contain rounded-lg shadow-md" />
      </div>

      <form
        className="space-y-8 divide-y divide-gray-200"
        onSubmit={handleSubmit}
      >
        <div className="space-y-10">
          <h3 className="text-xl font-semibold text-gray-900 text-center">Exit Survey</h3>
          <p className="text-sm text-gray-600 text-center mb-6">
            Please answer the following short survey.
          </p>

          {[
            {
              label: "How feminine do you think this manager appeared?",
              name: "bossfeminine",
              value: bossfeminine,
              onChange: setBossfeminine,
              error: errors.bossfeminine,
              strongWord: "feminine",
            },
            {
              label: "How masculine do you think this manager appeared?",
              name: "bossmasculine",
              value: bossmasculine,
              onChange: setBossmasculine,
              error: errors.bossmasculine,
              strongWord: "masculine",
            },
            {
              label: "How competent do you think this manager appearsd?",
              name: "bosscompetency",
              value: bosscompetency,
              onChange: setBosscompetency,
              error: errors.bosscompetency,
              strongWord: "competent",
            },
            {
              label: "How trustworthy do you think this manager's evaluation was?",
              name: "bosstrust",
              value: bosstrust,
              onChange: setBosstrust,
              error: errors.bosstrust,
              strongWord: "trustworthy",
            },
            {
              label: "How fair do you think this manager's evaluation was?",
              name: "allocationfair",
              value: allocationfair,
              onChange: setAllocationfair,
              error: errors.allocationfair,
              strongWord: "fair",
            },
            {
              label: "Will you be willing to work in future teams like this?",
              name: "willingness",
              value: willingness,
              onChange: setWillingness,
              error: errors.willingness,
              strongWord: "willing",
            },
            {
              label: "How suitable do you think this manager is for leadership?",
              name: "leadership",
              value: leadership,
              onChange: setLeadership,
              error: errors.leadership,
              strongWord: "leadership",
            },
            {
              label: "How suitable do you think this manager would be as a teammate?",
              name: "teammate",
              value: teammate,
              onChange: setTeammate,
              error: errors.teammate,
              strongWord: "teammate",
            },
          ].map((item, index) => (
            <div key={index} className="space-y-2">
              <label className={labelClassName}>
                How <strong>{item.strongWord}</strong> {item.label}
                <br />
                0: very low; 10: very high
              </label>
              <div className="flex flex-wrap gap-2">
                {[0,1,2,3,4,5,6,7,8,9,10].map((val) => (
                  <Radio
                    key={val}
                    selected={item.value}
                    name={item.name}
                    value={String(val)}
                    label={val}
                    onChange={(e) => item.onChange(e.target.value)}
                  />
                ))}
              </div>
              {item.error && <p className="text-red-500 text-xs">{item.error}</p>}
            </div>
          ))}

          <div className="flex justify-end pt-6">
            <Button type="submit" disabled={Object.keys(errors).length > 0}>
              Continue
            </Button>
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
        className="mr-2"
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
