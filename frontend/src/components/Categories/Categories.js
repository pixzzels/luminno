import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Category from '../Category'
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

  // const sortList = (list) => {
  //   return list.sort((categoryA, categoryB) => {
  //     return categoryB.id - categoryA.id;
  //   })
  // };

  // let sortedList = sortList(category)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch]);

  if (!category) {
    return null;
  }
  // console.log("category", category)
  // category.pop();
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