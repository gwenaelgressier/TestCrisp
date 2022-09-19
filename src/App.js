import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "981398da-8b7c-4267-956f-787c555d1431";
    document.getElementsByTagName("head")[0].appendChild(script);
    window.$crisp.push(["do", "chat:hide"]);
  }, []);

  useEffect(() => {
    window.$crisp?.push(["set", "user:nickname", ["malienda"]]);
    window.$crisp?.push(["set", "user:email", ["gressier.gwenael@gmail.com"]]);
    window.$crisp?.push(["do", "chat:show"]);
    return () => {
      window.$crisp?.push(["do", "chat:hide"]);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
