import './FooterAfter.css';
import Facebook from '../../img/FooterAfter/facebook__icon.svg';
import Instagram from '../../img/FooterAfter/instagram__icon.svg';
import Twitter from '../../img/FooterAfter/twitter__icon.svg';
import Youtube from '../../img/FooterAfter/youtube__icon.svg';

export const FooterAfter = () => {
    return (
        <div className="Footer__after">
            <div className="After__text">Made With Love By Figmaland All Right Reserved</div>
            <div className="After__icons">
                <div className="After__icon">
                    <img src={Facebook} alt="Facebook" />
                </div>
                <div className="After__icon">
                    <img src={Instagram} alt="Instagram" />
                </div>
                <div className="After__icon">
                    <img src={Twitter} alt="Twitter" />
                </div>
                <div className="After__icon">
                    <img src={Youtube} alt="Youtube" />
                </div>
            </div>
        </div>
    );
}