import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCategories } from '../../store/category'
import ListingsBar from '../ListingBar'
import './Listings.css'

function Listings() {

  const category = useSelector(state => {
    const categories = Object.values(state.category)
    return categories;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch]);

  return (
    <div className="listings-container">
      {category.map((category) => {
        return (
          <div key={category.name} className='category-link'>
            <ListingsBar category={category} />
          </div>
        );
      })}
    </div>
  )
}

export default Listings;