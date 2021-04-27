const LOAD_CATEGORY = 'listings/LOAD_CATEGORY';

const load = list => ({
  type: LOAD_CATEGORY,
  list,
});

export const getCategories = () => async dispatch => {
  const response = await fetch(`/api/listings`);

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list));
  }
};

const initialState = []


const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CATEGORY: {
      const allCategories = {};
      action.list.forEach(category => {
        // console.log('category', category)
        allCategories[category.id] = category;
      });
      return {
        ...allCategories,
        ...state,
      };
    }
    default:
      return state;
  }
}

export default listingsReducer;
