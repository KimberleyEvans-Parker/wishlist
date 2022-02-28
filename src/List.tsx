import React from "react";
import { useParams } from "react-router";

import ListItem from "./components/ListItem";

const List = () => {
  const params = useParams();
  const id = params.id;
  const buyerView = false;

  return (
    <div>
      {id}
      <ListItem
        buyerView={buyerView}
        title="Pony"
        description="I want a pony"
        quantity={1}
        bought={0}
      />
      <ListItem
        buyerView={buyerView}
        title="Potato"
        description="I have a grand plan to make a potato server and all that I'm missing is a potato.  I know it's possible because my tutor had them in a doc he shared with me."
        quantity={1}
        bought={1}
      />
      <ListItem
        buyerView={buyerView}
        title="Things"
        description="I reaaaallllllyyy reaaaallllyyy reaaallllyyy want a bunch of things. Like a lot of things.  "
        quantity={100}
        bought={2}
      />
      <ListItem
        buyerView={buyerView}
        title="Lorem"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        quantity={3}
        bought={0}
      />
      <ListItem
        buyerView={buyerView}
        title="Pancakes"
        description="The good stuff only"
        quantity={50}
        bought={25}
      />
    </div>
  );
};

export default List;
