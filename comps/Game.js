import * as React from "react";
import { useState, useContext } from "react";
import { Questions } from "../helpers/Questions";
import { GameContext } from "../helpers/Contexts";
import { Box } from "@mui/material";
import styles from '/styles/Card.module.css';
import Card from '/comps/Card.js';
const Game = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { gameState, setGameState } = useContext(GameContext);
  return (
    <div className="Game">
      <h2>{Questions[currQuestion].title}</h2>
      <div className="options">
        <Card content = {(<Box sx={{display:"flex" ,flexDirection:"row",gap:"10px"}}>
        <button onClick={() => setOptionChosen("A")}>
          <Box
            component="img"
            sx={{
              maxHeight: { xs: 200 },
              maxWidth: { xs: 400 },
            }}
            src={Questions[currQuestion].optionA}
          />
        </button>
        <button onClick={() => setOptionChosen("B")}>
          <Box
            component="img"
            sx={{
              maxHeight: { xs: 200 },
              maxWidth: { xs: 400 },
            }}
            src={Questions[currQuestion].optionB}
          />
        </button>
        </Box>
        )}></Card>
       
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
