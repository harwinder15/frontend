import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Header from "../components/Header";

const Explore = (props) => {
  const navigate = useNavigate();
  const [file1, setFile1] = useState();
  function handleUpload(e) {
    console.log(e.target.files);
    setFile1(URL.createObjectURL(e.target.files[0]));
  }

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
        <div>
          {" "}
          <input type="file" onChange={handleUpload} />
        </div>

        <div>
          <div
            style={{
              height: "360px",
              width: "250px",
              borderRadius: "20px",
              border: "solid 1px green",
              marginLeft: "170px",
              marginTop: "40px",
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
              Buy
            </Button>
          </div>
          <div
            style={{
              height: "360px",
              width: "250px",
              borderRadius: "20px",
              border: "solid 1px green",
              marginLeft: "50px",
              marginTop: "40px",
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
          <div
            style={{
              height: "360px",
              width: "250px",
              borderRadius: "20px",
              border: "solid 1px green",
              marginLeft: "50px",
              marginTop: "40px",
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
          <div
            style={{
              height: "360px",
              width: "250px",
              borderRadius: "20px",
              border: "solid 1px green",
              marginLeft: "50px",
              marginTop: "40px",
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
      </div>
      <div>
        <Button
          onClick={() => navigate(-1)}
          style={{
            width: "fit-content",
            color: "green",
            marginRight: "100px",
            marginTop: "25px",
            width: "100px",
            height: "30px",
            border: "solid 2px green",
            boxShadow: "0 0 7px green",
          }}
        >
          Home
        </Button>
      </div>
    </>
  );
};

export default Explore;
