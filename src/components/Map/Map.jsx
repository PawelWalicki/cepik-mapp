import { Link } from "react-router-dom"
import "./Map.css"
import { MapDivision } from "../MapDivision/MapDivision"
export const Map = () => {

    return (
        <div >
            <div className="map">
                <img className="map-img" src="/poland-map.png"></img>
                <MapDivision></MapDivision>
            </div>

        </div>
    )
}