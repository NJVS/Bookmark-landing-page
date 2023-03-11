import CardDownload from '../../CardDownload/CardDownload';

import global from '../../../global.module.scss';
import styles from './Downloads.module.scss';
import { ReactComponent as LogoChrome } from '../../../assets/logo/logo-chrome.svg';
import { ReactComponent as LogoFirefox } from '../../../assets/logo/logo-firefox.svg';
import { ReactComponent as LogoOpera } from '../../../assets/logo/logo-opera.svg';

const cardData = [
  { name: 'Chrome', version: 62, logo: <LogoChrome /> },
  { name: 'Firefox', version: 55, logo: <LogoFirefox /> },
  { name: 'Opera', version: 46, logo: <LogoOpera /> }
]

const Downloads = () => {
  return (
    <section className={styles.container}>
      <div className={global.container}>
        <div className={styles.header}>
          <h2 className={global.section_title}>Download the extension</h2>
          <p className={global.section_paragraph}>
            We've got more browsers in the pipeline. Please do let us know if you've got 
            a favourite you'de like us to prioritize.
          </p>
        </div>
        <div className={styles.body}>
          {cardData.map(item => (
            <CardDownload key={item.name} logo={item.logo} name={item.name} version={item.version} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Downloads