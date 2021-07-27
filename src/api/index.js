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

export const fetchCountry = async () => {
    const {
        data: {
            countries
        }
    } = await axios.get(`${url}/countries`)

    return countries
}