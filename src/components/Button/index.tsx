import style from "./style.module.css"
export interface IButton {
    onClick?: () => void
    children: string
    className?: string
}

export default function Button({ onClick, children, className }: IButton) {
    return (
        <button onClick={onClick} className={className ? className : style.button}>{children}</button>
    )
}