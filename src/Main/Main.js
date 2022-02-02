import React from "react";
import styles from "./Main.module.scss";
import styleContainer from '../common/styles/Container.module.scss'
import telegram from '../assets/icons/telegram-brands.svg';
import facebook from '../assets/icons/facebook-brands.svg';
import linkedin from '../assets/icons/linkedin-brands.svg';


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
                        <div className={styles.socialItems}>
                            <a href="https://www.t.me/antonkrrr"
                               className={styles.item}><img
                                src={telegram} alt=""/>
                            </a>
                            <a href="https://www.facebook.com/kravch.anton/"
                               className={styles.item}><img
                                src={facebook} alt=""/></a>
                            <a href="https://www.linkedin.com/in/%D0%B0%D0%BD%D1%82%D0%BE%D0%BD-%D0%BA%D1%80%D0%B0%D0%B2%D1%87%D1%83%D0%BA-a22044b6"
                               className={styles.item}><img
                                src={linkedin} alt=""/></a></div>
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