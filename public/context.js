import React, { useContext, useEffect } from 'react';
import useFetch from '../comps/useFetch';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const {
    error,
    isPending,
    data: imposters,
  } = useFetch('http://localhost:8000/imposters');

  return (
    <AppContext.Provider value={{ imposters, error, isPending }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
