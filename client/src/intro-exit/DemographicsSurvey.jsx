import { usePlayer } from "@empirica/core/player/classic/react";
import React, { useState } from "react";
import { Button } from "../components/Button";

export function DemographicsSurvey({ next }) {
  const labelClassName = "block text-sm font-medium text-gray-700 my-2";
  const inputClassName =
    "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-empirica-500 focus:border-empirica-500 sm:text-sm";
  const player = usePlayer();

  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [education, setEducation] = useState("");
  const [errors, setErrors] = useState({}); 

  function validateForm() {
    let newErrors = {};
    if (!age.trim()) newErrors.age = "This field is required";
    if (!gender.trim()) newErrors.gender = "This field is required";
    if (!education.trim()) newErrors.education = "This field is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    if (!validateForm()) return;

    player.set("demographics", {
      age,
      gender,
      education
    });
   next();
  }

  function handleGenderChange(e) {
    setGender(e.target.value);
  }

  function handleEducationChange(e) {
    setEducation(e.target.value);
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
              Demographics Survey
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Please tell us a bit about yourself.
              </p>
            </div>

            <div className="space-y-8 mt-6">
              <div className="flex flex-row">
                <div>
                  <label htmlFor="age" className={labelClassName}>
                    Age
                  </label>
                  <div className="mt-1">
                    <input
                      id="age"
                      name="age"
                      type="number"
                      min="18"
                      max="100"
                      autoComplete="off"
                      className={inputClassName}
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                    {errors.age && <p className="text-red-500 text-xs">{errors.age}</p>}                   
                  </div>
                </div>
              </div>

              <div>
                <label className={labelClassName}>
                What is your gender identity? 
                </label>
                <div className="grid gap-2">
                  <Radio
                    selected={gender}
                    name="gender"
                    value="Male"
                    label="Male"
                    onChange={handleGenderChange}
                  />
                  <Radio
                    selected={gender}
                    name="gender"
                    value="Female"
                    label="Female"
                    onChange={handleGenderChange}
                  />
                  <Radio
                    selected={gender}
                    name="gender"
                    value="Non-binary"
                    label="Non-binary"
                    onChange={handleGenderChange}
                  />
                  <Radio
                    selected={gender}
                    name="gender"
                    value="Other"
                    label="Other"
                    onChange={handleGenderChange}
                  />
                  {errors.gender && <p className="text-red-500 text-xs">{errors.gender}</p>}
                </div>
              </div>

              <div>
                <label className={labelClassName}>
                What is the highest level of education you have completed?
                </label>
                <div className="grid gap-2">
                  <Radio
                    selected={education}
                    name="education"
                    value="Secondary education"
                    label="Secondary education"
                    onChange={handleEducationChange}
                  />
                  <Radio
                    selected={education}
                    name="education"
                    value="Undergraduate degree (e.g., BA, BSc)"
                    label="Undergraduate degree (e.g., BA, BSc)"
                    onChange={handleEducationChange}
                  />
                  <Radio
                    selected={education}
                    name="education"
                    value="Postgraduate degree (e.g., MA, MSc, PhD)"
                    label="Postgraduate degree (e.g., MA, MSc, PhD)"
                    onChange={handleEducationChange}
                  />
                  <Radio
                    selected={education}
                    name="education"
                    value="other"
                    label="Other"
                    onChange={handleEducationChange}
                  />
                  {errors.education && <p className="text-red-500 text-xs">{errors.education}</p>}                   
                </div>
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