import { csrfFetch } from './csrf';

const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS'
const ADD_REVIEW = 'reviews/ADD_REVIEW'
const UPDATE_REVIEW = 'reviews/UPDATE_REVIEW'
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW'

const load = list => ({
  type: LOAD_REVIEWS,
  list,
});

const addReview = review => ({
  type: ADD_REVIEW,
  review
});

const update = (review) => ({
  type: UPDATE_REVIEW,
  review
})

const remove = (review) => ({
  type: REMOVE_REVIEW,
  review
});

export const getReviews = () => async dispatch => {
  const res = await fetch('/api/reviews');

  if (res.ok) {
    const reviewsList = await res.json();
    dispatch(load(reviewsList));
  }
};

export const createReview = newReview => async dispatch => {
  // console.log("newReview", newReview)
  const { description, score, user_id, listing_id } = newReview;
  const res = await csrfFetch('/api/reviews', {
    method: 'POST',
    body: JSON.stringify({
      description,
      score,
      user_id,
      listing_id,
    })
  });

  if (!res.ok) throw res;
  const review = await res.json();
  dispatch(addReview(review))
  return review;
}

export const removeReview = (id) => async dispatch => {
  const { reviewId } = id;
  console.log("newreviewId", reviewId)
  const res = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: 'DELETE',
    body: JSON.stringify({
      reviewId
    })
  });

  if (!res.ok) throw res;

  // const review = await res.json()
  dispatch(remove(reviewId))
  return reviewId;
}

export const updateReview = (review) => async dispatch => {
  const res = await csrfFetch(`/api/review/${review.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(review)
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(update(data));
    return data;
  }
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
    case UPDATE_REVIEW: {
      return {
        ...state,
        [action.review.id]: action.review,
      };
    }
    case REMOVE_REVIEW: {
      const newState = { ...state };
      console.log('actionReview', action)
      delete newState[action.review];
      console.log("newState", newState)
      return newState;
    }
    default:
      return state;
  }
}

export default reviewsReducer;
