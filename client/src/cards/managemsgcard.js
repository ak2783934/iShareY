import React, { useState, Fragment } from "react";

import { deletemsg } from "../backfront/msgconnection";

export default function ManageMsgCard(props) {
  const [values, setValues] = useState({
    name: props.name,
    email: props.email,
    msg: props.msg,
    msgId: props.msgId,
    didRedirect: false,
  });

  const { name, email, msg, msgId, didRedirect } = values;

  const onSubmit = (event) => {
    event.preventDefault();
    deletemsg(msgId).then((data) => {
      if (data === false) {
        console.log("Couldn't delete it form managemsgcard");
      } else {
        console.log("Deleted the task from managemsgcard");
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
        <div className={"managemsg-card-inner"}>
          <div className={"managemsg-card-name"}>Name : {name}</div>
          <h4>Email Id :{email}</h4>
          <h4>Message :{msg}</h4>
          <div className={"managemsg-card-done"} onClick={onSubmit}>
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
    <div className={"managemsg-card"}>
      {cardShow()}
      {doRedirect()}
    </div>
  );
}
