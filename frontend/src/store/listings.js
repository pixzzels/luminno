const LOAD_CATEGORY = 'listings/LOAD_CATEGORY';

const load = list => ({
  type: LOAD_CATEGORY,
  list,
});

export const getCategories = () => async dispatch => {
  const response = await fetch(`/api/listings`);

  if (response.ok) {
    const list = await response.json();
    // console.log('list', list)
    dispatch(load(list));
  }
};

const initialState = {
  list: []
};

const sortList = (list) => {
  return list.sort((categoryA, categoryB) => {
    return categoryA.id - categoryB.id;
  }).map((category) => category.id);
};

const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CATEGORY: {
      const allCategories = {};
      action.list.forEach(category => {
        allCategories[category.id] = category;
      });
      return {
        ...allCategories,
        ...state,
        list: sortList(action.list),
      };
    }
    default:
      return state;
  }
}

export default listingsReducer;
