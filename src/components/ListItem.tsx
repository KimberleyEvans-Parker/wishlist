import React, { useState } from "react";
import Cart from "../assets/cart.png";
import Bin from "../assets/bin.png";
import BuyItemModal from "../BuyItemModal";

interface ListItemProps {
  buyerView: boolean;
  id: number;
  title: string;
  description: string;
  quantity: number;
  bought: number;
  buyItem: (id: number, count: number) => void;
}

const ListItem = (props: ListItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const quantityRemaining = props.quantity - props.bought;

  if (props.buyerView && quantityRemaining == 0) return <></>;

  return (
    <>
      {openModal && (
        <BuyItemModal
          id={props.id}
          bought={props.bought}
          title={props.title}
          quantity={props.quantity}
          buyItem={(id, count) => {
            props.buyItem(id, count);
            setOpenModal(false);
          }}
          close={() => setOpenModal(false)}
        />
      )}

      <div className={`list-item-container ${expanded ? "height-auto" : ""}`}>
        <div className="list-item-bar">
          <div className="circle">
            {props.buyerView ? quantityRemaining : props.quantity}
          </div>
          <h1 className="list-item-title">{props.title}</h1>
          <div
            className={`circle float-right ${expanded || "rotate"}`}
            onClick={() => setExpanded(!expanded)}
          >
            {"🞃"}
          </div>
        </div>

        <div className={`content ${expanded ? "grow" : ""}`}>
          <div className="description-container">
            <p className="description">{props.description}</p>
          </div>
          <button className="circle" onClick={() => setOpenModal(true)}>
            <img src={props.buyerView ? Cart : Bin} className="icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ListItem;
