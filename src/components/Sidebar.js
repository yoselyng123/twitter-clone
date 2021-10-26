import React from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { Avatar } from '@material-ui/core';
import { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import PersonIcon from '@material-ui/icons/Person';

function Sidebar() {
  const [click, setClick] = useState({
    home: false,
    explore: false,
    notifications: false,
    messages: false,
    saved: false,
    lists: false,
    profile: false,
    moreOptions: false,
  });

  return (
    <div className='sidebar'>
      <div className='sidebar__content'>
        <div className='sidebar__top'>
          <div className='twitterIcon__container'>
            <TwitterIcon />
          </div>
          <div
            className={`icon__container ${
              click.home && 'icon__container--clicked'
            }`}
            onClick={() => {
              setClick({
                explore: false,
                notifications: false,
                messages: false,
                saved: false,
                lists: false,
                profile: false,
                moreOptions: false,
                home: !click.home,
              });
            }}
          >
            {click.home ? <HomeIcon /> : <HomeOutlinedIcon />}
            <h2 className='icon__text'>Home</h2>
          </div>
          <div
            className={`icon__container ${
              click.explore && 'icon__container--clicked'
            }`}
            onClick={() => {
              setClick({
                home: false,
                notifications: false,
                messages: false,
                saved: false,
                lists: false,
                profile: false,
                moreOptions: false,
                explore: !click.explore,
              });
            }}
          >
            <FontAwesomeIcon
              icon={faHashtag}
              style={{
                paddingLeft: '0.4rem',
                marginRight: '1.3rem',
                fontSize: '1.5rem',
              }}
            />
            <h2 className='icon__text'>Explore</h2>
          </div>
          <div
            className={`icon__container ${
              click.notifications && 'icon__container--clicked'
            }`}
            onClick={() => {
              setClick({
                home: false,
                explore: false,
                messages: false,
                saved: false,
                lists: false,
                profile: false,
                moreOptions: false,
                notifications: !click.notifications,
              });
            }}
          >
            {click.notifications ? (
              <NotificationsIcon />
            ) : (
              <NotificationsNoneOutlinedIcon />
            )}

            <h2 className='icon__text'>Notifications</h2>
          </div>
          <div
            className={`icon__container ${
              click.messages && 'icon__container--clicked'
            }`}
            onClick={() => {
              setClick({
                home: false,
                explore: false,
                notifications: false,
                saved: false,
                lists: false,
                profile: false,
                moreOptions: false,
                messages: !click.messages,
              });
            }}
          >
            {click.messages ? <EmailIcon /> : <EmailOutlinedIcon />}

            <h2 className='icon__text'>Messages</h2>
          </div>
          <div
            className={`icon__container ${
              click.saved && 'icon__container--clicked'
            }`}
            onClick={() => {
              setClick({
                home: false,
                explore: false,
                notifications: false,
                messages: false,
                lists: false,
                profile: false,
                moreOptions: false,
                saved: !click.saved,
              });
            }}
          >
            {click.saved ? <BookmarkIcon /> : <BookmarkBorderOutlinedIcon />}

            <h2 className='icon__text'>Bookmarks</h2>
          </div>
          <div
            className={`icon__container ${
              click.lists && 'icon__container--clicked'
            }`}
            onClick={() => {
              setClick({
                home: false,
                explore: false,
                notifications: false,
                messages: false,
                saved: false,
                profile: false,
                moreOptions: false,
                lists: !click.lists,
              });
            }}
          >
            {click.lists ? (
              <FeaturedPlayListIcon />
            ) : (
              <FeaturedPlayListOutlinedIcon />
            )}

            <h2 className='icon__text'>Lists</h2>
          </div>
          <div
            className={`icon__container ${
              click.profile && 'icon__container--clicked'
            }`}
            onClick={() => {
              setClick({
                home: false,
                explore: false,
                notifications: false,
                messages: false,
                saved: false,
                lists: false,
                moreOptions: false,
                profile: !click.profile,
              });
            }}
          >
            {click.profile ? <PersonIcon /> : <PersonOutlineIcon />}

            <h2 className='icon__text'>Profile</h2>
          </div>
          <div
            className={`icon__container ${
              click.moreOptions && 'icon__container--clicked'
            }`}
            onClick={() => {
              setClick({
                home: false,
                explore: false,
                notifications: false,
                messages: false,
                saved: false,
                lists: false,
                profile: false,
                moreOptions: !click.moreOptions,
              });
            }}
          >
            <MoreHorizIcon />
            <h2 className='icon__text'>More</h2>
          </div>
          <button className='sidebar__button'>Twittear</button>
        </div>
        <div className='sidebar__profile'>
          <Avatar style={{ marginRight: '1rem' }} />
          <div className='profile__info'>
            <h3>Yoselyn Guillen</h3>
            <p>@YoselynGuillen</p>
          </div>
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
