import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";


export const myContext = createContext(null);
const Context = ({ children }) => {

  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
   return createUserWithEmailAndPassword(auth, email, password);
  }
  const loginUser = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password);
  }
  
  const authInfo = { user, createUser,loginUser };

  return (
    <myContext.Provider value={authInfo}>
      {children}
    </myContext.Provider>
  );
};

export default Context;