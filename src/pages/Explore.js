import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Header from "../components/Header";
import Buy from "../components/Buy";

const Explore = (props) => {
  const navigate = useNavigate();

  

  return (
    <>
      <Header />

      {/* Button */}
      <p>
        <h1
          style={{
            color: "green",
            marginLeft: "600px",
          }}
        >
          Explore{" "}
        </h1>
      </p>
      <div>
        <input
          type="search"
          placeholder="Search Item Here"
          style={{
            width: "190px",
            marginLeft: "170px",
            marginTop: "40px",
            cursor: "pointer",
            height: "40px",
            border: "groove 1px rgb(131,100,226)",
            borderRadius: "10px",
          }}
        ></input>
        <select
          style={{
            width: "190px",
            cursor: "pointer",
            marginLeft: "30px",

            height: "40px",
            border: "groove 1px rgb(131,100,226)",
            borderRadius: "10px",
          }}
        >
            <option value="All Sale Type">All Sale Type</option> {" "}
          <option value="Buy Now">Buy Now</option>
          <option value="Auction">Auction</option>
        </select>
        <select
          style={{
            width: "190px",
            cursor: "pointer",
            marginLeft: "30px",

            height: "40px",
            border: "groove 1px rgb(131,100,226)",
            borderRadius: "10px",
          }}
        >
            <option value="All Items">All Items</option> {" "}
          <option value="Single Items">Single Items</option>
          <option value="Multiple Items">Multiple Items</option>
        </select>
        <br/><br/>
        <Buy title={'Everyone'} />
        <Buy title={'Hello'} />
        <Buy title={'World'} />
        <Buy title={'Display'} />
        <Buy title={'Items'} />
        <Buy title={'Single Items'} />
        <Buy title={'Multiple Items'} />
        <Buy title={'Duouble Items'} />
      </div>
   
    </>
  );
};

export default Explore;
