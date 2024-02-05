"use client";
import React from "react";
import { useState, useContext, Component } from "react";
import Game from "../comps/Game";
import GameStart from "../comps/GameStart";
import GameEnd from "../comps/GameEnd";
import { GameContext } from "../helpers/Contexts";

export default function GameApp() {
  const [gameState, setGameState] = useState("start");

  return (
    <div className="GameApp">
      <h1>איך מזהים מתחזה</h1>
      <GameContext.Provider value={{ gameState, setGameState }}>
        {gameState === "start" && <GameStart />}
        {gameState === "play" && <Game />}
        {gameState === "end" && <GameEnd />}
      </GameContext.Provider>
    </div>
  );
}
