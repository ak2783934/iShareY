import axios from "axios";
import { isAuthenticated } from "./connection";

export async function addwork(work) {
  console.log(work);
  return await axios({
    url: `/api/addwork/${isAuthenticated().user.id}`,
    method: "POST",
    data: work,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${isAuthenticated().token}`,
    },
  })
    .then((response) => {
      console.log("work sent, From axios");
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log("work not sent, error in axios" + err);
      return false;
    });
}

export async function getallwork() {
  return await axios({
    url: `api/getallwork`,
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log("work recieved, From axios");
      console.log(response.data);
      return response.data.work;
    })
    .catch((err) => {
      console.log("works not recieved, error in axios" + err);
      return false;
    });
}

export async function deletework(workId) {
  return await axios({
    url: `api/deletework/${isAuthenticated().user.id}/${workId}`,
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${isAuthenticated().token}`,
    },
  })
    .then((response) => {
      console.log("work deleted, From axios");
      console.log(response.data);
      return response.data.work;
    })
    .catch((err) => {
      console.log("work is not deleted, error in axios" + err);
      return false;
    });
}
