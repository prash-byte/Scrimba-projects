import '../App.css';
import { Link } from "react-router-dom"

export default function Home() {
    return(
        <div className="main">
              <h1>You got the travel plans, we got the travel vans.</h1>
              <h3>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</h3>
              <Link to="/vans">Find your van</Link>
        </div>
    )
}