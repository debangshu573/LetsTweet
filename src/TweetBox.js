import React, {useState} from 'react'
import './TweetBox.css'
import {Avatar,Button} from '@material-ui/core'
import db from './firebase';

function TweetBox() {
    const[tweetMessage , setTweetMessage] = useState("");
    const[tweetImage , setTweetImage ] = useState("");

    const sendTweet = e => {
        // This prevents the page to refresh (e.preventDefault one)
        e.preventDefault(); 
        db.collection("posts").add({
            displayName : 'Debangshu Banerjee',
            userName : 'debangshu.banerjee',
            verified : true,
            text : tweetMessage,
            image: tweetImage,
            avatar : "data:image/jpeg;base64,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" 

        });
        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src="data:image/jpeg;base64,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" />
                    <input 
                        value={tweetMessage}
                        onChange={(e) => setTweetMessage(e.target.value)}
                        placeholder="What's happening?" 
                        type="text"
                    />
                </div>    
                <input 
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox_imageInput"
                    placeholder="Enter image URL" 
                    type="text">
                </input>
                                
                <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
