import Head from "next/head";
import Layout from "components/Layout";
import Footer from "components/Footer";
import VideoIntro from "components/VideoIntro";
import Contacts from "components/Contact";
import styles from "styles/programs.module.scss";

const ProgramsPage = () => {
  return (
    <>
      <Head>
        <title>Programs | MF2001</title>
      </Head>

      <Layout>
        <section className={styles.wrapper}>
          <h1 className={styles.title}>Our Programs</h1>

          <p className={styles.description}>
            We run collaborative initiatives focused on education, welfare, and
            mutual support, driven by the lifelong bond of the Class of 2001.
          </p>

          <ul className={styles.list}>
            <li>Educational Support Programs</li>
            <li>Community Welfare Initiatives</li>
            <li>Emergency Support Activities</li>
          </ul>
        </section>
      </Layout>

      <Footer>
        <Contacts />
      </Footer>
    </>
  );
};

export default ProgramsPage;
