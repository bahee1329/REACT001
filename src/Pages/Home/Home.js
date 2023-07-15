import React from 'react';
import './Home.css';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/Sidebar/Sidebar';

const Home = () => {
  return (
    <div>
    <Topbar/>
    <div className='homecontainer'>
      <Sidebar/>
      <Feed/>
      <Rightbar/>
    </div>
    </div>
  )
}

export default Home