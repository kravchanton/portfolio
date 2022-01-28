import React from "react";
import styles from '../nav/Nav.module.css'
import styleContainer from "../common/styles/Container.module.css";

function Nav() {
    return (
        <div className={styles.nav}>
             <a href="">MAIN</a>
                <a href="">SKILLS</a>
                <a href="">PROJECTS</a>
                <a href="">CONTACTS</a>


        </div>
    );
}

export default Nav;