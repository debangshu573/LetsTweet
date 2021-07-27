import React , {useState , useEffect} from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase'
import FlipMove from 'react-flip-move';

function Feed() {
        // HOOK 
        const [posts, setPosts] = useState([]);

        useEffect(() =>{
            // Whenever the data changes it should reflect on the page
            db.collection('posts').onSnapshot(snapshot => (
                // It gives all the posts bubbled up in an array
                setPosts(snapshot.docs.map(doc => doc.data() ))
            ))
        }, []);

        return (

            <div className="feed">
            {/* Header */}
            <div className="feed_header">
                <h2>Home</h2>
            </div>
            
            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
            <FlipMove>
                {posts.map(post => {
                    <Post 
                        key={post.text}
                        displayName={post.displayName}
                        userName={post.userName}
                        verified={post.verified}
                        text={post.text}
                        image={post.image}
                        avatar={post.avatar}
                    />
                })}
            </FlipMove>
            
        </div>
    );
}

export default Feed;
