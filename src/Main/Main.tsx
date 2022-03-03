import React from "react";
import style from "./Main.module.scss"
import commonStyle from "../Common/Styles/Styles.module.css"
import photoImg from "../assets/images/IMG_9909.jpg"
import Particles from "react-tsparticles";
// @ts-ignore
import Zoom from 'react-reveal/Zoom';



export const Main = () => {
    const myPhoto = {
        backgroundImage: `url(${photoImg})`
    }
    return <div className={style.mainBlock} id={"mainId"}>

        <div className={`${commonStyle.container} ${style.mainContainer}`}>
            <Particles
                className={style.particles}
                options={{
                    background: {
                        color: {
                            value: "#111319",
                        },
                    },
                    fpsLimit: 100,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: false,
                                mode: "repulse",
                            },
                            resize: false,
                        },
                        modes: {
                            bubble: {
                                distance: 500,
                                duration: 3,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 8,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#fcac45",
                        },
                        links: {
                            color: "#fcac45",
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
                            random: true,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div className={style.text}>
                <span>Hi There</span>
                <h1>I am <span className={style.fullName}>Nikolay Evsevitsky</span></h1>
                <p>Frontent Developer</p>
            </div>
            <Zoom top>
                <div className={style.photo} style={myPhoto}/>
            </Zoom>
        </div>

    </div>
}
