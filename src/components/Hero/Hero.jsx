import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vinay</h1>
        <p className={styles.description}>
           Analytically minded professional proficient in SQL, Python, and Snowflake with a keen eye for detail and a 
passion for problem-solving. Eager learner and collaborative team player seeking entry-level opportunities to 
leverage skills and contribute to a dynamic team environment.
        </p>
        <a href="mailto:vinaykharche027@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
