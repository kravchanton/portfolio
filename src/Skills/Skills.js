import React from "react";
import styles from '../Skills/Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import logoReact from '../assets/icons/react-2.svg';
import logoRedux from '../assets/icons/redux.svg';
import logoTS from '../assets/icons/typescript.svg';
import logoJS from '../assets/icons/logo-javascript.svg';
import axios from '../assets/icons/axios.svg';
import storyBook from '../assets/icons/storybook.svg';
import git from '../assets/icons/git-icon.svg';
import logoHTML from '../assets/icons/html-1.svg';
import logoCSS from '../assets/icons/css-3.svg';
import sass from '../assets/icons/sass-1.svg';
import {v1} from "uuid";

const skills = [
    {id: v1(), title: 'React', logo: logoReact},
    {id: v1(), title: 'Redux', logo: logoRedux},
    {id: v1(), title: 'TypeScript', logo: logoTS},
    {id: v1(), title: 'JavaScript', logo: logoJS},
    {id: v1(), title: 'REST API / AXIOS', logo: axios},
    {id: v1(), title: 'Storybook', logo: storyBook},
    {id: v1(), title: 'Git', logo: git},
    {id: v1(), title: 'HTML', logo: logoHTML},
    {id: v1(), title: 'CSS', logo: logoCSS},
    {id: v1(), title: 'SASS', logo: sass},


]


function Skills() {
    return (
        <div className={styles.skillsBlock} id='skills'>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    {skills.map(e => <Skill key={e.id} title={e.title} icon={e.logo}/>)}
                </div>

            </div>
        </div>
    );
}

export default Skills;