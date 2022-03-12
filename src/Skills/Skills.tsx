import React from "react";
import style from "./Skills.module.scss"
import commonStyle from "../Common/Styles/Styles.module.css"
import Tilt from 'react-parallax-tilt';
import {Skill} from "./Skill/Skill";
import {Title} from "../Common/Components/Title/Title";
import reactIconImg from "../assets/images/atom.png";
import reduxIconImg from "../assets/images/redux.png";
import jsIconImg from "../assets/images/js.png";
import htmlIconImg from "../assets/images/css-3.png";
import cssIconImg from "../assets/images/html.png";
import typeScriptIconImg from "../assets/images/Typescript_logo_2020.svg.png";
import toolkitIconImg from "../assets/images/reduxToolkit.png";
import hookFormIconImg from "../assets/images/ReacktHookForm.jpg";
import reactRouterIconImg from "../assets/images/reactRouter.jpg";
import formikIconImg from "../assets/images/preview.png";
import storyBookIconImg from "../assets/images/storybook.png";
import gitIconImg from "../assets/images/Git_icon.svg.png";
import materialUIIconImg from "../assets/images/materialUI.png";
import antDesignIconImg from "../assets/images/antDesign.png";
import sassIconImg from "../assets/images/Sass.png";
import postmanIconImg from "../assets/images/postman.png";
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
        {id: 1, title: "React", percent: 70, iconImg: {backgroundImage: `url(${reactIconImg})`}},
        {id: 2, title: "Redux", percent: 65, iconImg: {backgroundImage: `url(${reduxIconImg})`}},
        {id: 3, title: "JS", percent: 63, iconImg: {backgroundImage: `url(${jsIconImg})`}},
        {id: 4, title: "TypeScript", percent: 69, iconImg: {backgroundImage: `url(${typeScriptIconImg})`}},
        {id: 5, title: "Redux Toolkit", percent: 39, iconImg: {backgroundImage: `url(${toolkitIconImg})`}},
        {id: 6, title: "Postman", percent: 42, iconImg: {backgroundImage: `url(${postmanIconImg})`}},
        {id: 7, title: "React Hook Form", percent: 46, iconImg: {backgroundImage: `url(${hookFormIconImg})`}},
        {id: 8, title: "React Router", percent: 79, iconImg: {backgroundImage: `url(${reactRouterIconImg})`}},
        {id: 9, title: "Formik", percent: 55, iconImg: {backgroundImage: `url(${formikIconImg})`}},
        {id: 10, title: "Git", percent: 40, iconImg: {backgroundImage: `url(${gitIconImg})`}},
        {id: 11, title: "Storybook", percent: 51, iconImg: {backgroundImage: `url(${storyBookIconImg})`}},
        {id: 12, title: "HTML", percent: 87, iconImg: {backgroundImage: `url(${htmlIconImg})`}},
        {id: 13, title: "CSS", percent: 73, iconImg: {backgroundImage: `url(${cssIconImg})`}},
        {id: 14, title: "Sass", percent: 44, iconImg: {backgroundImage: `url(${sassIconImg})`}},
        {id: 15, title: "Material UI", percent: 58, iconImg: {backgroundImage: `url(${materialUIIconImg})`}},
        {id: 16, title: "Ant Design", percent: 55, iconImg: {backgroundImage: `url(${antDesignIconImg})`}},


    ]

    return <div className={style.skillsBlock}>
        <div className={`${commonStyle.container} ${style.skillsContainer}`} id={"skillsId"}>
            <Title text={"Skills"}/>
            <div className={style.skills}>
                <Slide left>

                    {mySkills.map(i => <Tilt><Skill key={i.id}
                                                    title={i.title}
                                                    styleComponent={i.iconImg}
                                                    percent={i.percent}/>
                        </Tilt>
                    )}

                </Slide>

            </div>
        </div>
    </div>
}
