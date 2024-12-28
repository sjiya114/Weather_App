import React from 'react';
import Loading from './Loading';
export default function Hourly(props) {
    let {data,loading,error} = props;
    return (
      <>
     {loading && <Loading/>}
      {error && <p>error</p>}  
<div className="mx-8 backdrop-blur-md    grid float-left my-12    md:grid-cols-5   sm:grid-cols-2" style={{gap: '80px' }}>
{!loading && data && (
  data.days[0].hours.map((element, i) =>
  (
      <div className="bg-blue-950 text-white px-3 py-3 rounded-2xl w-[240px] h-[120px]"   key={i}>
        <div>
        <img className="w-16 h-16 float-right mr-2" src= {`https://github.com/visualcrossing/WeatherIcons/blob/main/PNG/1st%20Set%20-%20Color/${element.icon}.png?raw=true`} alt=''/>
          <h5>Time:{ element.datetime}</h5>
          <h5>Temperature:{ ((element.temp-32)*(5/9)).toFixed(2)} </h5>
          <h6>Precipitation:{element.precip}</h6>
          <h6>Snow:{element.snow}</h6>
          </div>
      </div>
  )))
}
</div>
</>
 );
}