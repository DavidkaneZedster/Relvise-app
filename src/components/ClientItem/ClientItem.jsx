import './ClientItem.css'

export const ClientItem = ({icon, title, text}) => {
    return (
        <div className="Client__item">
            <div className="Client__img">
                <img src={icon} alt="img" title="icon"/>
            </div>
            <div className="Client__item_title">{title}</div>
            <div className="Client__item_subtitle">{text}</div>
        </div>
    );
}