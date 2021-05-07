import { csrfFetch } from './csrf';

const LOAD_CART = 'cart/LOAD_CART';
const ADD_ITEM = 'cart/ADD_ITEM';
const REMOVE_ITEM = 'cart/REMOVE_ITEM';

const load = lists => ({
  type: LOAD_CART,
  lists,
});

const add = item => ({
  type: ADD_ITEM,
  item
});

const remove = (item) => ({
  type: REMOVE_ITEM,
  item
});

export const getItems = (id) => async dispatch => {
  // console.log('backendId', id)
  const res = await fetch(`/api/profile/cart/${id}`)

  if (!res.ok) throw res;
  const items = await res.json();
  // console.log('item', item)
  dispatch(load(items))
};

export const addItem = (content) => async (dispatch) => {
  const { listing_id, user_id } = content;

  // Cross Site Request Forgeries Middleware
  const res = await csrfFetch(`/api/profile/cart/${listing_id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ listing_id, user_id }),
  })

  if (!res.ok) throw res;
  const item = await res.json();
  dispatch(add(item))
  return item;
};

export const removeItem = (id) => async dispatch => {
  const { listingId } = id;
  console.log("listingId", listingId)
  const res = await csrfFetch(`/api/profile/cart/${listingId}`, {
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
      const allCartItems = {}
      action.lists.forEach((item) => {
        allCartItems[item.id] = item
      })
      return {
        ...state,
        ...allCartItems,
        cartItems: action.lists
      }
    }
    case ADD_ITEM: {
      const newState = {
        ...state,
        [action.item.id]: action.item
      }
      return newState;
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