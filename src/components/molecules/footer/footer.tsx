import styles from "./footer.module.css";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <a className={styles.link} href="https://github.com/EthanNC">
      {new Date().getFullYear()} Airbnb, Inc. | Ethan Cumming 
      </a>
    </footer>
  );
};

export default Footer;
