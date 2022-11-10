import React from "react";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
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
          <h2 style={{ marginLeft: "70px" }}>NFT MarketPlace</h2>
        </div>
        <div
          style={{
            height: "70px",
            width: "50%",
            float: "left",
          }}
        >
          <button
            onClick={() => navigate("/explore")}
            style={{
              color: "black",
              backgroundColor: "lightgreen",
              border: "none",
              width: "100px",
              height: "40px",
              marginTop: "15px",
              cursor: "pointer",
              marginLeft: "150px",
            }}
          >
            Explore
          </button>
          <button
            onClick={() => navigate("/create")}
            style={{
              color: "black",
              backgroundColor: "lightgreen",
              border: "none",
              width: "100px",
              height: "40px",
              marginTop: "15px",
              cursor: "pointer",
            }}
          >
            Create
          </button>
          <button
            onClick={() => navigate("/profile")}
            style={{
              color: "black",
              backgroundColor: "lightgreen",
              border: "none",
              width: "100px",
              height: "40px",
              marginTop: "15px",
              cursor: "pointer",
            }}
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

      {/* Button */}
    </>
  );
};

export default Header;
