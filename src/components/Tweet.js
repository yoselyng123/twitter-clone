import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './tweet.css';

import MessageIcon from '../icons/MessageIcon';
import HeartIcon from '../icons/HeartIcon';
import RepeatIcon from '../icons/RepeatIcon';
import ShareIcon from '../icons/ShareIcon';
import TriangleIcon from '../icons/TriangleIcon';

function Tweet() {
  const [hover, setHover] = useState({
    message: false,
    repeat: false,
    heart: false,
    share: false,
  });

  return (
    <div className='tweet'>
      <Avatar />
      <div className='tweet__info'>
        <div className='tweet__provider'>
          <p className='tweet__name'>Chartdata</p>
          <p className='tweet__username'>@chartdata</p>
          <p className='tweet__timeStamp'>• 1h</p>
        </div>
        <p className='tweet__text'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          labore nemo officiis repellat ipsam impedit vero ea itaque neque
          voluptas.
        </p>
        <div className='tweet__options'>
          <div
            className='tweet__icon'
            onMouseEnter={() => {
              setHover({ ...hover, message: !hover.message });
            }}
            onMouseLeave={() => {
              setHover({ ...hover, message: !hover.message });
            }}
          >
            <div
              className='iconWrapper'
              style={{ backgroundColor: hover.message ? '#E1EEF6' : '#FFFFFF' }}
            >
              <MessageIcon color={hover.message ? '#42ABF1' : '#536571'} />
            </div>
            <p style={{ color: hover.message ? '#42ABF1' : '#536571' }}>91</p>
          </div>
          <div
            className='tweet__icon'
            onMouseEnter={() => {
              setHover({ ...hover, repeat: !hover.repeat });
            }}
            onMouseLeave={() => {
              setHover({ ...hover, repeat: !hover.repeat });
            }}
          >
            <div
              className='iconWrapper'
              style={{ backgroundColor: hover.repeat ? '#DEF1EB' : '#FFFFFF' }}
            >
              <RepeatIcon color={hover.repeat ? '#00ba7c' : '#536571'} />
            </div>
            <p style={{ color: hover.repeat ? '#00ba7c' : '#536571' }}>36</p>
          </div>
          <div
            className='tweet__icon'
            onMouseEnter={() => {
              setHover({ ...hover, heart: !hover.heart });
            }}
            onMouseLeave={() => {
              setHover({ ...hover, heart: !hover.heart });
            }}
          >
            <div
              className='iconWrapper'
              style={{ backgroundColor: hover.heart ? '#F7E0EB' : '#FFFFFF' }}
            >
              <HeartIcon color={hover.heart ? '#F863A8' : '#536571'} />
            </div>
            <p style={{ color: hover.heart ? '#F863A8' : '#536571' }}>760</p>
          </div>
          <div
            className='tweet__icon'
            onMouseEnter={() => {
              setHover({ ...hover, share: !hover.share });
            }}
            onMouseLeave={() => {
              setHover({ ...hover, share: !hover.share });
            }}
          >
            <div
              className='iconWrapper'
              style={{ backgroundColor: hover.share ? '#E1EEF6' : '#FFFFFF' }}
            >
              <ShareIcon color={hover.share ? '#4EB0F2' : '#536571'} />
            </div>
          </div>
          <div className='tweet__icon'>
            <div className='iconWrapper'>
              <TriangleIcon />
            </div>
            <p>Tip</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
