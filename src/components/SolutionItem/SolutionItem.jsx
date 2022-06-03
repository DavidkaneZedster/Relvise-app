import './SolutionItem.css'

export const SolutionItem = ({icon, title, text}) => {
    return (
        <div className="Solution__item">
            <div className="Solution__img">
                <img src={icon} alt="settings" />
            </div>
            <div className="Solution__item_title">{title}</div>
            <div className="Solution__item_subtitle">{text}</div>
        </div>
    );
}