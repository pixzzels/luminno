import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getReviews, removeReview } from '../../store/reviews'
import LoginFormModal from '../LoginFormModal';
import ReviewModal from '../ReviewModal'


import './ShowReviews.css';

let count = 0;

function ReviewScore({ reviewNum }) {

  let reviewScoreArr = [];

  for (let i = 0; i < reviewNum; i++) {
    reviewScoreArr.push('khaki')
  }

  if (reviewScoreArr.length < 5) {
    for (let i = reviewScoreArr.length; i < 5; i++) {
      reviewScoreArr.push('white')
    }
  }
  // count++

  return (
    <>
      {reviewScoreArr.map((color) => {
        count++
        return (
          <svg key={count} className="star">
            <path stroke="black" strokeWidth="1.3" fill={color} d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z" />Î
          </svg>
        )
      })}
    </>
  )
}

function ShowReviews({ listingId }) {

  const reviews = useSelector(state => {
    const allReviews = Object.values(state.review)
    allReviews.sort((a, b) => {
      return b.id - a.id
    })
    return allReviews;
  })

  const sessionUser = useSelector(state => state.session.user);
  const [reviewDelete, setReviewDelete] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews())
  }, [dispatch, reviewDelete])

  if (!reviews) {
    return null;
  }

  // format sequelize.Date into Month and Day
  const formatDate = (unformattedDate) => {
    //only works for sequelize.DATE formatting
    const year = unformattedDate.slice(0, 4)
    const justDate = unformattedDate.split("T")[0];
    const monthNum = justDate.split("-")[1];
    let month = "";
    if (monthNum === "01") month = "Jan";
    if (monthNum === "02") month = "Feb";
    if (monthNum === "03") month = "Mar";
    if (monthNum === "04") month = "Apr";
    if (monthNum === "05") month = "May";
    if (monthNum === "06") month = "June";
    if (monthNum === "07") month = "July";
    if (monthNum === "08") month = "Aug";
    if (monthNum === "09") month = "Sept";
    if (monthNum === "10") month = "Oct";
    if (monthNum === "11") month = "Nov";
    if (monthNum === "12") month = "Dec";

    const date = justDate.split("-")[2];
    return `${month} ${date}, ${year}`;
  };

  let formattedDate;
  let oneReview = false;
  // let reviewScore;

  reviews.map((review) => {
    if (review.id === listingId) {
      formattedDate = formatDate(review.User.createdAt)
      // reviewScore = review.score
    }
    return formattedDate;
  });

  // if current user has a review for that specific listing,
  // change add review form to edit review form.
  if (sessionUser) {
    reviews.map((review) => {
      if (review.user_id === sessionUser.id) {
        if (review.listing_id === listingId) {
          // console.log("hello")
          oneReview = true;
        }
      }
      return oneReview;
    });
  }

  let text;

  let sessionLinks;
  if (sessionUser && oneReview === false) {
    text = 'Add Your Review!'
    sessionLinks = (
      <ReviewModal text={text} listingId={listingId} />
    );
  } else if (sessionUser && oneReview === true) {
    text = 'Edit Your Review!'
    sessionLinks = (
      <>
        <ReviewModal text={text} listingId={listingId} edit={true} />
      </>
    );
  } else {
    text = 'Log in to Review!'
    sessionLinks = (
      <>
        <LoginFormModal text={text} />
      </>
    );
  }

  const deleteReviewButton = (id) => {
    let result = window.confirm("Are you sure you want to delete your review?")
    if (result) {
      const reviewId = id
      dispatch(removeReview({ reviewId }))
      setReviewDelete(Math.random());
    }
  }
  return (
    <div className="big-review-container">
      <div className="review-header">
        <h2>Reviews</h2>
        {sessionLinks}
      </div>
      {reviews.map((review) => {
        return (
          <div key={review.id}>
            {review.listing_id === listingId &&
              <div className="review-container">
                <div className="review-owner">
                  <div className="review-user-container">
                    <img
                      className="review-profilepic"
                      alt={review.User.username}
                      src={`${review.User.profile_img}`}
                    />
                    <a href="/profile" className="review-username">
                      {review.User.username}
                    </a>
                    <p className="review-created-date">
                      {formattedDate}
                    </p>
                    {sessionUser && sessionUser.id === review.User.id &&
                      <button
                        id="delete-review-btn"
                        onClick={() => deleteReviewButton(review.id)}
                      >x</button>
                    }
                  </div>
                </div>
                <div className="review-information">

                  <div className='review-score'>
                    <ReviewScore listingId={listingId} review={review} reviewNum={review.score} />
                  </div>
                  <div className="review-description">
                    {review.description}
                  </div>

                </div>
              </div>
            }
          </div>
        )
      })}
    </div>
  )
}

export default ShowReviews;
