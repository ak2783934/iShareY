import axios from "axios";

export async function signup(user) {
  return await axios({
    url: "/api/signup",
    method: "POST",
    data: {
      username: user.name,
      email: user.email,
      password: user.password,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      // console.log("data has been sent to the server RESPONSE: ", response);
      console.log("data from axios and signup successfull ");
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(user.name + " " + user.email);
      console.log("email alreay used " + err);
      return false;
    });
}

export async function signin(user) {
  return await axios({
    url: "/api/signin",
    method: "POST",
    data: {
      email: user.email,
      password: user.password,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      // console.log("data has been sent to the server RESPONSE: ", response);
      console.log("data from axios and signin successfull ");
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(user.password + " " + user.email);
      console.log("Error in axios {email and password doesn't match}");
      return false;
    });
}

export const signout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");

    return axios({
      url: "/api/signout",
      method: "GET",
    })
      .then((response) => {
        console.log("Signout Successfull from Axios");
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
