import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import {Projects} from "./projects/Projects";


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills />
            <Projects />
        </div>


    );
}

export default App;
