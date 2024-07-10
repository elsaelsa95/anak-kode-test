import Navbar from "../Navbar";
import "./index.css"

export interface IChildren {
    children: any
}

export default function Layout({ children }: IChildren) {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <main className="main">{children}</main>
        </>
    )
}