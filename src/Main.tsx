import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Main.css";
import gift from "./assets/gift.gif";

const Main = () => {
  const [wishlist, setWishlist] = useState("");

  return (
    <div className="App">
      <h1>Wishlist</h1>
      <p>What gifts do you want?</p>
      <p>
        <input
          onChange={(ev) => setWishlist(ev.target.value)}
          maxLength={32}
          placeholder="HELP ME IM STUCK IN A WISHLIST FACTORY"
        />
      </p>

      {wishlist.length > 0 && (
        <p>
          Start <Link to={{ pathname: `/list/${wishlist}` }}>here</Link>
        </p>
      )}

      <img src={gift} alt="gift" />
      <br />
      <a
        target="_blank"
        rel="noreferrer"
        href="https://icons8.com/icon/g7FGqx8h2AxR/gift"
      >
        Gift
      </a>
      {" "}icon by{" "}
      <a target="_blank" rel="noreferrer" href="https://icons8.com">
        Icons8
      </a>
    </div>
  );
};

export default Main;
