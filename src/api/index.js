import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    let changeableUrl = url

    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }

    const {
        data: {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
    } = await axios.get(country === 'Select Country' ? url : changeableUrl)

    return {
        confirmed,
        recovered,
        deaths,
        lastUpdate
    }
}

export const fetchDailyData = async () => {
    try {
        const {
            data
        } = await axios.get(`${url}/daily`)

        const modifyData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))

        return modifyData
    } catch (error) {
        console.log(error)
    }
}

export const fetchCountry = async () => {
    const {
        data: {
            countries
        }
    } = await axios.get(`${url}/countries`)

    return countries
}