import { useState } from 'react';
import global from '../../../global.module.scss';
import styles from './Subscribe.module.scss';
import { ReactComponent as IconError } from '../../../assets/icons/icon-error.svg'

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(true);
  
  /// submit handler
  function submitHandler(event) {
    event.preventDefault();
    const validateEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
    
    if (validateEmail) {
      // send email
      console.log('SUCCESS')
    } else {
      setValid(false);
    }
  }

  /// input handler
  function inputHandler(event) {
    setEmail(event.target.value)
    setValid(true);
  }

  return (
    <section className={styles.container}>
      <div>
        <p>35,000+ Already Joined</p>
        <h2 className={`${global.section_title} ${global.light}`}>
          Stay up-to-date with what we're doing
        </h2>
        <form onSubmit={submitHandler} noValidate>
          <div className={`${styles.form_group} ${!valid ? styles.invalid : ''}`}>
            <input type="email" placeholder='Enter your email address' 
              value={email} 
              onInput={inputHandler} 
            />
            {!valid && (
              <>
                <p>Woops, make sure it's an email</p>
                <IconError />
              </>
            )}
          </div>
          <button type='submit' className={`${global.button} ${global.secondary}`}>Contact Us</button>
        </form>
      </div>
    </section>
  )
}

export default Subscribe