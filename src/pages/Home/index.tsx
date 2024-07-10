import Card from "../../components/Card"
import "./index.css"

export default function Home() {
    const article = [
        {
            title: "Reduce Noise Pollution",
            description: "The electric engine in a car works with electricity which does not produce the noisy sound of an internal combustion engine.",
            image: "../image/noise.png"
        },
        {
            title: "Reduce Air Pollution",
            description: "Electric cars do not produce carbon dioxide emissions and other gases that contribute to global warming and climate change.",
            image: "../image/pollution.png"
        },
        {
            title: "Reduce the Use of Fuel",
            description: "Electric cars can reduce dependence on increasingly limited fuel oil.",
            image: "../image/fuel.png"
        }
    ]
    return (
        <div className="section">
            <div className="top">
                <div className="section1">
                    <div className="title">
                        <h1>Don't <strong>Damage</strong> Nature with Your Car</h1>
                        <p>Change Your Old Car to an Electric Car <strong>Now</strong></p>
                    </div>
                    <img src="../image/car.png" alt="logo" className="imageTitle" />
                </div>
                <div className="section2">
                    <div className="benefit">
                        <h1>If you use an electric car, you contribute to:</h1>
                    </div>
                    <div className="article">
                        {article.map((a, i) => {
                            return (
                                <Card key={i}>
                                    <h3>{a.title}</h3>
                                    <p> {a.description}</p>
                                    <img src={a.image} className="imageArticle" />
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div >
    )
}