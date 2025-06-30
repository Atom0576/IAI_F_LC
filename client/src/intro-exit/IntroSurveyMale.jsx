import React, { useState } from "react";
import { usePlayer } from "@empirica/core/player/classic/react";
import { Button } from "../components/Button";

export function IntroSurveyMale({ next }) {
  const labelClassName = "block text-sm font-medium text-gray-700 my-2";
  const [male_trustworthy, setMaleTrustworthy] = useState("");
  const [male_competent, setMaleCompetent] = useState("");
  const [male_fair, setMaleFair] = useState("");
  const [male_willingness, setMaleWillingness] = useState("");
  const [male_leadership, setMaleLeadership] = useState("");
  const [male_teammate, setMaleTeammate] = useState("");
  const [errors, setErrors] = useState({});
  const player = usePlayer();

  function validateForm() {
    let newErrors = {};
    if (!male_trustworthy.trim()) newErrors.male_trustworthy = "This field is required";
    if (!male_competent.trim()) newErrors.male_competent = "This field is required";
    if (!male_fair.trim()) newErrors.male_fair = "This field is required";
    if (!male_willingness.trim()) newErrors.male_willingness = "This field is required";
    if (!male_leadership.trim()) newErrors.male_leadership = "This field is required";
    if (!male_teammate.trim()) newErrors.male_teammate = "This field is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validateForm()) return;

    player.set("introsurvey_male", {
      male_trustworthy,
      male_competent,
      male_fair,
      male_willingness,
      male_leadership,
      male_teammate,
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
                Manager Evaluation - Male Managers
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Please rate your perceptions of male managers.
              </p>
            </div>

            <div className="space-y-8 mt-6">
              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                  How <strong>trustworthy</strong> do you think an experienced <strong>"male"</strong> manager is in making award decisions for the team they manage?
                  0: very untrustworthy; 10: very trustworthy
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={male_trustworthy}
                    name="male_trustworthy"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setMaleTrustworthy(e.target.value)}
                  />
                ))}
                {errors.male_trustworthy && <p className="text-red-500 text-xs">{errors.male_trustworthy}</p>}
              </div>

              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                  How <strong>competent</strong> do you think an experienced <strong>"male"</strong> manager is in making award decisions for the team they manage?
                  0: very incompetent; 10: very competent
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={male_competent}
                    name="male_competent"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setMaleCompetent(e.target.value)}
                  />
                ))}
                {errors.male_competent && <p className="text-red-500 text-xs">{errors.male_competent}</p>}
              </div>

              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                  How <strong>fair</strong> do you think an experienced <strong>"male"</strong> manager is in making award decisions for the team they manage?
                  0: very unfair; 10: very fair
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={male_fair}
                    name="male_fair"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setMaleFair(e.target.value)}
                  />
                ))}
                {errors.male_fair && <p className="text-red-500 text-xs">{errors.male_fair}</p>}
              </div>

              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                Would you be <strong>willing</strong> to work in a small team led by an experienced <strong>"male"</strong> manager who makes award decisions for the team they manage?
                0: very unwilling; 10: very willing
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={male_willingness}
                    name="male_willingness"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setMaleWillingness(e.target.value)}
                  />
                ))}
                {errors.male_willingness && <p className="text-red-500 text-xs">{errors.male_willingness}</p>}
              </div>

              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                  How <strong>suitable</strong> do you think an experienced <strong>"male"</strong> manager is for <strong>leadership</strong> roles?
                  0: very unsuitable; 10: very suitable
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={male_leadership}
                    name="male_leadership"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setMaleLeadership(e.target.value)}
                  />
                ))}
                {errors.male_leadership && <p className="text-red-500 text-xs">{errors.male_leadership}</p>}
              </div>

              <div className="flex justify-start items-center space-x-4">
                <label className={labelClassName}>
                  How <strong>suitable</strong> do you think an experienced <strong>"male"</strong> would be as a <strong>teammate</strong>?
                  0: very unsuitable; 10: very suitable
                </label>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <Radio
                    key={value}
                    selected={male_teammate}
                    name="male_teammate"
                    value={String(value)}
                    label={value}
                    onChange={(e) => setMaleTeammate(e.target.value)}
                  />
                ))}
                {errors.male_teammate && <p className="text-red-500 text-xs">{errors.male_teammate}</p>}
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