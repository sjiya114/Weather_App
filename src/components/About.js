import React from 'react';
export default function About() {
    return (
        <>
            <section className="py-24 relative text-black backdrop-blur-md ">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-[150px]">
                    <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                                <h1 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Weather App</h1>
                                <p className="text-black  text-2xl font-normal leading-relaxed lg:text-start text-center">Stay informed with real-time weather updates for multiple locations around the world. Whether you're planning your day or preparing for the future,this site provides:
                                    Multiple Locations: View the weather for any number of cities at once.
                                    Hourly Forecast: Get accurate, detailed hourly weather predictions for the entire day.
                                    15-Day Forecast: Plan ahead with reliable weather predictions for the next two weeks.
                                    With an easy-to-use interface, real-time alerts, and up-to-date data,this site helps you stay ahead of the weather. Track temperatures, rain, wind, and more—all in one place, whenever you need it.
                                </p>
                                </div>
                                <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                    <span className="px-1.5 text-white text-sm font-medium leading-6">Get Started</span>
                                </button>
                            </div>
                            <img className="lg:mx-0 mx-auto h-full rounded-3xl w-full" src="https://cdn.pixabay.com/photo/2023/08/30/09/24/leaves-8222919_1280.jpg" alt="about Us image" />
                        </div>
                    </div>
            </section>

        </>
    );
}