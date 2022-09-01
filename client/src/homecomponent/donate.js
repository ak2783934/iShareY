import React, { useState } from "react";
import { addtask } from "../backfront/taskconnection";

export default function Donate() {
  const [values, setValues] = useState({
    name: "",
    img: "",
    address: "",
    number: "",
    error: false,
    success: false,
  });

  const { name, img, address, number, success } = values;

  const handleChange = (name) => (event) => {
    const value = name === "img" ? event.target.files[0] : event.target.value;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({
      ...values,
      success: false,
    });
    //TODO: Here the method is addtask not donate
    var newFormData = new FormData();
    if (number.length !== 10) {
      alert("Please Enter 10 digit phone number");
      return;
    }
    if (img === "") {
      //Checking if the image is inserted
      alert("Please select an image!!");
      return;
    } else {
      //Checking the size of image here
      if (img.size >= 2000000) {
        alert("Image size exceddd!");
        return;
      }
      newFormData.append("photo", img);
    }
    newFormData.append("name", name);
    newFormData.append("address", address);
    newFormData.append("phone", number);

    addtask(newFormData)
      .then((data) => {
        if (data === false) {
          console.log("Data is not uploaded from donate!");
          setValues({
            ...values,
            error: true,
          });
        } else {
          console.log("data is posted from donate");
          setValues({
            ...values,
            name: "",
            img: "",
            address: "",
            number: "",
            success: true,
          });
        }
      })
      .catch((err) => console.log("Error detected at donate " + err));
  };

  const successMsg = () => {
    if (success === true) {
      return (
        <div className={"success-msg-donate"}>
          <h3>Thanks for submission</h3>
          <h3>Our Volenteer will soon call you!</h3>
        </div>
      );
    }
  };

  return (
    <div className={"donateDiv"}>
      <div className={"first-div"}>
        <div className={"logo-div-donate"}>
          <img
            src="https://res.cloudinary.com/dlb1ct3qc/image/upload/v1613236035/iSharey/1_lg9ewg.png"
            alt="logo"
          />
        </div>
        <div className={"text-donate"}>
          <p>Most successfull NGO in cloths Donation</p>
        </div>
      </div>
      <div className={"second-div"}>
        <div className={"donate-header"}>What you want to donate?</div>
        <div className={"donate-box"}>
          <div className={"donate-input"}>
            <form>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  onChange={handleChange("name")}
                  className={"name-input-donate"}
                  value={name}
                />
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  name="img"
                  alt="image"
                  placeholder="upload image"
                  onChange={handleChange("img")}
                  className={"donate-input-img"}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Pickup address"
                  onChange={handleChange("address")}
                  className={"address-input-donate"}
                  value={address}
                />
                <input
                  type="text"
                  name="number"
                  onChange={handleChange("number")}
                  placeholder="Ph no."
                  className={"donate-input-number"}
                  value={number}
                />
              </div>
              <button
                type="submit"
                onClick={onSubmit}
                class="submit-button-donate"
              >
                Request a Pickup
              </button>
              {successMsg()}
            </form>
          </div>
          <div className={"logo-donation"}>
            <img
              src="https://res.cloudinary.com/dlb1ct3qc/image/upload/v1613282435/iSharey/300_donation_q6lg54.png"
              alt="300+"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
