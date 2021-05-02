import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'

import Listings from '../Listings';

import { getCategories } from '../../store/category'
// import { getListings } from '../../store/listings'


import './HomePage.css'
import '../Categories/Categories.css'

// const CategoryPage = ({ id }) => {

//   // const { id } = useParams();
//   // console.log(id)

//   const allCategoryListings = useSelector(state => {

//     const lists = Object.values(state.listing)
//     return lists

//   })
//   const [sort, setSort] = useState('')

//   if (sort === "asc") {
//     allCategoryListings.sort((a, b) => {
//       return a.price - b.price
//     })
//   }
//   else if (sort === "dec") {
//     allCategoryListings.sort((a, b) => {
//       return b.price - a.price
//     })
//   } else if (sort === 'recent') {
//     allCategoryListings.sort((a, b) => {
//       return b.id - a.id
//     })
//   }

//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(getListings())
//   }, [dispatch])

//   const newCatArr = allCategoryListings.filter((listing => listing.category_id == id))

//   return (
//     <div className="catPage-entire-cont">
//       <div className="btns-sort">
//         <label name="sort-options">Sort Listings By:</label>
//         <select name="sort-options" value={sort} onChange={(e) => setSort(e.target.value)}>
//           <option value="none"></option>
//           <option value="recent">Most Recent</option>
//           <option value="dec">Highest Price</option>
//           <option value="asc">Lowest Price</option>
//         </select>

//       </div>
//       <div className="all-list-cat">
//         {/* {listings} */}
//         {newCatArr.map((listing => {
//           // {console.log("listingId", listings.category_id, "id", id)}

//           return (
//             <section key={listing.id}>
//               <NavLink className="listing-page" to={`/listings/${listing.id}`}>
//                 {console.log("listing", listing)}
//                 <div className="listingsCat-container__listing">
//                   <div>
//                     <img
//                       className="listingsCat-container__listing-image"
//                       alt={listing.name}
//                       src={`${listing.listing_img}`}
//                     />
//                   </div>
//                   <div className="listingsCat-container__listing-name">
//                     {listing.name}
//                   </div>
//                   <div className="listingsCat-container__listing-price">
//                     ${listing.price}
//                   </div>
//                 </div>
//               </NavLink>
//             </section>
//           )
//         }))}
//       </div>
//     </div>
//   )
// }

function HomePage() {
  // const { id } = useParams();
  const category = useSelector(state => {
    // creates an array of the object values
    const categories = Object.values(state.category)
    // console.log("listings", listings)
    return categories;
    // return state.listings.list
  });
  // const [content, setContent] = useState('');

  // const [catNumArr, setCatNumArr] = useState()

  // const arr = []
  // arr.push(content)
  // console.log(arr)

  // console.log("content", content)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch]);

  if (!category) {
    return null;
  }

  // let component;

  // if (content === '') {
  //   component =
  //     <Listings />

  // } else {
  //   component = <CategoryPage id={content} />
  // }


  return (
    <div>
      <div className="homepage">
        {/* <h1>This is my body</h1> */}
        {/* <Categories changeContent={changeContent} /> */}
        <Listings />

      </div>
    </div>

  )
}

export default HomePage;