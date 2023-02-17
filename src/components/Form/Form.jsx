import { useState } from "react";
import validation from "./Validation";
import style from "./Form.module.css"
import button from "../Botton/Botton.module.css"

const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });


    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(
            validation({
                ...userData,
                [event.target.name]: event.target.value
            })
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit} className={style.form}>
                <p className={style.heading}>SIGN IN</p>
                <div className={style.field}>
                    <input className={style.inputField} placeholder="Username" type="text" name="username" value={userData.username} onChange={handleInputChange} />
                </div>
                    {errors.username && <p>{errors.username}</p>}
                <div className={style.field}>
                    <input className={style.inputField} placeholder="Password" type="password" name="password" value={userData.password} onChange={handleInputChange} />
                </div>
                    {errors.password && <p>{errors.password}</p>}
                <button className={button.Button}>Enter</button>
            </form>
        </div>
    )
}

export default Form;