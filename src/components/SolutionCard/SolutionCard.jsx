import SettingsImg from "../../img/Header/settings__image.svg";
import { SolutionItem } from "../SolutionItem/SolutionItem";
import "./SolutionCard.css";

const MOCK_DATA = [
    {
        icon: SettingsImg,
        title: "Surface Transport & Logistics",
        text: "We focus on ergonomics and meeting you where you work. ",
    },
    {
        icon: SettingsImg,
        title: "Save money and time",
        text: "Just type what's on your mind and we'll get you there.",
    },
    {
        icon: SettingsImg,
        title: "Environmental Consulting",
        text: "the quick fox jumps over the lazy dog",
    },
];

export const SolutionCard = () => {
    return (
        <div className="Solution__card">
            {MOCK_DATA.map(({ icon, title, text }) => (
                <SolutionItem icon={icon} title={title} text={text} />
            ))}
        </div>
    );
};
