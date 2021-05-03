import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

import { getListings } from '../../store/listings'
import { addItem } from '../../store/cart'
import ShowReviews from '../ShowReviews';
// import Button from '../Button';

import './ListingPage.css'

function ListingPage() {

  const sessionUser = useSelector(state => state.session.user);
  const { id } = useParams();
  // console.log(id)
  const listing = useSelector(state => {
    return state.listing
  });
  const oneListing = listing[id]
  // console.log("id", id)
  // let listing_id = oneListing.id
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getListings())
  }, [dispatch])
  
  if (!oneListing) {
    return null;
  }
  
  const user_id = sessionUser.id
  const listing_id = parseInt(id)

  const addToCart = () => {
    dispatch(addItem({ listing_id, user_id }))
  }

  return (
    <div className="listing-page-info-review">
      <div className="listing-info-container">
        <div className="listing-image-container">
          <img
            className="listing-image-onpage"
            alt={oneListing.name}
            src={`${oneListing.listing_img}`}
          />
        </div>
        <div className="listing-details">
          <div className="listing-name">
            {oneListing.name}
          </div>
          <div className="listing-price">
            ${oneListing.price}
          </div>
          {/* <NavLink to="/profile/cart"> */}
          <button
            onClick={addToCart}
            className="add-to-cart-btn"
          >Add To Cart </button>
          {/* </NavLink> */}
          <div className="listing-description">
            {oneListing.description}
          </div>
        </div>
      </div>
      <div className="listing-page-reviews">
        <ShowReviews listingId={oneListing.id} />
      </div>

    </div>
  )
}

export default ListingPage;