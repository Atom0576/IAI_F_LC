import { usePlayer } from "@empirica/core/player/classic/react";
import React, { useState } from "react";
import { Button } from "../components/Button";

export function IntroSurveyHuman({ next }) {
  const labelClassName = "block text-sm font-medium text-gray-700 my-2";
  const player = usePlayer();

  const [human_trustworthy, setHuman_Trustworthy] = useState("");
  const [human_competent, setHuman_Competent] = useState("");
  const [human_fair, setHuman_Fair] = useState("");
  const [human_comfort, setHuman_Comfort] = useState("");
  const [human_leadership, setHuman_Leadership] = useState("");
  const [human_teammate, setHuman_Teammate] = useState("");
  const [errors, setErrors] = useState({}); 

  function validateForm() {
    let newErrors = {};
    if (!human_trustworthy.trim()) newErrors.human_trustworthy = "This field is required";
    if (!human_competent.trim()) newErrors.human_competent = "This field is required";
    if (!human_fair.trim()) newErrors.human_fair = "This field is required";
    if (!human_comfort.trim()) newErrors.human_comfort = "This field is required";
    if (!human_leadership.trim()) newErrors.human_leadership = "This field is required";
    if (!human_teammate.trim()) newErrors.human_teammate = "This field is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    if (!validateForm()) return;

    player.set("introsurvey_human", {
      human_trustworthy,
      human_competent,
      human_fair,
      human_comfort,
      human_leadership,
      human_teammate
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
              Manager Evaluation - Human Managers
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Please answer the following questions about human managers.
              </p>
            </div>

            <div className="space-y-8 mt-6">
              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                How <strong>trustworthy</strong> do you think an experienced <strong>"human"</strong> manager is in making award decisions for the team they manage?
                 0: very untrustworthy; 10: very trustworthy
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={human_trustworthy}
                    name="human_trustworthy"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setHuman_Trustworthy(e.target.value)}
                  />
                ))}
                {errors.human_trustworthy && <p className="text-red-500 text-xs">{errors.human_trustworthy}</p>}
              </div>

              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                How <strong>competent</strong> do you think an experienced <strong>"human"</strong> manager is in making award decisions for the team they manage?
                 0: very incompetent; 10: very competent
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={human_competent}
                    name="human_competent"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setHuman_Competent(e.target.value)}
                  />
                ))}
                {errors.human_competent && <p className="text-red-500 text-xs">{errors.human_competent}</p>}
              </div>

              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                How <strong>fair</strong> do you think an experienced <strong>"human"</strong> manager is in making award decisions for the team they manage?
                 0: very unfair; 10: very fair
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={human_fair}
                    name="human_fair"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setHuman_Fair(e.target.value)}
                  />
                ))}
                {errors.human_fair && <p className="text-red-500 text-xs">{errors.human_fair}</p>}
              </div>

              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                Would you be <strong>willing</strong> to work in a small team led by an experienced <strong>"human"</strong> manager who makes award decisions for the team they manage?
                0: very unwilling; 10: very willing
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={human_comfort}
                    name="human_comfort"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setHuman_Comfort(e.target.value)}
                  />
                ))}
                {errors.human_comfort && <p className="text-red-500 text-xs">{errors.human_comfort}</p>}
              </div>

              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                How <strong>suitable</strong> do you think an experienced <strong>"human"</strong> manager is for <strong>leadership</strong> roles?
                0: very unsuitable; 10: very suitable
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={human_leadership}
                    name="human_leadership"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setHuman_Leadership(e.target.value)}
                  />
                ))}
                {errors.human_leadership && <p className="text-red-500 text-xs">{errors.human_leadership}</p>}
              </div>

              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                How <strong>suitable</strong> do you think an experienced <strong>"human"</strong> would be as a <strong>teammate</strong>?
                0: very unsuitable; 10: very suitable
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={human_teammate}
                    name="human_teammate"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setHuman_Teammate(e.target.value)}
                  />
                ))}
                {errors.human_teammate && <p className="text-red-500 text-xs">{errors.human_teammate}</p>}
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