import React from "react";
import style from "./Skill.module.scss"

type SkillPropsType = {
    title: string
    description: string
    styleComponent: {}
}


export const Skill: React.FC<SkillPropsType> = ({title, description, styleComponent}) => {
    return <div className={style.skillBlock}>
        <div className={style.icon} style={styleComponent}/>
        <h3 className={style.title}>{title}</h3>
        <span className={style.description}>{description}</span>

    </div>
}
