/* eslint-disable react/no-unescaped-entities */
import { Form, Link } from 'react-router-dom';
import Banner from '../../components/banner';
import RedButton from '../../components/redButton/redButton';
import styles from '../signUp/signUp.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';

export default function SignIn() {
  return (
    <>
      <Banner />
      <h2>
        <FontAwesomeIcon icon={faSignIn}/>
        Sign In</h2>
      <Form className={styles.form} method='post'>
        <p>
          Welcome back!
        </p>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name='email' required/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name='password' required/>
        </div>
        <RedButton text='Sign In' />
        <p>Don't have an account? <Link className={styles.link} to={'/signUp'}>Sign Up</Link></p>
      </Form>
    </>
  );
}