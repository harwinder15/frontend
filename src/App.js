import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Single from "./components/Single";
import Multiple from "./components/Multiple";
import Profile from "./components/Profile";
import Create from "./components/Create";
import Edit from "./components/Edit";
function App(){

  const styles = {
    app: {
      padding: 50,
    },
  };

  return (
    <>
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/single" element={<Single />} />
            <Route path="/multiple" element={<Multiple />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit" element={<Edit />} />

          </Routes>
        </Router>
      </div>
      </>
  );
};

export default App;


