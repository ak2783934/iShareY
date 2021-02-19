//!This is the place for making axios call, from frontend to backend
import axios from "axios";
import { isAuthenticated } from "./connection";
export async function addmsg(user) {
  return await axios({
    url: "/api/addmsg",
    method: "POST",
    data: {
      name: user.name,
      email: user.email,
      msg: user.msg,
    },
  })
    .then((response) => {
      console.log("msg sent, From axios");
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log("Error in axios while sending msg" + err);
      return false;
    });
}

export async function getallmsg() {
  console.log(isAuthenticated().token);
  return await axios({
    url: `api/getallmsg/${isAuthenticated().user.id}`,
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${isAuthenticated().token}`,
    },
  })
    .then((response) => {
      console.log("msgs recieved, From axios");
      console.log(response.data);
      return response.data.msg;
    })
    .catch((err) => {
      console.log("msgs not recieved, error in axios" + err);
      return false;
    });
}

export async function deletemsg(msgId) {
  console.log(isAuthenticated().token);
  return await axios({
    url: `api/deletemsg/${isAuthenticated().user.id}/${msgId}`,
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${isAuthenticated().token}`,
    },
  })
    .then((response) => {
      console.log("Msg deleted, From axios");
      console.log(response.data);
      return response.data.task;
    })
    .catch((err) => {
      console.log("Msg is not deleted, error in axios" + err);
      return false;
    });
}
