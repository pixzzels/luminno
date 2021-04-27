import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Category from '../Category'
import { getCategories } from '../../store/listings'

import './Categories.css'

function Categories() {
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
    <div className="categories-container">
      {category.map((category) => {
        return (
          <div className='category-link'>
            <Category category={category} />
          </div>
        );
      })}
    </div>
    // <div className="categories-container">
    //   <Category />
    // </div>
  )
}

export default Categories;