import React, { Component, useState, useMemo } from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Switch from "@mui/material/Switch";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Multiple = (props) => {
  const navigate = useNavigate();
  const style = {
    position: "absolute",
    top: "50%",
    height: "87%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    bgcolor: "background.paper",
    border: "2px solid purple",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const [files, setFiles] = useState();
  const [file, setFile] = useState();
  const [show3, setShow3] = useState(false);
  const [mint, setMint] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [show1, setShow1] = useState(false);
  const [price, setPrice] = useState(false);
  const [auction, setAuction] = useState(false);
  const [bids, setBids] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const minTime = useMemo(() => {
    const todayDate = new Date();
    const selectedDate = new Date(startDate); // create a copy before modifying
    // When current date is selected, set minTime to current time
    if (selectedDate.setHours(0, 0, 0, 0) === todayDate.setHours(0, 0, 0, 0)) {
      return new Date();
    }

    // For other dates return default 7:00am
    return new Date(0, 0, 0, 7);
  }, [startDate]);
  function handleUpload(e) {
    console.log(e.target.files);
    setFiles(URL.createObjectURL(e.target.files[0]));
  }
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const toggleBtn = (e) => {
    let response = e?.target?.checked;
    setToggle(response);
  };
  const toggleBtn2 = (e) => {
    let response = e?.target?.checked;
    setShow1(response);
  };
  const toggleBtn3 = (e) => {
    let response = e?.target?.checked;
    setMint(response);
  };
  const handSubmit = (e) => {
    e.preventDefault();
  };
  const handlePrice = (e) => {
    if (price == true) {
      setPrice(false);
    } else {
      setPrice(true);
    }
  };
  const handleAuction = (e) => {
    if (auction == true) {
      setAuction(false);
    } else {
      setAuction(true);
    }
  };
  const handleBids = (e) => {
    if (bids == true) {
      setBids(false);
    } else {
      setBids(true);
    }
  };
  const handleClick = (e) => {
    if (show3 == true) {
      setShow3(false);
    } else {
      setShow3(true);
    }
  };
  return (
    <>
      <div className="App">
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
            Choose Collection
          </h1>
        </div>
        <br />
        <div
          style={{
            width: "fit-content",
            color: "green",
            marginLeft: "90px",
          }}
        >
          <Button onClick={handleOpen}>Create New</Button>
        </div>
        <div>
          {" "}
          <h3
            style={{
              color: "green",
              marginLeft: "20px",
              marginTop: "100px",
            }}
          >
            Upload File{" "}
          </h3>
          <input type="file" onChange={handleUpload} />
          <img src={files} style={{ width: "310px", height: "200px" }} />
        </div>
        <br />
        <div>
          <div>
            <h3
              style={{
                color: "green",
                marginLeft: "20px",
                marginTop: "20px",
              }}
            >
              Unlock Once Purchased <Switch onChange={toggleBtn} />
            </h3>
            <h5>Unlock content after successful transaction.</h5>
            <br />
            {toggle ? (
              <input
                type="text"
                style={{
                  marginLeft: "20px",
                }}
              ></input>
            ) : null}
          </div>
        </div>
        <div>
          <div>
            <h3
              style={{
                color: "green",
                marginLeft: "20px",
                marginTop: "20px",
              }}
            >
              Put On MarketPlace <Switch onChange={toggleBtn2} />
            </h3>
            <h5>Select Method</h5> <br />
            {show1 ? (
              <>
                <Button
                  style={{
                    height: "100px",
                    width: "100px",
                    fontSize: "15px",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px",
                    marginLeft: "20px",
                  }}
                  onClick={handlePrice}
                >
                  Fixed Price
                </Button>

                <Button
                  style={{
                    height: "100px",
                    marginLeft: "20px",
                    width: "100px",
                    fontSize: "15px",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px",
                  }}
                  onClick={handleAuction}
                >
                  Time Auction
                </Button>

                <Button
                  style={{
                    height: "100px",
                    width: "100px",
                    marginLeft: "20px",
                    fontSize: "15px",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px",
                  }}
                  onClick={handleBids}
                >
                  Open For Bids
                </Button>
                <br />
                <br />
                {price ? (
                  <>
                    <h3
                      style={{
                        color: "green",
                        marginLeft: "20px",
                        marginTop: "20px",
                      }}
                    >
                      Price*
                    </h3>
                    <input
                      type="text"
                      placeholder="(0)MATIC"
                      style={{
                        width: "330px",
                        height: "30px",
                        marginLeft: "20px",
                      }}
                    ></input>
                  </>
                ) : null}
                <br />

                {auction ? (
                  <>
                    <h3
                      style={{
                        color: "green",
                        marginLeft: "20px",
                        marginTop: "20px",
                      }}
                    >
                      Minimum Bid*
                    </h3>
                    <input
                      type="text"
                      placeholder="0"
                      style={{
                        width: "500px",
                        height: "30px",
                        marginLeft: "20px",
                      }}
                    ></input>
                    <br />
                    <br />
                    <h3
                      style={{
                        color: "green",
                        marginLeft: "20px",
                        marginTop: "20px",
                      }}
                    >
                      Payment Token*{" "}
                    </h3>
                    <select
                      value="USDT"
                      placeholder="0"
                      style={{
                        width: "230px",
                        height: "30px",
                        marginLeft: "20px",
                      }}
                    >
                      <option value="Usdt">USDT</option>
                    </select>
                    <h3
                      style={{
                        color: "green",
                        marginLeft: "20px",
                      }}
                    >
                      Expiration Date*{" "}
                    </h3>
                    <label style={{ marginLeft: "20px" }}>
                      <DatePicker
                        wrapperClassName="datePicker"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showTimeSelect
                        minDate={new Date()}
                        minTime={minTime}
                        maxTime={new Date(0, 0, 0, 17)} // 5:00pm
                        dateFormat="dd/MM/yyyy hh:mm a"
                        timeFormat="hh:mm a"
                        timeIntervals={30}
                      />
                    </label>
                  </>
                ) : null}

                {bids ? (
                  <>
                    <h3
                      style={{
                        color: "green",
                        marginLeft: "20px",
                        marginTop: "20px",
                      }}
                    >
                      Minimum Bid*
                    </h3>
                    <input
                      type="text"
                      placeholder="0"
                      style={{
                        width: "500px",
                        height: "30px",
                        marginLeft: "20px",
                      }}
                    ></input>
                    <br />
                    <br />
                    <h3
                      style={{
                        color: "green",
                        marginLeft: "20px",
                        marginTop: "20px",
                      }}
                    >
                      Payment Token*{" "}
                    </h3>
                    <select
                      value="USDT"
                      placeholder="0"
                      style={{
                        width: "500px",
                        height: "35px",
                        marginLeft: "20px",
                      }}
                    >
                      <option value="Usdt">USDT</option>
                    </select>
                  </>
                ) : null}
              </>
            ) : null}
          </div>
        </div>
        <div>
          <div>
            <h3
              style={{
                color: "green",
                marginLeft: "20px",
                marginTop: "20px",
              }}
            >
              Lazy Minting <Switch onChange={toggleBtn3} />
            </h3>
            <br />
            {/* {mint ? (
      <input
        type="text"
        style={{
          marginLeft: "20px",
        }}
      ></input>
    ) : null} */}
          </div>
        </div>
        <div>
          <form onSubmit={handSubmit}>
            <label>
              <h3
                style={{
                  color: "green",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              >
                Title*
              </h3>
              <input
                style={{ width: "500px", height: "30px", marginLeft: "20px" }}
                type="text"
                placeholder="Crypto"
              />
              <h3
                style={{
                  color: "green",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              >
                Description*
              </h3>
              <textarea
                style={{ width: "500px", height: "80px", marginLeft: "20px" }}
                placeholder="Description"
              />
              <h3
                style={{
                  color: "green",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              >
                Quantity
              </h3>
              <input
                style={{ width: "500px", height: "30px", marginLeft: "20px" }}
                type="number"
                placeholder="1"
              />
              {mint ? (
                <>
                  <h3
                    style={{
                      color: "green",
                      marginLeft: "20px",
                      marginTop: "20px",
                    }}
                  >
                    Collaboration(Optional)*
                  </h3>
                  <input
                    style={{
                      width: "500px",
                      height: "30px",
                      marginLeft: "20px",
                    }}
                    type="text"
                    placeholder="Please Enter Collaborator's Wallet Address"
                  />
                  <br />
                  <br />
                  <br />
                  <input
                    style={{
                      width: "500px",
                      height: "30px",
                      marginLeft: "20px",
                    }}
                    type="number"
                    placeholder="Percentage"
                  />
                  <br />
                  <br />
                  <button style={{ width: "140px", marginLeft: "20px" }}>
                    Add Collaborator
                  </button>
                </>
              ) : null}
              <br />
              <br />

              <button
                style={{
                  width: "510px",
                  marginLeft: "20px",
                  height: "30px",
                  borderRadius: "10px",
                }}
                onClick={handleClick}
              >
                {show3 == false
                  ? "Show Advanced Settings"
                  : "Hide Advanced Settings"}
              </button>
              <br />
              <br />
              {show3 == true ? (
                <button style={{ marginLeft: "20px" }}>Add Property</button>
              ) : null}
              <br />
              <br />
              <button style={{ width: "140px", marginLeft: "20px" }}>
                Create NFT
              </button>
            </label>
          </form>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <input type="file" onChange={handleChange} />
            <img src={file} style={{ width: "310px", height: "200px" }} />
            <Typography id="modal-modal-title" variant="h10" component="h5">
              Title{""}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input
                type="text"
                placeholder="Title"
                style={{ height: "30px", width: "300px" }}
              ></input>
            </Typography>

            <Typography id="modal-modal-title" variant="h10" component="h5">
              {" "}
              Symbol{" "}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input
                type="text"
                placeholder="Symbol"
                style={{ height: "30px", width: "300px" }}
              ></input>
            </Typography>

            <Typography id="modal-modal-title" variant="h10" component="h5">
              {" "}
              Description{" "}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input
                type="text"
                placeholder="Description"
                style={{ height: "30px", width: "300px" }}
              ></input>
            </Typography>

            <Typography id="modal-modal-title" variant="h10" component="h5">
              {" "}
              Royalities{" "}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input
                type="number"
                value={count}
                placeholder="Description"
                style={{ height: "30px", width: "300px" }}
              ></input>
              <br />
            </Typography>
            <br />
            <button className="mt-3 btn btn-grad" type="submit">
              Create Collection
            </button>

            <button
              type="button"
              className="mt-3 ml-2 btn btn-grad"
              onClick={handleClose}
            >
              Cancel
            </button>
          </Box>
        </Modal>
      </div>
      <br />
      <br />
      <div>
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
          Go Home
        </Button>
      </div>
    </>
  );
};

export default Multiple;
