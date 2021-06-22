import { ButtonHTMLAttributes } from 'react'

import '../assets/styles/Button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
    return (
        <button className="Button" {...props}></button>
    )
}