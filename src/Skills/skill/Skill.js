import React from "react";
import styles from '../skill/Skill.module.css'

function Skill(props) {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}></div>
            <h3>{props.title}</h3>
            <span className={styles.descr}> {props.descr}</span>
        </div>
    );
}

export default Skill;