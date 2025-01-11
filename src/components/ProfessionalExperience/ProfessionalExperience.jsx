import * as React from "react";
import styles from "../../cssModules/ProfessionalExperience.module.css";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import jrcImg from "../../assets/jrcLogo.png";
import car2TokenImg from "../../assets/car2tokenLogo.png";
import { SiStyledcomponents } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import Card from "../Card/Card";
import JRCS from "../CardsContent/JRCS";
import C2T from "../CardsContent/C2T";

const experienceCard = [
  {
    card: <C2T />,
    img: car2TokenImg,
    icons: [
      <SiTypescript size={35} />,
      <SiNextdotjs size={35} />,
      <SiTailwindcss size={35} />,
      <SiExpress size={35} />,
      <FaNodeJs size={35} />,
      <SiMongodb size={35} />,
    ],
  },
  {
    card: <JRCS />,
    img: jrcImg,
    icons: [
      <IoLogoJavascript size={35} />,
      <SiStyledcomponents size={35} />,
      <DiReact size={35} />,
      <SiExpress size={35} />,
      <FaNodeJs size={35} />,
      <SiMongodb size={35} />,
    ],
  },
];

export default function ProfessionalExperience() {
  AOS.init();
  return (
    <div className={styles.container} id="seccion-3">
      <h1 className={styles.title}>Professional experience</h1>
      <div className={styles.cards_container}>
        {experienceCard.map((card, index) => {
          return (
            <Card key={index} icons={card.icons} img={card.img}>
              {card.card}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
