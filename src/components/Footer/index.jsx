import Image from "next/image";
import Link from "next/link";
import { FiLinkedin } from "react-icons/fi";
import styles from "./styles.module.scss";

const Footer = ({ children }) => (
  <footer className={styles.footer}>
    {children}
    <Link href={`https://www.linkedin.com/in/arjun-yadav-profile`}>
      <a target="_blank" rel="noopener noreferrer">
        <div className={styles.footer_copyright}>
          <p className="opensans">Created by Arjun Yadav</p>
          <span className={styles.footer_logo}>
            <FiLinkedin color="white" size={20} />
          </span>
        </div>
      </a>
    </Link>
  </footer>
);

export default Footer;
