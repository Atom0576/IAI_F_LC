import React from "react";
import { Button } from "../components/Button";

export function Introduction({ next }) {
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
      <h3 className="text-lg leading-6 font-medium text-gray-900 center-text" style={headerStyle}>
      INFORMATION SHEET FOR PARTICIPANTS 
      </h3>

      <div className=" text-sm mt-2 mb-6 text-gray-700">
       
       <p> You are invited to participate in a scientific experiment 
        conducted by researchers at University College Dublin. This information sheet 
        provides you with important details about the study. 
        
        Please take time to read it carefully. </p>
       <br></br>
       <p><strong> PURPOSE OF THE STUDY: </strong> </p>
       <p> The purpose of this experiment is to study collaboration in small online teams. </p>
       
       <br></br>
       <p><strong> PROCEDURES: </strong> </p>
       <p> During your participation, you will be asked to complete a survey 
        and take part in an online game. 
        The experiment will take approximately 10 minutes to complete. </p>

        <br></br>
   
       <p><strong> RISKS AND BENEFITS: </strong> </p>
       <p> There are no known risks associated with participating in this study. 
        Your participation will contribute to the advancement of scientific 
        knowledge in understanding online team collaboration. 
        Your participation in this study is paid, and the results may 
        benefit the society as a whole. </p>

      <br></br>
       <p><strong> CONFIDENTIALITY: </strong> </p>
       <p> Your participation in this study will remain confidential. 
        Your data will be de-identified, and no personally identifiable
         information will be associated with your responses. Data will be stored 
         securely and accessible only to the research team. </p>

        <br></br>
       <p><strong> HOW WILL MY INFORMATION BE USED? </strong> </p>
       <p> Apart from the chat texts, the only information we will have is your 
        platform-assigned payment ID (e.g. Prolific worker ID) and the timestamps of 
        your interactions with our site. We will record this ID to allow us 
        to observe participation across sessions. There is no way for us to identify you or 
        contact you outside of the crowdsourcing platform through which you joined. Anonymous data 
        may be shared publicly. Our aggregate results may be presented at scientific meetings
         or published in scientific journals. </p>

        <br></br>
       <p><strong> VOLUNTARY PARTICIPATION & RIGHT TO WITHDRAW: </strong> </p>
       <p> Participation in this study is entirely voluntary. You have the right to withdraw 
        at any time without any penalty or consequence by closing the browser. If you decide 
        to withdraw, your data will be deleted. </p>

        <br></br>
       <p><strong> INFORMED CONSENT: </strong> </p>
       <p> By participating, you are providing your informed consent to take part in the study.  </p>
       

       <br></br>
      <p><strong> CONTACT INFORMATION: </strong> </p>
      <p> If you have any questions or concerns about the study, please contact 
        Dr. Ruiqing Han at hanr@tcd.ie, or Prof. Taha Yasseri at taha.yasseri@ucd.ie. </p>
       
 
      </div>
      <Button handleClick={next} autoFocus> 
        <p> Continue </p> 
      </Button>
    </div>
  );
}
