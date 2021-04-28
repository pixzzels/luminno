const LOAD_LISTINGS = 'listings/LOAD_LISTINGS';

const SHOW_ONE = 'listings/SHOW_ONE';


const load = list => ({
  type: LOAD_LISTINGS,
  list,
});

const showOne = listing => ({
  type: SHOW_ONE,
  listing,
});


export const getListings = () => async dispatch => {
  const response = await fetch(`/api/listings`);

  if (response.ok) {
    const list = await response.json(); //list is an array of listings
    dispatch(load(list));
  }
};

export const showOneListing = (listingId) => async dispatch => {
  const res = await fetch(`/api/listings/${listingId}`)
  if (!res.ok) throw res;
  const listing = await res.json();
  dispatch(showOne(listingId))
}

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
        list: action.list,
      };
    }
    case SHOW_ONE: {
      if (!state[action.listing.id]) {
        const newState = {
          ...state,
          [action.listing.id]: action.listing
        };
        const listingList = newState.list.map(id => newState[id]);
        listingList.push(action.listing);
        return newState;
      }
      return {
        ...state,
        [action.listing.id]: {
          ...state[action.listing.id],
          ...action.listing,
        }
      };
    }
    default:
      return state;
  }
}

export default listingsReducer;
