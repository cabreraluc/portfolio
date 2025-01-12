import styles from "../../cssModules/ProfessionalExperience.module.css";

const JRCS = () => {
  return (
    <div className={styles.text}>
      <h1 className={styles.card_title}>
        JRC Studio - Full Stack Web Developer
      </h1>
      <div>
        <span>
          Development of <strong> Pixel Perfect </strong>web applications and
          creation of interactive and responsive interfaces.
          <br /> <br />
          Development of a{" "}
          <strong>
            {" "}
            progressive web application (PWA) with blockchain integration
            (Algorand) and QR code scanning systems
          </strong>{" "}
          to facilitate networking among users.
          <br /> <br />
          Experience in designing information architectures, including the
          creation of{" "}
          <strong>site maps, operational diagrams, and wireframes</strong>.
          <br /> <br />
          Skilled in developing content management systems (CMS) and{" "}
          <strong>APIs/Backends with off-chain databases</strong> for
          information management and business rules.
          <br /> <br />
          Expertise in evaluating infrastructure services, including{" "}
          <strong>
            transactional email providers and push notification systems
          </strong>{" "}
          .
          <br /> <br />
          Development of{" "}
          <strong>
            mobile applications (Android APK) for logistics tracking and
            management
          </strong>
          .
        </span>
      </div>
    </div>
  );
};

export default JRCS;
