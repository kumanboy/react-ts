import {FormEvent, useRef, useState} from "react";

const Form = () => {
    type formType = {
        name: string,
        email: string,
        password: string,
    }

    const [submittedData, setSubmittedData] = useState<formType>({
        name: "",
        email: "",
        password: "",
    })

    const name = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    const handleClick = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        const nameValue = name.current!.value
        const emailValue = email.current!.value
        const passwordValue = password.current!.value

        setSubmittedData({
            name: nameValue,
            email: emailValue,
            password: passwordValue,
        })
    }

    return (
        <form onSubmit={handleClick}>
            <input type={"text"} placeholder={`Enter Your Name...`} ref={name} />
            <input type={"email"} placeholder={`Enter Your Email...`} ref={email}/>
            <input type={"password"} placeholder={`Enter Your Password`} ref={password}/>
            <button type={"submit"}>Submit</button>

            <section>
                <h1>Name: {submittedData.name}</h1>
                <h1>Email: {submittedData.email}</h1>
                <h1>Password: {submittedData.password}</h1>
            </section>
        </form>
    )
}
export default Form
