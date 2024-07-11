
import "./index.css"
export interface IButton {
    onClick?: () => void
    children: string
    className?: string
}

export default function Button({ onClick, children, className }: IButton) {
    return (
        <>
            <button onClick={onClick} className={className ? className : "button"}>{children}</button>
        </>
    )
}