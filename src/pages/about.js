import React from "react";
import "../css/custom.css";
import Layout from "@theme/Layout";

export default function AboutPage() {
  return (
    <Layout title="About" description="Planana's mission or something">
      <div className="container">
        <p className="title text--center slide-in-left">
          This is our story. This is Planana.
        </p>
        <div
          className="headerLine centered slide-in-left"
          style={{ animationDelay: "0.5s" }}
        />
        <div className="text-box centered">
          <p
            className="body text--center fadeIn"
            style={{ animationDelay: "1s" }}
          >
            Our mission is blah blah blah
          </p>
        </div>
        <div className="fadeIn" style={{ animationDelay: "1.5s" }}></div>
      </div>
    </Layout>
  );
}
