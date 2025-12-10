import { useState } from "react";
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

import { GiHamburgerMenu } from "react-icons/gi";
import { GiShakingHands } from "react-icons/gi";

import styles from "./styles.module.scss";
import { navbarContent } from "../../data/siteContent";

const Navbar = ({ navbarInfo }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const links = navbarContent?.links || [
    { href: "#home", label: "Home" },
    { href: "#team", label: "Team" },
    { href: "#menu", label: "Menu" },
    { href: "#contact", label: "Contact" },
  ];

  const actionLabel = navbarInfo?.metadata?.action || "Contact";

  const handleToggle = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <nav className={styles.navbar_container} id="navigation">
      {/* ✅ Fix: Link has a single child (<a>) */}
      <Link href="/" passHref legacyBehavior>
        <a className={styles.navbar_logo}>
          <Image src="/images/logo.png" width={40} height={40} alt="logo" />
          <span className={cn("opensans", styles.navbar_logo_text)}>
            MF2001
          </span>
        </a>
      </Link>

      <ul className={styles.navbar_links}>
        {links.map((link) => (
          <li className={cn(styles.menu_item, "opensans")} key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <div className={styles.navbar_login}>
        <a
          href="#contact"
          className={cn(styles.menu_item, "opensans", styles.navbar_cta)}
        >
          {actionLabel}
        </a>
      </div>

      <div className={styles.navbar_smallscreen}>
        <GiHamburgerMenu
          className={styles.navbar_hamburger}
          onClick={handleToggle}
        />
        {toggleMenu && (
          <div
            className={cn(
              styles.navbar_smallscreen_overlay,
              "slide_bottom",
              "flex_center"
            )}
          >
            <GiShakingHands
              className={styles.overlay_close}
              onClick={handleToggle}
            />
            <ul className={styles.navbar_smallscreen_links}>
              {links.map((link) => (
                <li onClick={handleToggle} className="opensans" key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
              {/* <li onClick={handleToggle}>
                <a href="#contact" className="opensans">
                  {actionLabel}
                </a>
              </li> */}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
