import { csrfFetch } from './csrf';

const LOAD_CART = 'cart/LOAD_CART';
const ADD_ITEM = 'cart/ADD_ITEM';
const REMOVE_ITEM = 'cart/REMOVE_ITEM';

const load = list => ({
  type: LOAD_CART,
  list,
});

const add = item => ({
  type: ADD_ITEM,
  item
});

const remove = (item) => ({
  type: REMOVE_ITEM,
  item
});

export const getItems = () => async dispatch => {
  const res = await fetch('/api/cart')

  if (!res.ok) throw res;
  const item = await res.json();
  dispatch(load(item))
}

export const addItem = (content) => async (dispatch) => {
  const { listingId, userId } = content;

  // Cross Site Request Forgeries Middleware
  const res = await csrfFetch(`/api/cart/${listingId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ listingId, userId }),
  })

  if (!res.ok) throw res;
  const item = await res.json();
  dispatch(addItem(item))
  return item;
};

export const removeItem = (id) => async dispatch => {
  const { listingId } = id;
  console.log("listingId", listingId)
  const res = await csrfFetch(`/api/cart/${listingId}`, {
    method: 'DELETE',
    body: JSON.stringify({
      listingId
    })
  });

  if (!res.ok) throw res;

  // const review = await res.json()
  dispatch(remove(listingId))
  return listingId;
};

const initialState = [];

const cartReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOAD_CART: {
      return {
        ...state,
      }
    }
    case ADD_ITEM: {
      const newState = {
        ...state,
        [action.item.id]: action.item
      }
    }
    case REMOVE_ITEM: {
      const newState = { ...state };
      delete newState[action.item];
      return newState;
    }
    default:
      return state;
  }
}

export default cartReducer;