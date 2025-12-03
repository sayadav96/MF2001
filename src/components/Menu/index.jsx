import Image from "next/image";
import cn from "classnames";
import SubHeading from "components/SubHeading";
import MenuItem from "components/Menu/Menuitem";
import Button from "components/Button";
import { leftMenuItems, rightMenuItems } from "../../data/menuData";

import styles from "./styles.module.scss";

const SpacialMenu = () => {
  return (
    <div
      className={cn(styles.special, "flex_center", "section_padding")}
      id="menu"
    >
      <div className={styles.special_title}>
        <SubHeading title="Programs That Fit Our Purpose" />
        <h1 className="headtext_cormorant">Our Key Initiatives</h1>
      </div>

      <div className={styles.special_menu}>
        {/* LEFT COLUMN */}
        <div className={cn(styles.special_menu_wine, "flex_center")}>
          <p className={styles.special_menu_heading}>Support & Welfare</p>
          <div className={styles.special_menu_items}>
            {leftMenuItems.map(({ title, price, tags }) => (
              <div className={styles.menu_item_wrapper} key={title}>
                <MenuItem title={title} price={price} tags={tags} />
              </div>
            ))}
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className={styles.special_menu_img}>
          <Image
            src="/images/initiative.png"
            objectFit="contain"
            layout="fill"
            alt="menu_img"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className={cn(styles.special_menu_cocktails, "flex_center")}>
          <p className={styles.special_menu_heading}>Community & Events</p>
          <div className={styles.special_menu_items}>
            {rightMenuItems.map(({ title, price, tags }) => (
              <div className={styles.menu_item_wrapper} key={title}>
                <MenuItem title={title} price={price} tags={tags} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Button name="View More" path="#gallery" />
    </div>
  );
};

export default SpacialMenu;
