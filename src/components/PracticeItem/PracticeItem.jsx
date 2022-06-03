import './PracticeItem.css';

export const PracticeItem = ({icon, title, text}) => {
    return (
        <div className="Practice__item">
            <div className="Practice__box">
                <div className="Practice__item_title">{title}</div>
                <div className="Practice__item_subtitle">{text}</div>
            </div>
                <div className="Practice__img">
                    <img className="Practice__img" src={icon} alt="img" title="icon"/>
            </div>
        </div>
    );
}