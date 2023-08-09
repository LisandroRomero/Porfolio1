import styles from "./About.module.css";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          className={styles.image}
          src="src\View\About\etsa.jpg"
          alt="No carga pa"
        />
        <h5>Lisandro Romero</h5>
      </div>
      <div>
        <ul>
          <li>
            <h6>País</h6>
            <span>Argentina</span>
          </li>
          <li>
            <h6>Ciudad</h6>
            <span>Mendoza</span>
          </li>
          <li>
            <h6>Edad</h6>
            <span>23</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
