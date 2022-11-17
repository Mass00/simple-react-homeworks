import React from 'react'
import st from './HW1.module.css'
import Message from "./Message";

const messageData = [
    {
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Ivan',
        message: 'Hello, she didn’t do anything and rested all day, how are you?',
        time: '22:00',
    },
    {
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Bolvan',
        message: 'Hello, how are you, what did you do yesterday?',
        time: '22:00',
    },

]

function HW1() {
    return (
        <div>
            <hr/>
            <div className={st.container}>
                <h1>Hometask #1</h1>

                {/*should work (должно работать)*/}
                <div style={{display: 'flex', flexDirection: "column"}}>
                    {messageData.map((mes, index) => <Message
                        key={index}
                        index={index}
                        avatar={mes.avatar}
                        name={mes.name}
                        message={mes.message}
                        time={mes.time}
                    />)}
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <input
                        style={{
                            width: '85%',
                            outline: 'none',
                            height: '40px',
                        }}
                        type={"text"}
                    />
                    <button
                        style={{
                            width: '13%'
                        }}
                    >Send</button>
                </div>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
