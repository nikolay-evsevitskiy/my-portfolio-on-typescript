import React from "react";
import style from './MyCV.module.scss'
import {Button} from "../Common/Button/Button";
import commonStyle from "../Common/Styles/Styles.module.css";
import {Title} from "../Common/Components/Title/Title";
import cvImage from "../assets/images/CV.png"

export const MyCV = () => {
    return <div className={style.RemoteWorkBlock} id={"cvId"}>
        <div className={`${commonStyle.container} ${style.RemoteWorkContainer}`}>
            <Title text={'My CV'}/>
            <div className={style.cvImg} style={{backgroundImage: `url(${cvImage})`}}>
                <div className={style.buttonContainer}>
                    <Button title={"Download"}
                            address={'https://drive.google.com/file/d/1IsHBUw4rrjZfkwNadBzURB4TnOHsP_3F/view?usp=sharing'}/>
                </div>
            </div>
        </div>
    </div>
}
