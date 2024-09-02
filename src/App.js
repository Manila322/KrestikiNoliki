import React, { useState, useEffect } from "react";
import Game from "./Components/Game";
import { store } from "./store";
import "./App.css";

export const App = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="app">
      <h1>Игра "Крестики-нолики"</h1>
      <Game state={state} store={store} />
    </div>
  );
};
