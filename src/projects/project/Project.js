import React from "react";
import styles from "./Project.module.css";


export const Project = (props) => {
    return (
        <div className={styles.projectItem}>
            <img src={props.img} alt="img"/>

            <h3>{props.title}</h3>
        </div>
    );
}