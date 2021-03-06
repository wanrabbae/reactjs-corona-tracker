import React from 'react'
import { Cards, Country, Chart } from './components/'
import { fetchData } from './api'
import './App.module.css'

class App extends React.Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData()

        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)

        this.setState({ data: fetchedData, country: country })
    }

    render() {
        const { data, country } = this.state

        return (
            <div className="container mt-5">
                <div className="d-flex justify-content-center">
                    <img src="/img/covid19.png" className="img-fluid w-50" alt="coronaLogo" />
                </div>
                <Cards data={data} country={country} />
                <Country handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />

                <footer className="text-center pb-5">
                    <span>&copy; Copyright 2021 Alwan, Create with <font color="red">&hearts;</font></span>
                </footer>
            </div>
        )
    }
}

export default App
