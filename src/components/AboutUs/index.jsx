import Image from "next/image";
import cn from "classnames";
import LineBreak from "components/SubHeading/LineBreak";
import Button from "components/Button";

import styles from "./styles.module.scss";

//{info?.metadata?.initials?.imgix_url}

const AboutUs = ({ info }) => {
  return (
    <div
      className={cn(styles.about, "app_bg", "flex_center", "section_padding")}
    >
      {/* <div className={cn(styles.about_overlay, "flex_center")}>
        <div className={styles.about_overlay_img}>
          <Image
            src="/images/about-us.png"
            layout="fill"
            objectFit="cover"
            alt="overlay"

          />
        </div>
      </div> */}
      <div className={cn(styles.about_content, "flex_center")}>
        <div className={styles.about_content_about} id="team">
          <h1 className="headtext_cormorant">Our Team</h1>
          <LineBreak />
          <p className="opensans">
            A group of Class of 2001 school friends reunited after 24 years, now
            registered under the Kerala Government, coming together to support
            each other and give back to the community.
          </p>
          <Button name="Know More" path="/about" />
        </div>
        <div className={cn(styles.about_content_knife, "flex_center")}>
          <div className={styles.about_content_img}>
            <Image
              src="/images/logo.png"
              layout="fill"
              objectFit="contain"
              alt="about_knife"
              priority
            />
          </div>
        </div>
        <div className={styles.about_content_history} id="programs">
          <h1 className="headtext_cormorant">Programs</h1>
          <LineBreak />
          <p className="opensans">
            We run collaborative initiatives focused on education, welfare, and
            mutual support, driven by the lifelong bond of the Class of 2001.
          </p>
          <Button name="Know More" path="/programs" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
