import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getItems } from '../../store/cart';
import { getListings } from '../../store/listings';

import './ShoppingCart.css';

const ShoppingCart = () => {
  const sessionUser = useSelector(state => state.session.user)
  // const allListings = useSelector(state => {
  //   const lists = Object.values(state.listing)
  //   return lists
  // })
  const cartItems = useSelector(state => {
    const items = Object.values(state.cart)
    // console.log("state.cart", state.cart.lists)
    return items;
  })
  // const cartItems = useSelector(state => state.cart)

  // console.log("allListings", allListings)

  // const userListings = allListings.filter((listing => listing.id === ))

  console.log("cartItems", cartItems)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems(sessionUser.id))
  }, [dispatch, sessionUser.id]);

  // useEffect(() => {
  //   dispatch(getListings())
  // }, [dispatch])

  // let cartItemsArr = cartItems[0]

  // console.log('cartItemsArr', cartItemsArr)

  // console.log(sessionUser.id)
  // const userItems = cartItems.filter((item => item.user_id))
  // console.log("userItems", userItems)
  let total = 0
  cartItems.map((item) => {
    total += item.Listing.price
  })

  if (!cartItems) return null

  // const removeCartItem = () => {
  //   dispatch()
  // }

  return (
    <div className="shoppingCart-container">
      <h2>Shopping Cart</h2>
      <span>Price</span>
      <span className="line"></span>
      {cartItems.map((oneItem) => {
        // { console.log('item', oneItem) }
        return (
          <section className="sc-listing-page" key={oneItem.Listing.id}>

            {/* {console.log("listing", listing)} */}
            <div className="sc-container__listing">
              <div>
                <img
                  className="sc-container__listing-image"
                  alt={oneItem.Listing.name}
                  src={`${oneItem.Listing.listing_img}`}
                />
              </div>
              <div className="sc-container__listing-details">
                <NavLink className="sc-listing-page-link" to={`/listings/${oneItem.Listing.id}`}>
                  <div className="sc-container__listing-name">
                    {oneItem.Listing.name}
                  </div>
                </NavLink>
                <button 
                className="remove-cart-item-btn"
                // onClick={removeCartItem}
                >Remove</button>
              </div>
              <div className="sc-container__listing-price">
                ${oneItem.Listing.price}
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