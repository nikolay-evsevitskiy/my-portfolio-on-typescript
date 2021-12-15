import React from "react";
import style from './RemoteWork.module.css'
import {Button} from "../Common/Button/Button";
import commonStyle from "../Common/Styles/Styles.module.css";

export const RemoteWork = () => {
    return <div className={style.RemoteWorkContainer}>
        <div className={`${commonStyle.container} ${style.RemoteWorkBlock}`}>
            <h3 className={style.title}>I am considering options for remote work</h3>
            <Button title={"Hire me!"} address={'#'} />
        </div>
    </div>
}