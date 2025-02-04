import { Button } from '@mantine/core'

export const ButtonAgregate = ({ setCharTitle, title, setChartData, agregate, data }) => {
    return (
        <Button disabled={!data.length} onClick={(() => {
            setCharTitle(title)
            setChartData(agregate(data))
        })}>{title}</Button>
    )
}