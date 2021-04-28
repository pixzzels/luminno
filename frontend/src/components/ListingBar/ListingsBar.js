import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getListings } from '../../store/listings'

import './ListingsBar.css'

function ListingsBar({ category }) {

  const allListings = useSelector(state => {
    const listings = Object.values(state.listing)
    return listings;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListings())
  }, [dispatch]);

  if (!allListings) {
    return null;
  }

  return (
    <div className="listingsBar-container">
      <h2>{category.name}</h2>
      {allListings.map((listing) => {
        return (
          <div className='listing'>
            {listing.category_id === category.id ? listing.name : ''}
            {/* {listing.name} */}
          </div>
        );
      })}
    </div>
  )
}

export default ListingsBar;