import styles from "../../cssModules/FirstSection.module.css";

export default function FirstSection() {
  return (
    <div className={styles.content}>
      <div className={styles.title}>
        <h1>{`Welcome! I'm Lucas Cabrera`}</h1>
      </div>

      <div className={styles.description}>
        <h4>
          I'm a passionate fullstack developer with experience in creating
          solutions. My ability to adapt and learn quickly allows me to work
          with any technology a project requires. From frontend to backend, I
          have the versatility and skills to tackle any challenge. Every project
          is an opportunity to grow and continue developing both professionally
          and personally. If you're looking for a developer who can take your
          ideas to the next level, here I am!
        </h4>
      </div>
    </div>
  );
}
