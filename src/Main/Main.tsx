import React from "react";
import style from "./Main.module.scss"
import commonStyle from "../Common/Styles/Styles.module.css"
import photoImg from "../assets/images/IMG_9909.jpg"


export const Main = () => {
    const myPhoto = {
        backgroundImage: `url(${photoImg})`
    }
    return <div className={style.mainBlock}>
        <div className={`${commonStyle.container} ${style.mainContainer}`}>
            <div className={style.text}>
                <span>Hi There</span>
                <h1>I am <span className={style.fullName}>Nikolay Evsevitsky</span></h1>
                <p>Frontent Developer</p>
            </div>
            <div className={style.photo} style={myPhoto}></div>
        </div>

    </div>
}
