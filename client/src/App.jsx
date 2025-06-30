import { EmpiricaClassic } from "@empirica/core/player/classic";
import { EmpiricaContext } from "@empirica/core/player/classic/react";
import { EmpiricaMenu, EmpiricaParticipant } from "@empirica/core/player/react";
import React from "react";
import { Game } from "./Game";
//import { Introduction } from "./intro-exit/Introduction";
//import { ConsentForm } from "./intro-exit/ConsentForm";
import { GeneralInstruction } from "./intro-exit/GeneralInstruction";
import { DemographicsSurvey } from "./intro-exit/DemographicsSurvey";
// Replace IntroSurvey with the new dynamic component
import { IntroSurveyHumanAIDynamic } from "./intro-exit/IntroSurveyHumanAIDynamic";
// Replace IntroSurvey2 with the new dynamic component
import { IntroSurveyDynamic } from "./intro-exit/IntroSurveyDynamic";


import { ExitSurveyRouter } from "./intro-exit/ExitSurveyRouter";
import { PostSurvey } from "./intro-exit/PostSurvey";
import { PostSurvey2} from "./intro-exit/PostSurvey2";
import { ExitBonus } from "./intro-exit/ExitBonus";
import { MyPlayerForm } from "./intro-exit/MyPlayerForm.jsx";
//import { MyConsent } from "./MyConsent.jsx"; 
import { Consent } from "@empirica/core/player/react";


export default function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const playerKey = urlParams.get("participantKey") || "";

  const { protocol, host } = window.location;
  const url = `${protocol}//${host}/query`;

  function MyConsent({ onConsent }) {
    return (
      <Consent
        title="Do you consent to participate in this experiment?"
        text={<div className=" text-sm mt-2 mb-6 text-gray-700">
         <br></br>
         <p style={{ textAlign: "center" }}><strong> INFORMATION SHEET FOR PARTICIPANTS </strong> </p>
         <br></br>
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

      <p>(1) I confirm that I have read and understood the Information Sheet for the study. </p> 
      <p>(2) I understand that I am free to withdraw at any time without giving a reason. </p> 
      <p>(3) I understand that my personal information and session data will 
        be kept confidential, anonymised, and used only for research purposes. </p> 
      <p>(4) I voluntarily consent to participate in the study. </p> 

          <br></br>
        <p><strong> CONTACT INFORMATION: </strong> </p>
        <p> If you have any questions or concerns about the study, please contact 
          Dr. Ruiqing Han at hanr@tcd.ie, or Prof. Taha Yasseri at taha.yasseri@ucd.ie. </p>

        </div>}
        //buttonText="I have read"
        onButtonClick={onConsent} //
        onConsent={onConsent}

      />
    );
  }


  function introSteps({ game, player }) {
    return [GeneralInstruction, DemographicsSurvey, IntroSurveyHumanAIDynamic, IntroSurveyDynamic];
  }

  function exitSteps({ game, player }) {
    return [ExitSurveyRouter, PostSurvey, PostSurvey2, ExitBonus];//
  }

  return (
    <EmpiricaParticipant url={url} ns={playerKey} modeFunc={EmpiricaClassic}>
      <div className="h-screen relative">
        <EmpiricaMenu position="bottom-left" />
        <div className="h-full overflow-auto">
          <EmpiricaContext consent = {MyConsent} 
          playerCreate={MyPlayerForm}
          introSteps={introSteps} 
          exitSteps={exitSteps} >
            <Game />
          </EmpiricaContext>
        </div>
      </div>
    </EmpiricaParticipant>
  );
}