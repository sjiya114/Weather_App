import React  from 'react';
import Loading from './Loading';
export default function Education(props) {
  let {data,loading,error}=props;
  return (
    <>
      {loading && <Loading/>}
      {error && <p>error</p>}
      {!loading && !error && data && (
        <div className="h-80  md:mx-[450px] my-14 sm:mx-2  bg-blue-900 text-white md:w-96 px-4 py-4 rounded-lg hover:bg-blue-800 sm:w-60 ">
            <h1>{data.resolvedAddress}</h1>
            <h6 >{data.timezone}</h6>
            <h6>{data.description}</h6>
            <img className="w-32 h-32 float-right mr-2" src= {`https://github.com/visualcrossing/WeatherIcons/blob/main/PNG/1st%20Set%20-%20Color/${data.days[0].icon}.png?raw=true`} alt=''/>
            <h6>Conditions:{data.days[0].conditions} </h6>
            <h5>Temperature:{  ((data.days[0].temp-32)*(5/9)).toFixed(2)}°C</h5>
            <h6>Max:{((data.days[0].tempmax-32)*(5/9)).toFixed(2)}°C</h6>
            <h6>Min:{((data.days[0].tempmin-32)*5/9).toFixed(2)}°C</h6>
            <div className="float-left flex space-x-3 ">
            <svg className=" py-2 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"> <path d="M288 0c17.7 0 32 14.3 32 32l0 17.7C451.8 63.4 557.7 161 573.9 285.9c2 15.6-17.3 24.4-27.8 12.7C532.1 283 504.8 272 480 272c-38.7 0-71 27.5-78.4 64.1c-1.7 8.7-8.7 15.9-17.6 15.9s-15.8-7.2-17.6-15.9C359 299.5 326.7 272 288 272s-71 27.5-78.4 64.1c-1.7 8.7-8.7 15.9-17.6 15.9s-15.8-7.2-17.6-15.9C167 299.5 134.7 272 96 272c-24.8 0-52.1 11-66.1 26.7C19.4 310.4 .1 301.5 2.1 285.9C18.3 161 124.2 63.4 256 49.7L256 32c0-17.7 14.3-32 32-32zm0 304c12.3 0 23.5 4.6 32 12.2l0 114.3c0 45-36.5 81.4-81.4 81.4c-30.8 0-59-17.4-72.8-45l-2.3-4.7c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l2.3 4.7c3 5.9 9 9.6 15.6 9.6c9.6 0 17.4-7.8 17.4-17.4l0-114.3c8.5-7.6 19.7-12.2 32-12.2z"/></svg>
            <p className='py-4'>{data.days[0].precip}</p>
            <svg className=" py-2 w-10"   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
            <p className='py-4'>{data.days[0].winddir}</p>
            </div>
          </div>
         
      )}
    </>
  )
 
}
