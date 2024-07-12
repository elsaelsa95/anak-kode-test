import style from "./style.module.css"

export interface ICard {
    children: any
    className?: any
}

export default function Card({ children, className }: ICard) {
    return (
        <div className={className ? className : style.card}>{children}</div>
    )
}