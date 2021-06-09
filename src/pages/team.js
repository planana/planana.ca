import React from "react";
import "../css/custom.css";
import Layout from "@theme/Layout";

export default function AboutPage() {
  return (
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
            Meet the lovely people behind Planana! We are Plananing for
            SUCCESS!!!
          </p>
        </div>
        <div className="fadeIn" style={{ animationDelay: "1.5s" }}></div>
      </div>
    </Layout>
  );
}
