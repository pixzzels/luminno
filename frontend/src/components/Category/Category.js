import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getCategories } from '../../store/listings'

function Category() {
  // const { id } = useParams();
  const category = useSelector(state => {
    // creates an array of the object values
    const listings = Object.values(state.listings)
    console.log("listings", listings)
    return listings;
    // return state.listings.list
    // return state.category.list?.map(id => state.category[id]);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch]);

  if (!category) {
    return null;
  }

  return (
    <div>
      {category.map((category) => {
        return (
          <NavLink key={category.name} to={`category/${category.id}`}>

            <div>
              <div className="primary-text">{category.name}</div>

            </div>

          </NavLink>
        );
      })}
    </div>
  )
}

export default Category;