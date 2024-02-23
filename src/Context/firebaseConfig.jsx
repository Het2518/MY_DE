import React, { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDSsZlFHdfu9m8jwbcptTqk7o6gS-w7sc",
  authDomain: "resume-builder-42d71.firebaseapp.com",
  projectId: "resume-builder-42d71",
  storageBucket: "resume-builder-42d71.appspot.com",
  messagingSenderId: "642829043616",
  appId: "1:642829043616:web:7731e985b617f68bf9c6c5",
};

const firebaseApp = initializeApp(firebaseConfig);
const FirebaseContext = createContext(null);

// Create a custom hook to use the Firebase context
export function useFirebase() {
  return useContext(FirebaseContext);
}

const firebaseAuth = getAuth(firebaseApp);

// Corrected component name
export const FirebaseProvider = ({ children }) => {
  const signupUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  return (
    <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword }}>
      {children}
    </FirebaseContext.Provider>
  );
};
