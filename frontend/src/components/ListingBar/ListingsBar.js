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
                <div className="listing">
                  <div>
                    <img
                      className="listing-image"
                      alt={listing.name}
                      src={`${listing.listing_img}`}
                    />
                  </div>
                  <div>
                  <NavLink className="listing-page" key={listing.name} to={`/listings/${listing.id}`}>{listing.name}</NavLink>
                  </div>

                </div>
              }
            </>
          )
        })}
        {/* {allListings.map((listing) => {
          return (
            <div className="one-listing">
              <div>
              {listing.category_id === category.id ? listing.listing_img : null}
              </div>
              <div className='listing'>
                {listing.category_id === category.id ? listing.name : null}
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  )
}

export default ListingsBar;