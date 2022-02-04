import React from "react";
import styles from "./Contacts.module.css";
import styleContainer from '../common/styles/Container.module.css'
import {ContactForm} from "./ContactForm/ContactForm";


export const Contacts = () => {
    return (
        <div className={styles.contactsBlock} id='contact'>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h2 className={styles.title}>Contacts with me</h2>
                <ContactForm />

            </div>
        </div>

    );
}