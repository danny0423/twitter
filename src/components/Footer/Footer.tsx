import React from "react";
import styles from "./Footer.module.scss";

const FOOTER_LIST: string[] = [
  "About",
  "Download the X app",
  "Grok",
  "Help Center",
  "Terms of Service",
  "Privacy Policy",
  "Cookie Policy",
  "Accessibility",
  "Ads info",
  "Blog",
  "Careers",
  "Brand Resources",
  "Advertising",
  "Marketing",
  "X for Business",
  "Developers",
  "News",
  "Settings",
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footerNav}>
        {FOOTER_LIST.map((item) => (
          <a key={item} href="#" className={styles.footerLink}>
            {item}
          </a>
        ))}
        <span className={styles.footerLink}>© 2026 X Corp.</span>
      </nav>
    </footer>
  );
};

export default Footer;
