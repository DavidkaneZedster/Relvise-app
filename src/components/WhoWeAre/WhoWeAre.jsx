import './WhoWeAre.css';
import VideoImg from '../../img/WhoWeAre/card__item.png';
import WhoPeopleImg from '../../img/WhoWeAre/speed__icon.png';
import SpeedImg from '../../img/WhoWeAre/people__icon.png';


export const WhoWeAre = ({title, subtitle}) => {
    return (
        <section className="Who__we">
            <div className="Who__video">
                <img className="Video" src={VideoImg} alt="video" />
            </div>
            <div className="Who__info">
                <div className="Who__title">Most trusted in our field</div>
                <div className="Who__subtitle">Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</div>
                <div className="Points">
                    <div className="Point__item">
                        <div className="Point__container">
                            <div className="Point__item_video">
                                <img src={WhoPeopleImg} alt="people" />
                            </div>
                            <div className="Point__text">
                                <div className="Point__title">{title}</div>
                                <div className="Point__subtitle">{subtitle}</div>
                            </div>
                        </div>
                    </div>
                    <div className="Point__item">
                        <div className="Point__container">
                            <div className="Point__item_video">
                                <img src={SpeedImg} alt="people" />
                            </div>
                            <div className="Point__text">
                                <div className="Point__title">{title}</div>
                                <div className="Point__subtitle">{subtitle}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}