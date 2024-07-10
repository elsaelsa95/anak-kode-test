import Navbar from "../Navbar";

export interface IChildren {
    children: any
}

export default function Layout({ children }: IChildren) {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <main>{children}</main>
        </>
    )
}