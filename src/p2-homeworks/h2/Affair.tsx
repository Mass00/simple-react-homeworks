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

    return (
        <div className={st.container}>
            <div className={st.alert}>
                {props.affair.name}
            </div>
            <span className={st.closebtn} onClick={deleteCallback}>&times;</span>
        </div>
    )
}

export default Affair
