import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


function Detail() {
  const navigate = useNavigate();
  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <div
        style={{ backgroundColor: "yellow", width: "100%", height: "1000px" }}
      >
        <div
          style={{
            backgroundColor: "pink",
            width: "50%",
            height: "1000px",
            float: "left",
          }}
        >
            <input type="file" onChange={handleChange}   />
            <br/>
            <img src={file} style={{width: "550px",height: "350px",marginLeft: "180px",marginTop: "100px"}}/>
        </div>
        <div
          style={{
            backgroundColor: "orange",
            width: "50%",
            height: "1000px",
            float: "left",
          }}
        >
           <div style={{backgroundColor: "red",width: "100%",height: "100px",marginTop: "120px"}}></div>
           <div style={{backgroundColor: "blue",width: "100%",height: "90px"}}>
           <div style={{backgroundColor: "yellow",width: "50%",height: "90px",float: "left"}}>
            
            </div>
            <div style={{backgroundColor: "pink",width: "50%",height: "90px",float: "left"}}>
            
            </div>
           </div>
           <div style={{backgroundColor: "purple",width: "100%",height: "170px"}}></div>

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
