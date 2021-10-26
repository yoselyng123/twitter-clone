import React from 'react';
import './feed.css';
import FlareIcon from '@material-ui/icons/Flare';
import TweetBox from './TweetBox';
import Tweet from './Tweet';

function Feed() {
  return (
    <div className='feed'>
      <div className='feed__title'>
        <p>Home</p>
        <div className='title__icon'>
          <FlareIcon />
        </div>
      </div>
      <div className='feed__content'>
        <TweetBox />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </div>
  );
}

export default Feed;
