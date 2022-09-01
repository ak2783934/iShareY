import React from "react";

//! Here we will be inserting the navbar thing bro!, Now how
//! will you design it so that it will be in the top only, means it will be on/above the image

import Nav from "../constcomponent/navbar";
import Foot from "../constcomponent/footer";
import TeamCard from "../cards/teamcard";
export default function Team() {
  return (
    <div className={"front-page-team-team"}>
      <Nav />
      <div className={"our-team"}>Our Team</div>
      <div className={"team-main-page"}>
        <TeamCard
          name={"Saurabh singh"}
          img={
            "https://res.cloudinary.com/dlb1ct3qc/image/upload/v1662130088/iSharey/saurabh_ygx35o.jpg"
          }
          pos={"Student"}
          edu={"B-Tech in computer science"}
          clg={"SATI Vidisha, MP"}
        />

        <TeamCard
          name={"Sonu Kumar"}
          img={
            "https://res.cloudinary.com/dlb1ct3qc/image/upload/v1659841749/iSharey/sonu_utaqxa.webp"
          }
          pos={"Student"}
          edu={"B-Tech-Mechanical Engineering"}
          clg={"IIT Madras"}
        />

        <TeamCard
          name={"Rahul Kumar Pal"}
          img={
            "https://res.cloudinary.com/dlb1ct3qc/image/upload/v1659841652/iSharey/rahul_j5nmkc.webp"
          }
          pos={"Student"}
          edu={"Masters in computer application"}
          clg={"Graphic Era, Dehradun"}
        />
      </div>
      <Foot />
    </div>
  );
}
