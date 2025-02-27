import {useRef} from "react";

const FormInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        inputRef.current?.focus()
    }
    return (
        <div>
            <input type={"text"} ref={inputRef} placeholder={"Enter something"}/>

            <button onClick={handleFocus}>Focus to Input</button>
        </div>
    )
}
export default FormInput
