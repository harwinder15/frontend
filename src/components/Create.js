import React from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';


const Create = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Contact Page</h1>
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
};

export default Create;