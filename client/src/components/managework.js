import React, { Fragment, useState, useEffect } from "react";

//! Here we will be inserting the navbar thing bro!, Now how
//! will you design it so that it will be in the top only, means it will be on/above the image

import Nav from "../constcomponent/navbar";
import Foot from "../constcomponent/footer";
import ManageWorkCard from "../cards/manageworkcard";
import { getallwork, addwork } from "../backfront/workconnection";
export default function ManageWork() {
  const [works, setWorks] = useState([]);

  const [values, setValues] = useState({
    img: "",
    msg: "",
    error: false,
    success: false,
  });

  const { img, msg, error, success } = values;
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
    newFormData.append("msg", msg);

    addwork(newFormData)
      .then((data) => {
        if (data === false) {
          console.log("Data is not uploaded from manage works!");
          setValues({
            ...values,
            error: true,
          });
        } else {
          console.log("data is posted from work");
          console.log(data);
          setValues({
            ...values,
            img: "",
            msg: "",
            success: true,
          });
          preLoad();
        }
      })
      .catch((err) => console.log("Error detected at work " + err));
  };

  const successMsg = () => {
    if (success === true) {
      return (
        <div className={"success-work-donate"}>
          <h4>msg uploaded</h4>
        </div>
      );
    }
  };

  const preLoad = () => {
    getallwork().then((data) => {
      if (data === false) {
        console.log("No data recieved from managetask");
      } else {
        console.log("data is recieved from manage task");
        setWorks(data);
        console.log(works);
      }
    });
  };

  useEffect(() => {
    preLoad();
  }, []);

  return (
    <Fragment>
      <div className={"front-page-manage-task"}>
        <Nav />
        <div className={"manage-work-board"}>
          <h2>Manage Your Works Here</h2>

          <div className={"manage-work-input-form"}>
            <h3>Add the work you want to display in the front page</h3>
            <form>
              <input
                type="file"
                accept="image/png, image/jpeg"
                name="img"
                alt="image"
                placeholder="upload image"
                onChange={handleChange("img")}
                className={"work-input-img"}
              />
              <input
                type="text"
                name="msg"
                placeholder="Type your msg"
                onChange={handleChange("msg")}
                className={"address-input-work"}
                values={msg}
              />
              <button
                type="submit"
                onClick={onSubmit}
                class={"submit-button-work"}
              >
                Upload it
              </button>
              {successMsg()}
            </form>
          </div>
          <div className={"manage-work-div"}>
            {works.map((work, index) => {
              return (
                <ManageWorkCard
                  key={index}
                  workId={work._id}
                  photo={work.photo.url}
                  msg={work.msg}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Foot />
    </Fragment>
  );
}
