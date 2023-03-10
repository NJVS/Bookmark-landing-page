import global from '../../../global.module.scss';
import styles from './Faq.module.scss';
import { Accordion, AccordionItem } from '../../Accordion/Accordion';

const faqData = [
  {
    id: 1,
    question: 'What is Bookmark?',
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
  },
  {
    id: 2,
    question: "How can I request a new browser?",
    answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
  },
  {
    id: 3,
    question: "Is there a mobile app?",
    answer: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
  },
  {
    id: 4,
    question: "What about other Chromium browsers?",
    answer: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
  }
]

const Faq = () => {
  return (
    <section className={styles.container}>
      <div className={global.container}>
        <div className={styles.header}>
          <h2 className={global.section_title}>Frequently Asked Questions</h2>
          <p className={global.section_paragraph}>
            Here are some of our FAQs. If you have any other questions you'd
            like to answered please feel free to email us.
          </p>
        </div>
        <div className={styles.body}>
          <Accordion>
            {faqData.map(item => (
              <AccordionItem 
                key={item.id} 
                id={item.id}
                header={item.question}
              >
                {item.answer}
              </AccordionItem>
            ))}
          </Accordion>
          <a href="#" className={`${global.button} ${global.primary}`}>More Info</a>
        </div>
      </div>
    </section>
  )
}

export default Faq