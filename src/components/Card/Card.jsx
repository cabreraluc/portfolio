import styles from "../../cssModules/ProfessionalExperience.module.css";

const ExperienceCard = ({ icons, img, children }) => {
  return (
    <div className={styles.project_card} data-aos="fade-up">
      <div className={styles.img_and_text}>
        <div className={styles.img_container}>
          <img src={img} alt="experience_img" className={styles.first_img} />
        </div>
        <div className={styles.text}>{children}</div>
      </div>
      <div className={styles.icons}>
        {icons.map((e, index) => {
          return <div key={index}> {e} </div>;
        })}
      </div>
    </div>
  );
};

export default ExperienceCard;
