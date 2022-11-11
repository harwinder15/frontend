import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
const Header = (props) => {
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <>
      <div className="mainheader">
        <div className="innerheader">
          <h2 className="h2">NFT MarketPlace</h2>
        </div>
        <div className="navigate">
          <button
            onClick={() => navigate("/explore")}
            className="navigateexplore"
          >
            Explore
          </button>
          <button
            onClick={() => navigate("/create")}
            className="navigatecreate"
          >
            Create
          </button>
          <button
            onClick={() => navigate("/profile")}
            className="navigateprofile"
          >
            Profile
          </button>

          <button className="navigatewallet" onClick={handleClick}>
            Wallet
          </button>
        </div>
      </div>

      {/* Button */}
    </>
  );
};

export default Header;
