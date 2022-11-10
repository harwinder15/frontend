import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Button from "@mui/material/Button";
import Header from "../components/Header";

function Profile(props) {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [showResults, setShowResults] = React.useState(false);
  const [showResults1, setShowResults1] = React.useState(false);
  const [showResults2, setShowResults2] = React.useState(false);
  const [showResults3, setShowResults3] = React.useState(false);
  const [file, setFile] = useState();
  const [file1, setFile1] = useState();
  const [alignment, setAlignment] = React.useState("web");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  function handleUpload(e) {
    console.log(e.target.files);
    setFile1(URL.createObjectURL(e.target.files[0]));
  }

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

  function handleFile(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <Header />
      <div style={{ height: "1000%" }}>
        <input
          type="file"
          onChange={handleFile}
          style={{ marginTop: "10px" }}
        />
        <Button
          onClick={() => navigate("/edit")}
          style={{
            border: "solid 2px green",
            height: "10px",
            color: "green",
            marginLeft: "84px",
            marginTop: "4px",
          }}
        >
          Edit
        </Button>
        <br />
        <img src={file} style={{ width: "400px" }} />
        <br />
        <br />
        <br />
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleUpload}
          aria-label="Platform"
        >
          {" "}
          <input type="file" onChange={handleChange} />
          <Button
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
            Created
          </Button>
          <Button
            type="submit"
            value="Search"
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
            Owned
          </Button>
          <Button
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
            Collections
          </Button>
        </ToggleButtonGroup>
        <br />
        <br />
        <div>
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
              {" "}
              <img
                src={file1}
                style={{
                  width: "200px",
                  height: "240px",
                  marginTop: "15px",
                  marginLeft: "25px",
                  boxShadow: "0 0 5px green",
                  border: "solid 1px lightgreen",
                  borderRadius: "15px",
                }}
              />
              <br />
              <p style={{ marginLeft: "20px" }}>Everyone</p>
              <Button
                onClick={() => navigate("/detail")}
                style={{
                  height: "30px",
                  width: "230px",
                  marginLeft: "10px",
                  borderRadius: "10px",
                  color: "purple",
                  border: "solid 1px purple",
                  boxShadow: "0 0 5px purple",
                }}
              >
                View NFT
              </Button>
            </div>
          ) : null}
          <br />
          {showResults1 ? (
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
              {" "}
              <img
                src={file1}
                style={{
                  width: "200px",
                  height: "240px",
                  marginTop: "15px",
                  marginLeft: "25px",
                  boxShadow: "0 0 5px green",
                  border: "solid 1px lightgreen",
                  borderRadius: "15px",
                }}
              />
              <br />
              <p style={{ marginLeft: "20px" }}>World</p>
              <button
                style={{
                  height: "30px",
                  width: "230px",
                  marginLeft: "10px",
                  borderRadius: "10px",
                  color: "purple",
                  border: "solid 1px purple",
                  boxShadow: "0 0 5px purple",
                }}
              >
                View NFT
              </button>
            </div>
          ) : null}
          <br />
          {showResults2 ? (
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
              {" "}
              <img
                src={file1}
                style={{
                  width: "200px",
                  height: "240px",
                  marginTop: "15px",
                  marginLeft: "25px",
                  boxShadow: "0 0 5px green",
                  border: "solid 1px lightgreen",
                  borderRadius: "15px",
                }}
              />
              <br />
              <p style={{ marginLeft: "20px" }}>Text</p>
              <button
                style={{
                  height: "30px",
                  width: "230px",
                  marginLeft: "10px",
                  borderRadius: "10px",
                  color: "purple",
                  border: "solid 1px purple",
                  boxShadow: "0 0 5px purple",
                }}
              >
                View NFT
              </button>
            </div>
          ) : null}
          <br />
          {showResults3 ? (
            <div
              style={{
                height: "360px",
                width: "250px",
                borderRadius: "20px",
                border: "solid 1px green",
                marginLeft: "20px",
                boxShadow: "0 0 5px green",
                float: "left",
              }}
            >
              {" "}
              <img
                src={file1}
                style={{
                  width: "200px",
                  height: "240px",
                  marginTop: "15px",
                  marginLeft: "25px",
                  boxShadow: "0 0 5px green",
                  border: "solid 1px lightgreen",
                  borderRadius: "15px",
                }}
              />
              <br />
              <p style={{ marginLeft: "20px" }}>Hello</p>
              <button
                style={{
                  height: "30px",
                  width: "230px",
                  marginLeft: "10px",
                  borderRadius: "10px",
                  color: "purple",
                  border: "solid 1px purple",
                  boxShadow: "0 0 5px purple",
                }}
              >
                View NFT
              </button>
            </div>
          ) : null}
          <br />
        </div>

        <Button
          onClick={() => navigate(-1)}
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

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default Profile;
