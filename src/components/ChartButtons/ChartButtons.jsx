import { agragateByFuelType, agragateByManufacturer, agragateByYearOfProduction } from "../../utils/agregates"
import { agragateByModel } from "../../utils/agregates"
import { agragateByTypeOfVehicle } from "../../utils/agregates"
import { cotegorizeByEngineSize } from "../../utils/agregates"
import { agragateByWherePurchased } from "../../utils/agregates"
import { ButtonAgregate } from "../ButtonAgregate/ButtonAgregate"

export const ChartButtons = ({ setCharTitle, setChartData, data }) => {

    const allButtons = [
        {
            title: "Marka",
            agragate: agragateByManufacturer
        },
        {
            title: "Model",
            agragate: agragateByModel
        }, {
            title: "Typ pojazdu",
            agragate: agragateByTypeOfVehicle
        }, {
            title: "Pojemność silnika",
            agragate: cotegorizeByEngineSize
        }, {
            title: "Rok produkcji",
            agragate: agragateByYearOfProduction
        }, {
            title: "Rodzaj paliwa",
            agragate: agragateByFuelType
        }, {
            title: "Pochodzenie pojazdu",
            agragate: agragateByWherePurchased
        },
    ]

    return (
        <div className="buttons">
            {allButtons.map((buttonInfo) => (
                <ButtonAgregate title={buttonInfo.title} setCharTitle={setCharTitle} setChartData={setChartData} agregate={buttonInfo.agragate} data={data} />
            ))}
        </div>
    )
}