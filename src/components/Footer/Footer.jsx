import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import swal from "sweetalert";
import styles from "../../cssModules/FourthSection.module.css";
const Footer = () => {
  const copy = async () => {
    await navigator.clipboard.writeText("cabreralucaspatricio@gmail.com");
    swal("", "Email copiado al portapapeles.", "success");
  };

  return (
    <div className={styles.fourth_section} id="seccion-4">
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
            <AiFillMail />
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Footer;
