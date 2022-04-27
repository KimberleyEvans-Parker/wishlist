import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import List from "./List";
import Main from "./Main";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="list/edit/:id" element={<List editable/>} />
        <Route path="list/:id" element={<List />} />
      </Routes>
    </Router>
  );
};

export default App;
