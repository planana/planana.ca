import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

type UseInputFieldFn = (
  name: string,
  type: string,
  placeholder: string
) => UseInputField;
type UseInputField = [string, JSX.Element, Dispatch<SetStateAction<string>>];
const useInputField: UseInputFieldFn = (name, type, placeholder) => {
  const [value, setValue] = useState("");
  const handler = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  const element = (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={handler}
      value={value}
    />
  );

  return [value, element, setValue];
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [hasSubmitted, setSubmitted] = useState(false);
  const [name, nameInput] = useInputField("name", "text", "Your name");
  const [email, emailInput] = useInputField("email", "email", "Email Address");

  async function handler(e: FormEvent) {
    e.preventDefault();
    await fetch("/subscribe/", {
      method: "POST",
      body: JSON.stringify({ name, email }),
      headers: { "Content-Type": "application/json" },
    });
    setSubmitted(true);
  }
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Homepage of Planana, the monKEY behind event planning."
    >
      <main className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="screen">
          <h1 className="hero__title">Planana</h1>
          <p className="hero__subtitle">
            The mon
            <b>KEY</b> behind event planning.
          </p>
          {!hasSubmitted ? (
            <form onSubmit={handler}>
              <h3>Subscribe to our latest plans: </h3>
              <div className={styles.subscribeForm}>
                <div>{nameInput}</div>
                <div>{emailInput}</div>
                <div>
                  <input type="submit" value="Follow us" />
                </div>
              </div>
            </form>
          ) : (
            <h2>Thank you for subscribing!</h2>
          )}
        </div>
      </main>
    </Layout>
  );
}
