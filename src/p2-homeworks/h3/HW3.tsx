import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import st from './HW3.module.css'

// types
export type UserType = {
    _id: number // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        setUsers(prev => [...prev, {_id: 1, name}]) // need to fix
    }

    return (
        <div>
            <hr/>
            <div className={st.container}>
                <h3>homeworks 3</h3>

                {/*should work (должно работать)*/}
                <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
