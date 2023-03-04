import global from '../../../global.module.scss';
import Tabs from '../../Tabs/Tabs';
import styles from './Features.module.scss';

const Features = () => {
  return (
    <section className={styles.container}>
      <div className={global.container}>
        <div className={styles.header}>
          <h2 className={global.section_title}>Features</h2>
          <p className={global.section_paragraph}>
            Our aim is to make it quick and easy for you to access your favorite website. Your
            Bookmarks sync between your devices so you can access them on the go.
          </p>
        </div>
        <div className={styles.body}>
          <Tabs />
        </div>
      </div>
    </section>
  )
}

export default Features