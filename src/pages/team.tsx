import React, { FC } from "react";
import "../css/custom.css";
import styles from "./team.module.css";
import Layout from "@theme/Layout";

const Image: FC<{ name: string }> = ({ name }) => (
  <img src={`/img/team/${name}.jpg`} className={styles.teamImage} />
);

const TeamPage: FC = () => (
  <Layout title="Our Team" description="Planana team">
    <div className="container">
      <p className="title text--center slide-in-left"> This is Our team</p>
      <div
        className="headerLine centered slide-in-left"
        style={{ animationDelay: "0.5s" }}
      />
      <div className="text-box centered">
        <p
          className="body text--center fadeIn"
          style={{ animationDelay: "1s" }}
        >
          Meet the lovely people behind Planana! We are Plananing for SUCCESS!!!
        </p>
      </div>
      <div className="fadeIn" style={{ animationDelay: "1.5s" }}></div>
      <div className={styles.teamRow}>
        <Image name="david" />
        <Image name="annette" />
        <Image name="will" />
        <Image name="charles" />
      </div>
    </div>
  </Layout>
);

export default TeamPage;
