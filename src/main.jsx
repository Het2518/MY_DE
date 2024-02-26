import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "../public/index.css";
import { FirebaseProvider } from "./Context/firebaseConfig.jsx"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <App/>
    </FirebaseProvider>
  </React.StrictMode>
);
