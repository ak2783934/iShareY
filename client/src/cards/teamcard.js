import React from "react";

export default function TeamCard(props) {
  return (
    <div className={"team-card"}>
      <img className={"card-img-team"} src={props.img} alt="card-img" />

      <div className={"card-name-team"}>{props.name}</div>
      <div className={"card-pos-team"}>{props.pos}</div>
      <div className={"card-edu-team"}>{props.edu}</div>
      <div className={"card-ckg-team"}>{props.clg}</div>
    </div>
  );
}
