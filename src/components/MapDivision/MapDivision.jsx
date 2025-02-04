import { DivisionNames } from "../DivisionNames/DivisionNames"

export const MapDivision = () => {
    const divisions = ["zachodnio-pomorskie", "pomorskie", "warminsko-mazurskie", "podlaskie", "lubuskie", "wielkopolskie", "kujawsko-pomorskie", "mazowieckie", "dolnoslaskie",
        "lodzkie", "lubelskie", "opolskie", "slaskie", "swietokrzyskie", "malopolskie", "podkarpackie"
    ]
    return (
        <div>
            <ul>
                <div>
                    {divisions.map(division => (
                        <DivisionNames division={division} />
                    ))}
                </div>
            </ul>
        </div>
    )

}