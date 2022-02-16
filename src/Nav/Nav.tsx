import React, {useState} from "react"
import style from "./Nav.module.css"


export const Nav = () => {
    const menuNames = ['Main', 'Skills', 'Projects', 'Contacts']
    const [clickMenuButton, setClickMenuButton] = useState<boolean>(false)
    const clickedHandler = () => {
        setClickMenuButton(!clickMenuButton)
    }
    return <div className={style.nav}>
        <div className={style.rowMenu}>
            {menuNames.map(i => <a href='#'>{i}</a>)}
        </div>

        <div className={style.columMenu}>{clickMenuButton ?
            <><a href="#" className={style.icon} onClick={clickedHandler}>&#9776;</a>
                {menuNames.map(item => <a href='#'>{item}</a>)}</> :
            <a href="#" className={style.icon} onClick={clickedHandler}>&#9776;</a>
        }</div>
    </div>

}
