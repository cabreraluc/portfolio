import styles from "../cssModules/ThirtSection.module.css";
import { Link } from "react-router-dom";
import { SiSequelize } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { DiReact } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { DiScrum } from "react-icons/di";
import { DiTrello } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import CodeIcon from "@mui/icons-material/Code";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { SiMongodb } from "react-icons/si";
import AOS from "aos";

export default function ThirtSection() {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
  return (
    <div id="seccion-3" className={styles.container}>
      <div className={styles.time_line} data-aos="fade-right">
        <h3> TRAYECTORIA</h3>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
            >
              May 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot
                sx={{
                  color: "white",
                  backgroundColor: "#4D4C7D",
                  border: "solid 2px white",
                }}
              >
                <CodeIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Henry
              </Typography>
              <Typography>Empecé mis estudios en Henry</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
              Agosto 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot
                sx={{
                  color: "white",
                  backgroundColor: "#4D4C7D",
                  border: "solid 2px white",
                }}
              >
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Proyecto individual - The Pokedex
              </Typography>
              <Typography>Proyecto individual con tematica Pokemons</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
              Septiembre 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot
                sx={{
                  color: "white",
                  backgroundColor: "#4D4C7D",
                  border: "solid 2px white",
                }}
              >
                <GroupsIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Proyecto grupal - Arket
              </Typography>
              <Typography>Because you need rest</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
              Enero 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              <TimelineDot
                sx={{
                  color: "white",
                  backgroundColor: "#4D4C7D",
                  border: "solid 2px white",
                }}
              >
                <WorkOutlineIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                JRC Studio
              </Typography>
              <Typography>
                Trabajo en JRC Studio como Desarrollador Fullstack
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div className={styles.technologies_container} data-aos="fade-up">
        <h3> TECNOLOGÍAS</h3>
        <div className={styles.technologies_box}>
          <div className={styles.technologies}>
            <span>HTML</span>
            <AiFillHtml5 className={styles.technologies_icon} />
          </div>
          <div className={styles.technologies}>
            <span>CSS</span>
            <DiCss3 className={styles.technologies_icon} />
          </div>
          <div className={styles.technologies}>
            <span>JavaScript</span>
            <IoLogoJavascript className={styles.technologies_icon} />
          </div>
          <div className={styles.technologies}>
            <span>React</span>
            <DiReact className={styles.technologies_icon} />
          </div>
          <div className={styles.technologies}>
            <span>Redux</span>
            <SiRedux className={styles.technologies_icon} />
          </div>
          <div className={styles.technologies}>
            <span>Node</span>
            <FaNodeJs className={styles.technologies_icon} />
          </div>
          <div className={styles.technologies}>
            <span>Express</span>
            <SiExpress className={styles.technologies_icon} />
          </div>
          <div className={styles.technologies}>
            <span>Sequelize</span>
            <SiSequelize className={styles.technologies_icon} />
          </div>
          <div className={styles.technologies}>
            <span>PostgreSQL</span>
            <SiPostgresql className={styles.technologies_icon} />
          </div>

          <div className={styles.technologies}>
            <span>Github</span>
            <AiFillGithub className={styles.technologies_icon} />
          </div>
          <div className={styles.technologies}>
            <span>Scrum</span>
            <DiScrum className={styles.technologies_icon} />
          </div>
          <div className={styles.technologies}>
            <span>Trello</span>
            <DiTrello className={styles.technologies_icon} />
          </div>
          <div className={styles.technologies}>
            <span>MongoDB</span>
            <SiMongodb className={styles.technologies_icon} />
          </div>
        </div>
      </div>
    </div>
  );
}
