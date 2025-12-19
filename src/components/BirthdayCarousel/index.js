// src/components/BirthdayCarousel/index.jsx
import { useEffect, useState } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import cn from "classnames";

import { birthdayImages as staticImages } from "data/birthdayImages";
import styles from "./styles.module.scss";

// Helper function to generate the secure direct image link
// const generateDirectDriveLink = (fileId) => {
//   if (!fileId) return null;
//   // Use the specific Google Drive download endpoint format
//   return `https://drive.google.com/uc?export=download&id=${fileId}`;
// };
const generateDirectDriveLink = (fileId) => {
  if (!fileId) return null;
  // FIX: Point to the new server-side proxy API route
  return `/api/drive-image/${fileId}`;
};
const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const CustomLeftArrow = ({ onClick }) => (
  <button
    className={cn(styles.arrow, styles.left)}
    type="button"
    onClick={onClick}
  >
    <BsArrowLeftShort size={28} />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    className={cn(styles.arrow, styles.right)}
    type="button"
    onClick={onClick}
  >
    <BsArrowRightShort size={28} />
  </button>
);

const BirthdayCarousel = () => {
  const [items, setItems] = useState(staticImages || []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const res = await fetch("/api/notification-images");
        if (!res.ok) throw new Error("status " + res.status);
        const json = await res.json();
        if (mounted && Array.isArray(json.images) && json.images.length) {
          setItems(json.images);
        }
      } catch (e) {
        console.warn("Could not load Drive images, using static fallback:", e);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    return () => (mounted = false);
  }, []);

  if (!items || items.length === 0) {
    if (loading) return null;
    // optionally show a placeholder
    return null;
  }

  return (
    <section
      className={cn(styles.wrapper, "section_padding", "flex_center")}
      id="birthdays"
    >
      <h2 className="headtext_cormorant">News and Updates</h2>

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
            autoPlay
          >
            {items.map((item) => {
              // FIX: Use the file ID to generate the reliable direct link
              const imageSrc = item.src || generateDirectDriveLink(item.id);
              if (!imageSrc) return null;

              return (
                <div key={item.id} className={styles.slide}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={imageSrc}
                      alt={item.name || "image"}
                      layout="fill"
                      sizes="(max-width: 768px) 90vw, 360px"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BirthdayCarousel;
