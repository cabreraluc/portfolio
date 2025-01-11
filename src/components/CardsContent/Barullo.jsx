import styles from "../../cssModules/ProfessionalExperience.module.css";

const Barullo = () => {
  return (
    <div className={styles.text}>
      <h1 className={styles.card_title}>
        Car2Token - Full Stack Web Developer
      </h1>
      <div>
        <span>
          Development of WEBAPP & API for granting fiduciary loans.
          <br /> <br />
          Development of a loan quotation simulator system.
          <br /> <br />
          Data registration system through KYC with ID scanning system.
          <br /> <br />
          Development of an administrative dashboard to verify data and manage
          offers.
          <br /> <br />
          Integration of USDT transfers on the Polygon blockchain network
          (previously on Rootstock) and payments with a French credit system
          managed through a wallet. Implementation of smart contracts in
          Solidity.
          <br /> <br />
          Implementation of META’s FB-PIXEL to track activity on the web.
        </span>
      </div>
    </div>
  );
};

export default Barullo;
