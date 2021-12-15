import React from "react";
import style from "./MyProjects.module.css"
import commonStyle from "../Common/Styles/Styles.module.css"
import {MyProject} from "./MyProject/MyProject";


export const MyProjects = () => {
    return <div className={style.myProjectBlock}>
        <div className={`${commonStyle.container} ${style.myProjectContainer}`}>
            <h2 className={style.title}>My projects</h2>
            <div className={style.myProjects}>
                <MyProject title={'Name of project'}
                           description={'dipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.'}/>
                <MyProject title={'Name of project'}
                           description={'dipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.'}/>

            </div>

        </div>
    </div>
}