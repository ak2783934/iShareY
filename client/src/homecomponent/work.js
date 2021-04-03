import React, { useState, useEffect, Fragment } from 'react';
import Foot from '../constcomponent/footer';
import WorkCard from '../cards/workcard';
import { getallwork } from '../backfront/workconnection';

export default function Work() {
  const [works, setWorks] = useState([]);

  const preLoad = () => {
    getallwork().then(data => {
      if (data === false) {
        console.log('No data recieved from managetask');
      } else {
        console.log('data is recieved from manage task');
        setWorks(data);
        console.log(works);
      }
    });
  };

  useEffect(() => {
    preLoad();
  }, []);

  return (
    <Fragment>
      <div className={'work-display'}>
        <div className={'our-work-title'}>Our work</div>
        <div className={'our-work'}>
          {works.map((work, index) => {
            return (
              <WorkCard
                key={index}
                workId={work._id}
                photo={work.photo.url}
                msg={work.msg}
              />
            );
          })}
        </div>
      </div>
      <Foot />
    </Fragment>
  );
}
