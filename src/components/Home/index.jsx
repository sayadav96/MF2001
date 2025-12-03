import Image from "next/image";
import cn from "classnames";

import SubHeading from "components/SubHeading";
import Button from "components/Button";

import styles from "./styles.module.scss";

const Home = ({ info }) => (
  <div className={cn(styles.header, "section_padding")} id="home">
    <div className={cn("app_container", "app_wrapper")}>
      <div className={styles.wrapper_info}>
        <SubHeading title="Every Sunday-" />
        <h1 className={styles.header_h1}>
          ചരിത്രത്തിൽ ഈ ആഴ്ച (History of this week)
        </h1>
        {/* <p className={cn(styles.header_p, "opensans")}>
          Every Monday & Thursday
        </p> */}
        {/* <Button name="Explore Menu" path="#menu" /> */}
      </div>
      <div className="app_wrapper_img">
        <div className={cn(styles.wrapper_img, "img_padding")}>
          <Image
            src="/images/history.png"
            alt="header_img"
            objectFit="cover"
            width={500}
            height={540}
            priority
          />
        </div>
      </div>
    </div>
    <div className={cn("app_container", "app_wrapper")}>
      <div className="app_wrapper_img">
        <div className={cn(styles.wrapper_img, "img_padding")}>
          <Image
            src="/images/story.jpg"
            alt="header_img"
            objectFit="cover"
            width={500}
            height={540}
            priority
          />
        </div>
      </div>
      <div className={styles.wrapper_info}>
        <SubHeading title="Every Monday & Thursday-" />
        <h1 className={styles.header_h1}>കഥാനേരം (moral short story)</h1>
        {/* <p className={cn(styles.header_p, "opensans")}>
          Every Monday & Thursday
        </p> */}
        {/* <Button name="Explore Menu" path="#menu" /> */}
      </div>
    </div>
  </div>
);

export default Home;
