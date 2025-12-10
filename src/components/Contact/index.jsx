import Image from "next/image";
import cn from "classnames";

import SubHeading from "components/SubHeading";
import SocialMedia from "components/Contact/SocialMedia";

import { contactContent } from "../../data/contactData";
import styles from "./styles.module.scss";

const Contacts = () => (
  <div className={cn("app_bg", "app_wrapper", "section_padding")} id="contact">
    <div className={cn("app_container", "app_wrapper")}>
      <div className={cn(styles.contact_info, "app_wrapper_info")}>
        <SubHeading title={contactContent.section} />
        <h1 className="headtext_cormorant">{contactContent.title}</h1>

        <div className={cn(styles.contact_title, "app_wrapper_content")}>
          <p className="opensans">{contactContent.intro}</p>

          <div className="app_wrapper_content">
            <p className="opensans">{contactContent.details[1].intro}</p>
          </div>

          <p className={cn(styles.contact_hours, "cormorant")}>
            {contactContent.details[0].title}
          </p>
          <p className={cn(styles.contact_title, "opensans")}>
            {contactContent.details[0].intro}
          </p>
        </div>

        <h1 className={cn(styles.follow_title, "headtext_cormorant")}>
          {contactContent.details[1].title}
        </h1>

        <div className={styles.contact_social}>
          <SocialMedia />
        </div>
      </div>

      {/* <div className="app_wrapper_img"> */}
        <div className={cn(styles.wrapper_img, "img_padding")}>
          <Image
            src="/images/logo.png" // replace with your real contact image later
            alt="find_us_img"
            objectFit="contain"
            width={500}
            height={550}
          />
        </div>
      {/* </div> */}
    </div>
  </div>
);

export default Contacts;
