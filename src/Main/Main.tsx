import React from "react";
import style from "./Main.module.scss"
import commonStyle from "../Common/Styles/Styles.module.css"
import photoImg from "../assets/images/IMG_9909.jpg"
import ReactTypingEffect from 'react-typing-effect';
import Particles from "react-tsparticles";
// @ts-ignore
import Zoom from 'react-reveal/Zoom';
import Tilt from 'react-parallax-tilt';


export const Main = () => {
    const myPhoto = {
        backgroundImage: `url(${photoImg})`
    }

    return <div className={style.mainBlock} id={"mainId"}>
        <Particles className={style.animationBlock}
                   options={{
                       background: {
                           color: {
                               value: "rgba(17, 19, 25, 0.92)",
                           },
                       },
                       fpsLimit: 30,
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
                               speed: 2,
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

        <div className={`${commonStyle.container} ${style.mainContainer}`}>
            <div className={style.text}>
                <span>Hi There</span>
                <h1>I am <span className={style.fullName}>Nikolay Evsevitsky</span></h1>
                <p><ReactTypingEffect text="Front-end Developer"/></p>
            </div><Tilt>
            <Zoom top>

                    <div className={style.photo} style={myPhoto}/>
                <div></div>
            </Zoom>
        </Tilt>
        </div>

    </div>
}
