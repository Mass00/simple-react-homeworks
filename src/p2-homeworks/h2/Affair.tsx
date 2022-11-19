import React from 'react'
import {AffairType} from "./HW2";
import st from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType// need to fix any
    deleteAffairCallback: any // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
    }// need to fix
    const getClassStyle = () => {switch (props.affair.priority){
        case "low": {
            return st.low
        }
        case "high": {
            return  st.high
        }
        case "middle": {
            return st.middle
        }
        default: return  st.all
    }}
    const colorStyle = getClassStyle()
    console.log(colorStyle)
    return (
        <div className={st.container}>
            <div className={[st.alert,colorStyle].join(" ")}>
                {props.affair.name}
            </div>
            <span className={[st.closebtn,colorStyle].join(" ")} onClick={deleteCallback}>&times;</span>
        </div>)

}

export default Affair
