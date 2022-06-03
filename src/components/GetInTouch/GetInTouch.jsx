import './GetInTouch.css';
import Phone from '../../img/GetInTouch/phone__img.svg';
import Geo from '../../img/GetInTouch/geo__img.svg';
import Telegram from '../../img/GetInTouch/telegram__img.svg';

export const GetInTouch = ({text, afterText, title, btn}) => {
    return (
        <section className="Get">
            <div className="Cards">
                <div className="Card__item">
                    <div className="Card__icon">
                        <img src={Phone} alt="phone" />
                    </div>
                    <div className="Card__text">{text}</div>
                    <div className="Card__afterText">{afterText}</div>
                    <div className="Card__title">{title}</div>
                    <div className="Get__card_button">
                        <a className="Get__card_link" href="#">{btn}</a>
                    </div>
                </div>
                <div className="Card__item Card__item_primary">
                    <div className="Card__icon">
                        <img src={Geo} alt="phone" />
                    </div>
                    <div className="Card__text Card__text_primary">{text}</div>
                    <div className="Card__afterText Card__text_primary">{afterText}</div>
                    <div className="Card__title Card__title_primary">{title}</div>
                    <div className="Get__card_button">
                        <a className="Get__card_link Card__link_primary" href="#">{btn}</a>
                    </div>
                </div>
                <div className="Card__item">
                    <div className="Card__icon">
                        <img src={Telegram} alt="phone" />
                    </div>
                    <div className="Card__text">{text}</div>
                    <div className="Card__afterText">{afterText}</div>
                    <div className="Card__title">{title}</div>
                    <div className="Get__card_button">
                        <a className="Get__card_link" href="#">{btn}</a>
                    </div>
                </div>
            </div>
        </section>
    );
}