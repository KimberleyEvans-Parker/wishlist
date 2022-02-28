import React, { useState } from "react";
import Cart from "../assets/cart.png";
import Bin from "../assets/bin.png";

// buyerView: boolean, title: string, description: string, quantity: number, bought: number
const ListItem = (props: any) => {
  const [expanded, setExpanded] = useState(false);

  if (props?.buyerView && props?.quantity - props?.bought == 0) return <></>;

  return (
    <div className={`list-item-container ${expanded && "height-auto"}`}>
      <div className="list-item-bar">
        <div className="circle">
          {props?.buyerView ? props?.quantity - props?.bought : props?.quantity}
        </div>
        <h1 className="list-item-title">{props?.title}</h1>
        <div
          className={`circle float-right ${expanded || "rotate"}`}
          onClick={() => setExpanded(!expanded)}
        >
          {"🞃"}
        </div>
      </div>
      {true && (
        <div className={`content ${expanded && "grow"}`}>
          {/* <div className="circle">{props?.quantity}</div> */}
          <div className="description-container">
            <p className="description">{props?.description}</p>
          </div>
          <div className="circle">
            <img src={props?.buyerView ? Cart : Bin} className="icon" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ListItem;
