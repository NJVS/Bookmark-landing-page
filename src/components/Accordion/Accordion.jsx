import { createContext, useContext, useRef, useState } from 'react';
import global from '../../global.module.scss';
import styles from './Accordion.module.scss';
import { ReactComponent as IconArrow } from '../../assets/icons/icon-arrow.svg';

const AccordionContext = createContext(null);

const AccordionProvider = ({ children }) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <AccordionContext.Provider
      value={{
        activeItem,
        setActiveItem,
      }}
    >
      {children}
    </AccordionContext.Provider>
  )
}

export const Accordion = ({ children }) => {
  return (
    <AccordionProvider>
      <ul className={styles.container}>
        {children}
      </ul>
    </AccordionProvider>
  )
}

export const AccordionItem = ({ id, header, children }) => {
  const { activeItem, setActiveItem } = useContext(AccordionContext);
  const answer = useRef(null)

  function clickHandler(id) {
    if (activeItem === id) {
      setActiveItem(null)
    } else {
      setActiveItem(id)
    }
  }

  return (
    <li className={`${styles.item} ${activeItem === id ? styles.active : ''}`}>
      <button onClick={(() => clickHandler(id))}>
        {header}
        <IconArrow />
      </button>
      <p ref={answer}
        className={global.section_paragraph}
        style={{maxHeight: `${activeItem === id ? answer.current.scrollHeight : 0}px`}}
      >
        {children}
      </p>
    </li>
  )
}
