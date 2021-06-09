import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="screen">
          <h1 className="hero__title">Planana</h1>
          <p className="hero__subtitle">
            The mon
            <b>KEY</b> behind event planning.
          </p>
          <form>
            <label>Subscribe to our latest plans: </label>
            <input type="email" id="email" name="email"></input>
          </form>
        </div>
      </main>
    </Layout>
  );
}
