import React from 'react';
import './board.css';
import Trend from './Trend';
import SearchIcon from '@material-ui/icons/Search';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Follow from './Follow';

function Board() {
    return (
        <div className='board'>
            <div className='board__content'>
                <div className='board__searchBar'>
                    <SearchIcon />
                    <input type='text' placeholder='Search Twitter' />
                </div>
                <div className='board__trend'>
                    <div className='trend__header'>
                        <h2>Trends for you</h2>

                        <div className='trend__setting'>
                            <SettingsOutlinedIcon />
                        </div>
                    </div>
                    <Trend
                        type='Pop • Trending'
                        title='Harry Styles'
                        tweets='144K Tweets'
                    />
                    <Trend
                        type='Technology • Trending'
                        title='Xiaomi'
                        tweets='12K Tweets'
                    />
                    <Trend
                        type='Music • Trending'
                        title='Mick Jagger'
                        tweets='1,357 Tweets'
                    />
                    <Trend
                        type='Football • Trending'
                        title='Barcelona'
                        tweets='196K Tweets'
                    />
                    <Trend
                        type='Football • Trending'
                        title='Paris'
                        tweets='329K Tweets'
                    />
                    <div className='trend__footer'>
                        <a href='/'>Show more</a>
                    </div>
                </div>

                <div className='board__trend'>
                    <div className='trend__header'>
                        <h2>Who to follow</h2>
                    </div>
                    <Follow
                        imgsrc='https://pbs.twimg.com/profile_images/1096066608034918401/m8wnTWsX_400x400.png'
                        name='TechCrunch'
                        username='@TechCrunch'
                    />
                    <Follow
                        imgsrc='https://pbs.twimg.com/profile_images/877903823133704194/Mqp1PXU8_400x400.jpg'
                        name='The Verge'
                        username='@verge'
                    />
                    <Follow
                        imgsrc='https://pbs.twimg.com/profile_images/1228050699348561920/YvWAQD2L_400x400.jpg'
                        name='WIRED'
                        username='@WIRED'
                    />
                    <div className='trend__footer'>
                        <a href='/'>Show more</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Board;
