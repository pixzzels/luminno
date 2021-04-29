
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom'

import { getListings } from '../../store/listings'

import './CategoryPage.css'

// const ListingComponent = ({ id, listings }) => {

//   // console.log(id)

//   // let catListArr = []

//   // const catArr = Object.values(listings)

//   // console.log(catArr)

//   // if (catArr[5] === id) {
//   //   catListArr.push(catArr)
//   // }

//   // console.log(catListArr)

//   // listings.forEach((listing) => {
//   //   if (listing.category_id === id) {
//   //     catListArr.push(listings.name)
//   //   }
//   // })
//   // console.log(catListArr)

//   return (
//     <div>
//       {listings.name}
//     </div>
//   )
// }

const CategoryPage = () => {

  const { id } = useParams();
  // console.log(id)

  const allCategoryListings = useSelector(state => {
    const lists = Object.values(state.listing)
    return lists
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getListings())
  }, [dispatch])

  // const categoryListings = allCategoryListings.map((category => {
  //   console.log("category", category)
  //   return category.category_id === id
  // }))

  // if (allCategoryListings.category_id === id)

  console.log("allCategoryListings", allCategoryListings)
  console.log(id)
  // console.log("categoryListings", categoryListings)

  return (
    <div>
      hello
      {allCategoryListings.map((listings => {
        {console.log("listingId", listings.category_id, "id", id)}
        
        return (
          <div>
            {listings.category_id == id && 
              <div>
                test
                {listings.name}
              </div>
            }
          </div>
        )
      }))}
      {/* {allCategoryListings.map((listings => {
        return (
          <ListingComponent id={id} listings={listings} />
        )
      }))} */}

    </div>
  )
}

export default CategoryPage;