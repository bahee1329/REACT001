import React from 'react';
import '../feed/Feed.css';
import Share from '../Share/Share';
import Post from '../post/Post';


const Feed = () => {
  return (
    <div className='feed'>
      <div className='feedcon'>
        <Share/>
        <Post/>
      </div>
    </div>
  )
}

export default Feed