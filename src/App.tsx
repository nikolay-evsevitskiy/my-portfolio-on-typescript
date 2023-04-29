import './App.module.scss';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {MyProjects} from "./MyProjects/MyProjects";
import {MyCV} from "./MyCV/MyCV";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./FooterBlock/Footer";
import styles from "./App.module.scss"
import Particles from "react-tsparticles";
import React from "react";


function App() {
    return (

        <div className={styles.App}>
            <Particles options={{
                background: {
                    color: {
                        value: "rgba(17, 19, 25, 0.92)",
                    },
                },
                fpsLimit: 60,
                particles: {
                    links: {
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    size: {
                        random: true,
                        value: 1,
                    },
                },
            }}/>
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <MyCV/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
