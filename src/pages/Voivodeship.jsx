import { useParams } from "react-router-dom"
import { voivodeshioToId } from "../consts/voivodeshipToId"
import { useEffect, useState } from "react"
import { DatePicker } from '@mantine/dates'
import { Button } from '@mantine/core'


export const Voivodeship = () => {
    const [value, setValue] = useState([null, null]);
    const { voivodeship } = useParams()
    const [data, setData] = useState([])
    const [date, setDate] = useState({
        from: '',
        to: ''
    })


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

    useEffect(() => {
        // const url = `https://api.cepik.gov.pl/pojazdy?wojewodztwo=${voivodeshioToId[voivodeship]}&data-od=20240101&data-do=20241101`
        const url = `http://localhost:3030/api/cepik?voivodeship=${voivodeshioToId[voivodeship]}&from=${date.from}&to=${date.to}`
        const fetchData = async () => {
            const response = await fetch(url)
            const json = await response.json()
            setData(json.data)
        }
        fetchData()
    }, [])
    return (
        <div>
            {voivodeship.toUpperCase()}
            <div>
                <DatePicker type="range" allowSingleDateInRange value={value} onChange={setValue} />
                <Button onClick={() => date}>Szukaj</Button>
            </div>
        </div>
    )
}