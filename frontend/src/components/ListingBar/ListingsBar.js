import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

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
      <div className="listings-container-cat">
        {allListings.map((listing) => {
          return (
            <>
              {listing.category_id === category.id &&
                <NavLink className="listing-page" key={listing.name} to={`/listings/${listing.id}`}>
                  <div className="listingsBar-container__listing">
                    <div>
                      <img
                        className="listingsBar-container__listing-image"
                        alt={listing.name}
                        src={`${listing.listing_img}`}
                      />
                    </div>
                    <div className="listingsBar-container__listing-name">
                      {listing.name}
                    </div>
                    <div className="listingsBar-container__listing-price">
                      ${listing.price}
                    </div>
                  </div>
                </NavLink>
              }
            </>
          )
        })}
      </div>
    </div>
  )
}

export default ListingsBar;