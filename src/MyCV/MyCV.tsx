import React from "react";
import style from './MyCV.module.scss'
import {Button} from "../Common/Button/Button";
import commonStyle from "../Common/Styles/Styles.module.css";
import {Title} from "../Common/Components/Title/Title";
import cvImage from "../assets/images/MyCv.png";
// @ts-ignore
import Slide from 'react-reveal/Slide';


export const MyCV = () => {
    return <div className={style.RemoteWorkBlock} id={"cvId"}>
        <div className={`${commonStyle.container} ${style.RemoteWorkContainer}`}>
            <Title text={'My CV'}/>
            <Slide left>
                <div className={style.cvImg} style={{backgroundImage: `url(${cvImage})`}}>
                    <div className={style.buttonContainer}>
                        <Button title={"Download"}
                                address={'https://drive.google.com/file/d/1szUo7dag_8NMpsK8C21BnAI8_EWmTFFB/view?usp=sharing'}/>
                    </div>
                </div>
            </Slide>
        </div>
    </div>
}
