import React from "react";
import { Button } from "../components/Button";

export function ConsentForm({ next }) {
  const textStyle = {
    maxWidth: '900px',  // Adjust this value as needed
    margin: '0 auto',   // This centers the text block
  };

   // Additional style for the header to center it
   const headerStyle = {
    textAlign: 'center',
  };

  return (
    <div className="mt-3 sm:mt-5 p-20" style={textStyle}>
      <h3 className="text-lg leading-6 font-medium text-gray-900" style={headerStyle}>
      PARTICIPANT CONSENT FORM (participants)
      </h3>

      <div className=" text-sm mt-2 mb-6 text-gray-700">


      <p>(1) I confirm that I have read and understood the Information Sheet for the study. </p> 
      <p>(2) I understand that I am free to withdraw at any time without giving a reason. </p> 
      <p>(3) I understand that my personal information and session data will 
        be kept confidential, anonymised, and used only for research purposes. </p> 
      <p>(4) I voluntarily consent to participate in the study. </p> 
     
    <br></br>  

    <p>By clicking on the consent button you are indicating your agreement 
        with the above statements.</p>


      </div>
      <Button handleClick={next} autoFocus> 
        <p> I consent </p> 
      </Button>
    </div>
  );
}
