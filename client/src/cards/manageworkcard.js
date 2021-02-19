import React, { useState, Fragment } from "react";

import { deletework } from "../backfront/workconnection";

export default function ManageWorkCard(props) {
  const [values, setValues] = useState({
    photo: props.photo,
    msg: props.msg,
    workId: props.workId,
    didRedirect: false,
  });
  const { photo, msg, didRedirect, workId } = values;

  const doRedirect = () => {
    if (didRedirect) {
      console.log("redirect worked");
      window.location.reload();
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    deletework(workId).then((data) => {
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
          <div className={"managetask-card-address"}>
            <p>{msg}</p>
          </div>
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

  return (
    <div className={"managetask-card"}>
      {cardShow()}
      {doRedirect()}
    </div>
  );
}
