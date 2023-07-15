import React from 'react';
import '../post/Post.css';
import dataes from '../data';
import Postinput from '../postinput/Postinput';


const Post = () => {
   

   
  
  return (
    
    <div className='postcon'>
      {dataes.map((p)=>{
       
       return(
       <Postinput p={p} />
       )

        
      })}
        
    </div>
  )
}

export default Post