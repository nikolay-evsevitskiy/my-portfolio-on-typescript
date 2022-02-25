import React from "react";
import style from "./MyProjects.module.scss"
import commonStyle from "../Common/Styles/Styles.module.css"
import {MyProject} from "./MyProject/MyProject";
import {Title} from "../Common/Components/Title/Title";
import todolistImage from "../assets/images/Todolist.png";
import socialNetImage from "../assets/images/SocialNetWork1.png";
import counterImage from "../assets/images/Counter.png";


export const MyProjects = () => {
    const todolist = {
        backgroundImage: `url(${todolistImage})`
    }
    const socialNet = {
        backgroundImage: `url(${socialNetImage})`
    }
    const counterImg = {
        backgroundImage: `url(${counterImage})`
    }
    const todolistUrlAddress = "https://nikolay-evsevitskiy.github.io/todolist/"
    const counterUrlAddress = "https://nikolay-evsevitskiy.github.io/Counter/"
    const socialNetworkUrlAddress = "https://nikolay-evsevitskiy.github.io/todolist/"

    return <div className={style.myProjectBlock}>
        <div className={`${commonStyle.container} ${style.myProjectContainer}`}>
            <Title text={"My Projects"}/>
            <div className={style.myProjects}>
                <MyProject title={"Todolist"}
                           styleImage={todolist}
                           urlAddress={todolistUrlAddress}
                           description={"In this application, you can create various task lists, mark them as completed, sort and edit them"}/>
                <MyProject title={'Social network'}
                           styleImage={socialNet}
                           urlAddress={socialNetworkUrlAddress}
                           description={"This is a social network application, implemented in React, Redux, TypeScript"}/>
                <MyProject title={"Counter"}
                           styleImage={counterImg}
                           urlAddress={counterUrlAddress}
                           description={"This is a simple counter application"}/>

            </div>

        </div>
    </div>
}
