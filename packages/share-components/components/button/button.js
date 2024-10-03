import React from "react"

export default function Button({label}) {

    return (
        <button className="storybook-button" type="button">
            {label}
        </button>
    )
}