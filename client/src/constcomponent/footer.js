import React, { useState } from 'react';

import { addmsg } from '../backfront/msgconnection';

export default function Foot() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    msg: '',
    success: false,
  });
  const { name, email, msg, success } = values;

  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };
  const onSubmit = event => {
    event.preventDefault();
    setValues({
      ...values,
      name: '',
      email: '',
      success: false,
    });
    console.log(name + ' ' + email + ' ' + msg);
    addmsg({ name, email, msg })
      .then(data => {
        if (data === false) {
          console.log('Msg not sent');
        } else {
          console.log('msg is sent now! form footer');
          setValues({
            ...values,
            name: '',
            email: '',
            msg: '',
            success: true,
          });
        }
      })
      .catch(err => console.log('Error detected in footer, msg not sent'));
  };
  const successMsg = () => {
    if (success === true) {
      return <div className={'msg-sent-success-footer'}>msg sent!</div>;
    }
  };
  return (
    <div className={'footerBar'}>
      <div className={'contact-us'}>Contact Us!</div>

      <div className={'contact-box'}>
        <div className={'input-form'}>
          <form action=''>
            <input
              type='text'
              name='name'
              placeholder='Name'
              onChange={handleChange('name')}
              className={'name-input'}
              value={name}
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              onChange={handleChange('email')}
              className={'email-input'}
              value={email}
            />
            <div>
              <textarea
                name='message'
                placeholder='Message'
                className={'text-input'}
                onChange={handleChange('msg')}
                value={msg}
              />
            </div>
            <button type='submit' onClick={onSubmit} class='submit-button'>
              Send
            </button>
            {successMsg()}
          </form>
        </div>

        <div className={'address'}>
          <p className={'actual-address'}>
            208, Bapuji nagar
          </p>
          <p className={'actual-address'}>Raja SC mullick Road,</p>
          <p className={'actual-address'}>
            Kolkata 700032
          </p>
          <p>
            <a
              href='https://www.facebook.com/ishareyfoundation'
              target='_blank'
              rel='noreferrer'
              className={'icons'}
            >
              <img
                src='https://res.cloudinary.com/dlb1ct3qc/image/upload/v1613221505/iSharey/facebook_itgbyu.svg'
                alt='facebook'
              />
            </a>
            <a
              href='https://twitter.com/ishareyfoundat1'
              target='_blank'
              rel='noreferrer'
              className={'icons'}
            >
              <img
                src='https://res.cloudinary.com/dlb1ct3qc/image/upload/v1613221504/iSharey/twitter_cx90yo.svg'
                alt='twitter'
              />
            </a>
            <a
              href='https://www.instagram.com/photoislob/'
              target='_blank'
              rel='noreferrer'
              className={'icons'}
            >
              <img
                src='https://res.cloudinary.com/dlb1ct3qc/image/upload/v1613221504/iSharey/instagram_fwt5wf.svg'
                alt='instagram'
              />
            </a>
            <a
              href='https://www.youtube.com/'
              target='_blank'
              rel='noreferrer'
              className={'icons'}
            >
              <img
                src='https://res.cloudinary.com/dlb1ct3qc/image/upload/v1613221504/iSharey/youtube_ejnene.svg'
                alt='youtube'
              />
            </a>
          </p>

          <p className={'copyright'}>Copyright @2021 iShareY</p>
        </div>
      </div>
    </div>
  );
}
