import React from 'react';
import '../rightbar/Rightbar.css';
import { TfiGift } from 'react-icons/tfi'
import ad from '../../assets/ad.jpg';
import { profile } from '../data';

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className='rightbarcon'>
        <div className='birthday'>
          <TfiGift className='bir' />
          <span><b>kumar sasi</b>and <b>3 others</b> have a birthday today</span>
        </div>

        <img src={ad} alt="" />

        <div className='online'>
          <h4>Online friends</h4>
          <ul>

            {profile.map((x, i) => {
              return (
                <li className='friends' key={i}>
                  <div className='ptocon'>
                    <img className='pto1' src={x.pp} alt="" />
                    <span className='dot'></span>
                  </div>
                  <span className='name'>{x.nname}</span>
                </li>
              )
            })}

            {profile.map((x, i) => {
              return (
                <li className='friends' key={i}>
                  <div className='ptocon'>
                    <img className='pto1' src={x.pp} alt="" />
                    <span className='dot'></span>
                  </div>
                  <span className='name'>{x.nname}</span>
                </li>
              )
            })}





          </ul>
        </div>
      </div>
    </div>
  )
}

export default Rightbar