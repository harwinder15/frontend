import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Header from "../components/Header";
import logo4 from "../logo4.jpg";


function Detail() {
  const navigate = useNavigate();
  const [showResults, setShowResults] = React.useState(false);
  const [showResults1, setShowResults1] = React.useState(false);
  const [showResults2, setShowResults2] = React.useState(false);
  const [showResults3, setShowResults3] = React.useState(false);
  const onClick = (e) => {
    if (showResults == true) {
      setShowResults(false);
    } else {
      setShowResults(true);
    }
  };
  const onClick1 = (e) => {
    if (showResults1 == true) {
      setShowResults1(false);
    } else {
      setShowResults1(true);
    }
  };
  const onClick2 = (e) => {
    if (showResults2 == true) {
      setShowResults2(false);
    } else {
      setShowResults2(true);
    }
  };
  const onClick3 = (e) => {
    if (showResults3 == true) {
      setShowResults3(false);
    } else {
      setShowResults3(true);
    }
  };

 

  return (
    <>
      <Header />
      <div style={{ width: "100%", height: "400px" }}>
        <div
          style={{
            width: "50%",
            height: "400px",
            float: "left",
          }}
        >
     
          <div>
           
              {" "}
        <img
          src={logo4}
          style={{
            width: "550px",
            height: "350px",
            marginLeft: "100px",
            marginTop: "100px",
          }}
          alt="logo4"
        />
          </div>
        </div>
        <div
          style={{
            width: "50%",
            height: "400px",
            float: "left",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100px",
              marginTop: "120px",
            }}
          >
            <h1>Everyone</h1>
            <p>Hello</p>
          </div>
          <div style={{ width: "100%", height: "100px" }}>
            <div
              style={{
                width: "50%",
                height: "100px",
                float: "left",
              }}
            >
              <h4>Creator</h4>
              <button
                style={{ borderRadius: "30px", width: "38px", height: "39px" }}
              >
                <AccountCircleIcon />
              </button>
              ghsghgh
            </div>
            <div
              style={{
                width: "50%",
                height: "100px",
                float: "left",
              }}
            >
              <h4>Collector</h4>
              <button
                style={{ borderRadius: "30px", width: "38px", height: "39px" }}
              >
                <AccountCircleIcon />
              </button>
              fddggfr
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "170px",
            }}
          >
            <Button
              style={{ marginTop: "20px" }}
              variant="text"
              sx={{
                ":hover": {
                  bgcolor: "lightgreen",
                  color: "black",
                  border: "solid 1px lightgreen",
                },
              }}
              onClick={onClick}
            >
              Action
            </Button>
            <Button
              style={{ marginTop: "20px" }}
              variant="text"
              sx={{
                ":hover": {
                  bgcolor: "lightgreen",
                  color: "black",
                  border: "solid 1px lightgreen",
                },
              }}
              onClick={onClick1}
            >
              History
            </Button>{" "}
            <Button
              style={{ marginTop: "20px" }}
              variant="text"
              sx={{
                ":hover": {
                  bgcolor: "lightgreen",
                  color: "black",
                  border: "solid 1px lightgreen",
                },
              }}
              onClick={onClick2}
            >
              Active Bids
            </Button>{" "}
            <Button
              style={{ marginTop: "20px" }}
              variant="text"
              sx={{
                ":hover": {
                  bgcolor: "lightgreen",
                  color: "black",
                  border: "solid 1px lightgreen",
                },
              }}
              onClick={onClick3}
            >
              Details
            </Button>
            {showResults ? (
              <>
                <br />
                <br />
                <br />

                <Button
                  onClick={() => navigate("/detail")}
                  style={{
                    height: "30px",
                    width: "150px",
                    marginLeft: "10px",
                    borderRadius: "10px",
                    color: "purple",
                    border: "solid 1px purple",
                    boxShadow: "0 0 5px purple",
                    fontSize: "12px",
                  }}
                >
                  Remove From Sale{" "}
                </Button>
                <Button
                  onClick={() => navigate("/detail")}
                  style={{
                    height: "30px",
                    width: "150px",
                    marginLeft: "10px",
                    borderRadius: "10px",
                    color: "purple",
                    border: "solid 1px purple",
                    boxShadow: "0 0 5px purple",
                    fontSize: "12px",
                  }}
                >
                  Transfer NFT{" "}
                </Button>
              </>
            ) : null}
            {showResults1 ? (
              <>
                <br />
                <br />
              

                <div style={{ width: "320px", height: "200px" }}>
                  <div
                    style={{
                      width: "300px",
                      height: "50px",
                      border: "groove 1px green",
                      boxShadow: "0 0 5px green",
                    }}
                  >
                    UBLISTED
                    <br />
                    21 minutes ago
                  </div>
                  <div
                    style={{
                      width: "300px",
                      height: "50px",
                      border: "groove 1px green",
                      boxShadow: "0 0 5px green",
                    }}
                  >
                    UNLISTED
                    <br />
                    11 minutes ago
                  </div>
                  <div
                    style={{
                      width: "300px",
                      height: "50px",
                      border: "groove 1px green",
                      boxShadow: "0 0 5px green",
                    }}
                  >
                    LISTED
                    <br />
                    17 minutes ago
                  </div>
                  <div
                    style={{
                      width: "300px",
                      height: "50px",
                      border: "groove 1px green",
                      boxShadow: "0 0 5px green",
                    }}
                  >
                    CREATED
                    <br />a day ago
                  </div>
                </div>
              </>
            ) : null}
            {showResults3 ? (
              <>
                <br />
                <br />
                <br />

                <div
                  style={{
                    width: "250px",
                    height: "120px",
                    border: "groove 1px green",
                    boxShadow: "0 0 5px green",
                    borderRadius: "12px",
                  }}
                >
                  <h3 style={{ marginLeft: "110px" }}>ff</h3>
                  <h2 style={{ marginLeft: "100px" }}>ffg</h2>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>

    </>
  );
}
export default Detail;
