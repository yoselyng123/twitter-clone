import React from 'react';
import './trend.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Trend({ type, title, tweets }) {
    return (
        <div className='trend'>
            <div className='trend__info'>
                <p className='trend__type'>{type}</p>
                <p className='trend__title'>{title}</p>
                <p className='trend__type'>{tweets}</p>
            </div>
            <div className='trend__more'>
                <MoreHorizIcon />
            </div>
        </div>
    );
}

export default Trend;
