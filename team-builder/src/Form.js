import React from 'react'

export default function MyForm(props) {
    const { vals, update, submit } = props

    const changeEvt = event => {
        const { name, value } = event.target
        update(name, value)
    }

    const submitEvt = event => {
        event.preventDefault()
        submit()
    }

    return (
        <form onSubmit={submitEvt}>
            <label htmlFor='name'>Name
            <input 
                id='name'
                type='text'
                name='name'
                onChange={changeEvt}
                value={vals.name}
            />
            </label>

            <label htmlFor='email'>Email
            <input 
                id='email'
                type='email'
                name='email'
                onChange={changeEvt}
                value={vals.email}
            />
            </label>

            <label htmlFor='role'>Role
            <select 
                id='role'
                name='role'
                onChange={changeEvt}
                value={vals.role}>
                <option value='backend engineer'>backend engineer</option>
                <option value='frontend engineer'>frontend engineer</option>
                <option value='designer'>designer</option>
                <option value='etc'>etc</option>
            </select>
            </label>

            <div>
                <button>submit</button>
            </div>
        </form>
    )
}