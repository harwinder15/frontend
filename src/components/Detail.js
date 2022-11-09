import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();
  const [file, setFile] = useState();
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

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <div style={{ width: "100%", height: "1000px" }}>
        <div
          style={{
            width: "50%",
            height: "1000px",
            float: "left",
          }}
        >
          <input type="file" onChange={handleChange} />
          <br />
          <div>
            <img
              src={file}
              style={{
                width: "550px",
                height: "350px",
                marginLeft: "180px",
                marginTop: "100px",
              }}
            />
          </div>
        </div>
        <div
          style={{
            width: "50%",
            height: "1000px",
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
                style={{ borderRadius: "30px", width: "35px", height: "35px" }}
              >
                C
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
                style={{ borderRadius: "30px", width: "35px", height: "35px" }}
              >
                C
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
              On Sale
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
              On Sale
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
              On Sale
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
              On Sale
            </Button>
            {showResults ? (
              <div
                style={{
                  height: "360px",
                  width: "250px",
                  borderRadius: "20px",
                  border: "solid 1px green",
                  marginLeft: "20px",
                  boxShadow: "0 0 5px green",
                }}
              >
                <br />
                <p style={{ marginLeft: "20px" }}>Everyone</p>
                <Button
                  onClick={() => navigate("/detail")}
                  style={{
                    height: "30px",
                    width: "130px",
                    marginLeft: "10px",
                    borderRadius: "10px",
                    color: "purple",
                    border: "solid 1px purple",
                    boxShadow: "0 0 5px purple",
                  }}
                >
                  Remove From Sale{" "}
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div>
        <Button
          onClick={() => navigate(-2)}
          style={{
            width: "fit-content",
            color: "green",
            marginLeft: "20px",
            width: "100px",
            height: "30px",
            border: "solid 2px green",
            boxShadow: "0 0 7px green",
          }}
        >
          Go Home
        </Button>
      </div>
    </>
  );
}
export default Detail;
