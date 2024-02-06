import * as React from "react";
import { useContext, Component } from "react";
import { GameContext } from "../helpers/Contexts";

const GameStart = () => {
  const { gameState, setGameState } = useContext(GameContext);
  return (
    <div>
      <button onClick={() => setGameState("play")}>התחלת משחק</button>
    </div>
  );
};

export default GameStart;
