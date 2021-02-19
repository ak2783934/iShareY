import React, { useState, Fragment } from "react";

import { deletetask } from "../backfront/taskconnection";

export default function ManageTaskCard(props) {
  const [values, setValues] = useState({
    photo: props.photo,
    name: props.name,
    address: props.address,
    phone: props.phone,
    taskId: props.taskId,
    didRedirect: false,
  });

  const { photo, name, address, phone, taskId, didRedirect } = values;

  const onSubmit = (event) => {
    event.preventDefault();
    deletetask(taskId).then((data) => {
      if (data === false) {
        console.log("Couldn't delete it form managetaskcard");
      } else {
        console.log("Deleted the task from managetaskcard");
        //TODO: Here after this, we need to render the page Okay?
        //! manage tasks page?
        setValues({
          ...values,
          didRedirect: true,
        });
      }
    });
  };

  const cardShow = () => {
    return (
      <Fragment>
        <div className={"managetask-card-first"}>
          <div>
            <img
              className={"managetask-card-image"}
              src={photo}
              alt="card-img"
            />
          </div>
        </div>
        <div className={"managetask-card-second"}>
          <div className={"managetask-card-name"}>{name}</div>
          <div className={"managetask-card-address"}>
            <p>{address}</p>
          </div>
          <div className={"managetask-card-phone"}>{phone}</div>
          <div className={"managetask-card-done"} onClick={onSubmit}>
            <img
              src="https://res.cloudinary.com/dlb1ct3qc/image/upload/v1613620242/iSharey/markdone_wjncpk.svg"
              alt="markdone"
            />
          </div>
        </div>
      </Fragment>
    );
  };
  const doRedirect = () => {
    if (didRedirect) {
      console.log("redirect worked");
      window.location.reload();
    }
  };
  return (
    <div className={"managetask-card"}>
      {cardShow()}
      {doRedirect()}
    </div>
  );
}
