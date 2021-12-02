import React from "react";
import { useParams } from "react-router";

const List = () => {
    const params = useParams();
    const id = params.id;

    return <p>{id}</p>;
}

export default List;