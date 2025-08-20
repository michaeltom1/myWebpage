import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style/GlobalStyle.js";
import ThemeProvider from "./context/ThemeProvider.jsx";
import LoadingScreen from "./Components/LoadingScreen";

function Root() {
  const [loaded, setLoaded] = useState(false);
  return (
    <React.StrictMode>
      {!loaded && <LoadingScreen onFinish={() => setLoaded(true)} />}
      <div style={{ display: loaded ? undefined : "none" }}>
        <ThemeProvider>
          <BrowserRouter>
            <GlobalStyle />
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((reg) => console.log("Service worker registered.", reg))
      .catch((err) => console.warn("Service worker registration failed", err));
  });
}
