import React from 'react';
import Loading from './Loading';
export default function TenDay(props) {
    let {data,loading,error} = props;
    return (
        <>
          {loading && <Loading/>}
          {error && <p>error</p>}
        <div  >
        {data && (
        <div className="md:mx-60 my-10  sm:ml-[100px] ">{
        data.days.map((element, i) =>
        (
            <div className="flex mx-4 my-4 float-left space-x-6 "  key={i}>
                <div className="bg-blue-900 text-white w-[240px] h-[140px] px-4 py-5 rounded-md">
                <img className="w-16 h-16 float-right mr-2" src= {`https://github.com/visualcrossing/WeatherIcons/blob/main/PNG/1st%20Set%20-%20Color/${element.icon}.png?raw=true`} alt=''/>
                <h5>Date:{element.datetime}</h5>
                <h5>Temperature:{((element.temp-32)*(5/9)).toFixed(2)} </h5>
                <div className='flex float-left'>
                <svg className=" py-2 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"> <path d="M288 0c17.7 0 32 14.3 32 32l0 17.7C451.8 63.4 557.7 161 573.9 285.9c2 15.6-17.3 24.4-27.8 12.7C532.1 283 504.8 272 480 272c-38.7 0-71 27.5-78.4 64.1c-1.7 8.7-8.7 15.9-17.6 15.9s-15.8-7.2-17.6-15.9C359 299.5 326.7 272 288 272s-71 27.5-78.4 64.1c-1.7 8.7-8.7 15.9-17.6 15.9s-15.8-7.2-17.6-15.9C167 299.5 134.7 272 96 272c-24.8 0-52.1 11-66.1 26.7C19.4 310.4 .1 301.5 2.1 285.9C18.3 161 124.2 63.4 256 49.7L256 32c0-17.7 14.3-32 32-32zm0 304c12.3 0 23.5 4.6 32 12.2l0 114.3c0 45-36.5 81.4-81.4 81.4c-30.8 0-59-17.4-72.8-45l-2.3-4.7c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l2.3 4.7c3 5.9 9 9.6 15.6 9.6c9.6 0 17.4-7.8 17.4-17.4l0-114.3c8.5-7.6 19.7-12.2 32-12.2z"/></svg>
                <p className='py-3 px-4'>{element.precip}</p>
                </div>
                </div>
            </div>
        ))
    }
    </div> )
    }
    </div>
    </>
 );
}