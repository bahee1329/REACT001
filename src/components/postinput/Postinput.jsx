import React, { useState } from 'react';
import {BsThreeDotsVertical} from 'react-icons/bs';
import {AiTwotoneLike,AiFillHeart} from 'react-icons/ai';
import { profile } from '../data';

const Postinput = ({p}) => {

    const [like,setlike]=useState(p.likes);
    const [islike,setislike]=useState(true);

    function clicker(){
        setlike(islike ? like+1 :like-1);
        setislike(!islike)
    }
    return(<div className='post' >
    <div className='upper'>
     <div className='uleft'>
     <img   src={profile.filter(px=>px.id===p.userid)[0].pp} alt=""/>
     <span className='name'>{profile.filter(px=>px.id===p.userid)[0].nname}</span>
     <span className='time'>{p.date}</span>
    </div>
    <div className='uright'>
        <BsThreeDotsVertical size={20}/>
    </div>
    </div>
    <div className='center'>
      <img src={p.photo} alt="" />
    </div>
    <div className='lower'>
     <div className='lleft'>
        <AiTwotoneLike className='like' onClick={clicker} />
        <AiFillHeart className='heart'onClick={clicker}/>
        <span>{like} people like it</span>
     </div>

     <div className='lright'>
         <span>{p.comment} comment</span>
     </div>
      
    </div>
 </div>)
}

export default Postinput