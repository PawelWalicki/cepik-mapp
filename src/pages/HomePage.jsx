import { Map } from "../components/Map/Map"
import { Footer } from "../components/Footer/Footer"
import './HomePage.css'
export const HomePage = () => {
    return (

        <div className="home-page">
            <h3>Wybierz województwo</h3>
            <Map></Map>
            <Footer></Footer>
        </div>
    )
}