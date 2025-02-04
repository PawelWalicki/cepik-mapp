import { useParams } from "react-router-dom"
import { voivodeshioToId } from "../consts/voivodeshipToId"
import { useEffect, useState } from "react"
import { DatePicker } from '@mantine/dates'
import { Button } from '@mantine/core'
import { PieChart } from 'react-chartkick'
import 'chartkick/chart.js'
import './Voivodeship.css'
import { ChartButtons } from "../components/ChartButtons/ChartButtons"
import { Footer } from "../components/Footer/Footer"

export const Voivodeship = () => {
    const [value, setValue] = useState([null, null]);
    const { voivodeship } = useParams()
    const [data, setData] = useState([])
    const [date, setDate] = useState({
        from: '',
        to: ''
    })
    const [chartData, setChartData] = useState([])
    const [chatTitle, setCharTitle] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const from = value[0]
        const to = value[1]
        if (from) {
            let newDate = from.getFullYear().toString() + (from.getMonth() + 1).toString().padStart(2, '0') + from.getDate().toString().padStart(2, '0')
            console.log(newDate)
            setDate((prev) => ({ ...prev, from: newDate }))
        }
        if (to) {
            let newDate = to.getFullYear().toString() + (to.getMonth() + 1).toString().padStart(2, '0') + to.getDate().toString().padStart(2, '0')
            console.log(newDate)
            setDate((prev) => ({ ...prev, to: newDate }))
        }
    }, [value[0], value[1]])

    const getDataFromCepik = async () => {
        setIsLoading(true)
        setData([])
        // const url = `https://api.cepik.gov.pl/pojazdy?wojewodztwo=${voivodeshioToId[voivodeship]}&data-od=20240101&data-do=20241101`
        const url = `https://cepik-map-server.vercel.app/api/cepik?voivodeship=${voivodeshioToId[voivodeship]}&from=${date.from}&to=${date.to}`
        const response = await fetch(url)
        const json = await response.json()
        setData(json.data)
        setIsLoading(false)
    }

    useEffect(() => {
        if (date.from && date.to) {
            getDataFromCepik()
        }
    }, [])

    return (
        <div>
            <h3>{voivodeship.toUpperCase()}</h3>
            <div>
                <div className="calendar">
                    <DatePicker type="range" allowSingleDateInRange value={value} onChange={setValue} />
                    <Button onClick={() => getDataFromCepik()}>Szukaj</Button>
                </div>
                <ChartButtons data={data} setCharTitle={setCharTitle} setChartData={setChartData}></ChartButtons>
            </div>
            {isLoading ? "Loading!" : ""}
            <div>
                <h3>{chatTitle}</h3>
            </div>
            <div>
                <PieChart height="50vh" data={chartData} />
            </div>
            <Footer></Footer>

        </div>
    )
}