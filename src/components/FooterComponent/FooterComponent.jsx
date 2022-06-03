import './FooterComponent.css';

export const FooterComponent = ({title, itemFirst, itemSecond, itemThird, itemFourth}) => {
    return (
        <div className="Footer__item">
            <div className="Footer__title">
                <h3 className="Footer__title_menu">{title}</h3>
            </div>
            <div className="Footer__menu">
                <ul className="Footer__menu_list">
                    <li className="Footer__menu_item">
                        <a className="Footer__menu_link" href="#">{itemFirst}</a>
                    </li>
                    <li className="Footer__menu_item">
                        <a className="Footer__menu_link" href="#">{itemSecond}</a>
                    </li>
                    <li className="Footer__menu_item">
                        <a className="Footer__menu_link" href="#">{itemThird}</a>
                    </li>
                    <li className="Footer__menu_item">
                        <a className="Footer__menu_link" href="#">{itemFourth}</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}