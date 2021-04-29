const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS'

const load = list => ({
  type: LOAD_REVIEWS,
  list,
});

export const getReviews = () => async dispatch => {
  const res = await fetch('/api/reviews');

  if (res.ok) {
    const reviewsList = await res.json();
    dispatch(load(reviewsList));;
  }
};

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
    default:
      return state;
  }
}

export default reviewsReducer;
