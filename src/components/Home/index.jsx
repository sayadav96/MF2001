import cn from "classnames";
import styles from "./styles.module.scss";

const Home = () => (
  <div className={cn(styles.header, "section_padding")} id="home">
    <div className={cn("app_container", "app_wrapper")}>
      <div className={styles.wrapper_info}>
        {/* Updated section heading */}
        <h1 className={styles.mainTitle}>Our contents on Social Media:</h1>

        <div className={styles.contentList}>
          <p className={styles.contentItem}>
            <strong>Every Sunday:</strong> ചരിത്രത്തിൽ ഈ ആഴ്ച (History of this
            week)
          </p>
          <p className={styles.contentItem}>
            <strong>Every Monday & Thursday:</strong> കഥാനേരം (moral short
            story)
          </p>
          <p className={styles.contentItem}>
            <strong>Every Wednesday:</strong> Mid week Mantra (Motivational
            speech)
          </p>
          <p className={styles.contentItem}>
            <strong>Every Friday:</strong> അറിവിലൂടെ ആരോഗ്യം (Health Tips
            segment)
          </p>
        </div>
      </div>

      {/* Right side container prepared for YouTube Embed */}
      <div className={styles.videoContainer}>
        <iframe
          width="290"
          height="507"
          src="https://www.youtube.com/embed/kyOAskvP-Fw"
          title="കഥാനേരം - ജീവിതമൂല്യത്തിൻ്റെ തിരിച്ചറിവിനായി ഒരു ചെറു കഥ #Shortstory #inspirationstory #moralstory"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
);

export default Home;
