import React from 'react'
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

                    <div className="card h-100" style={{ borderBottom: '10px solid rgb(207, 14, 207)', padding: '7px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius: '10px' }}>

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

                    <div className="card h-100" style={{ borderBottom: '10px solid rgb(23, 207, 94)', padding: '7px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius: '10px' }}>

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

                    <div className="card h-100" style={{ borderBottom: '10px solid rgb(235, 30, 81)', padding: '7px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', borderRadius: '10px' }}>

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