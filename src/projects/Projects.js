import React from "react";
import styles from "../projects/Projects.module.css";
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import socialNetwork from '../image/social.jpg'



export const Projects = () =>  {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <h2 className={styles.title}>Projects</h2>
            <Project img={socialNetwork} title={'Social network'}/>

            </div>
        </div>

    );
}