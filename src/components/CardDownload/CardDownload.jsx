import global from '../../global.module.scss';
import styles from './CardDownload.module.scss';
import { ReactComponent as DotBg } from '../../assets/icons/bg-dots.svg';

const CardDownload = ({ logo, name, version }) => {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        {logo}
        <h3 className={global.section_title}>Add to {name}</h3>
        <p className={global.section_paragraph}>Minimum version {version}</p>
      </div>
      <DotBg />
      <div className={styles.footer}>
        <button className={`${global.button} ${global.primary} ${global.block}`}>Add & Install Extension</button>
      </div>
    </div>
  )
}

export default CardDownload