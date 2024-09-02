const initialState = {
  currentPlayer: "X",
  isGameEnded: false,
  isDraw: false,
  field: Array(9).fill(""),
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_CURRENT_PLAYER":
      return { ...state, currentPlayer: payload };
    case "SET_FIELD":
      const newField = [...state.field];
      newField[payload.index] = state.currentPlayer;
      return {
        ...state,
        field: newField,
        isGameEnded: checkWinner(newField) !== null,
        isDraw: newField.every((cell) => cell) && !checkWinner(newField),
        currentPlayer: state.currentPlayer === "X" ? "O" : "X",
      };
    case "RESTART_GAME":
      return initialState;
    default:
      return state;
  }
};

const checkWinner = (fld) => {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (fld[a] && fld[a] === fld[b] && fld[a] === fld[c]) {
      return fld[a];
    }
  }
  return null;
};
