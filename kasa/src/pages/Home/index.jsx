import { Link } from "react-router-dom"

function Home() {
    return(
        <div>
            <h1>🙋‍♀️ BIENVENUE 🙋</h1>

            <div>
                <Link to="/house">Une super loc'casion</Link>
            </div>
        </div>
    )
}

export default Home