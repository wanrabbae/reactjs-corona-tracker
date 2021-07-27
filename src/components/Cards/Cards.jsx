import React from 'react'
import styles from './Cards.module.css'
import CountUp from 'react-countup'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }, country }) => {
    if (!confirmed) {
        return 'Loading...'
    }

    return (
        <div className="mt-4">
            <h2 className="text-center">
                {
                    country === '' || country === 'Select Country' ? <span>Global</span> : <span>{country}</span>
                }
            </h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                <div className="col-md-3">
                    <div className="card h-100" className={styles.cardInfected}>
                        <div className="card-body">
                            <h6 className="text-muted">Infected</h6>
                            <h5 className="card-title">
                                <CountUp
                                    start={0}
                                    end={confirmed.value}
                                    duration={2.5}
                                    separator=","
                                />
                            </h5>
                            <p className="text-muted">{new Date(lastUpdate).toDateString()}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card h-100" className={styles.cardRecovered}>
                        <div className="card-body">
                            <h6 className="text-muted">Recovered</h6>
                            <h5 className="card-title">
                                <CountUp
                                    start={0}
                                    end={recovered.value}
                                    duration={2.5}
                                    separator=","
                                />
                            </h5>
                            <p className="text-muted">{new Date(lastUpdate).toDateString()}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card h-100" className={styles.cardDeaths}>
                        <div className="card-body">
                            <h6 className="text-muted">Deaths</h6>
                            <h5 className="card-title">
                                <CountUp
                                    start={0}
                                    end={deaths.value}
                                    duration={2.5}
                                    separator=","
                                />
                            </h5>
                            <p className="text-muted">{new Date(lastUpdate).toDateString()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cards