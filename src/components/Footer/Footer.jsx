import { FooterComponent } from '../FooterComponent';
import './Footer.css';
import Phone from '../../img/Footer/footer__phone.svg';
import Geo from '../../img/Footer/footer__geo.svg';
import Telegram from '../../img/Footer/footer__telegram.svg';

export const Footer = () => {
    return (
        <div className="Footer__container">
            <FooterComponent 
                title={"Company Info"}
                itemFirst={"About Us"}
                itemSecond={"About Us"}
                itemThird={"We are hiring"}
                itemFourth={"Blog"}
            />
            <FooterComponent 
                title={"Legal"}
                itemFirst={"About Us"}
                itemSecond={"About Us"}
                itemThird={"We are hiring"}
                itemFourth={"Blog"}
            />
            <FooterComponent 
                title={"Features"}
                itemFirst={"Business Marketing"}
                itemSecond={"User Analytic"}
                itemThird={"Live Chat"}
                itemFourth={"Unlimited Support"}
            />
            <FooterComponent 
                title={"Resources"}
                itemFirst={"IOS & Android"}
                itemSecond={"Watch a Demo"}
                itemThird={"Customers"}
                itemFourth={"API"}
            />
            <div className="Footer__item">
            <div className="Footer__title">
                <h3 className="Footer__title_menu">Get In Touch</h3>
            </div>
            <div className="Footer__menu">
                <ul className="Footer__menu_list">
                    <li className="Footer__menu_item">
                        <img src={Phone} alt="Phone" />
                        <a className="Footer__menu_link" href="#">(480) 555-0103</a>
                    </li>
                    <li className="Footer__menu_item">
                        <img src={Geo} alt="Phone" />
                        <a className="Footer__menu_link" href="#">4517 Washington Ave.</a>
                    </li>
                    <li className="Footer__menu_item">
                        <img src={Telegram} alt="Phone" />
                        <a className="Footer__menu_link" href="#">debra.holt@example.com</a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    );
}