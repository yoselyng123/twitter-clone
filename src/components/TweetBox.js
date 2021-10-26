import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './tweetBox.css';
import PublicIcon from '@material-ui/icons/Public';
import InsertPhotoOutlinedIcon from '@material-ui/icons/InsertPhotoOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';

function TweetBox() {
  const [text, setText] = useState('');

  const updateValue = (e) => {
    setText(e.target.value);
  };
  return (
    <div className='tweetBox'>
      <Avatar style={{ cursor: 'pointer' }} />
      <form className='tweetBox__form'>
        <input
          value={text}
          type='text'
          placeholder="What's happening?"
          onChange={updateValue}
        />
        <div className='tweetBox__form__privacy'>
          <PublicIcon />
          <p>Everyone can reply</p>
        </div>
        <hr
          style={{
            borderTop: '#eff1f1',
            marginBottom: '1rem',
          }}
        />
        <div className='tweetBox__form__options'>
          <div className='tweetBox__form-add'>
            <div className='tweetBox__icon'>
              <InsertPhotoOutlinedIcon />
            </div>
            <div className='tweetBox__icon'>
              <GifOutlinedIcon />
            </div>
            <div className='tweetBox__icon '>
              <EqualizerOutlinedIcon className='equalizer' />
            </div>
            <div className='tweetBox__icon'>
              <EmojiEmotionsOutlinedIcon />
            </div>
            <div className='tweetBox__icon'>
              <EventOutlinedIcon />
            </div>
          </div>
          <button className={`tweetBox__btn ${text === '' ? 'disabled' : ''}`}>
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
