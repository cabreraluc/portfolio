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
            ¡Bienvenido/a a mi espacio!
            <br />
            Me complace presentarte mi perfil, donde podrás explorar y descubrir
            los proyectos en los que he trabajado y las habilidades que he
            desarrollado como Desarrollador Fullstack. Permíteme darte una
            visión general de quién soy y qué puedo ofrecer.
            <br />
            Soy un apasionado del desarrollo web y he tenido la oportunidad de
            trabajar tanto en proyectos individuales como en proyectos grupales
            durante mi participación en el bootcamp Henry. A lo largo de mi
            trayectoria, he adquirido experiencia en el desarrollo de
            aplicaciones y sistemas robustos utilizando tecnologías como el
            stack MERN (MongoDB, Express, React y Node.js), así como también el
            stack PERN (Postgres, React, Express y Node.js). Además, tengo
            experiencia en el uso de herramientas como Sequelize y Redux para
            mejorar la eficiencia y la escalabilidad de mis proyectos.
            <br />
            Aquí encontrarás una variedad de proyectos en los que he estado
            involucrado/a, los cuales demuestran mi capacidad para trabajar en
            diferentes contextos y abordar diversos desafíos técnicos. Cada
            proyecto representa una oportunidad de aprendizaje y crecimiento,
            donde he aplicado mis conocimientos en el desarrollo de aplicaciones
            web y la gestión de bases de datos.
            <br />
            A través de mi perfil, podrás obtener una visión general de mis
            habilidades técnicas, experiencia en el desarrollo de proyectos y
            capacidad para trabajar tanto de forma individual como en equipo.
            Estoy comprometido/a en brindar soluciones eficientes y efectivas,
            siempre buscando mejorar la experiencia del usuario y la calidad del
            producto final.
            <br />
            Si tienes alguna pregunta o estás interesado/a en colaborar en
            futuros proyectos, no dudes en contactarme.
            <br />
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
