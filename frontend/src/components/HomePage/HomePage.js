import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'

import Listings from '../Listings';

import { getCategories } from '../../store/category'
// import { getListings } from '../../store/listings'


import './HomePage.css'
import '../Categories/Categories.css'

function HomePage() {
  // const { id } = useParams();
  const category = useSelector(state => {
    // creates an array of the object values
    const categories = Object.values(state.category)
    // console.log("listings", listings)
    return categories;
    // return state.listings.list
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch]);

  if (!category) {
    return null;
  }



  return (
    <div className="homepage">
      <Listings />
    </div>

  )
}

export default HomePage;