import { csrfFetch } from './csrf';

const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS'
const ADD_REVIEW = 'reviews/ADD_REVIEW'

const load = list => ({
  type: LOAD_REVIEWS,
  list,
});

const addReview = review => ({
  type: ADD_REVIEW, 
  review
})

export const getReviews = () => async dispatch => {
  const res = await fetch('/api/reviews');

  if (res.ok) {
    const reviewsList = await res.json();
    dispatch(load(reviewsList));;
  }
};

export const createReview = newReview => async dispatch => {
  console.log("newReview", newReview)
  const { description, score , user_id, listing_id } = newReview;
  const res = await csrfFetch('/api/reviews', { 
    method: 'POST',
    body: JSON.stringify({
      description,
      score,
      user_id, 
      listing_id,
    })
  });

  if(!res.ok) throw res;
  const review = await res.json();
  dispatch(addReview(review))
  return review;
}


const initialState = [];

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REVIEWS: {
      const allReviews = {};
      action.list.forEach(review => {
        allReviews[review.id] = review;
      });
      return {
        ...allReviews,
        ...state,
      }
    }
    case ADD_REVIEW: {
      const newState = {
        ...state,
        [action.review.id]: action.review
      };

      return newState;
  }
    default:
      return state;
  }
}

export default reviewsReducer;
