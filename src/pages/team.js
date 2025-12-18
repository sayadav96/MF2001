import Head from "next/head";
import Layout from "components/Layout";
import Footer from "components/Footer";
import Contacts from "components/Contact";
import Image from "next/image";

import { executiveTeam, socialMediaTeam } from "../data/teamData";
import styles from "../styles/Team.module.scss";

const TeamMember = ({ member }) => (
  <div className={styles.card}>
    <div className={styles.imageWrapper}>
      <Image
        src={member.src}
        alt={member.name}
        layout="fill"
        style={{ objectFit: "cover" }}
        className={styles.image}
      />
    </div>
    <div className={styles.info}>
      <h3 className={styles.name}>{member.name}</h3>
      <p className={styles.role}>{member.role}</p>
    </div>
  </div>
);

const TeamPage = () => {
  return (
    <>
      <Head>
        <title>Our Team | MF2001</title>
      </Head>

      <Layout>
        <section className={styles.container}>
          <div className={styles.headerSection}>
            <h1 className="headtext_cormorant">Executive Team</h1>
          </div>

          <div className={styles.grid}>
            {executiveTeam.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>

          <div className={styles.headerSection} style={{ marginTop: "5rem" }}>
            <h1 className="headtext_cormorant">Social Media Team</h1>
          </div>

          <div className={styles.grid}>
            {socialMediaTeam.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </section>
      </Layout>

      <Footer>
        <Contacts />
      </Footer>
    </>
  );
};

export default TeamPage;
