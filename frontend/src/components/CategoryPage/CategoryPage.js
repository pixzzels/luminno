
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom'

import { getListings } from '../../store/listings'

import './CategoryPage.css'


const CategoryPage = () => {

  const { id } = useParams();
  // console.log(id)

  const allCategoryListings = useSelector(state => {

    const lists = Object.values(state.listing)
    return lists
    // if (sortType === "dec") {
    //   const dec = allCategoryListings.sort((a, b) => {
    //     return a.price - b.price
    //   })
    // }
    // else if (sortType === "asc") {
    //   const asc = allCategoryListings.sort((a, b) => {
    //     return b.price - a.price
    //   })
    // } else {
    //   return lists
    // }
  })
  const [sort, setSort] = useState('')

  if (sort === "asc") {
    allCategoryListings.sort((a, b) => {
      return a.price - b.price
    })
  }
  else if (sort === "dec") {
    allCategoryListings.sort((a, b) => {
      return b.price - a.price
    })
  } else if (sort === 'recent') {
    allCategoryListings.sort((a, b) => {
      return b.id - a.id
    })
  }



  // if (sort === "dec") {
  //   const dec = allCategoryListings.sort((a, b) => {
  //     return a.price - b.price
  //   })
  // }
  // if (sort === "asc") {
  //   const asc = allCategoryListings.sort((a, b) => {
  //     return b.price - a.price
  //   })
  // }

  // const categories

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getListings())
  }, [dispatch])

  // console.log("listing", allCategoryListings.id)

  // console.log("categories", categories)
  // console.log("allCategoryListings", allCategoryListings)
  // console.log(id)
  // console.log("categoryListings", categoryListings)

  const newCatArr = allCategoryListings.filter((listing => listing.category_id == id))

  return (
    <div className="catPage-entire-cont">
      <div className="btns-sort">
        <label name="sort-options">Sort Listings By: </label>
        <select name="sort-options" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="none"></option>
          <option value="recent">Most Recent</option>
          <option value="dec">Highest Price</option>
          <option value="asc">Lowest Price</option>

        </select>

      </div>
      <div className="all-list-cat">
        {/* {listings} */}
        {newCatArr.map((listing => {
          // {console.log("listingId", listings.category_id, "id", id)}

          return (
            <section key={listing.id}>

              <NavLink className="listing-page" to={`/listings/${listing.id}`}>
                {/* {console.log("listing", listing)} */}
                <div className="listingsCat-container__listing">
                  <div>
                    <img
                      className="listingsCat-container__listing-image"
                      alt={listing.name}
                      src={`${listing.listing_img}`}
                    />
                  </div>
                  <div className="listingsCat-container__listing-name">
                    {listing.name}
                  </div>
                  <div className="listingsCat-container__listing-price">
                    ${listing.price}
                  </div>
                </div>
              </NavLink>
            </section>
          )
        }))}

      </div>
    </div>
  )
}

// {/* <div className="all-list-cat">
// {/* {listings} */}
// {allCategoryListings.map((listing => {
//   // {console.log("listingId", listings.category_id, "id", id)}

//   return (
//     <>
//       {/* // <section className="catPage-listings-container" key={listing.id}> */}
//       {/* <div className="catPage-listings-container">
//         <div key={listing.id}> */}
//       {listing.category_id == id &&
//         <NavLink className="listing-page" to={`/listings/${listing.id}`}>
//           {console.log("listing", listing)}
//           <div className="listingsCat-container__listing">
//             <div>
//               <img
//                 className="listingsCat-container__listing-image"
//                 alt={listing.name}
//                 src={`${listing.listing_img}`}
//               />
//             </div>
//             <div className="listingsCat-container__listing-name">
//               {listing.name}
//             </div>
//             <div className="listingsCat-container__listing-price">
//               ${listing.price}
//             </div>
//           </div>
//         </NavLink>
//       }
//       {/* </div>
//       </div> */}
//       {/* // </section> */}
//     </>
//   )
// }))}

// </div> */}

export default CategoryPage;