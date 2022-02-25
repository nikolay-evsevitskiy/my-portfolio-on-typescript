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


export const Skills = () => {
    const reactIcon = {
        backgroundImage: `url(${reactIconImg})`
    }
    const reduxIcon = {
        backgroundImage: `url(${reduxIconImg})`
    }
    const jsIcon = {
        backgroundImage: `url(${jsIconImg})`
    }
    const cssIcon = {
        backgroundImage: `url(${cssIconImg})`
    }
    const htmlIcon = {
        backgroundImage: `url(${htmlIconImg})`
    }

    return <div className={style.skillsBlock}>
        <div className={`${commonStyle.container} ${style.skillsContainer}`}>
            <Title text={"Skills"}/>
            <div className={style.skills}>
                <Skill title={"React"}
                       styleComponent={reactIcon}
                       percent={"90"}
                       description={" dipisicing Lorem ipsum dolor sit amet," +
                           " consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                <Skill title={"Redux"}
                       styleComponent={reduxIcon}
                       percent={"85"}
                       description={" dipisicing Lorem ipsum dolor sit amet," +
                           " consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                <Skill title={"JS"}
                       styleComponent={jsIcon}
                       percent={"80"}
                       description={" dipisicing Lorem ipsum dolor sit amet," +
                           " consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                <Skill title={"HTML"}
                       styleComponent={htmlIcon}
                       percent={"100"}
                       description={" dipisicing Lorem ipsum dolor sit amet," +
                           " consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                <Skill title={"CSS"}
                       percent={"70"}
                       styleComponent={cssIcon}
                       description={" dipisicing Lorem ipsum dolor sit amet," +
                           " consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>

            </div>

        </div>
    </div>
}
