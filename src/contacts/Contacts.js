import React from "react";
import styles from "./Contacts.module.css";
import styleContainer from '../common/styles/Container.module.css'


export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h2 className={styles.title}>Contacts with me</h2>
            </div>
        </div>

    );
}