import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Header from "../components/Header";

const Create = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div
        style={{
          width: "fit-content",
        }}
      >
        <h1
          style={{
            color: "green",
            marginLeft: "20px",
          }}
        >
          Create Collectible{" "}
        </h1>
      </div>
      <hr />

      {/* Button */}
      <p>
        <Button
          onClick={() => navigate("/createsingle")}
          style={{
            border: "solid 2px green",
            width: "130px",
            height: "150px",
            fontSize: "20px",
            color: "green",
            boxShadow: "0 0 10px green",
            borderRadius: "17px",
            marginLeft: "600px",
          }}
        >
          Single
        </Button>
        <Button
          onClick={() => navigate("/createmultiple")}
          style={{
            border: "solid 2px green",
            width: "130px",
            height: "150px",
            fontSize: "20px",
            color: "green",
            marginLeft: "30px",
            boxShadow: "0 0 10px green",
            borderRadius: "17px",
          }}
        >
          Multiple
        </Button>
      </p>
      <Button
        onClick={() => navigate(-1)}
        style={{
          width: "fit-content",
          color: "green",
          marginLeft: "700px",
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
