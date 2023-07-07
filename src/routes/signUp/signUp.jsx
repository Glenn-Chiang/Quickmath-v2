import { Form, Link } from "react-router-dom";
import Banner from "../../components/banner";
import styles from './signUp.module.css'
import RedButton from "../../components/redButton/redButton";

export default function SignUp() {
  return (
    <>
      <Banner />
      <h2>Sign Up</h2>
      <Form className={styles.form} method="post">
        <p>
          Save your scores, track your stats and climb the Quickmath leaderboard!
        </p>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" name="username" required/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" required/>
        </div>
        <RedButton text='Sign Up' />
        <p>Already have an account? <Link className={styles.link} to={'/signIn'}>Sign In</Link></p>
      </Form>
    </>
  );
}

