import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="navBar">
      <div className='navBar__main'>
        <li className='brandName'>
          <NavLink exact to="/">Etsy</NavLink>
        </li>
        <div>
          <form className="navBar__upper-container">
            <input
              className="navBar__search"
              type='search'
              placeholder='Search'>
            </input>
            <button className="navBar__search-icon">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
        <li>
          {isLoaded && sessionLinks}
        </li>
      </div>
      <div className='navBar__lower'>
      </div>
    </div>
  );
}

export default Navigation;