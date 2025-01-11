import styles from "../../cssModules/ProfessionalExperience.module.css";

const JRCS = () => {
  return (
    <div className={styles.text}>
      <h1 className={styles.card_title}>
        JRC Studio - Full Stack Web Developer
      </h1>
      <div>
        <span>
          Development of Pixel Perfect web applications and creation of
          interactive and responsive interfaces.
          <br /> <br />
          Development of a progressive web application (PWA) with blockchain
          integration (Algorand) and QR code scanning systems to facilitate
          networking among users.
          <br /> <br />
          Experience in designing information architectures, including the
          creation of site maps, operational diagrams, and wireframes.
          <br /> <br />
          Skilled in developing content management systems (CMS) and
          APIs/Backends with off-chain databases for information management and
          business rules.
          <br /> <br />
          Expertise in evaluating infrastructure services, including
          transactional email providers and push notification systems.
          <br /> <br />
          Development of mobile applications (Android APK) for logistics
          tracking and management.
        </span>
      </div>
    </div>
  );
};

export default JRCS;
