import "./index.css"

export interface ICard {
    children: any
    className?: any
}

export default function Card({ children, className }: ICard) {
    return (
        <div className={className ? className : "card"}>
            {children}
        </div>
    )
}