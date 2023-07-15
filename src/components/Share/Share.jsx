import '../Share/Share.css';
import React from 'react';
import {MdPermMedia,MdLocationOn,MdAddReaction} from 'react-icons/md';
import {BsTagsFill} from 'react-icons/bs';
import bbr from '../../assets/profile2.jpg'

const Share = () => {
  return (
    <div className='share'> 
        <div className='sharecon'>
        <div className='upper'>
            <img src={bbr} alt="" />
            <input placeholder="what's in your mind servc"/>
        </div>
        <hr/>
        <div className='tag'>
            <div className='tagcon'>
                 <MdPermMedia className='icon' style={{color:"red"}}/>
                 <span>Photo or Video</span>
            </div>

            <div className='tagcon'>
                 <BsTagsFill className='icon' style={{color:"blue"}}/>
                 <span>Tag</span>
            </div>

            <div className='tagcon'>
                 <MdLocationOn className='icon' style={{color:"green"}}/>
                 <span>Location</span>
            </div>

            <div className='tagcon'>
                 <MdAddReaction className='icon' style={{color:"red"}}/>
                 <span>Feelings</span>
            </div>
            
            <button className='btn1'>Share</button>
            
        </div>
        
        </div>
    </div>
  )
}

export default Share;