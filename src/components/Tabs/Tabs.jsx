import { useState } from 'react';
import global from '../../global.module.scss';
import styles from './Tabs.module.scss';
import TabIllustration1 from '../../assets/illustrations/illustration-features-tab-1.svg';
import TabIllustration2 from '../../assets/illustrations/illustration-features-tab-2.svg';
import TabIllustration3 from '../../assets/illustrations/illustration-features-tab-3.svg';

const tabData = [
  {
    id: 1,
    name: 'Simple Bookmarking',
    title: 'Bookmar in one click',
    desc: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    img_src: TabIllustration1,
  },
  {
    id: 2,
    name: 'Speedy Searching',
    title: 'Intelligent search',
    desc: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    img_src: TabIllustration2,
  },
  {
    id: 3,
    name: 'Easy Sharing',
    title: 'Share your bookmarks',
    desc: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    img_src: TabIllustration3,
  }
]

const Tabs = () => {
  const [tabState, setTabState] = useState(1);

  return (
    <div className={`${styles.container}`}>
      <nav className={styles.nav}>
        {tabData.map(item => (
          <button
            key={item.id}
            className={item.id === tabState ? styles.active : ''}
            onClick={() => setTabState(item.id)}
          >{item.name}</button>
        ))}
      </nav>
      <ul className={styles.articles}>
        {tabData.map(item => (
          <li key={item.id} className={item.id === tabState ? styles.active : ''}>
            <figure>
              <div>
                <img src={item.img_src} alt={`${item.name} tab illustration`} />
              </div>
            </figure>
            <article>
              <h2 className={global.section_title}>{item.title}</h2>
              <p className={global.section_paragraph}>{item.desc}</p>
              <div className={styles.links}>
                <a href="#" className={`${global.button} ${global.primary}`}>More Info</a>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tabs