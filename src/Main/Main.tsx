import React from "react";
import style from "./Main.module.scss"
import commonStyle from "../Common/Styles/Styles.module.css"
import photoImg from "../assets/images/IMG_9909.jpg"
import ReactTypingEffect from 'react-typing-effect';
// @ts-ignore
import Zoom from 'react-reveal/Zoom';
import Tilt from 'react-parallax-tilt';


export const Main = () => {
    const myPhoto = {
        backgroundImage: `url(${photoImg})`
    }
    return <div className={style.mainBlock} id={"mainId"}>
        <div className={`${commonStyle.container} ${style.mainContainer}`}>

            <div className={style.text}>
                <span>Hi There</span>
                <h1>I am <span className={style.fullName}>Nikolay Evsevitsky</span></h1>
                <p><ReactTypingEffect text="Front-end Developer"/></p>
            </div>
            <Zoom top>
                <Tilt>
                    <div className={style.photo} style={myPhoto}/>
                </Tilt>
            </Zoom>
        </div>

    </div>
}
