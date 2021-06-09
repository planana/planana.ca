import React from "react";
import styles from "./about.module.css";

export default function About() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <p className="hero__subtitle">The About Page</p>
      </div>
    </header>
  );
}
