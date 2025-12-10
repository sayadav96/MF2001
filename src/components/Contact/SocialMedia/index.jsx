import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";

import styles from "./styles.module.scss";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className={styles.social_links_icons}>
      <Link
        href={
          "https://www.instagram.com/millenium_friends_2001?igsh=aGpmOTVoZnNkazZx "
        }
        passHref
      >
        <a target="_blank" rel="noopener noreferrer">
          <FiInstagram className={styles.social_icon} />
        </a>
      </Link>
      <Link
        href={"https://www.facebook.com/share/16eZTHrkYd/?mibextid=wwXIfr"}
        passHref
      >
        <a target="_blank" rel="noopener noreferrer">
          <FiFacebook className={styles.social_icon} />
        </a>
      </Link>
      <Link
        href={"https://youtube.com/@millenniumfriends2001?si=zcc0cSwDwlEn7x23"}
        passHref
      >
        <a target="_blank" rel="noopener noreferrer">
          <FiYoutube className={styles.social_icon} />
        </a>
      </Link>
    </div>
  );
};

export default SocialMedia;
