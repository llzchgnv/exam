import React from 'react';
import './Search.css';

import search from '../../media/search.svg'

export default function Search({ query, onChangeQuery }) {
    return (
        <div className="search">
            <div className="ser">
                <img src={search} alt="" />
            </div>
            <div className="serc">
                <label htmlFor="search"></label>
                <input
                    value={query}
                    type="text"
                    name="search"
                    placeholder="Поиск"
                    onChange={onChangeQuery}
                />
            </div>

        </div>
    );
}
