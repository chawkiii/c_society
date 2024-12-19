// src/game/gameState.js

// État initial
export const initialState = {
  players: [
    { id: 1, name: "Joueur 1", position: 0, money: 1500, color: "red" },
    { id: 2, name: "Joueur 2", position: 0, money: 1500, color: "blue" },
    { id: 3, name: "Joueur 3", position: 0, money: 1500, color: "green" },
    { id: 4, name: "Joueur 4", position: 0, money: 1500, color: "yellow" },

    // Ajoutez d'autres joueurs si nécessaire
  ],
};

// Fonction pour déplacer un joueur
export const movePlayer = (playerId, sum, state) => {
  const player = state.players.find((p) => p.id === playerId);
  player.position = (player.position + sum) % 40;
  return { ...state };
};

// Fonction pour obtenir l'état du joueur actuel
export const getCurrentPlayer = (state, currentPlayerId) => {
  return state.players.find((player) => player.id === currentPlayerId);
};

// Fonction pour mettre à jour l'état des joueurs
export const updatePlayerPosition = (state, currentPlayerId, diceSum) => {
  const updatedState = movePlayer(currentPlayerId, diceSum, state);
  return updatedState;
};
