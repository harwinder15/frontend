import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import Button from "@mui/material/Button";

function Profile(props) {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [file, setFile] = useState();

  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function handleFile(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <input type="file" onChange={handleFile} style={{ marginTop: "100px" }} />
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
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="web">On Sale</ToggleButton>
        <ToggleButton value="android">Created</ToggleButton>
        <ToggleButton value="ios">Owned</ToggleButton>
        <ToggleButton value="collections">Collections</ToggleButton>
      </ToggleButtonGroup>
      <br />
      <br />
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
        Home
      </Button>
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
