import React from "react";
import styles from './Nav.module.css'
import { Link} from 'react-scroll'

function Nav() {
    return (
        <div className={styles.nav}>
            <Link  to="main" spy={false} smooth={true} duration={500} >MAIN</Link>
            <Link  to="skills" spy={true} smooth={true} duration={500} >SKILLS</Link>
            <Link  to="projects" spy={true} smooth={true} duration={500} >PROJECTS</Link>
            <Link  to="contact" spy={true} smooth={true} duration={500} >CONTACT</Link>

        </div>
    );
}

export default Nav;