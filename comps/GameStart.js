import * as React from "react";
import { useContext, Component } from "react";
import { GameContext } from "../helpers/Contexts";

const GameStart = () => {
  const { gameState, setGameState } = useContext(GameContext);
  return (
    <center>
    <div>
      <h2>ברוכות הבאות למשחק "איך מזהים מתחזה"!</h2>
      <p>
        בכל שאלה יופיע מאפיין מסוים של פרופיל, ויופיעו שתי תמונות.
        <br></br> תמונה אחת שייכת לפרופיל של מתחזה, והשנייה שייכת לפרופיל
        לגיטימי.
        <br></br> המטרה שלכן היא לזהות את הפרופיל של המתחזה, באמצעות לחיצה על
        התמונה.<br></br> בהצלחה!
      </p>
      <button onClick={() => setGameState("play")}>התחלת משחק</button>
    </div>
    </center>
  );
};

export default GameStart;
