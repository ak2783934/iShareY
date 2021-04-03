import React from 'react';

//! Here we will be inserting the navbar thing bro!, Now how
//! will you design it so that it will be in the top only, means it will be on/above the image

import Nav from '../constcomponent/navbar';
import Foot from '../constcomponent/footer';
import TeamCard from '../cards/teamcard';
export default function Team() {
  return (
    <div className={'front-page-home-team'}>
      <Nav />
      <div className={'our-team'}>Our Team</div>
      <div className={'team-main-page'}>
        <TeamCard
          name={'Avinash kumar'}
          img={
            'https://res.cloudinary.com/dlb1ct3qc/image/upload/c_crop,h_219,q_51,w_245/v1613321197/iSharey/Avinash_zzmlbm.jpg'
          }
          pos={'Incoming intern at Expedia group'}
          edu={'BE-Electrical Engineering'}
          clg={'Jadavpur University'}
        />
        <TeamCard
          name={'Vicky kumar'}
          img={
            'https://res.cloudinary.com/dlb1ct3qc/image/upload/c_crop,h_219,q_51,w_245/v1613321197/iSharey/Avinash_zzmlbm.jpg'
          }
          pos={'Incoming intern at Expedia group'}
          edu={'BE-Electrical Engineering'}
          clg={'Jadavpur University'}
        />
        <TeamCard
          name={'Avinash kumar'}
          img={
            'https://res.cloudinary.com/dlb1ct3qc/image/upload/c_crop,h_219,q_51,w_245/v1613321197/iSharey/Avinash_zzmlbm.jpg'
          }
          pos={'Incoming intern at Expedia group'}
          edu={'BE-Electrical Engineering'}
          clg={'Jadavpur University'}
        />
      </div>
      <Foot />
    </div>
  );
}
