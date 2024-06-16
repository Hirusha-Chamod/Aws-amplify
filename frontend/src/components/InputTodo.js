import React, { Fragment, useState } from "react"

const InputTodo = () => {

    const [description, setDescription] = useState('hello')

    const onsubmitForm = async (e) => {
        e.preventDefault()
        try {
            const body = { description }
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            window.location = "/";
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <Fragment>
            <h1 className="text center mt-5">Pern toto list</h1>
            <form onSubmit={onsubmitForm}>
                <input type="text" className="form-control" placeholder="Add Todo..." value={description}
                    onChange={e => setDescription(e.target.value)} />
                <button>Add</button>
            </form>
        </Fragment>
    )
}

export default InputTodo