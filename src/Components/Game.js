import React from "react";
import Field from "./Field/FieldLayout";
import Information from "./Information/InformationLayout";

const Game = ({ state, store }) => {
  const handleCellClick = (index) => {
    if (!state.field[index] && !state.isGameEnded) {
      store.dispatch({ type: "SET_FIELD", payload: { index } });
    }
  };

  const handleRestart = () => {
    store.dispatch({ type: "RESTART_GAME" });
  };

  return (
    <div className="game">
      <Information
        currentPlayer={state.currentPlayer}
        isGameEnded={state.isGameEnded}
        isDraw={state.isDraw}
      />
      <Field field={state.field} onCellClick={handleCellClick} />
      <button onClick={handleRestart}>Начать заново</button>
    </div>
  );
};

export default Game;
