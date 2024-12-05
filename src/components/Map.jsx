import { Link } from "react-router-dom"
import "./Map.css"
export const Map = () => {

    return (
        <div >
            <div className="map">
                <img className="map-img" src="/poland-map.png"></img>
                <ul>
                    <Link to="/zachodnio-pomorskie">
                        <li class="zachodnio-pomorskie">
                            <span class="visually-hidden">zachodnio-pomorskie</span>
                        </li>
                    </Link>
                    <Link to="/pomorskie">
                        <li class="pomorskie ">
                            <span class="visually-hidden">pomorskie</span>
                        </li>
                    </Link>
                    <Link to="/warminsko-mazurskie">
                        <li class="warminsko-mazurskie">
                            <span class="visually-hidden">warmińsko-mazurskie</span>
                        </li>
                    </Link>
                    <Link to="podlaskie">
                        <li class="podlaskie">
                            <span class="visually-hidden">podlaskie</span>
                        </li>
                    </Link>
                    <Link to="/lubuskie">
                        <li class="lubuskie">
                            <span class="visually-hidden">lubuskie</span>
                        </li>
                    </Link>
                    <Link to="/wielkopolskie">
                        <li class="wielkopolskie">
                            <span class="visually-hidden">wielkopolskie</span>
                        </li>
                    </Link>
                    <Link to="/kujawsko-pomorskie">
                        <li class="kujawsko-pomorskie">
                            <span class="visually-hidden">kujawsko-pomorskie</span>
                        </li>
                    </Link>
                    <Link to="/mazowieckie">
                        <li class="mazowieckie">
                            <span class="visually-hidden">mazowieckie</span>
                        </li>
                    </Link>
                    <Link to="/dolnoslaskie">
                        <li class="dolnoslaskie">
                            <span class="visually-hidden">dolnośląskie</span>
                        </li>
                    </Link>
                    <Link to="/lodzkie">
                        <li class="lodzkie">
                            <span class="visually-hidden">łódzkie</span>
                        </li>
                    </Link>
                    <Link to="/lubelskie">
                        <li class="lubelskie">
                            <span class="visually-hidden">lubleksie</span>
                        </li>
                    </Link>
                    <Link to="/opolskie">
                        <li class="opolskie">
                            <span class="visually-hidden">opolskie</span>
                        </li>
                    </Link>
                    <Link to="/slaskie">
                        <li class="slaskie">
                            <span class="visually-hidden">śląskie</span>
                        </li>
                    </Link>
                    <Link to="/swietokrzyskie">
                        <li class="swietokrzyskie">
                            <span class="visually-hidden">świętokrzyskie</span>
                        </li>
                    </Link>
                    <Link to="/malopolskie">
                        <li class="malopolskie">
                            <span class="visually-hidden">małopoksie</span>
                        </li>
                    </Link>
                    <Link to="/podkarpackie">
                        <li class="podkarpackie">
                            <span class="visually-hidden">podkarpackie</span>
                        </li>
                    </Link>
                </ul>
            </div>

        </div>
    )
}