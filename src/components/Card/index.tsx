import "./index.css"

export interface ICard {
    children: any
}

export default function Card({ children }: ICard) {
    return (
        <div className="card">
            {children}
        </div>
    )
}