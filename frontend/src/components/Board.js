// src/components/Board.js
import React from "react";
import PropTypes from "prop-types";
import "../styles/board.css";
import boardData from "../data/boardData.json"; // Importer le JSON

const Board = ({ players, currentPlayer }) => {
  const boardSize = boardData.length; // Utiliser la taille du plateau depuis le JSON

  const renderBoard = () => {
    return boardData.map((cell, i) => {
      const currentPlayerPosition = players[currentPlayer]
        ? players[currentPlayer].position
        : null; // Vérification

      return (
        <div
          key={cell.id} // Utiliser un ID unique si disponible
          className={`board-cell ${
            currentPlayerPosition === i ? "current-player" : ""
          } ${cell.type}`} // Ajouter des classes conditionnelles basées sur le type de case
        >
          <div className="cell-name">{cell.name}</div>
          {cell.type === "property" && (
            <div className="cell-details">
              <div>Prix: {cell.price}</div>
              <div>Loyer: {cell.rent}</div>
            </div>
          )}
          {cell.type === "corner" && <div className="corner-detail">Coin</div>}
        </div>
      );
    });
  };

  return (
    <>
      <h1>Monopoly Game</h1>
      <div className="board">{renderBoard()}</div>
    </>
  );
};

Board.propTypes = {
  players: PropTypes.array.isRequired,
  currentPlayer: PropTypes.number.isRequired,
};

export default Board;
