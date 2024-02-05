import * as React from "react";
import { useState, useContext } from "react";
import { Questions } from "../helpers/Questions";
import { GameContext } from "../helpers/Contexts";

const Game = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { gameState, setGameState } = useContext(GameContext);
  return (
    <div className="Game">
      <h2>מיהו המתחזה?</h2>
      <div className="options">
        <button onClick={() => setOptionChosen("A")}>
          <img src={Questions[currQuestion].optionA}></img>
        </button>
        <button onClick={() => setOptionChosen("B")}>
          <img src={Questions[currQuestion].optionB}></img>
        </button>
        {Questions[currQuestion].answer == optionChosen && <h2>תשובה נכונה</h2>}
        {optionChosen != "" &&
          Questions[currQuestion].answer != optionChosen && (
            <h2>תשובה שגויה</h2>
          )}
        {optionChosen != "" && <p>{Questions[currQuestion].explanation}</p>}
      </div>
      {currQuestion == Questions.length - 1 ? (
        <button onClick={() => setGameState("end")}>סיום</button>
      ) : (
        <div>
          <button
            onClick={() => {
              setCurrQuestion(currQuestion + 1);
              setOptionChosen("");
            }}
          >
            הבא
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
