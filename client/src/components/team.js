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
          name={"Avinash kumar"}
          img={
            "https://res.cloudinary.com/dlb1ct3qc/image/upload/c_limit,h_597,w_575/v1613321197/iSharey/Avinash_zzmlbm.jpg"
          }
          pos={"Incoming SDE at Expedia group"}
          edu={"BE-Electrical Engineering"}
          clg={"Jadavpur University"}
        />
        <TeamCard
          name={"Prashant giri"}
          img={
            "https://res.cloudinary.com/dlb1ct3qc/image/upload/v1617431817/iSharey/prashant_wcqkap.jpg"
          }
          pos={"Intern at MOL IT"}
          edu={"BE-Electrical Engineering"}
          clg={"Jadavpur University"}
        />
        <TeamCard
          name={"Priyanshu Ranjan"}
          img={
            "https://res.cloudinary.com/dlb1ct3qc/image/upload/v1617431816/iSharey/priyanshu_m6njt5.jpg"
          }
          pos={"Incoming SDE at Amazon"}
          edu={"BE-Electrical Engineering"}
          clg={"Jadavpur University"}
        />
      </div>
      <Foot />
    </div>
  );
}
