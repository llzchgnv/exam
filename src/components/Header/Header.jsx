import React, { useState } from 'react'
import './Header.css'

import cart from '../../media/simple-cart.svg'
import prof from '../../media/profile-circle.svg'

import popular from '../../data';

export default function Header() {
    let [cartOpen, setCartOpen] = useState(false);


    return (
        <div className="container">
            <header>
                <a href="#" className='logo'>SAFQ</a>
                <div className="header-menu">
                    <a href="#" className='btn2'>Главная</a>
                    <a href="#" className='btn2'>Каталог</a>
                    <a href="#" className='btn2'>О нас</a>
                </div>

                <div className="header-menu-icon">
                    <a href="#" onClick={() => setCartOpen(cartOpen = !cartOpen)}><img src={cart} alt="" /></a>

                    {cartOpen && (
                        <div className="shop-carts">
                            <h3>Корзина товаров</h3>
                            {popular.map((item, index) => (
                                <div className='shop-cart-item' key={item.id}>
                                    <img src={item.image} alt={item.name} />
                                    <div className="shop-cart-item-title">
                                        <h4>{item.name}</h4>
                                        <h5>{item.price} ₽</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <a href="#"><img src={prof} alt="" /></a>
                    <a href="#" className='btn'>войти</a>
                </div>
            </header>
        </div>

    )
}
