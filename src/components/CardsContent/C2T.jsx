import styles from "../../cssModules/ProfessionalExperience.module.css";

const C2T = () => {
  return (
    <div className={styles.text}>
      <h1 className={styles.card_title}>
        Car2Token - Full Stack Web Developer
      </h1>
      <div>
        <span>
          Development of <strong>WEBAPP & API</strong> for granting fiduciary
          loans.
          <br /> <br />
          Development of a <strong>loan quotation simulator system</strong>.
          <br /> <br />
          Data registration system through{" "}
          <strong>KYC with ID scanning system</strong>.
          <br /> <br />
          Development of an administrative dashboard to verify data and manage
          offers.
          <br /> <br />
          Integration of{" "}
          <strong>
            USDT transfers on the Polygon blockchain network (previously on
            Rootstock)
          </strong>{" "}
          and payments with a French credit system managed through a{" "}
          <strong>wallet</strong>. Implementation of{" "}
          <strong>smart contracts in Solidity</strong>.
          <br /> <br />
          Implementation of <strong>META’s FB-PIXEL </strong>to track activity
          on the web.
        </span>
      </div>
    </div>
  );
};

export default C2T;
