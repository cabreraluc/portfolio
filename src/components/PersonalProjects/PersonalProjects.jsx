import * as React from "react";
import styles from "../../cssModules/PersonalProjects.module.css";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import jrcImg from "../../assets/jrcLogo.png";
import car2TokenImg from "../../assets/car2tokenLogo.png";
import barulloImg from "../../assets/barullo.png";
import BMImg from "../../assets/BM.jpg";
import { SiStyledcomponents } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import ExperienceCard from "../Card/Card";
import {
  FreeClasses,
  SalesManagementSystem,
  TicketSalesApplication,
} from "../CardsContent/BrilliantManiacs";
const experienceCard = [
  {
    card: <FreeClasses />,
    img: BMImg,
    icons: [
      <AiFillHtml5 size={35} />,
      <DiCss3 size={35} />,
      <IoLogoJavascript size={35} />,
      <DiReact size={35} />,
    ],
  },
  {
    card: <TicketSalesApplication />,
    img: barulloImg,
    icons: [
      <IoLogoJavascript size={35} />,
      <DiReact size={35} />,
      <SiStyledcomponents size={35} />,
      <FaNodeJs size={35} />,
      <SiExpress size={35} />,
      <SiMongodb size={35} />,
    ],
  },
  {
    card: <SalesManagementSystem />,
    img: BMImg,
    icons: [
      <IoLogoJavascript size={35} />,
      <DiReact size={35} />,
      <SiStyledcomponents size={35} />,
      <FaNodeJs size={35} />,
      <SiExpress size={35} />,
      <SiMongodb size={35} />,
    ],
  },
];

export default function PersonalProjects() {
  AOS.init();
  return (
    <div className={styles.container} id="seccion-3">
      <h1 className={styles.title}>Personal projects</h1>
      <div className={styles.cards_container}>
        {experienceCard.map((card, index) => {
          return (
            <ExperienceCard key={index} icons={card.icons} img={card.img}>
              {card.card}
            </ExperienceCard>
          );
        })}
      </div>
    </div>
  );
}
