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
import allStoreImg from "../cssModules/allstore.png";
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
            Como Desarrollador Fullstack en JRC Studio, junto con mi equipo,
            hemos trabajado en un emocionante proyecto que involucra una
            infraestructura completa compuesta por varios módulos y resultados
            clave. A continuación, detallo los principales aspectos y logros
            alcanzados:
            <br />
            Arquitectura de la información: Trabajamos en la creación de un mapa
            de sitio completo, diagramas operacionales, wireframes y un
            prototipo de baja fidelidad. Estos elementos nos permitieron
            establecer una estructura sólida para el proyecto, garantizando una
            experiencia de usuario intuitiva y eficiente.
            <br />
            CMS - Backoffice administrativo: Desarrollamos un aplicativo web de
            acceso administrador del sistema, que actúa como un centro de
            control para gestionar y administrar toda la información relevante y
            las reglas de negocio. Este componente es crucial para mantener el
            proyecto funcionando de manera eficiente y brindar a los
            administradores las herramientas necesarias para gestionar el
            sistema.
            <br />
            API / Backend + DB: Implementamos un backend robusto que actúa como
            una interfaz entre el front-end y la base de datos. Esta API permite
            realizar operaciones y consultas en la base de datos, asegurando un
            flujo de datos adecuado y una comunicación eficiente entre los
            diferentes componentes del sistema.
            <br />
            Servicios de infraestructura: Coordinamos la contratación de
            diversos servicios de infraestructura necesarios para el proyecto.
            Esto incluyó la selección de proveedores transaccionales de correo
            electrónico, servicios de notificaciones push y proveedores de
            nodos. Además, gestionamos los gastos de gas relacionados con las
            transacciones y operaciones del sistema.
            <br />
            Aplicativo móvil (funcionalidad robusta): Desarrollamos una
            aplicación Android APK para realizar un seguimiento logístico de
            roles específicos. Esta aplicación móvil proporciona un conjunto
            completo de funcionalidades y características necesarias para
            realizar un seguimiento eficiente y efectivo de las operaciones
            logísticas.
            <br />
            Mi trabajo en este proyecto demuestra mi experiencia como
            Desarrolladores Fullstack, estoy orgulloso de mi contribución a este
            proyecto y del valor que ha aportado a JRC Studio.
          </h3>
          <h2>
            <AiFillHtml5 /> <DiCss3 /> <IoLogoJavascript /> <DiReact />{" "}
            <SiExpress /> <FaNodeJs /> <SiMongodb />
          </h2>
        </div>
      </div>
      <div className={styles.project_card} data-aos="fade-right">
        <div className={styles.project_card_left}>
          <h1>AllStore</h1>
          <img src={allStoreImg} alt="" className={styles.first_img} />
        </div>

        <div className={styles.project_card_right}>
          <h3 style={{ textAlign: "left" }}>
            El proyecto AllStore es una iniciativa individual en la que estoy
            trabajando actualmente y que exhibo en mi portfolio. Se basa en el
            stack MERN (MongoDB, Express, React y Node.js) y está en desarrollo
            continuo.
            <br />
            Hasta el momento, he logrado implementar varias funcionalidades
            fundamentales que brindan a los usuarios una experiencia completa en
            la plataforma. Estas características incluyen la capacidad de crear
            cuentas de usuario y realizar un inicio de sesión seguro. Además, he
            incorporado un carrito de compras que permite a los usuarios agregar
            productos y administrar sus compras de manera conveniente.
            <br />
            Además, el proyecto cuenta con una sección de favoritos, donde los
            usuarios pueden guardar productos de su interés para futuras
            referencias. También he implementado una barra de búsqueda que
            facilita la localización de productos específicos en el catálogo.
            <br />
            A medida que el proyecto continúa su desarrollo, tengo planeado
            agregar nuevas funcionalidades para mejorar aún más la experiencia
            de usuario. Algunas de estas características incluyen métodos de
            pago seguros para facilitar las transacciones, búsquedas avanzadas
            mediante filtros para ayudar a los usuarios a encontrar productos
            específicos, la posibilidad de editar los datos del usuario,
            permitir comentarios en las publicaciones de los productos y
            desarrollar una aplicación móvil complementaria para brindar
            accesibilidad y conveniencia adicionales.
            <br />
            Este proyecto exhibe mi capacidad para trabajar de manera autónoma y
            mi habilidad para abordar el desarrollo de un sistema de comercio
            electrónico completo. Estoy entusiasmado con su progreso continuo y
            las futuras mejoras que le agregaré para ofrecer una experiencia aún
            más sólida y completa a los usuarios.
          </h3>
          <h2>
            <AiFillHtml5 /> <DiCss3 /> <IoLogoJavascript /> <DiReact />{" "}
            <SiExpress /> <FaNodeJs /> <SiMongodb />{" "}
          </h2>
        </div>
        <div className={styles.button_box}>
          <span>
            <a
              onClick={() => {
                window.open(
                  "https://github.com/cabreraluc/ecommerce_project_frontend",
                  "_blank"
                );
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
                  "https://github.com/cabreraluc/api_allstore",
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
            href="https://allstore-jet.vercel.app/"
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
          <h1>The Pokedex</h1>
          <img src={firstImg} alt="" className={styles.first_img} />
        </div>

        <div className={styles.project_card_right}>
          <h3 style={{ textAlign: "left" }}>
            El proyecto "Pokedex" es una aplicación desarrollada de forma
            individual y exhibida en mi portfolio. Me encargué de todas las
            etapas del proceso, desde el diseño del frontend hasta la
            implementación del backend y la gestión de la base de datos.
            <br />
            La Pokedex cuenta con una amplia gama de funcionalidades que
            permiten a los usuarios explorar y gestionar información relacionada
            con Pokémon. Entre sus características destacadas se incluyen
            filtros avanzados que facilitan la búsqueda precisa de Pokémon según
            diferentes criterios, como nombre e ID.
            <br />
            Además, he implementado la capacidad de crear y personalizar tu
            propio Pokémon, brindando a los usuarios la oportunidad de
            experimentar y dar rienda suelta a su imaginación. Para garantizar
            una experiencia óptima, también agregué la opción de eliminar
            Pokémon y una papelera de reciclaje, lo que permite recuperarlos en
            caso de eliminación accidental.
            <br />
            Este proyecto fue realizado durante mi participación en el bootcamp
            Henry, donde pude aplicar y consolidar mis habilidades de desarrollo
            web tanto en el frontend como en el backend. La Pokedex es un
            ejemplo destacado de mi capacidad para trabajar de manera autónoma y
            entregar un producto completo y funcional.
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
          <h3 style={{ textAlign: "left" }}>
            El proyecto Arket fue un proyecto de tipo eCommerce desarrollado en
            grupo . Durante su desarrollo, asumí varias responsabilidades y
            desafíos para garantizar su funcionamiento exitoso. A continuación,
            describo las contribuciones clave que realicé:
            <br />
            Filtros: Implementé un sistema de filtros que permitía a los
            usuarios refinar su búsqueda de obras de arte según diferentes
            criterios, como categoría, precio, tamaño, etc. Esto mejoró
            significativamente la experiencia del usuario al facilitar la
            navegación y la búsqueda de productos específicos.
            <br />
            Lógica de sesión de usuario: Me encargué de desarrollar la lógica
            que permitía a los usuarios registrarse, iniciar sesión y gestionar
            su perfil de usuario. Esto incluía la validación de datos de
            registro, el manejo de sesiones activas y la seguridad de la
            información del usuario.
            <br />
            Edición de datos del usuario: Implementé la funcionalidad que
            permitía a los usuarios editar su información personal y ajustar sus
            preferencias en el perfil de usuario. Esto garantizaba una
            experiencia personalizada y adaptable a las necesidades individuales
            de cada usuario.
            <br />
            Registro y logeo: Desarrollé los procesos de registro y logeo,
            asegurando una autenticación segura y confiable para los usuarios.
            Esto incluyó la validación de datos de registro, el manejo de
            contraseñas y la generación de tokens de sesión.
            <br />
            Correos electrónicos y alertas: Configuré el sistema de envío de
            correos electrónicos y alertas para mantener a los usuarios
            informados sobre el estado de sus órdenes, promociones especiales y
            novedades relevantes. Esto garantizaba una comunicación efectiva y
            oportuna con los clientes.
            <br />
            Órdenes de compra: Desarrollé la funcionalidad que permitía a los
            usuarios realizar órdenes de compra, seleccionar opciones de envío y
            gestionar el proceso de pago. Esto garantizaba una experiencia
            fluida y segura para los clientes durante todo el proceso de compra.
            <br />
            Varios formularios y parte del CSS: Me encargué de la implementación
            de varios formularios en el proyecto, como el formulario de
            registro, el formulario de contacto y otros formularios relacionados
            con el proceso de compra. Además, contribuí con parte del diseño y
            estilo CSS para mejorar la apariencia visual del proyecto.
            <br />
            Este proyecto fue realizado en el marco del bootcamp Henry, como un
            proyecto grupal en el que trabajé en colaboración con otros
            desarrolladores. Mi contribución en estas áreas específicas
            demuestra mi capacidad para trabajar en equipo y asumir
            responsabilidades clave en el desarrollo de un e-commerce de obras
            de arte funcional y completo.
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
