import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';

import { Line, Bar } from 'react-chartjs-2';

const Chart = ({ data, country }) => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }

        fetchAPI()
    }, [])

    const LineChart = (
        dailyData.length ? (<Line
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: 'rgb(207, 14, 207)',
                    fill: true,
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgb(235, 30, 81)',
                    fill: true,
                }],
            }}
        />
        ) : null
    )

    const barChart = (
        data.confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgb(207, 14, 207)',
                            'rgb(23, 207, 94)',
                            'rgb(235, 30, 81)',
                        ],
                        data: [data.confirmed.value, data.recovered.value, data.deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` },
                }}
            />
        ) : null
    )


    return (
        <div className="mb-5">
            {country ? barChart : LineChart}
        </div>
    )
}

export default Chart;