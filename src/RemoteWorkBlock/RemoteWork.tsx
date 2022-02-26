import React from "react";
import style from './RemoteWork.module.scss'
import {Button} from "../Common/Button/Button";
import commonStyle from "../Common/Styles/Styles.module.css";
import {Title} from "../Common/Components/Title/Title";

export const RemoteWork = () => {
    return <div className={style.RemoteWorkBlock}>
        <div className={`${commonStyle.container} ${style.RemoteWorkContainer}`}>
            <Title text={'My CV'}/>
            <Button title={"Download"} address={'#'} />
        </div>
    </div>
}
