import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getItems, removeItem } from '../../store/cart';
import { getListings } from '../../store/listings';
import CartItems from '../CartItems';

import './ShoppingCart.css';

const ShoppingCart = () => {
  const sessionUser = useSelector(state => state.session.user)
  const user_id = parseInt(sessionUser.id)

  const cartItems = useSelector(state => state.cart.cartItems)
  console.log("test", cartItems)

  const dispatch = useDispatch();

  const [content, setContent] = useState(true);

  useEffect(() => {
    dispatch(getItems(sessionUser.id))
  }, [dispatch, sessionUser.id, content]);

  console.log('cartItems', cartItems)

  if (!cartItems || !cartItems.length) {
    return (
      <div className="shoppingCart-container">
        <h2>Shopping Cart</h2>
        <span>Price</span>
          <div className="cart-nothing-text">
            Items you add to cart will show up here
          </div>
        <span className="line"></span>

        <span>Subtotal: $0</span>
      </div>
    )
  }

  const change = () => {
    setContent(!content)
  }


  let total = 0

  cartItems.map((item) => {
    // console.log('item', item)
    total += item.price
  })


  return (
    <div className="shoppingCart-container">
      <h2>Shopping Cart</h2>
      <span>Price</span>
      <span className="line"></span>
      {cartItems.map((item) => {
        return (
          <CartItems
            user_id={user_id}
            listing_id={item.id}
            name={item.name}
            listing_img={item.listing_img}
            price={item.price}
            change={change}
          />
        )
      })}
      <span>Subtotal: ${total}</span>
    </div>
  )
}

export default ShoppingCart;