import React from "react";
import styles from '../Header/Header.module.css'
import Nav from "./nav/Nav";

function Header() {
    return (
        <div className={styles.header}>
            <Nav />

        </div>
    );
}

export default Header;