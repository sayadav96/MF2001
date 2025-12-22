import { useState } from "react";
import Head from "next/head";
import Layout from "components/Layout";
import Footer from "components/Footer";
import Contacts from "components/Contact";
import styles from "../styles/Contact.module.scss";

const ContactPage = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | MF2001</title>
      </Head>

      <Layout>
        <section className={styles.container}>
          <h1 className="headtext_cormorant" style={{ textAlign: "center" }}>
            Get In Touch
          </h1>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>

            <button
              type="submit"
              className="styles.custom__button"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className={styles.success}>Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className={styles.error}>Something went wrong. Try again.</p>
            )}
          </form>
        </section>
      </Layout>

      <Footer>
        <Contacts />
      </Footer>
    </>
  );
};

export default ContactPage;
