import React from 'react'
import './Footer.css'

import icon1 from '../../media/icon1.svg'
import icon2 from '../../media/icon2.svg'
import icon3 from '../../media/icon4.svg'
import icon4 from '../../media/icon4.svg'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <a href="#" className='logo2'>SAFQ</a>
                    <div className="footer-menu">
                        <a href="#">Главная</a>
                        <a href="#">Каталог</a>
                        <a href="#">О нас</a>
                    </div>
                    <div className="footer-menu">
                        <h4>Как с нами связаться?</h4>
                        <p>420061, Россия, Республика Татарстан, <br />
                            г.Казань, ул.Галеева 3​-А</p>
                        <p>89998887766</p>
                        <div className="footer-menu-icon">
                            <a href="#"><img src={icon1} alt="" /></a>
                            <a href="#"><img src={icon2} alt="" /></a>
                            <a href="#"><img src={icon3} alt="" /></a>
                            <a href="#"><img src={icon4} alt="" /></a>
                        </div>
                    </div>
                </div>

            </div>
        </footer >
    )
}
