import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import st from './Affairs.module.css'
type AffairsPropsType = { // need to fix any
    data: AffairType[]
    filter: FilterType
    setFilter:  React.Dispatch<React.SetStateAction<FilterType>>
    deleteAffairCallback: any
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter("all")} // need to fix
    const setHigh = () => {props.setFilter("high")}
    const setMiddle = () => {props.setFilter("middle")}
    const setLow = () => {props.setFilter("low")}

    return (
        <div>
            <div className={st.buttonsGrp}>
                <button
                    style={{
                        border: '2px solid blue',
                        marginRight: '5px',
                        background: props.filter === 'all' ? "blue" : "white",
                        color: props.filter === 'all' ? "white" : "blue"
                }}
                    onClick={setAll}>All</button>
                <button
                    style={{
                        border: '2px solid red',
                        marginRight: '5px',
                        background: props.filter === 'high' ? "red" : "white",
                        color: props.filter === 'high' ? "white" : "red",
                    }}
                    onClick={setHigh}>High</button>
                <button
                    style={{
                        border: '2px solid green',
                        marginRight: '5px',
                        background: props.filter === 'middle' ? "green" : "white",
                        color: props.filter === 'middle' ? "white" : "green",
                    }}
                    onClick={setMiddle}>Middle</button>
                <button
                    style={{
                        border: '2px solid orange',
                        marginRight: '5px',
                        background: props.filter === 'low' ? "orange" : "white",
                        color: props.filter === 'low' ? "white" : "orange",
                    }}
                    onClick={setLow}>Low</button>
            </div>
            <div className={st.container}>
                {mappedAffairs}
            </div>

        </div>
    )
}

export default Affairs
