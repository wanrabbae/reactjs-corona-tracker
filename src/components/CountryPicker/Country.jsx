import React, { useState, useEffect } from 'react'
import './Country.module.css'
import { fetchCountry } from '../../api'

const Country = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const fetchCountries = async () => {
            setCountries(await fetchCountry())
        }

        fetchCountries()
    }, [setCountries])

    return (
        <div className="row justify-content-center mt-4 mb-3">
            <div className="col-md-4">
                <select className="form-select" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option selected>Select Country</option>
                    {

                        countries.map((ct, i) => <option key={i} value={ct.name}>{ct.name}</option>)

                    }
                </select>
            </div>
        </div>
    )
}

export default Country