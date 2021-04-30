import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';

import { getCategories } from '../../store/category'
import CategoryPage from '../CategoryPage';
import ListingsBar from '../ListingBar'
import './Listings.css'

function Listings() {

  // const { id } = useParams()
  // console.log(id)
  const [content, setContent] = useState('');

  const category = useSelector(state => {
    const categories = Object.values(state.category)
    return categories;
  });

  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch]);
  
  console.log("catBEgin", category)
  let component;

  if (content === '') {
    component =
      <div className="listings-container">
        {category.map((category) => {
          return (
            <div key={category.name} className='category-link'>
              <ListingsBar category={category} />
            </div>
          );
        })}
      </div>
  }
  // } else {
  //   component =
  //     <div className="listings-container">
  //       <CategoryPage categories={category}/>
  //     </div>
  // }

  return (
    component
  )
}

export default Listings;