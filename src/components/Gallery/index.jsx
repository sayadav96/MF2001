import { useRef } from "react";
import Image from "next/image";
import cn from "classnames";
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import SubHeading from "components/SubHeading";
import Button from "components/Button";

import styles from "./styles.module.scss";

import { galleryContent, galleryImages } from "../../data/galleryData";

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") current.scrollLeft -= 300;
    else current.scrollLeft += 300;
  };

  return (
    <div className={cn(styles.gallery_container, "flex_center")} id="gallery">
      <div className={styles.gallery_content}>
        <SubHeading title={galleryContent.section} />
        <h1 className="headtext_cormorant">{galleryContent.title}</h1>
        <p className={cn(styles.gallery_content_intro, "opensans")}>
          {galleryContent.intro}
        </p>
        {/* <Button name="View More" path="#menu" /> */}
      </div>

      <div className={styles.gallery_images}>
        <div className={styles.gallery_images_container} ref={scrollRef}>
          {galleryImages.map(({ title, price, src }, index) => (
            <div className={cn(styles.gallery_images_card, "flex_center")} key={index}>
              <Image src={src} layout="fill" objectFit="cover" alt={title} />

              <div className={styles.gallery_image_icon}>
                <BsInstagram />
                <h3>{title}</h3>
                {price && <h4>{price}</h4>}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.gallery_images_arrows}>
          <BsArrowLeftShort
            className={styles.gallery_arrow_icon}
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className={styles.gallery_arrow_icon}
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
