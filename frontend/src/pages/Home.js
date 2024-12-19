// src/pages/Home.js
import React, { useState } from "react";
import Board from "../components/Board";
import Dice from "../components/Dice";
import { handleRoll } from "../utils/gameLogic";
import { initialState } from "../game/gameState";

function Home() {
  const [gameState, setGameState] = useState(initialState); // Utilisation de l'état global du jeu
  const [currentPlayerId, setCurrentPlayerId] = useState(1); // ID du joueur actuel

  // Fonction pour gérer le lancé de dés et déplacer le joueur
  const rollDice = (sum) => {
    handleRoll(gameState, currentPlayerId, sum, setGameState); // Déplacer le joueur
  };

  return (
    <>
      <h1>Bienvenue sur le jeu Monopoly</h1>
      <div className="App">
        <Dice onRoll={rollDice} />
        <Board
          players={gameState.players}
          currentPlayer={currentPlayerId - 1}
        />
      </div>
    </>
  );
}

export default Home;
