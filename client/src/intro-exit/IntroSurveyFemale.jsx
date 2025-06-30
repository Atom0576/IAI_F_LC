import React, { useState } from "react";
import { usePlayer } from "@empirica/core/player/classic/react";
import { Button } from "../components/Button";

export function IntroSurveyFemale({ next }) {
  const labelClassName = "block text-sm font-medium text-gray-700 my-2";
  const [female_trustworthy, setFemaleTrustworthy] = useState("");
  const [female_competent, setFemaleCompetent] = useState("");
  const [female_fair, setFemaleFair] = useState("");
  const [female_willingness, setFemaleWillingness] = useState("");
  const [female_leadership, setFemaleLeadership] = useState("");
  const [female_teammate, setFemaleTeammate] = useState("");
  const [errors, setErrors] = useState({});
  const player = usePlayer();

  function validateForm() {
    let newErrors = {};
    if (!female_trustworthy.trim()) newErrors.female_trustworthy = "This field is required";
    if (!female_competent.trim()) newErrors.female_competent = "This field is required";
    if (!female_fair.trim()) newErrors.female_fair = "This field is required";
    if (!female_willingness.trim()) newErrors.female_willingness = "This field is required";
    if (!female_leadership.trim()) newErrors.female_leadership = "This field is required";
    if (!female_teammate.trim()) newErrors.female_teammate = "This field is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validateForm()) return;

    player.set("introsurvey_female", {
      female_trustworthy,
      female_competent,
      female_fair,
      female_willingness,
      female_leadership,
      female_teammate,
    });

    next(); // Proceed to the next stage
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
                Manager Evaluation - Female Managers
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Please rate your perceptions of female managers.
              </p>
            </div>

            <div className="space-y-8 mt-6">
              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                  How <strong>trustworthy</strong> do you think an experienced <strong>"female"</strong> manager is in making award decisions for the team they manage?
                  0: very untrustworthy; 10: very trustworthy
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={female_trustworthy}
                    name="female_trustworthy"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setFemaleTrustworthy(e.target.value)}
                  />
                ))}
                {errors.female_trustworthy && <p className="text-red-500 text-xs">{errors.female_trustworthy}</p>}
              </div>

              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                  How <strong>competent</strong> do you think an experienced <strong>"female"</strong> manager is in making award decisions for the team they manage?
                  0: very incompetent; 10: very competent
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={female_competent}
                    name="female_competent"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setFemaleCompetent(e.target.value)}
                  />
                ))}
                {errors.female_competent && <p className="text-red-500 text-xs">{errors.female_competent}</p>}
              </div>

              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                  How <strong>fair</strong> do you think an experienced <strong>"female"</strong> manager is in making award decisions for the team they manage?
                  0: very unfair; 10: very fair
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={female_fair}
                    name="female_fair"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setFemaleFair(e.target.value)}
                  />
                ))}
                {errors.female_fair && <p className="text-red-500 text-xs">{errors.female_fair}</p>}
              </div>

              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                Would you be <strong>willing</strong> to work in a small team led by an experienced <strong>"female"</strong> manager who makes award decisions for the team they manage?
                0: very unwilling; 10: very willing
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={female_willingness}
                    name="female_willingness"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setFemaleWillingness(e.target.value)}
                  />
                ))}
                {errors.female_willingness && <p className="text-red-500 text-xs">{errors.female_willingness}</p>}
              </div>

              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                  How <strong>suitable</strong> do you think an experienced <strong>"female"</strong> manager is for <strong>leadership</strong> roles?
                  0: very unsuitable; 10: very suitable
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={female_leadership}
                    name="female_leadership"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setFemaleLeadership(e.target.value)}
                  />
                ))}
                {errors.female_leadership && <p className="text-red-500 text-xs">{errors.female_leadership}</p>}
              </div>

              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                  How <strong>suitable</strong> do you think an experienced <strong>"female"</strong> would be as a <strong>teammate</strong>?
                  0: very unsuitable; 10: very suitable
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={female_teammate}
                    name="female_teammate"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setFemaleTeammate(e.target.value)}
                  />
                ))}
                {errors.female_teammate && <p className="text-red-500 text-xs">{errors.female_teammate}</p>}
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