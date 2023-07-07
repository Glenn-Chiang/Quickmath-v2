import { Form } from "react-router-dom";
import styles from '../signUp/signUp.module.css'
import Banner from "../../components/banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import RedButton from "../../components/redButton/redButton";

export default function SignOut() {
  return (
    <>
      <Banner/>
      <h2>
      <FontAwesomeIcon icon={faSignOut}/>
        Sign Out
      </h2>
      <Form method="post" className={styles.form}>
        See you soon!
        <RedButton text='Sign Out'/>
      </Form>
    </>
  )
}
