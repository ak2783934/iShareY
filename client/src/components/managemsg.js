import React, { Fragment, useState, useEffect } from "react";

//! Here we will be inserting the navbar thing bro!, Now how
//! will you design it so that it will be in the top only, means it will be on/above the image

import Nav from "../constcomponent/navbar";
import Foot from "../constcomponent/footer";
import ManageMsgCard from "../cards/managemsgcard";
import { getallmsg } from "../backfront/msgconnection";

export default function ManageMsg() {
  const [values, setValues] = useState({
    msgs: [],
  });
  const { msgs } = values;

  const preLoad = () => {
    getallmsg().then((data) => {
      if (data === false) {
        console.log("No data recieved from manage msgs");
      } else {
        console.log("data is recieved from manage msgs");
        setValues({
          ...values,
          msgs: data,
        });
        console.log(msgs);
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
        <div className={"manage-msg-board"}>
          <h2>Manage Your Messages Here</h2>
          <div className={"manage-msg-div"}>
            {msgs.map((msg, index) => {
              return (
                <ManageMsgCard
                  name={msg.name}
                  email={msg.email}
                  msg={msg.msg}
                  msgId={msg._id}
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
