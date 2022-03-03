import React from "react";
import style from "./Skills.module.scss"
import commonStyle from "../Common/Styles/Styles.module.css"
import {Skill} from "./Skill/Skill";
import {Title} from "../Common/Components/Title/Title";
import reactIconImg from "../assets/images/atom.png";
import reduxIconImg from "../assets/images/redux.png";
import jsIconImg from "../assets/images/js.png";
import cssIconImg from "../assets/images/css-3.png";
import htmlIconImg from "../assets/images/html.png";
// @ts-ignore
import Slide from 'react-reveal/Slide';

type MySkillsType = {
    id: number
    title: string
    percent: number
    iconImg: { backgroundImage: string }
}


export const Skills = () => {

    const mySkills: Array<MySkillsType> = [
        {id: 1, title: "React", percent: 90, iconImg: {backgroundImage: `url(${reactIconImg})`}},
        {id: 2, title: "Redux", percent: 85, iconImg: {backgroundImage: `url(${reduxIconImg})`}},
        {id: 3, title: "JS", percent: 74, iconImg: {backgroundImage: `url(${jsIconImg})`}},
        {id: 4, title: "HTML", percent: 87, iconImg: {backgroundImage: `url(${cssIconImg})`}},
        {id: 5, title: "CSS", percent: 79, iconImg: {backgroundImage: `url(${htmlIconImg})`}},
    ]

    return <div className={style.skillsBlock}>
        <div className={`${commonStyle.container} ${style.skillsContainer}` } id={"skillsId"}>
            <Title text={"Skills"}/>
            <div className={style.skills}>
                <Slide left>
                    {mySkills.map(i => <Skill key={i.id}
                                              title={i.title}
                                              styleComponent={i.iconImg}
                                              percent={i.percent}/>
                    )}
                </Slide>

            </div>
        </div>
    </div>
}
