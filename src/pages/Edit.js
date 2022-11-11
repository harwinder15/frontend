import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Header from "../components/Header";

function Edit() {
  const handSubmit = (e) => {
    e.preventDefault();
  };
  const [file, setFile] = useState();
  const navigate = useNavigate();

  function handleFile(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <Header />
      <div className="App">
        <form onSubmit={handSubmit}>
          <label>
            <h3
              style={{
                color: "green",
                marginLeft: "100px",
                marginTop: "20px",
              }}
            >
              First Name*
            </h3>

            <input
              style={{ width: "500px", height: "30px", marginLeft: "100px" }}
              type="text"
            />
            <h3
              style={{
                color: "green",
                marginLeft: "100px",
                marginTop: "0px",
              }}
            >
              Last Name*
            </h3>

            <input
              style={{ width: "500px", height: "30px", marginLeft: "100px" }}
              type="text"
            />
            <h3
              style={{
                color: "green",
                marginLeft: "100px",
                marginTop: "0px",
              }}
            >
              Email Address{" "}
            </h3>

            <input
              style={{ width: "500px", height: "30px", marginLeft: "100px" }}
              type="text"
            />
            <h3
              style={{
                color: "green",
                marginLeft: "100px",
                marginTop: "0px",
              }}
            >
              Username{" "}
            </h3>

            <input
              style={{ width: "500px", height: "30px", marginLeft: "100px" }}
              type="text"
            />
            <h3
              style={{
                color: "green",
                marginLeft: "100px",
                marginTop: "0px",
              }}
            >
              Phone:{" "}
            </h3>

            <input
              style={{ width: "500px", height: "30px", marginLeft: "100px" }}
              type="number"
            />
            <h3
              style={{
                color: "green",
                marginLeft: "100px",
                marginTop: "0px",
              }}
            >
              Bio{" "}
            </h3>

            <input
              style={{ width: "500px", height: "30px", marginLeft: "100px" }}
              type="text"
            />
            <h3
              style={{
                color: "green",
                marginLeft: "100px",
                marginTop: "0px",
              }}
            >
              Website{" "}
            </h3>

            <input
              style={{ width: "500px", height: "30px", marginLeft: "100px" }}
              type="text"
            />
            <h3
              style={{
                color: "green",
                marginLeft: "100px",
                marginTop: "0px",
              }}
            >
              Upload Profile Pic{" "}
            </h3>
            <br />
            <input
              type="file"
              onChange={handleFile}
              style={{ width: "500px", height: "30px", marginLeft: "100px" }}
            />
            <br />
            <img
              src={file}
              style={{ width: "400px", height: "200px", marginLeft: "100px" }}
            />
            <br />
            <br />
            <button style={{ marginLeft: "100px" }}>Update Profile</button>
            <br />
          </label>
        </form>
      </div>
      <br />
      <br />
   
    </>
  );
}
export default Edit;
