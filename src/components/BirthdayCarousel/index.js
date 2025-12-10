import { useState } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import cn from "classnames";

import { birthdayImages as staticImages } from "data/birthdayImages";
import styles from "./styles.module.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomLeftArrow = ({ onClick }) => (
  <button
    className={cn(styles.arrow, styles.left)}
    type="button"
    onClick={onClick}
  >
    <BsArrowLeftShort size={32} />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    className={cn(styles.arrow, styles.right)}
    type="button"
    onClick={onClick}
  >
    <BsArrowRightShort size={32} />
  </button>
);

const BirthdayCarousel = () => {
  const [items] = useState(staticImages);

  console.log("birthday items:", items); // TEMP: see in dev tools

  if (!items || items.length === 0) return null;

  return (
    <section
      className={cn(styles.wrapper, "section_padding", "flex_center")}
      id="birthdays"
    >
      <h2 className="headtext_cormorant">News And Updates</h2>

      <div className={styles.carouselOuter}>
        <div className={styles.carouselContainer}>
          <Carousel
            responsive={responsive}
            infinite
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            showDots={false}
            swipeable
            draggable
          >
            {items.map((item) => (
              <div key={item.id} className={styles.slide}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.src}
                    alt={item.name || "Birthday image"}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BirthdayCarousel;
