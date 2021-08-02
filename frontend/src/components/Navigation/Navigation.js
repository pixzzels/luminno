import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import Categories from '../Categories';
import Button from '../Button';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user);
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div>
        <NavLink to="/profile/cart">
          <button 
          className="cart-btn"
          >Cart</button>
        </NavLink>
        {/* <ProfileButton user={sessionUser} /> */}
        <Button onClick={logout} text={"Log Out"}>Log Out</Button>
      </div>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
      </>
    );
  }

  return (
    <div className="navBar">
      <div className='navBar__main'>
        <li className='brandName'>
          <NavLink className='brandName' exact to="/">Luminno</NavLink>
        </li>
        <div>
          <form className="navBar__upper-container">
            <input
              className="navBar__search"
              type='search'
              placeholder='Search'>
            </input>
            <NavLink className='searchBar' to="/listings/search">
              <button className="navBar__search-icon">
                <i className="fas fa-search"></i>
              </button>
            </NavLink>
          </form>
        </div>
        <li>
          {isLoaded && sessionLinks}
        </li>
      </div>
      <div className='navBar__lower'>
        <Categories />
      </div>
    </div>
  );
}

export default Navigation;