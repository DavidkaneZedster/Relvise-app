import './ClientCard.css';
import ClientSettingsImg from '../../img/ClientImg/client__settings_img.svg';
import JobImg from '../../img/ClientImg/job__img.svg';
import PeopleImg from '../../img/ClientImg/people__img.svg';
import PrizeImg from '../../img/ClientImg/prize__img.svg';
import { ClientItem } from '../ClientItem';

const ITEMS_DATA = [
    {
        icon: PeopleImg,
        title: "972 +",
        text: "Business & Finance",
    },
    {
        icon: ClientSettingsImg,
        title: "181 +",
        text: "Travel & Aviation",
    },
    {
        icon: PrizeImg,
        title: "98%",
        text: "Consumer Products",
    },
    {
        icon: JobImg,
        title: "746 +",
        text: "Environmental",
    },
];

export const ClientCard = () => {
    return (
        <section className="Client__matters">
                {ITEMS_DATA.map(({ icon, title, text }) => (
                    <ClientItem icon={icon} title={title} text={text} />
                ))}
        </section>
    );
}