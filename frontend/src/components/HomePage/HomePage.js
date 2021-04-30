import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Listings from '../Listings';

import Category from '../Category'
import { getCategories } from '../../store/category'

import './HomePage.css'
import '../Categories/Categories.css'


function HomePage() {
  // const { id } = useParams();
  const category = useSelector(state => {
    // creates an array of the object values
    const categories = Object.values(state.category)
    // console.log("listings", listings)
    return categories;
    // return state.listings.list
  });
  const [content, setContent] = useState('');

  console.log(content)


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch]);

  if (!category) {
    return null;
  }


  const changeContent = () => {

  }


  return (
    <div>
      <div className="categories-container">
        {category.map((category) => {
          return (
            <div 
            key={category.name} 
            value={category.name} 
            className='category-link'
            onChange={(e) => setContent(e.target.value)}
            >
              <Category category={category} />
            </div>
          );
        })}
      </div>
      <div className="homepage">
        {/* <h1>This is my body</h1> */}
        {/* <Categories changeContent={changeContent} /> */}
        <Listings />
      </div>
    </div>

  )
}

export default HomePage;