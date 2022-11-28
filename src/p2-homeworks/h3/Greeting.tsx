import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)

    return (
        <div className={s.container}>
            <span className={s.spanCount}>
                Кол-во пользователей: {totalUsers}
            </span>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button
                className={s.btn}
                disabled={error}
                onClick={addUser}>add</button>
            <div>
                <span style={{color: 'red'}}>{error && 'Ошибка. Введите имя!'}</span>
            </div>
        </div>
    )
}

export default Greeting
