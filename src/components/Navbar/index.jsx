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

  // Fallback links if siteContent is missing
  const links = navbarContent?.links || [
    { href: "/", label: "Home" },
    { href: "/team", label: "Team" },
    { href: "/programs", label: "Programs" },
  ];

  const actionLabel = navbarInfo?.metadata?.action || "Contact";

  const handleToggle = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <nav className={styles.navbar_container} id="navigation">
      <Link href="/" passHref legacyBehavior>
        <a className={styles.navbar_logo}>
          <Image src="/images/logo.png" width={50} height={50} alt="logo" />
          <div className={styles.navbar_logo_titles}>
            <span className={cn("opensans", styles.navbar_logo_text)}>
              MILLENNIUM FRIENDS 2001
            </span>
            <p className={styles.navbar_logo_subtext}>Reg:ALP/TC/313/2025</p>
          </div>
        </a>
      </Link>

      {/* Desktop Navigation Links */}
      <ul className={styles.navbar_links}>
        {links.map((link) => (
          <li className={cn(styles.menu_item, "opensans")} key={link.href}>
            <Link href={link.href} passHref legacyBehavior>
              <a>{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>

      {/* Primary Contact CTA (Desktop and Tablet) */}
      <div className={styles.navbar_login}>
        <Link href="/contact" passHref legacyBehavior>
          <a className={cn(styles.menu_item, "opensans", styles.navbar_cta)}>
            {actionLabel}
          </a>
        </Link>
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
                  <Link href={link.href} passHref legacyBehavior>
                    <a>{link.label}</a>
                  </Link>
                </li>
              ))}

              {/* Contact Button specifically for the Mobile Overlay */}
              <li onClick={handleToggle} style={{ marginTop: "1rem" }}>
                <Link href="/contact" passHref legacyBehavior>
                  <a
                    className={cn("opensans", styles.navbar_cta)}
                    style={{ fontSize: "1.5rem" }}
                  >
                    {actionLabel}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
