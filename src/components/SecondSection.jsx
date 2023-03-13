import styles from "../cssModules/SecondSection.module.css";
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
import { BsChevronDown } from "react-icons/bs";
import { useEffect } from "react";
import useObserver from "./useObsserver";
import AOS from "aos";
import "aos/dist/aos.css";
import firstImg from "../cssModules/thePokedex.png";
import secondImg from "../cssModules/artket.png";
import thirtSection from "../cssModules/jrc.png";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { SiMongodb } from "react-icons/si";

export default function SecondSection() {
  const openLinksPoke = () => {
    window.open("https://github.com/cabreraluc/front_pi");
    window.open("https://github.com/cabreraluc/backend_pi");
  };
  AOS.init();
  return (
    <div className={styles.container} id="seccion-2">
      <div className={styles.project_card} data-aos="fade-right">
        <div className={styles.project_card_left}>
          <h1>JRC Studio</h1>
          <img src={thirtSection} alt="" className={styles.first_img} />
        </div>
        <div className={styles.project_card_right}>
          <h3 style={{ textAlign: "left" }}>
            Trabajo como Desarrollador Fullstack en JRC Studio, proyecto con una
            infraestructura compuesta principalmente por los siguientes módulos
            y resultados clave:
          </h3>
          <h3 style={{ textAlign: "left" }}>
            ● Arq. de la información: Mapa de sitio, diagramas operacionales,
            wireframes, prototipo de baja, mapa de sitios, etc.
          </h3>
          <h3 style={{ textAlign: "left" }}>
            ● CMS - Backoffice administrativo : aplicativo web de acceso
            administrador del sistema. API / Backend + DB: off chain data: que
            permita administrar toda la información y reglas de negocio off
            chain.
          </h3>
          <h3 style={{ textAlign: "left" }}>
            ● Servicios de infraestructura: Servicios de infraestructura a
            contratar, por ejemplo, proveedor transaccional de correo
            electrónico, de push notifications, proveedor de nodos, gas fees,
            etc.
          </h3>
          <h3 style={{ textAlign: "left" }}>
            ● Aplicativo móvil (funcional robusto): Android APK para trackear
            rol logística
          </h3>
          <h2>
            <AiFillHtml5 /> <DiCss3 /> <IoLogoJavascript /> <DiReact />{" "}
            <SiExpress /> <FaNodeJs /> <SiMongodb />
          </h2>
        </div>
      </div>
      <div className={styles.project_card} data-aos="fade-right">
        <div className={styles.project_card_left}>
          <h1>The Pokedex</h1>
          <img src={firstImg} alt="" className={styles.first_img} />
        </div>
        <div className={styles.project_card_right}>
          <h3>
            Pokedex, desarrollado individualmente, me encargué tanto del
            frontend como el backend y la base de datos. Cuenta con filtros,
            búsquedas por nombre, por id, creación de tu propio Pokémon y de mi
            parte también le agregué la opción de poder eliminar y una papelera
            de reciclaje. Realizado como proyecto individual en el bootcamp
            Henry
          </h3>
          <h2>
            <AiFillHtml5 /> <DiCss3 /> <IoLogoJavascript /> <DiReact />{" "}
            <SiRedux /> <SiExpress /> <SiPostgresql /> <FaNodeJs />{" "}
            <SiSequelize />
          </h2>
        </div>
        <div className={styles.button_box}>
          <span>
            <a
              onClick={() => {
                window.open("https://github.com/cabreraluc/front_pi", "_blank");
              }}
              target="_blank"
              className={styles.button_box_span}
            >
              {" "}
              Frontend
            </a>
          </span>
          <span>
            <a
              onClick={() => {
                window.open(
                  "https://github.com/cabreraluc/backend_pi",
                  "_blank"
                );
              }}
              target="_blank"
              className={styles.button_box_span}
            >
              {" "}
              Backend
            </a>
          </span>
          <a
            href="https://thepokedex-cabreraluc.vercel.app/"
            target="_blank"
            className={styles.button_box_span}
          >
            {" "}
            Deploy
          </a>
        </div>
      </div>
      <div className={styles.project_card} data-aos="fade-right">
        <div className={styles.project_card_left}>
          <h1>Artket</h1>
          <img src={secondImg} alt="" className={styles.first_img} />
        </div>
        <div className={styles.project_card_right}>
          <h3>
            E-commerce de obras de arte, desarrollado en grupo. Realice los
            filtros, la lógica de sesión de usuario, edición de datos del
            usuario, registro, logeo, correos electrónicos, alertas, órdenes de
            compra, varios formularios, y parte del Css. Realizado como proyecto
            grupal en el bootcamp Henry.
          </h3>
          <h2>
            <AiFillHtml5 /> <DiCss3 /> <IoLogoJavascript /> <DiReact />{" "}
            <SiRedux /> <SiExpress /> <SiPostgresql /> <FaNodeJs />{" "}
            <SiSequelize />
          </h2>
          <div className={styles.button_box}></div>
        </div>
      </div>
    </div>
  );
}
