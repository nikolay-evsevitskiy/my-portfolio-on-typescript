import React from "react";
import style from "./Skill.module.scss"
import ProgressBar from "../../Common/ProgressBar/ProgressBar";

type SkillPropsType = {
    title: string
    styleComponent: {}
    percent: number
}


export const Skill: React.FC<SkillPropsType> = ({title, styleComponent, percent}) => {
    return <div className={style.skillBlock}>
        <div className={style.icon} style={styleComponent}/>
        <h3 className={style.title}>{title}</h3>
        <ProgressBar percent={percent}/>

    </div>
}
