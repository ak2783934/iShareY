import axios from "axios";
import { isAuthenticated } from "./connection";

export async function addtask(task) {
  console.log(task);

  return await axios({
    url: "/api/addtask",
    method: "POST",
    data: task,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((response) => {
      console.log("task sent, From axios");
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log("Task not sent, error in axios" + err);
      return false;
    });
}

export async function getalltask() {
  console.log(isAuthenticated().token);
  return await axios({
    url: `api/getalltask/${isAuthenticated().user.id}`,
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${isAuthenticated().token}`,
    },
  })
    .then((response) => {
      console.log("task recieved, From axios");
      console.log(response.data);
      return response.data.task;
    })
    .catch((err) => {
      console.log("Task not recieved, error in axios" + err);
      return false;
    });
}

export async function deletetask(taskId) {
  console.log(isAuthenticated().token);
  return await axios({
    url: `api/deletetask/${isAuthenticated().user.id}/${taskId}`,
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${isAuthenticated().token}`,
    },
  })
    .then((response) => {
      console.log("Task deleted, From axios");
      console.log(response.data);
      return response.data.task;
    })
    .catch((err) => {
      console.log("Task is not deleted, error in axios" + err);
      return false;
    });
}
