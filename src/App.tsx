import React from "react";

import "./App.css";
import gift from "./assets/gift.gif";

function App() {
  return (
    <div className="App">
      <h1>Wishlist</h1>
      <p>What gifts do you want?</p>
      <img src={gift} alt="gift" />
      <br />
      <a
        target="_blank"
        rel="noreferrer"
        href="https://icons8.com/icon/g7FGqx8h2AxR/gift"
      >
        Gift
      </a>{" "}
      icon by{" "}
      <a target="_blank" rel="noreferrer" href="https://icons8.com">
        Icons8
      </a>
    </div>
  );
}

export default App;
