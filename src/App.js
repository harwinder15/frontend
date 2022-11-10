import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CreateSingle from "./pages/CreateSingle";
import CreateMultiple from "./pages/CreateMultiple";
import Profile from "./pages/Profile";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import Explore from "./pages/Explore";

import "./App.css";
function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/createsingle" element={<CreateSingle />} />
            <Route path="/createmultiple" element={<CreateMultiple />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
