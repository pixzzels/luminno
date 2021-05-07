import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getItems, removeItem } from '../../store/cart';
import { getListings } from '../../store/listings';

import './ShoppingCart.css';

const ShoppingCart = () => {
  const sessionUser = useSelector(state => state.session.user)
  const user_id = parseInt(sessionUser.id)

  // const cartItems = useSelector(state => {
  //   const items = Object.values(state.cart)
  //   // console.log("state.cart", state.cart.lists)
  //   return items;
  // })

  const cartItems = useSelector(state => state.cart.cartItems)
  console.log("test", cartItems)

  const [listingId, setListingId] = useState()
  console.log('listingid', listingId)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems(sessionUser.id))
  }, [dispatch, sessionUser.id]);

  // useEffect(() => {
  //     dispatch(removeItem({ user_id, listing_id }))
  // }, [dispatch, listing_id])

  if (!cartItems) return null



  let total = 0
  // cartItems.forEach((item) => console.log("itemListing", item))

  cartItems.map((item) => {
    // console.log('item', item)
    total += item.price
  })

  // const cartArr = []
  // cartItems.forEach((item) => {
  //   cartArr.push(item.Listing)
  //   if (!item.Listing) {
  //     // console.log('item.Listing', item.Listing)
  //     setUpdate(!update)
  //   }
  // })

  // console.log({ cartArr })

  const removeCartItem = () => {
    // dispatch(removeItem({ user_id, listing_id }))
  }

  return (
    <div className="shoppingCart-container">
      <h2>Shopping Cart</h2>
      <span>Price</span>
      <span className="line"></span>
      {cartItems.map((item) => {
        // { console.log('item', item) }
        return (
          <section className="sc-listing-page" key={item.id}>

            {/* {console.log("listing", listing)} */}
            <div className="sc-container__listing">
              <div>
                <img
                  className="sc-container__listing-image"
                  alt={item.name}
                  src={`${item.listing_img}`}
                />
              </div>
              <div className="sc-container__listing-details">
                <NavLink className="sc-listing-page-link" to={`/listings/${item.id}`}>
                  <div className="sc-container__listing-name">
                    {item.name}
                  </div>
                </NavLink>
                <button
                  className="remove-cart-item-btn"
                  value={item.id}
                  // onClick={setListingId}
                  onClick={(e) => setListingId(e.target.value)}
                >Remove{item.id}</button>
              </div>
              <div className="sc-container__listing-price">
                ${item.price}
              </div>
            </div>
          </section>

        )
      })}
      <span>Subtotal: ${total}</span>
    </div>
  )
}

export default ShoppingCart;