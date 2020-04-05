import React from 'react';
import './App.scss';
import profilePic from './img/me.jpeg'

function App() {
  return (
    <div className='content'>
      <div className="info-container">
        <img className="profile-pic" src={profilePic} alt="me" />
        <p className="description">
          I'm a software developer living in San Francisco, currently working for Square. 
          In my free time I&nbsp;
          <a href="https://www.youtube.com/watch?v=ZiToCECSzXc">make robots</a>, &nbsp;
          <a href="/ballpit">build ballpits</a>,&nbsp;
          <a href="http://gifntext.com">help the internet edit gifs</a>,&nbsp;
          <a href="http://dangeraffe.com">make useless games</a>, and play with my dogs.
        </p>
      </div>
    </div>
  );
}

export default App;


