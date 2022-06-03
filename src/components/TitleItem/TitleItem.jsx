import './TitleItem.css';

export const TitleItem = ({title, subtitle}) => {
    return (
        <div className="Title">
            <h2 className="Title__item">{title}</h2>
            <h4 className="Subtitle__item">{subtitle}</h4>
        </div>
    );
}