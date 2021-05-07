import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';

import { removeItem } from '../../store/cart';

const CartItems = ({ user_id, listing_id, name, listing_img, price, change }) => {

    const dispatch = useDispatch();

    const removeCartItem = () => {
        dispatch(removeItem({ user_id, listing_id }))
        change();

    }
    return (
        <section className="sc-listing-page" key={listing_id}>
            <div className="sc-container__listing">
                <div>
                    <img
                        className="sc-container__listing-image"
                        alt={name}
                        src={`${listing_img}`}
                    />
                </div>
                <div className="sc-container__listing-details">
                    <NavLink className="sc-listing-page-link" to={`/listings/${listing_id}`}>
                        <div className="sc-container__listing-name">
                            {name}
                        </div>
                    </NavLink>
                    <button
                        className="remove-cart-item-btn"
                        onClick={removeCartItem}
                    >Remove</button>
                </div>
                <div className="sc-container__listing-price">
                    ${price}
                </div>
            </div>
        </section>
    )
};

export default CartItems