import styles from "../cssModules/FirstSection.module.css";

export default function FirstSection() {
  return (
    <div className={styles.content}>
      <div className={styles.title_description}>
        <div className={styles.title}>
          <h1>¡Bienvenido!</h1>
        </div>
        <div className={styles.description}>
          <h4>
            Soy un desarrollador fullstack apasionado y con experiencia en crear
            soluciones. Mi habilidad para adaptarme y aprender rápidamente me
            permite trabajar con cualquier tecnología que el proyecto necesite.
            Desde frontend hasta backend, tengo la versatilidad y las
            habilidades para abordar cualquier desafío. Cada proyecto es una
            oportunidad para crecer y seguir desarrollándome como profesional y
            como persona. Si buscas un desarrollador que pueda llevar tus ideas
            al siguiente nivel, <strong>¡aquí estoy!</strong>
          </h4>
        </div>
      </div>

      {/* <div className={styles.down_button} id="arrow1">
        <a href="#seccion-2" className={styles.down_button_in}>
          <BsChevronDown />
        </a>
      </div> */}
    </div>
  );
}
