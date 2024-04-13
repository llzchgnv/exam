import React, { useState } from 'react';
import './Slider.css';

import popular from '../../data';

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    function showItem(index) {
        setCurrentSlide(index - 1);
    }

    return (
        <div className="container">
            <h2>Популярные товары</h2>
            <div className="slider">
                <div className="slider-content" style={{ transform: `translateX(-${currentSlide * 25}%)` }}>
                    {popular.map((item, index) => (
                        <div className='item' key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <div className="item-title">
                                <h4>{item.name}</h4>
                                <h5>{item.price} ₽</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="controls">
                <button onClick={() => showItem(1)}></button>
                <button onClick={() => showItem(2)}></button>
                <button onClick={() => showItem(3)}></button>
                <button onClick={() => showItem(4)}></button>
            </div>
        </div>
    );
}
