const formatAgregation = (agg) => {
    const data = Object.entries(agg).filter(e => e[0] && e[0] !== "null")
    return data

}

export const agragateByManufacturer = (data) => {
    const result = data.reduce((acc, curr) => {
        const car = curr.attributes
        if (!acc[car.marka]) {
            acc[car.marka] = 1
        } else {
            acc[car.marka]++
        }
        return acc
    }, {})
    return formatAgregation(result)
}

export const agragateByModel = (data) => {
    const result = data.reduce((acc, curr) => {
        const car = curr.attributes
        if (!acc[car.model]) {
            acc[car.model] = 1
        } else {
            acc[car.model]++
        }
        return acc
    }, {})
    return formatAgregation(result)
}

export const agragateByTypeOfVehicle = (data) => {
    const type = "rodzaj-pojazdu"
    const result = data.reduce((acc, curr) => {
        const car = curr.attributes
        if (!acc[car[type]]) {
            acc[car[type]] = 1
        } else {
            acc[car[type]]++
        }
        return acc
    }, {})
    return formatAgregation(result)
}

export const cotegorizeByEngineSize = (data) => {
    let categories = {
        "do 1000": 0,
        "do 1500": 0,
        "do 2000": 0,
        "do 3000": 0,
        "ponad 3000": 0
    }

    const result = data.reduce((acc, curr) => {
        const size = curr.attributes["pojemnosc-skokowa-silnika"]
        if (size === null) {
            return acc
        }
        if (size < 1000) {
            acc["do 1000"]++
        } else if (size < 1500) {
            acc["do 1500"]++
        } else if (size < 2000) {
            acc["do 2000"]++
        } else if (size < 3000) {
            acc["do 3000"]++
        } else if (size >= 3000) {
            acc["ponad 3000"]++
        }
        return acc
    }, categories)
    return formatAgregation(result)
}

export const agragateByWherePurchased = (data) => {
    const type = "pochodzenie-pojazdu"
    const result = data.reduce((acc, curr) => {
        const car = curr.attributes
        if (!acc[car[type]]) {
            acc[car[type]] = 1
        } else {
            acc[car[type]]++
        }
        return acc
    }, {})
    return formatAgregation(result)
}

export const agragateByYearOfProduction = (data) => {
    const type = "rok-produkcji"
    const result = data.reduce((acc, curr) => {
        const car = curr.attributes
        if (!acc[car[type]]) {
            acc[car[type]] = 1
        } else {
            acc[car[type]]++
        }
        return acc
    }, {})
    return formatAgregation(result)
}

export const agragateByFuelType = (data) => {
    const type = "rodzaj-paliwa"
    const result = data.reduce((acc, curr) => {
        const car = curr.attributes
        if (!acc[car[type]]) {
            acc[car[type]] = 1
        } else {
            acc[car[type]]++
        }
        return acc
    }, {})
    return formatAgregation(result)
}