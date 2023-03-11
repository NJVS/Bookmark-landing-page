import { useState, useEffect } from 'react';
import global from '../../global.module.scss';
import styles from './Navbar.module.scss';

import { ReactComponent as MainLogo } from '../../assets/logo/logo-bookmark.svg';
import { ReactComponent as LogoFacebook } from '../../assets/logo/logo-facebook.svg'
import { ReactComponent as LogoTwitter } from '../../assets/logo/logo-twitter.svg'
import { ReactComponent as IconFeatures } from '../../assets/icons/list-solid.svg'
import { ReactComponent as IconPricing } from '../../assets/icons/hand-holding-dollar-solid.svg'
import { ReactComponent as IconContact } from '../../assets/icons/envelope-regular.svg'

const Navbar = ({ position }) => {
  return position === 'top' ? <NavHeader /> : <NavFooter />
}

Navbar.defaultProps = {
  position: 'top'
}

export default Navbar

const NavHeader = () => {
  const [navToggled, setNavToggled] = useState(false);
  const [mediaQuery, setMediaQuery] = useState(null);

  function resizeHandler() {
    setMediaQuery(window.innerWidth)
    setNavToggled(false);
  }

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    setMediaQuery(window.innerWidth)
  }, []);

  // disable scrolling
  useEffect(() => {
    document.documentElement.style.overflow = navToggled ? 'hidden' : '';
  }, [navToggled]);

  return (
    <nav className={`${styles.container} ${styles.header} ${navToggled && styles.sidenav_toggled}`}>
      <div className={global.container}>
        <a href='/' className={styles.main_logo}><MainLogo /></a>
        <button className={styles.nav_toggler} onClick={() => setNavToggled(!navToggled)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        {mediaQuery >= 690 ? (
          <ul className={styles.nav_links}>
            <li><a href="/">Features</a></li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/" className={`${global.button} ${global.secondary} ${global.small}`}>Login</a></li>
          </ul>
        ) : (
          <>
            <div className={styles.nav_overlay} onClick={() => setNavToggled(false)}></div>
            <ul className={styles.sidenav_links}>
              <li><a href="/" className={styles.active}>Features <IconFeatures /></a></li>
              <li><a href="/">Pricing <IconPricing /></a></li>
              <li><a href="/">Contact <IconContact /></a></li>
              <li>
                <div>
                    <ul className={styles.nav_socials}>
                      <li><a href="#"><LogoFacebook /></a></li>
                      <li><a href="#"><LogoTwitter /></a></li>
                    </ul>
                  <a href="/" className={`${global.button} ${global.secondary} ${global.small}`}>Login</a>
                </div>
              </li>
            </ul>
          </>
        )}
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