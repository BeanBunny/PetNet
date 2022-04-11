import React, { useContext, useState } from "react";

const context = React.createContext();
const setContext = React.createContext();

export function contextUser() {
  return useContext(context);
}

export function setContextUser() {
  return useContext(setContext);
}

export function stateProvider({ children }) {
  const [state, setState] = useState("");
  const toggle = () => {
    setState("doggie");
  };
  return (
    <context.Provider value={state}>
      <setContext.Provider value={toggle}>{children}</setContext.Provider>
    </context.Provider>
  );
}
