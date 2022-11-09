import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Single from "./components/Single";
import Multiple from "./components/Multiple";
import Profile from "./components/Profile";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Detail from "./components/Detail";
import "./App.css";
function App() {
  const styles = {
    app: {
      padding: 50,
    },
    
  };
  function handleClick(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <>
      <div
        style={{ backgroundColor: "lightgreen", width: "100%", height: "70px" }}
      >
        <div
          style={{
            height: "70px",
            width: "50%",
            float: "left",
          }}
        >
          <h2 style={{ marginLeft: "70px" }}>DecryptNFT </h2>
        </div>
        <div
          style={{
            height: "70px",
            width: "50%",
            float: "left",
          }}
        >
          <button
            style={{
              color: "black",
              backgroundColor: "lightgreen",
              border: "none",
              width: "100px",
              height: "40px",
              marginTop: "15px",
              marginLeft: "150px",
              cursor: "pointer",
            }}
            onClick={handleClick}
            className="click"
          >
            Explore
          </button>
          <button
            style={{
              color: "black",
              backgroundColor: "lightgreen",
              border: "none",
              width: "100px",
              height: "40px",
              marginTop: "15px",
              cursor: "pointer",
            }}
            onClick={handleClick}
            className="click"
          >
            Create
          </button>
          <button
            style={{
              color: "black",
              backgroundColor: "lightgreen",
              border: "none",
              width: "100px",
              height: "40px",
              marginTop: "15px",
              cursor: "pointer",
            }}
            onClick={handleClick}
            className="click"
          >
            Profile
          </button>
          <button
            style={{
              color: "black",
              backgroundColor: "lightgreen",
              border: "none",
              width: "100px",
              height: "40px",
              marginTop: "15px",
              cursor: "pointer",
            }}
            onClick={handleClick}
            className="click"
          >
            Wallet
          </button>
        </div>
      </div>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/single" element={<Single />} />
            <Route path="/multiple" element={<Multiple />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/detail" element={<Detail />} />

          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
