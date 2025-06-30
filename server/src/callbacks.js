import { ClassicListenersCollector } from "@empirica/core/admin/classic";

export const Empirica = new ClassicListenersCollector();

Empirica.onGameStart(({ game }) => {

 // Iterate over each player and set a new property 'shortId'
  game.players.forEach(player => {
    player.set("name", player.id.slice(-3)); // Change -3 to get the last 3 digits
    //player.set("avatar", "https://api.dicebear.com/7.x/adventurer/svg?seed=Cookie");
    player.set("avatar", "https://img.freepik.com/free-photo/background_53876-32170.jpg?w=1480&t=st=1704794471~exp=1704795071~hmac=d441d10adb365f043eb7a938ebdccc40bf253bbf58132fdbafd5716b1fe36223");
    
    
  });

  //
  const round = game.addRound({
    name: "Round 1",
    task: "jellybeans", 
  });
  round.addStage({ name: "", duration: 120 }); //120 Answer

  const round1 = game.addRound({
    name: "Instructions for Round 2",
    task: "instructionsecond",
  });
  round1.addStage({ name: "", duration: 30 }); //default 90

  const round2 = game.addRound({
    name: "Instructions for Round 2",
    task: "instructionsecond2",
  });
  round2.addStage({ name: "", duration: 50 }); //default 90

  const round3 = game.addRound({
    name: "Instructions for Round 2",
    task: "instructionsecond3",
  });
  round3.addStage({ name: "", duration: 40 }); //default 90

  const round4 = game.addRound({
    name: "Assign Manager",
    task: "assignmanager",
  });
  round4.addStage({ name: "", duration: 15 }); //default 90

  const round5 = game.addRound({
    name: "Round 2 - Team collaboration",
    task: "jellybeanscopy",   
  });   
  round5.addStage({ name: "", duration: 240 }); //Answer

  const round6 = game.addRound({
    name: "Teammate evaluation", 
    task: "contributionrating",   
  });   
  round6.addStage({ name: "", duration: 90 }); //90

  const round7 = game.addRound({
    name: "Please wait for decision", 
    task: "waitingtime",   
  });   
  round7.addStage({ name: "", duration: 20 }); 

  const round8 = game.addRound({
    name: "Final decision - best player announcement", 
    task: "announcement",   
  });   
  round8.addStage({ name: "", duration: 20 }); 

 // Select a random player 
  const players = game.players;
  if (players && players.length > 0) {
    const randomIndex = Math.floor(Math.random() * players.length);
    const randomPlayerId = players[randomIndex].id;
    game.set("randomPlayerId", randomPlayerId);
  }

});

//Empirica.onRoundStart(({ round }) => {});

//Empirica.onStageStart(({ stage }) => {});

//Empirica.onStageEnded(({ stage }) => {}); 

Empirica.onRoundEnded(({ round }) => {
});

//Empirica.onGameEnded(({ game }) => {});