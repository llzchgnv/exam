import React from 'react';
import './Cart.css'

import plus from '../../media/plus.svg'

export default function Cart({ cartItems }) {
    return (
        <div className="cart">
            <h2>Корзина</h2>

            <div className="cart-items">

                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <div className="cart-cart">
                            <img src={item.image} />
                            <div className="cart-item-info">
                                <h4>{item.name}</h4>
                                <p>{item.price} ₽</p>
                            </div>
                        </div>
                        <img src={plus} className='plus' alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}
