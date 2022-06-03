import './Brands.css';
import firstBrand from '../../img/Brands/firstBrand.png';
import secondBrand from '../../img/Brands/secondBrand.png';
import thirdBrand from '../../img/Brands/thirdBrand.png';
import fourthBrand from '../../img/Brands/fourthBrand.png';
import fivethBrand from '../../img/Brands/fivethBrand.png';
import sixthBrand from '../../img/Brands/sixthBrand.png';

export const Brands = () => {
    return (
        <section className="Brands">
            <div className="Brands__list">
                <div className="Brand__item">
                    <img src={firstBrand} alt="Brand" />
                </div>
                <div className="Brand__item">
                    <img src={secondBrand} alt="Brand" />
                </div>
                <div className="Brand__item">
                    <img src={thirdBrand} alt="Brand" />
                </div>
                <div className="Brand__item">
                    <img src={fourthBrand} alt="Brand" />
                </div>
                <div className="Brand__item">
                    <img src={fivethBrand} alt="Brand" />
                </div>
                <div className="Brand__item">
                    <img src={sixthBrand} alt="Brand" />
                </div>
            </div>
            <div className="Sender">
                <div className="Sender__text">Subscribe For Latest Newsletter</div>
                <div className="Sender__place">
                    <input className="Sender__input" type="text" placeholder="Your Email" />
                    <a className="Sender__button" href="#">Subscribe</a>
                </div>
            </div>
        </section>
    );
}