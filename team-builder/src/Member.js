import React from 'react'

export default function Member(props) {
    const { info } = props

    if (!info) {
        return <h1>Getting member info...</h1>
    } else {
        return (
            <div>
                <h2>Name: {info.name}</h2>
                <p>Email: {info.email}</p>
                <p>Role: {info.role}</p>
            </div>
        )
    }
}