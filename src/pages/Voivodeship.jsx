import { useParams } from "react-router-dom"
import { voivodeshioToId } from "../consts/voivodeshipToId"

export const Voivodeship = () => {
    const {voivodeship} = useParams()
    return (
        <div> 
            {voivodeship}
            {
                voivodeshioToId[voivodeship]
            }
        </div>
    )
}