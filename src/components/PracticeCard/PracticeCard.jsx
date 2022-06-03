import './PracticeCard.css';
import { PracticeItem } from '../PracticeItem';
import firstImg from '../../img/PracticeImg/first__img.png';
import secondImg from '../../img/PracticeImg/second__img.png';
import thirdImg from '../../img/PracticeImg/third__img.png';
import fourthImg from '../../img/PracticeImg/fourth__img.png';

const ITEMS_DATA = [
    {
        icon: firstImg,
        title: "A single source of truth",
        text: "Newton thought that light was made up of particles, but then it was discovered",
    },
    {
        icon: secondImg,
        title: "Fastest way to organize",
        text: "“Quantum mechanics” is the description of the behaviour of matter",
    },
    {
        icon: thirdImg,
        title: "Fastest way to take action",
        text: "They describe a universe consisting of bodies moving",
    },
    {
        icon: fourthImg,
        title: "Work better together",
        text: "They finally obtained a consistent description of the behaviour",
    },
];

export const PracticeCard = () => {
    return (
        <section className="Practice__advice">
                {ITEMS_DATA.map(({ icon, title, text }) => (
                    <PracticeItem icon={icon} title={title} text={text} />
                ))}
        </section>
    );
}