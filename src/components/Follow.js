import { Avatar } from '@material-ui/core';
import React from 'react';
import './follow.css';

function Follow({ imgsrc, name, username }) {
    return (
        <div className='follow'>
            <div className='follow__profile'>
                <Avatar src={imgsrc} />
                <div className='follow__info'>
                    <p className='follow__name'>{name}</p>
                    <p className='follow__username'>{username}</p>
                </div>
            </div>
            <button className='follow__button'>Follow</button>
        </div>
    );
}

export default Follow;
