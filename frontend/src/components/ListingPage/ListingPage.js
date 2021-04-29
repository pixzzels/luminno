import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getListings } from '../../store/listings'
import ShowReviews from '../ShowReviews';
// import Button from '../Button';

import './ListingPage.css'

function ListingPage() {

  // const sessionUser = useSelector(state => state.session.user);
  const { id } = useParams();
  // console.log(id)
  const listing = useSelector(state => {
    return state.listing
  });
  const oneListing = listing[id]

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getListings())
  }, [])

  if (!oneListing) {
    return null;
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
          <button className="add-to-cart-btn">Add To Cart </button>
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