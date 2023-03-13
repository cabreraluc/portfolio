import styles from "../cssModules/FirstSection.module.css";

export default function FirstSection() {
  return (
    <div className={styles.content}>
      <div className={styles.title_description}>
        <div className={styles.title}>
          <h1>¡Bienvenido!</h1>
        </div>
        <div className={styles.description}>
          <h3>
            Mi nombre es Lucas Cabrera, soy un desarrollador fullstack y estoy
            ansioso de formar parte de un equipo de trabajo en el cual pueda
            desarrollar nuevas habilidades y crecer profesionalmente, realmente
            me encanta la programación, me encanta la lógica, me encanta darle
            estilos a las cosas, soy muy comprometido con lo que hago y estoy en
            busca de nuevos desafíos.
          </h3>
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
