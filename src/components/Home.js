import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
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
          onClick={() => navigate("/single")}
          style={{
            border: "solid 2px green",
            width: "130px",
            height: "150px",
            fontSize: "20px",
            color: "green",
            boxShadow: "0 0 10px green",
            borderRadius: "17px",
          }}
        >
          Single
        </Button>
        <Button
          onClick={() => navigate("/multiple")}
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
        <Button
          onClick={() => navigate("/profile")}
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
          Profile
        </Button>
        
      </p>
    </>
  );
};

export default Home;
