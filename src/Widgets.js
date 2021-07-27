import React from 'react';
import './Widgets.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed  } from 'react-twitter-embed';
import SeacrchIcon from '@material-ui/icons/Search'


function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SeacrchIcon className="widgets_searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            
            <div className="eidgets_widgetContainer">
                <h2>What's Happening?</h2>

                <TwitterTweetEmbed tweetId={'933354946111705097'} />
                
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="narendramodi"
                    options={{height: 400}}
                />
                <TwitterShareButton
                    url={'https://www.facebook.com/profile.php?id=100009494755587'}
                    options={{ text: '#reactjs is awesome', via: 'debangshubanerjee' }}
                />
            </div>
        </div>
    );
}

export default Widgets;
