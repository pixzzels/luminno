import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

// import Category from '../Category'
import { getCategories } from '../../store/category'

import './Categories.css'

function Categories() {
  // const { id } = useParams();
  const category = useSelector(state => {
    // creates an array of the object values
    const categories = Object.values(state.category)
    // console.log("listings", listings)
    return categories;
    // return state.listings.list
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch]);

  if (!category) {
    return null;
  }

  return (
    <div className="categories-container">
      {category.map((category) => {
        return (
          <NavLink className='category-link' to={`/category/${category.id}`}>
            <div key={category.name} >
              {category.name}
            </div>
          </NavLink>
        );
      })}
    </div>
  )
}

export default Categories;