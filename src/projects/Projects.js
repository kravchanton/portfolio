import React from "react";
import styles from "../projects/Projects.module.css";
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import socialNetwork from '../image/social.jpg'


const projects = [
    {img: socialNetwork, link: 'https://kravchanton.github.io/socialNet/', title: 'Social network'},
    {img: socialNetwork, link: 'https://kravchanton.github.io/socialNet/', title: 'Social network'}
]


export const Projects = () => {
    return (
        <div className={styles.projectsBlock} id='projects'>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <h2 className={styles.title}>Projects</h2>
              <div className={styles.items}>  {projects.map(e =>
                  <Project img={e.img} link={e.link} title={e.title}/>
              )}</div>
            </div>
        </div>

    );
}