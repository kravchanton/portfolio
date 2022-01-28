import React from "react";
import styles from "../Main/Main.module.css";
import styleContainer from '../common/styles/Container.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styleContainer.container}>
                <div className={styles.wrapper}>
                    <div className={styles.text}>
                        <h1>Hi, I’m Anton Kravchuk</h1>
                        <h2>Front-end developer</h2></div>
                    <div className={styles.contacts}>
                        <div className={styles.contactsText}>FIND WITH ME</div>
                        <div className={styles.contactsIcons}><FontAwesomeIcon icon={['fab', 'fa-telegram']}/> </div>
                    </div>
                </div>


                <div className={styles.photo}>
                    <div className={styles.image}></div>
                </div>
            </div>

        </div>
    );
}

export default Main;