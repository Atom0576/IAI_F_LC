import { usePlayer } from "@empirica/core/player/classic/react";
import React, { useState } from "react";
import { Button } from "../components/Button";

export function IntroSurveyAI({ next }) {
  const labelClassName = "block text-sm font-medium text-gray-700 my-2";
  const player = usePlayer();

  const [trustworthy, setTrustworthy] = useState("");
  const [AI_competent, setAI_Competent] = useState("");
  const [fair, setFair] = useState("");
  const [comfort, setComfort] = useState("");
  const [leadership, setLeadership] = useState("");
  const [teammate, setTeammate] = useState("");
  const [errors, setErrors] = useState({}); 

  function validateForm() {
    let newErrors = {};
    if (!trustworthy.trim()) newErrors.trustworthy = "This field is required";
    if (!AI_competent.trim()) newErrors.AI_competent = "This field is required";
    if (!fair.trim()) newErrors.fair = "This field is required";
    if (!comfort.trim()) newErrors.comfort = "This field is required";
    if (!leadership.trim()) newErrors.leadership = "This field is required";
    if (!teammate.trim()) newErrors.teammate = "This field is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    if (!validateForm()) return;

    player.set("introsurvey_ai", {
      trustworthy,
      AI_competent,
      fair,
      comfort,
      leadership,
      teammate
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
            <div style={{ marginBottom: '40px' }}>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
              Manager Evaluation - AI Managers
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Please answer the following questions about AI managers.
              </p>
            </div>

            <div className="space-y-8 mt-6">
              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                How <strong>trustworthy</strong> do you think a trained <strong>"AI"</strong> manager is in making award decisions for the team they manage?
                0: very untrustworthy; 10: very trustworthy
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={trustworthy}
                    name="trustworthy"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setTrustworthy(e.target.value)}
                  />
                ))}
                {errors.trustworthy && <p className="text-red-500 text-xs">{errors.trustworthy}</p>}
              </div>

              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                How <strong>competent</strong> do you think a trained <strong>"AI"</strong> manager is in making award decisions for the team they manage?
                0: very incompetent; 10: very competent
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={AI_competent}
                    name="AI_competent"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setAI_Competent(e.target.value)}
                  />
                ))}
                {errors.AI_competent && <p className="text-red-500 text-xs">{errors.AI_competent}</p>}
              </div>

              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                How <strong>fair</strong> do you think a trained <strong>"AI"</strong> manager is in making award decisions for the team they manage?
                 0: very unfair; 10: very fair
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={fair}
                    name="fair"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setFair(e.target.value)}
                  />
                ))}
                {errors.fair && <p className="text-red-500 text-xs">{errors.fair}</p>}
              </div>

              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                Would you be <strong>willing</strong> to work in a small team led by a trained <strong>"AI"</strong> manager who makes award decisions for the team they manage?             
                0: very unwilling; 10: very willing
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={comfort}
                    name="comfort"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setComfort(e.target.value)}
                  />
                ))}
                {errors.comfort && <p className="text-red-500 text-xs">{errors.comfort}</p>}
              </div>

              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                How <strong>suitable</strong> do you think a trained <strong>"AI"</strong> manager is for <strong>leadership</strong> roles?
                0: very unsuitable; 10: very suitable
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={leadership}
                    name="leadership"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setLeadership(e.target.value)}
                  />
                ))}
                {errors.leadership && <p className="text-red-500 text-xs">{errors.leadership}</p>}
              </div>

              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                How <strong>suitable</strong> do you think a trained <strong>"AI"</strong> would be as a <strong>teammate</strong>?
                0: very unsuitable; 10: very suitable
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={teammate}
                    name="teammate"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setTeammate(e.target.value)}
                  />
                ))}
                {errors.teammate && <p className="text-red-500 text-xs">{errors.teammate}</p>}
              </div>

              <div className="mb-12">
                <Button type="submit">Continue</Button>
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