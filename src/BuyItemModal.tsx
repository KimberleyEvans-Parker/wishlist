import React, { useState } from "react";

interface BuyItemModalProps {
  id: number;
  title: string;
  quantity: number;
  bought: number;
  buyItem: (id: number, count: number) => void;
  close: () => void;
}

const BuyItemModal = (props: BuyItemModalProps) => {
  const [count, setCount] = useState(0);

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close" onClick={() => props.close()}>
          &times;
        </button>
        <p>How many {props.title} would you like to buy?</p>
        <input
          type="number"
          value={count}
          onInput={(ev) => {
            const value = parseInt(ev.currentTarget.value);
            if (value >= 0 && value <= (props.quantity - props.bought))
              setCount(parseInt(ev.currentTarget.value));
          }}
        />
        <button onClick={() => props.buyItem(props.id, count)}>Purchase</button>
      </div>
    </div>
  );
};

export default BuyItemModal;
