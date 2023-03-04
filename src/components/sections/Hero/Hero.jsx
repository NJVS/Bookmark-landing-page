import global from '../../../global.module.scss';
import styles from './Hero.module.scss';
import section_illustration from '../../../assets/illustrations/illustration-hero.svg';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={global.container}>
        <article>
          <h1 className={global.section_title}>A Simple Bookmark Manager</h1>
          <p className={global.section_paragraph}>A clean and simple interface to organize your favourite websites. Open a new
            browser tab and see your sites load instantly. Try it for free.</p>
          <div className={styles.links}>
            <a href="/chrome_download" className={`${global.button} ${global.primary}`}>Get it on Chrome</a>
            <a href="/firefox_download" className={global.button}>Get it on Firefox</a>
          </div>
        </article>
        <figure>
          <div>
            <img src={section_illustration} alt="overview illustration" />
          </div>
        </figure>
      </div>
    </section>
  )
}

export default Hero