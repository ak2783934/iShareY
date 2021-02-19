import React, { Fragment, useState, useEffect } from "react";

import Nav from "../constcomponent/navbar";
import Foot from "../constcomponent/footer";
import ManageTaskCard from "../cards/managetaskcard";
import { getalltask } from "../backfront/taskconnection";

export default function ManageTask() {
  const [values, setValues] = useState({
    tasks: [],
  });
  const { tasks } = values;

  const preLoad = () => {
    getalltask().then((data) => {
      if (data === false) {
        console.log("No data recieved from managetask");
      } else {
        console.log("data is recieved from manage task");
        setValues({
          ...values,
          tasks: data,
        });
        console.log(tasks);
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
        <div className={"manage-task-board"}>
          <h2>Manage Your Tasks Here</h2>
          <div className={"manage-tasks-div"}>
            {tasks.map((task, index) => {
              return (
                <ManageTaskCard
                  id={index}
                  taskId={task._id}
                  name={task.name}
                  photo={task.photo.url}
                  address={task.address}
                  phone={task.phone}
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
