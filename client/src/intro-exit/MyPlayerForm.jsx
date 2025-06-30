import React, { useState } from "react";

export function MyPlayerForm({ onPlayerID, connecting }) {
  const [playerID, setPlayerID] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!playerID || playerID.trim() === "") {
      return;
    }
    onPlayerID(playerID);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <div style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold" }}>Enter your Prolific ID</div>

      <form action="#" method="POST" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "300px" }}>
        <fieldset disabled={connecting} style={{ border: "none", textAlign: "center" }}>
          <label htmlFor="playerID" style={{ marginBottom: "10px" }}>Prolific ID (Please ensure accuracy for receiving payment.)</label>
          <input
            id="playerID"
            name="playerID"
            type="text"
            autoComplete="off"
            required
            autoFocus
            value={playerID}
            onChange={(e) => setPlayerID(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "20px", borderRadius: "5px", border: "1px solid #ccc" }}
          /> 

          <button type="submit" style={{ padding: "10px 20px", borderRadius: "5px", border: "none", backgroundColor: "#007bff", color: "white", cursor: "pointer" }}>Enter</button>
        </fieldset>
      </form>
    </div>
  );
}
