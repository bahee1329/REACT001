import React from 'react';
import "../topbar/Topbar.css";
import { AiOutlineSearch } from 'react-icons/ai';
import {MdPersonOutline} from 'react-icons/md';
import {BsChatLeftText} from 'react-icons/bs';
import {IoIosNotificationsOutline} from 'react-icons/io';
import profile from  '../../assets/profile2.jpg';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className='left'>
                <h2 className='logo'>Malakabook</h2>
            </div>

            <div className='center'>
                <div className='inputdiv'>
                    <AiOutlineSearch className='ic'/>
                    <input className='input' placeholder="search for friend,post,video" />
                </div>
            </div>

            <div className='right'>
                <div className='rlinks'>
                    <h3><span>Home page</span></h3>
                    <h3><span>Timeline</span></h3>
                </div>

                <div className='ricons'>
                    <div className='icon'>
                        <MdPersonOutline size={30}/>
                        <span className='indicater'>1</span>
                    </div>

                    <div className='icon'>
                        <BsChatLeftText size={30}/>
                        <span className='indicater'>1</span>
                    </div>

                    <div className='icon'>
                        <IoIosNotificationsOutline size={30}/>
                        <span className='indicater'>1</span>
                    </div>
                </div>
                <img src={profile} alt="" />
            </div>
        </div>
    )
}

export default Topbar