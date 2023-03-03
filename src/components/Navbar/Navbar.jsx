
import global from '../../global.module.scss';
import styles from './Navbar.module.scss';

import { ReactComponent as MainLogo } from '../../assets/logo/logo-bookmark.svg';
import { ReactComponent as LogoFacebook } from '../../assets/logo/logo-facebook.svg'
import { ReactComponent as LogoTwitter } from '../../assets/logo/logo-twitter.svg'

const Navbar = ({ position }) => {
  return position === 'top' ? <NavHeader /> : <NavFooter />
}

Navbar.defaultProps = {
  position: 'top'
}

export default Navbar

const NavHeader = () => {
  return (
    <nav className={`${styles.container} ${styles.header}`}>
      <div className={global.container}>
        <a href='/' className={styles.main_logo}><MainLogo /></a>
        <ul className={styles.nav_links}>
          <li><a href="/">Features</a></li>
          <li><a href="/">Pricing</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/" className={`${global.button} ${global.secondary}`}>Login</a></li>
        </ul>
      </div>
    </nav>
  )
}

const NavFooter = () => {
  return (
    <nav className={`${styles.container} ${styles.footer}`}>
      <div className={global.container}>
        <a href='/' className={styles.main_logo}><MainLogo /></a>
        <ul className={styles.nav_links}>
          <li><a href="/">Features</a></li>
          <li><a href="/">Pricing</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
        <ul className={styles.nav_socials}>
          <li><a href="#"><LogoFacebook /></a></li>
          <li><a href="#"><LogoTwitter /></a></li>
        </ul>
      </div>
    </nav>
  );
}