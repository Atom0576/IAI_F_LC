//import  from "./path-to-your-image.png"; // Make sure to replace with the actual path to your image
//import humanImage from "../components/humanImange.png";

import React from "react";
import humanImage from "../components/humanImage.png";
import AIImage from "../components/AIImage.png";
import visual from "../components/visual.png";

export function AssignManager() {
  return (
    <div style={{
       display: "flex",
       flexDirection: "column",
       alignItems: "center",
       paddingTop: "0",
       margin: "0"
     }}>
      <div style={{
         maxWidth: "600px",
         textAlign: "left",
        padding: "0 20px"
      }}>
        <p style={{
           fontSize: "18px",
           fontWeight: "normal",
           margin: "20px 0",
          lineHeight: "1.5"
        }}>
          An <strong>AI</strong> manager is assigned to your team.
        </p>
        <p style={{
           fontSize: "18px",
           fontWeight: "normal",
           margin: "20px 0",
          lineHeight: "1.5"
        }}>
          The AI manager has been programmed with a particular management style:
        </p>
        
        <div style={{
          display: "flex",
          justifyContent: "center",
          margin: "30px 0"
        }}>
          <img 
            src={visual} 
            alt="Management Style Visual" 
            style={{ 
              width: "300px", 
              height: "300px", 
              objectFit: "contain"
            }} 
          />
        </div>
        
        <p style={{
           fontSize: "18px",
           fontWeight: "normal",
           margin: "20px 0",
          lineHeight: "1.5"
        }}>
          The <strong>best player</strong> will be chosen based on the AI manager's evaluations.
        </p>
      </div>
    </div>
  );
}

//<p style={{ margin: "20px 0" }}>The manager assigned to your team is a:</p>
//<img src={humanImage} alt="Human Manager" style={{ width: "150px", height: "150px", margin: "20px 0" }} />
//<p style={{ fontSize: 18px", fontWeight: "bold", margin: "20px 0" }}>
//Human manager</p>
//////////
//<img src={AIImage} alt="Human Manager" style={{ width: "150px", height: "150px", margin: "20px 0" }} />