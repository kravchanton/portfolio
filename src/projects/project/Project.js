import React from "react";
import styles from "./Project.module.css";


export const Project = (props) => {
    return (
        <div className={styles.projectItem} onClick={() => window.open(props.link, "_blank")}>
            <img src={props.img} alt="img"/>

            <h3>{props.title}</h3>
        </div>
    );
}