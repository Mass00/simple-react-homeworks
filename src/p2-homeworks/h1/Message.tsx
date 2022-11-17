import React from 'react'
import st from './Message.module.css'

type MessagePropsTypes = {
    avatar: string
    name: string
    message: string
    time: string
    index: number
}

function Message(
    {
        avatar, name, message, time, index
    }: MessagePropsTypes
) {

    const rootMsgWrapper = index % 2 ? st.msgWrapper : [st.msgWrapper, st.active].join(" ")
    const rootBody = index % 2 ?  [st.body, st.active].join(" ") : st.body
    return (
        <div className={rootMsgWrapper}>
            <div className={st.message}>
                <div className={rootBody}>
                    <h3>{name}</h3>
                    <span>{message}</span>
                </div>
                <div
                    className={st.wrapper}
                    style={{order: index % 2 ? -1: 1}}
                >
                    <div className={st.avatar}>
                        <img src={avatar}/>
                    </div>
                    <div className={st.time}>
                        <span>{time}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
