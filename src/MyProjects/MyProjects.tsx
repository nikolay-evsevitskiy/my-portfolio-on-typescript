import React from "react";
import style from "./MyProjects.module.css"
import commonStyle from "../Common/Styles/Styles.module.css"
import {MyProject} from "./MyProject/MyProject";
import {Title} from "../Common/Components/Title/Title";


export const MyProjects = () => {
    return <div className={style.myProjectBlock}>
        <div className={`${commonStyle.container} ${style.myProjectContainer}`}>
            <Title text={'My Projects'}/>
            <div className={style.myProjects}>
                <MyProject title={'Name of project'}
                           description={'dipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.'}/>
                <MyProject title={'Name of project'}
                           description={'dipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.'}/>
                <MyProject title={'Name of project'}
                           description={'dipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.'}/>

            </div>

        </div>
    </div>
}