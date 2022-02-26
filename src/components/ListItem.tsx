import React, { useState } from "react";

// buyerView: boolean, title: string, description: string, quantity: number, bought: number
const ListItem = (props: any) => {
    const [expanded, setExpanded] = useState(false);
  
    return (
        <div className={`list-item-container ${expanded && "height-auto"}`}>
            <div className="list-item-bar">
                <div className="circle">
                    {props?.quantity}
                </div>
                <h1 className="list-item-title">{props?.title}</h1>
                <div className={`circle float-right ${expanded || "rotate"}`} onClick={() => setExpanded(!expanded)}>
                    {"🞃"}
                </div>
            </div>
            {true &&
                <div className={`content ${expanded && "grow"}`}>
                    {props?.description}
                </div>
            }
        </div>
    );
  };
  
  export default ListItem;
  