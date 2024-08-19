import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  currentUser: {},
  userToken: null,
  setCurrentUser: () => {},
  setUserToken: () => {},
  showToast: () => {},
});

export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [userToken, setUserToken] = useState(localStorage.getItem('TOKEN') || '');
  const [toast, setToast] = useState({ message: '', show: false });

  const showToast = (message) => {
    setToast({ message, show: true });
    setTimeout(() => {
      setToast({ message: '', show: false });
    }, 5000);
  };

  return (
    <StateContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userToken,
        setUserToken,
        showToast,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
