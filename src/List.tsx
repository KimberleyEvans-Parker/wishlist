import React from "react";
import { useParams } from "react-router";

import ListItem from "./components/ListItem";

const List = () => {
    const params = useParams();
    const id = params.id;

    return (
        <div>{id}
            <ListItem buyerView={true} title="Pony" description="I want a pony" quantity={5} bought={2} />
        </div>
      );
}

export default List;