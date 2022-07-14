import { useState } from "react"

export const TodoInput = ({taskHandler}) => {
    const [text, setText] = useState("");

    const inputHandler = (e) => {
      //  console.log(e.target.value)
        setText(e.target.value);
    }

    return (
        <>
            <input type="text" placeholder="enter task" onChange={inputHandler} />
            <button style={{color: "brown"}} onClick={() => taskHandler(text)}>+</button>
        </>
    )
}