const LOAD_LISTINGS = 'listings/LOAD_LISTINGS';

const load = list => ({
  type: LOAD_LISTINGS,
  list,
});

export const getListings = () => async dispatch => {
  const response = await fetch(`/api/listings`);

  if (response.ok) {
    const list = await response.json(); //list is an array of listings
    dispatch(load(list));
  }
};

const initialState = []


const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LISTINGS: {
      const allListings = {};
      action.list.forEach(listing => {
        allListings[listing.id] = listing;
      });
      return {
        ...allListings,
        ...state,
        // list: action.list,
      };
    }

    default:
      return state;
  }
}

export default listingsReducer;
