import React from "react"

const MyInput = ({title, value, onChange}) => {
    return (
        <>
            <h1>{title}</h1>
            <input type="text" name="" id="" value={value} onChange={onChange}/>
        </>
    )
}

export default MyInput;