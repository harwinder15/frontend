import React from "react";
import { useNavigate } from "react-router-dom";
import logo2 from "../logo2.jpg";
import { Button } from "@mui/material";
export default function Buy({ title }) {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          height: "380px",
          width: "250px",
          borderRadius: "20px",
          border: "solid 1px green",
          marginLeft: "170px",
          marginTop: "50px",
          boxShadow: "0 0 5px green",
          float: "left",
        }}
      >
        {" "}
        <img
          src={logo2}
          style={{
            width: "200px",
            height: "240px",
            marginTop: "15px",
            marginLeft: "25px",
            boxShadow: "0 0 5px green",
            border: "solid 1px lightgreen",
            borderRadius: "15px",
          }}
          alt="logo2"
        />
        <br />
        <p style={{ marginLeft: "20px" }}>{title}</p>
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
          Buy
        </Button>
      </div>
    </div>
  );
}
