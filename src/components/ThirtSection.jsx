import styles from "../cssModules/SecondSection.module.css";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import jrcImg from "../cssModules/jrcLogo.png";
import car2TokenImg from "../cssModules/car2tokenLogo.png";
import { SiStyledcomponents } from "react-icons/si";

import * as React from "react";
import { SiMongodb } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

export default function SecondSection() {
  AOS.init();
  return (
    <div className={styles.contenedorPrincipal} id="seccion-2">
      <div className={styles.contenedorDeTitulo}>
        <h1>Experiencia profesional</h1>
      </div>
      <div className={styles.contenedorDeCards}>
        <div className={styles.project_card} data-aos="fade-top">
          <div className={styles.project_card_left}>
            <div className={styles.img_and_text}>
              <div className={styles.img_container}>
                <img
                  src={car2TokenImg}
                  alt="car2token_img"
                  className={styles.first_img}
                />
              </div>
              <div className={styles.text_and_icons}>
                <div className={styles.text}>
                  <h1>Car2Token - Full Stack Web Developer</h1>
                  <span>
                    Desarrollo de WEBAPP & API para otorgamientos de créditos
                    fiduciarios.
                    <br /> <br />
                    Desarrollo de sistema de cotización simulador de créditos.
                    <br /> <br /> Sistema de registro de datos por KYC con
                    sistema de escaneo de DNI. <br /> <br /> Desarrollo de
                    dashboard administrativo para verificar datos y gestionar
                    ofertas.
                    <br /> <br /> Integración de transferencias en USDT en la
                    red blockchain Polygon (anteriormente en Rootstock) y pagos
                    con sistema de créditos francés, gestionados a través de una
                    wallet. Implementación de smart contracts en Solidity.{" "}
                    <br />
                    <br /> Implementación de PIXEL-FB de META para realizar
                    seguimiento de actividad en la web
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.icons}>
            <SiTypescript size={35} />
            <SiNextdotjs size={35} />
            <SiTailwindcss size={35} />
            <SiExpress size={35} /> <FaNodeJs size={35} />
            <SiMongodb size={35} />
          </div>
        </div>
        <div className={styles.project_card} data-aos="fade-top">
          <div className={styles.project_card_left}>
            <div className={styles.img_and_text}>
              <div className={styles.img_container}>
                <img
                  src={jrcImg}
                  alt="jrc_studio_img"
                  className={styles.first_img}
                />
              </div>
              <div className={styles.text_and_icons}>
                <div className={styles.text}>
                  <h1>JRC Studio - Full Stack Web Developer</h1>
                  <span>
                    Desarrollo de aplicación web Pixel Perfect y creación de
                    interfaz interactivas y responsivas. <br /> <br />
                    Desarrollo de aplicación web progresiva (PWA) con
                    integración de blockchain (Algorand) y sistemas de escaneo
                    de códigos QR para generar networking entre los usuarios.{" "}
                    <br /> <br />
                    Experiencia en diseño de arquitecturas de información,
                    incluyendo la creación de mapas de sitio, diagramas
                    operacionales y wireframes. <br /> <br />
                    Habilidades en el desarrollo de sistemas de gestión de
                    contenido (CMS) y APIs/Backends con bases de datos off-chain
                    para la administración de información y reglas de negocio.
                    <br /> <br />
                    <br /> <br />
                    Conocimiento en evaluación de servicios de infraestructura,
                    incluyendo proveedores de correo electrónico transaccional y
                    notificaciones push.
                    <br /> <br />
                    Desarrollo de aplicativos móviles (APK de Android) para
                    seguimiento y administración logística.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.icons}>
            <IoLogoJavascript size={35} />
            <SiStyledcomponents size={35} />
            <DiReact size={35} />
            <SiExpress size={35} /> <FaNodeJs size={35} />
            <SiMongodb size={35} />
          </div>
        </div>
      </div>
    </div>
  );
}
