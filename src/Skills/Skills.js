import React from "react";
import styles from '../Skills/Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={'JS'} descr={'zs'}/>
                    <Skill title={'CSS'}/>
                    <Skill title={'React'}/>

                </div>

            </div>
        </div>
    );
}

export default Skills;