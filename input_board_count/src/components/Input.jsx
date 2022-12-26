import React, { useState } from 'react'

function Input({ changeCount, setCount, task, setTask }) {
    const [value, setValue] = useState("");

    function handleChange(e) {
        setValue(e.target.value);
        changeCount();
    }
    function handleSubmit(e) {
        e.preventDefault();
        setTask([...task, value]);
        setValue("");
        setCount(0);
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input onChange={(e) => handleChange(e)} type="text" value={value} />
        </form>
    )
}

export default Input