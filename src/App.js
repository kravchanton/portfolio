import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import {Projects} from "./projects/Projects";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/footer";


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills />
            <Projects />
            <Contacts />
            <Footer />
        </div>


    );
}

export default App;
