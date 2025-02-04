import { Link } from "react-router-dom"
import './DivisionNames.css'
export const DivisionNames = ({ division }) => {

    return (
        <Link to={`/${division}`}>
            <li className={division}>
                <span className="visually-hidden">{division}</span>
            </li>
        </Link>
    )
}