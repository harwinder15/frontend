import React from "react";
import ReactDOM from "react-dom/client";

function Edit() {
  const handSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <form onSubmit={handSubmit}>
        <label>
          <h3
            style={{
              color: "green",
              marginLeft: "100px",
              marginTop: "0px",
            }}
          >
            First Name*
          </h3>
          <h3
            style={{
              color: "green",
              marginLeft: "760px",
              marginTop: "20px",
            }}
          >
            Last Name*
          </h3>

          <input
            style={{ width: "500px", height: "30px", marginLeft: "100px" }}
            type="text"
          />

          <input
            style={{ width: "500px", height: "30px", marginLeft: "150px" }}
            type="text"
          />
        </label>
      </form>
    </div>
  );
}
export default Edit;
