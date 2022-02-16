import React from "react";
import style from "./Skills.module.css"
import commonStyle from "../Common/Styles/Styles.module.css"
import {Skill} from "./Skill/Skill";
import {Title} from "../Common/Components/Title/Title";


export const Skills = () => {
    return <div className={style.skillsBlock}>
        <div className={`${commonStyle.container} ${style.skillsContainer}`}>
            <Title text={'Skills'}/>
            <div className={style.skills}>
                <Skill title={'JS'}
                       description={' dipisicing Lorem ipsum dolor sit amet,' +
                           ' consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
                           ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'}/>
                <Skill title={'CSS'}
                       description={' dipisicing Lorem ipsum dolor sit amet,' +
                           ' consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
                           ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'}/>
                <Skill title={'React'}
                       description={' dipisicing Lorem ipsum dolor sit amet,' +
                           ' consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
                           ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'}/>
                <Skill title={'React'}
                       description={' dipisicing Lorem ipsum dolor sit amet,' +
                           ' consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
                           ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'}/>

            </div>

        </div>
    </div>
}