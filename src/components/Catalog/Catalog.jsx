import React, { useState } from 'react';
import './Catalog.css';
import Filter from '../Filter/Filter';
import products from '../../data';
import Search from '../Search/Search';
import Cart from '../Cart/Cart';

export default function Catalog() {
    const [sorting, setSorting] = useState('default');
    const [query, setQuery] = useState('');
    const [cartItems, setCartItems] = useState([]); // Состояние для корзины

    const handleSortingChange = (event) => {
        setSorting(event.target.value);
    };

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
    };

    const handleAddToCart = (product) => {
        setCartItems(prevItems => [...prevItems, product]); // Добавление товара в корзину
    };

    const filteredProducts = () => {
        const filtered = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
        switch (sorting) {
            case 'priceAscending':
                return filtered.slice().sort((a, b) => a.price - b.price);
            case 'priceDescending':
                return filtered.slice().sort((a, b) => b.price - a.price);
            case 'nameA':
                return filtered.slice().sort((a, b) => a.name.localeCompare(b.name));
            case 'nameZ':
                return filtered.slice().sort((a, b) => b.name.localeCompare(a.name));
            default:
                return filtered;
        }
    };

    return (
        <div className="container">
            <div className="catalog">
                <h2>Каталог товаров</h2>
                <div className="catalog-header">
                    <Search query={query} onChangeQuery={handleQueryChange} />
                    <Filter sorting={sorting} onSortingChange={handleSortingChange} />
                </div>
                <div className="catalog-items">
                    {filteredProducts().map(product => (
                        <div className="catalog-item" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <div className="catalog-item-info">
                                <h4>{product.name}</h4>
                                <div className="desc">
                                    <p>{product.description}</p>
                                </div>
                                <h5>{product.price} ₽</h5>
                                <div className='product-btn'>
                                    <button onClick={() => handleAddToCart(product)} className='btn'>Добавить в корзину</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Cart cartItems={cartItems} />
        </div>
    );
}
