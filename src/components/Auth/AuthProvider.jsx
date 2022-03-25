import React from "react";

export const AuthContext = React.createContext();

export const useUser = () => {
  return React.useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
