"use client";
import { createContext, useContext } from "react";
import { useReducer } from "react";
import { reducer,initialState } from "../Reducer/reducer";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  //const [color, setColor] = useState('red');
  const [state, dispatch] = useReducer(reducer, initialState);
  

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};


