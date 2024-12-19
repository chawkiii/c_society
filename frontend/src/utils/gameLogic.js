// src/utils/gameLogic.js
import { updatePlayerPosition } from "../game/gameState"; // Importer la logique de jeu

// Nouvelle fonction handleRoll qui utilise la gestion d'état centralisée
export const handleRoll = (state, currentPlayerId, sum, setState) => {
  const updatedState = updatePlayerPosition(state, currentPlayerId, sum);
  setState(updatedState);
};

// apres lancé de dés joueur suivant joue sauf si double
export const nextPlayer = (state, currentPlayerId, dice1, dice2) => {
  if (dice1 !== dice2) {
    return (currentPlayerId % state.players.length) + 1;
  }
  return currentPlayerId;
};
