import React, { useEffect, useState } from 'react'

const CoronaUpdate = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {

        try {
            const res = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
            const actualData = await res.json();
            console.log(actualData.regional);
            setData(actualData.data.regional);

        }
        catch (err) {
            console.log(err);
        }


    }
    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <div className="cases">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage text_align_center ">
                            <h2>COVID19-India API</h2>
                            <p>We have stopped capturing testing data at a district level. Please check the status of the API endpoints below.
                                As of 13th August our API repository and api.covid19india.org have been deprecated. We redirect api.covid19india.org to data.covid19india.org
                                As of 13th August, all json endpoints except v4 endpoints have been deprecated. Please use the csv endpoints or refer to v4 endpoints   </p>
                        </div>
                    </div>
                </div>
                <div className="row d_flex">
                    {data.map((curE, index) => {
                        const { loc, deaths, discharged, confirmedCasesIndian, totalConfirmed } = curE
                        return (
                            <div className=" col-md-4">
                                <div className="latest text_align_center">

                                    <div className="nostrud">
                                        <h3>{loc}</h3>
                                        <h5>Total Deaths : {deaths}</h5>
                                        <h5>Total Descharge : {discharged}</h5>
                                        <h5>Total Confirmed : {totalConfirmed}</h5>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CoronaUpdate