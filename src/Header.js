import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import {
  Home,
  SupervisorAccount,
  BusinessCenter,
  Chat,
  Notifications,
} from '@mui/icons-material';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
          alt=''
        />

        <div className='header__search'>
          <SearchIcon />
          <input type='text' />
        </div>
      </div>

      <div className='header__right'>
        <HeaderOption Icon={Home} title='Home' />
        <HeaderOption Icon={SupervisorAccount} title='My Netwrok' />
        <HeaderOption Icon={BusinessCenter} title='Jobs' />
        <HeaderOption Icon={Chat} title='Messaging' />
        <HeaderOption Icon={Notifications} title='Notifications' />
        <HeaderOption
          avatar='https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg'
          title='me'
        />
      </div>
    </div>
  );
}

export default Header;
