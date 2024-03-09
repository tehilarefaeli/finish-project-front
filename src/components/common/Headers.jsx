import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BasicButton from '../basic/BasicButton';
import { HomeOutlined, UserOutlined, LineOutlined, LogoutOutlined } from '@ant-design/icons';
import './Headers.css';
import MySelect from '../basic/MySelect';

function Headers({ user, setUser }) {
  const navigate = useNavigate()
  const handleClick = () => {
    console.log('click me');
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser()
    navigate('/')
  }

  return (
    <div className='sticky-header'>
      <div className='divRoot'>
        <div className='profile'>
          <Link to='/profile'>
            <UserOutlined className='profileIcon' />
            <span className='profile-name'>{user ? user.name : ''}</span>
          </Link>
        </div>

        <div className='home'>
          <Link to='/'>
            <HomeOutlined className='homeIcon' />
          </Link>
        </div>

        <button className='managerButton' disabled ={user&&user.isAdmin==1? false : true}>
         <div className="manager">
          <MySelect/>
           </div>
        </button>
        

        <div className='buttons-container'>
          <div className='linkes'>
            <Link to='/about' className='button-link'>
              <BasicButton className="link" size='large' text='About' onClick={handleClick} />
            </Link>
            <LineOutlined rotate={90} />
            <Link to='/all' className='button-link'>
              <BasicButton className="link" size='large' text='all recipes' onClick={handleClick} />
            </Link>
            <LineOutlined rotate={90} />
            <Link to='/cakes' className='button-link'>
              <BasicButton className="link" size='large' text='Cakes' onClick={handleClick} />
            </Link>
            <LineOutlined rotate={90} />
            <Link to='/cookies' className='button-link'>
              <BasicButton className="link" size='large' text='Cookies' onClick={handleClick} />
            </Link>
            <LineOutlined rotate={90} />
            <Link to='/deserts' className='button-link'>
              <BasicButton className="link" size='large' text='Deserts' onClick={handleClick} />
            </Link>
          </div>
        </div>

        {user ? <div className='logout'>
          <Link onClick={handleLogout}>
            <span className='logout-text'>Sign Out</span>
            <LogoutOutlined className='logoutIcon' />
          </Link>
        </div> : null}
      </div>
    </div>
  );
}

export default Headers;
