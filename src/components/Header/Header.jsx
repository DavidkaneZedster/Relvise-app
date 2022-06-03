import './Header.css';
import './burger.js';
import search from '../../img/Header/search.svg';
import shop from '../../img/Header/shop.svg';
import burger from '../../img/Header/burger__menu.svg';
import close from '../../img/Header/close__image.png'

export const Header = () => {
    return (
        <header className='Header'>
            <div className="Header__logo">
                <a className='Header__link' href="#">Relvise</a>
            </div>
            <div className="Menu">
                <ul className="Menu__list" id='Nav-menu'>
                    <li className="Menu__item"><a className='Menu__link' href="#">Home</a></li>
                    <li className="Menu__item"><a className='Menu__link' href="#">Product</a></li>
                    <li className="Menu__item"><a className='Menu__link' href="#">Pricing</a></li>
                    <li className="Menu__item"><a className='Menu__link' href="#">Contact</a></li>
                    <div className="Menu__close">
                        <a className='Close__btn' id="Nav-close">
                            <img className='Close__img' src={close} alt="close" />
                        </a>
                    </div>
                </ul>
                <div className="Header__btns">
                    <a className='Header__btns_link' href="#"><img src={search} alt="search" /></a>
                    <a className='Header__btns_link' href="#"><img src={shop} alt="search" /></a>
                </div>
                <div className="Burger" id='Nav-open'>
                    <a href="#"><img className="Burger__menu" src={burger} alt="menu" /></a>
                </div>
            </div>
        </header>
    );
}

