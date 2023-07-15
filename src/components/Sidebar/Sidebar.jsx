import React from 'react';
import '../Sidebar/Sidebar.css';
import { MdRssFeed, MdSlowMotionVideo, MdGroup, MdOutlineBookmark, MdOutlineQuestionMark, MdShoppingBag, MdEvent } from 'react-icons/md';
import { BsChatLeftDotsFill } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { profile } from '../data';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='scontainer'>
        <ul>
          <li className='pad'>
            <MdRssFeed className='padicon' />
            <span className='padname'>Feed</span>
          </li>

          <li className='pad'>
            <BsChatLeftDotsFill className='padicon' />
            <span className='padname'>Chat</span>
          </li>

          <li className='pad'>
            <MdSlowMotionVideo className='padicon' />
            <span className='padname'>Video</span>
          </li>

          <li className='pad'>
            <MdGroup className='padicon' />
            <span className='padname'>Group</span>
          </li>

          <li className='pad'>
            <MdOutlineBookmark className='padicon' />
            <span className='padname'>Bookmark</span>
          </li>

          <li className='pad'>
            <MdOutlineQuestionMark className='padicon' />
            <span className='padname'>Question</span>
          </li>

          <li className='pad'>
            <MdShoppingBag className='padicon' />
            <span className='padname'>Job</span>
          </li>

          <li className='pad'>
            <MdEvent className='padicon' />
            <span className='padname'>Event</span>
          </li>

          <li className='pad'>
            <FaGraduationCap className='padicon' />
            <span className='padname'>Cource</span>
          </li>

          <button className='btn'>Show more</button>
        </ul>

        <hr></hr>

        <ul className='friend'>

          {profile.map((r, i) => {
            return (
              <li key={i}>
                <img src={r.pp} alt='xxx' />
                <span>{r.nname}</span>
              </li>
            )
          })}





        </ul>


      </div>
    </div>
  )
}

export default Sidebar