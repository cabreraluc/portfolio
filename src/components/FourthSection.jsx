import styles from "../cssModules/FourthSection.module.css";
import { AiFillGithub } from "react-icons/ai";

import { AiFillLinkedin } from "react-icons/ai";

export default function FourthSection() {
  return (
    <div className={styles.fourth_section} id="seccion-4">
      <div className={styles.form_container}>
        <h2>Contacto</h2>
        <div>
          <form
            action="https://formsubmit.co/cabreralucaspatricio@gmail.com"
            method="POST"
          >
            <div className={styles.contact_item}>
              <label for="name">Nombre</label>
              <input type="text" name="name" />
            </div>
            <div className={styles.contact_item}>
              <label for="email">Correo electrónico del remitente</label>
              <input type="email" name="email" />
            </div>
            <div className={styles.contact_item}>
              <label for="subject">Asunto</label>
              <input type="text" name="subject" />
            </div>
            <div className={styles.contact_item}>
              <label for="comments">Mensaje</label>
              <textarea name="comments" cols="15" rows="5"></textarea>
            </div>
            <input type="submit" value="Enviar" className={styles.input_send} />

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
        </div>
        <h5 style={{ margin: "1rem" }}>cabreralucaspatricio@gmail.com</h5>
        <h5 style={{ margin: "1rem" }}>+54 9 11 64380322</h5>
      </div>
    </div>
  );
}
