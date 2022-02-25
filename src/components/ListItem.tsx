import React, { useState } from "react";

// buyerView: boolean, title: string, description: string, quantity: number, bought: number
const ListItem = (props: any) => {
    const [expanded, setExpanded] = useState(false);
  
    return (
        <div className="list-item-container">
            <div className="circle">
                {props?.quantity}
            </div>
            <h1 className="list-item-title">{props?.title}</h1>
            <div className={`circle float-right ${expanded || "rotate"}`} onClick={() => setExpanded(!expanded)}>
                {/* {expanded ? "˅" : "<"} */}
                {/* {"⏷"} */}
                {/* {"🞀"} */}
                {"🞃"}
                {/* {"⏴"} */}
            </div>
        </div>
    );
  };
  
  export default ListItem;
  