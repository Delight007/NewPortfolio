import styles from "./WorkExperienceCard.module.css";
export default function WorkExperienceCard({ details }) {
  return (
    <div className={styles.Work_Experience_Card}>
      <h6>{details.title}</h6>

      <div className={styles.date}>{details.date}</div>

      <div>
        {" "}
        <ul>
          {details.responsibility.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      {/* <div className={styles.tools}>{details.tools}</div> */}
    </div>
  );
}
