import styles from "../cssModules/MainPage.module.css";
import first_image from "../cssModules/process-4.gif";
import { BsChevronDown } from "react-icons/bs";
import pokemons from "../cssModules/pokmeons.gif";
import artket from "../cssModules/artket.gif";
import carrera from "../cssModules/imagen de carrera.png";
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
import swal from "sweetalert";
import { useEffect } from "react";
import useObserver from "./useObsserver";
import CV from "./CV Cabrera Lucas.pdf";
import ResponsiveAppBar from "./ResponsiveAppBar";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirtSection from "./ThirtSection";
import AOS from "aos";
import { MdEmail } from "react-icons/md";

export default function MainPage() {
  // const [observer, setElements, entries] = useObserver({
  //   treshold: 1,
  //   rootMargin: "-70% -0% -0% -30%",
  //   root: null,
  // });

  // useEffect(() => {
  //   const arrows = [];
  //   arrows.push(document.querySelector("#arrow1"));
  //   arrows.push(document.querySelector("#arrow2"));
  //   arrows.push(document.querySelector("#arrow3"));

  //   setElements(arrows);
  // }, [setElements]);

  // useEffect(
  //   function () {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         const arrow = entry.target;
  //         entry.target.className = styles.down_button;
  //         console.log(arrow.id);
  //       } else {
  //         entry.target.className = styles.flechaNoObservada;
  //       }
  //     });
  //   },
  //   [entries, observer]
  // );
  AOS.init();

  const copy = async () => {
    await navigator.clipboard.writeText("cabreralucaspatricio@gmail.com");
    swal("", "Email copiado al portapapeles.", "success");
  };

  return (
    <div>
      <div className={styles.container}>
        <div>
          <ResponsiveAppBar></ResponsiveAppBar>
        </div>
        <FirstSection></FirstSection>
        <SecondSection></SecondSection>
        <ThirtSection></ThirtSection>

        {/* <div className={styles.fourth_section} id="seccion-4">
          <div className={styles.form_container} data-aos="fade-up">
            <h2>Contacto (apartado no disponible)</h2>
            <div>
              <form
                action="https://formsubmit.co/cabreralucaspatricio@gmail.com"
                method="POST"
              >
                <div className={styles.contact_item}>
                  <label htmlFor="name">Nombre</label>
                  <input type="text" name="name" />
                </div>
                <div className={styles.contact_item}>
                  <label htmlFor="email">
                    Correo electrónico del remitente
                  </label>
                  <input type="email" name="email" />
                </div>
                <div className={styles.contact_item}>
                  <label htmlFor="subject">Asunto</label>
                  <input type="text" name="subject" />
                </div>
                <div className={styles.contact_item}>
                  <label htmlFor="comments">Mensaje</label>
                  <textarea name="comments" cols="15" rows="5"></textarea>
                </div>
                <input
                  type="submit"
                  value="Enviar"
                  className={styles.input_send}
                />

                <input
                  type="hidden"
                  name="_next"
                  value="https://cabreraluc-info.vercel.app"
                ></input>
                <input type="hidden" name="_captcha" value="false"></input>
              </form>
            </div>
            <div className={styles.contact_items}>
              <a
                href="https://www.linkedin.com/in/lucas-cabrera-0b596224b/"
                style={{ color: "white" }}
                target="_blanck"
              >
                <h1>
                  <AiFillLinkedin />
                </h1>
              </a>
              <a
                href="https://github.com/cabreraluc"
                style={{ color: "white" }}
                target="_blanck"
              >
                <h1>
                  <AiFillGithub />
                </h1>
              </a>
              <a style={{ color: "white" }} onClick={copy}>
                <h1>
                  <MdEmail></MdEmail>
                </h1>
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
