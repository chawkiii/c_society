// src/componenet/Dice.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/dice.css";

const Dice = ({ onRoll }) => {
  const [dice1, setDice1] = useState(null);
  const [dice2, setDice2] = useState(null);

  const rollDice = () => {
    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;
    setDice1(roll1);
    setDice2(roll2);
    onRoll(roll1 + roll2);
  };
  const restartGame = () => {
    setDice1(null);
    setDice2(null);
  };

  return (
    <>
      <div className="header">
        <div className="dice-container">
          <div className="dice-number">
            Dice 1: <span>{dice1 !== null ? dice1 : ""}</span>
          </div>

          <div className="dice-number">
            Dice 2: <span>{dice2 !== null ? dice2 : ""}</span>
          </div>
        </div>
        <div className="dice-number dice-number-sum">
          Dices Sum: <span>{dice1 + dice2}</span>
        </div>

        <button className="roll-dice" onClick={rollDice}>
          Roll Dice
        </button>
        <button className="reset-game" onClick={restartGame}>
          Reset Game
        </button>
      </div>
    </>
  );
};

Dice.propTypes = {
  onRoll: PropTypes.func.isRequired,
};

export default Dice;
