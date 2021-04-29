import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getReviews } from '../../store/reviews'

import './ShowReviews.css';

function ShowReviews({ listingId }) {

  // console.log("listingId", listingId)
  const reviews = useSelector(state => {
    const allReviews = Object.values(state.review)
    return allReviews;
  })

  // const reviews = useSelector(state => {
  //   return state.review
  // })

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews())
  }, [dispatch])

  if (!reviews) {
    return null;
  }


  console.log("reviews", reviews)
  return (
    <div>
      my review
      {reviews.map((review) => {
        return (
          <>
            {review.listing_id === listingId &&
              <div>
                {review.description}
              </div>
            }
          </>
        )
      })}
    </div>
  )
}

export default ShowReviews;
