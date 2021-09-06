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
        <TeamCard
          name={"Rahul Agarwal"}
          img={
            "https://media-exp1.licdn.com/dms/image/C5603AQHNSm4GmWZGqQ/profile-displayphoto-shrink_800_800/0/1629215863799?e=1636588800&v=beta&t=Iq7DOx48bkZifLK0NKqv_P_R33rvxkNbJ_-us1zFT6g"
          }
          pos={"Student at Jadavpur University"}
          edu={"BE-Electrical Engineering"}
          clg={"Jadavpur University"}
        />
        <TeamCard
          name={"Durgesh Pratap Singh"}
          img={
            "https://media-exp1.licdn.com/dms/image/C4E35AQF7bzRofKcDiA/profile-framedphoto-shrink_800_800/0/1614995495160?e=1631012400&v=beta&t=dMODYu3EGmcwflI7a7_qmrjtCdw90-mEINiklGIr_MY"
          }
          pos={"Student at Jadavpur University"}
          edu={"BE-Civil Engineering"}
          clg={"Jadavpur University"}
        />
        <TeamCard
          name={"Sonu Kumar"}
          img={
            "https://media-exp1.licdn.com/dms/image/C4E03AQE-jL7WZDTdkQ/profile-displayphoto-shrink_800_800/0/1620854060953?e=1636588800&v=beta&t=rE1yjDGT1o9QZ3DmJYjGESERe_y9rrpG4OodKVbMnr0"
          }
          pos={"Student at IIT Madras"}
          edu={"B.tech Mechanical Engineering"}
          clg={"IIT Madras"}
        />
      </div>
      <Foot />
    </div>
  );
}
