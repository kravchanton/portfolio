import React from "react";
import styles from "../Main/Main.module.css";
import styleContainer from '../common/styles/Container.module.css'

function Main() {
    return (
        <div className={styles.main}>
            <div className={styleContainer.container}>
                <div className={styles.text}><span>Hi There</span>
                    <h1>I am Anton Kravchuk</h1></div>
                <div className={styles.photo}><img src="../image/photo.jpeg" alt="#"/></div>
            </div>

        </div>
    );
}

export default Main;