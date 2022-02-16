import React from "react";
import style from "./Main.module.css"
import commonStyle from "../Common/Styles/Styles.module.css"


export const Main = () => {
    return <div className={style.mainBlock}>
        <div className={`${commonStyle.container} ${style.mainContainer}`}>
            <div className={style.text}>
                <span>Hi There</span>
                <h1>I am <span className={style.fullName}>Nikolay Evsevitsky</span></h1>
                <p>Frontent Developer</p>
            </div>
            <div className={style.photo}></div>
        </div>

    </div>
}
