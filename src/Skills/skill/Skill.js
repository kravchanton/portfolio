import React from "react";
import styles from '../skill/Skill.module.css'

function Skill(props) {
    return (
        <div className={styles.skill}>
            <img className={styles.icon} src={props.icon} alt="#"/>
            <h3>{props.title}</h3>

        </div>
    );
}

export default Skill;