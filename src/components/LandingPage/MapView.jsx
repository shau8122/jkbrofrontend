import React from 'react'
// import mapView from '/assets/mapView.png'
import MapAnimation from './MapAnimation'

const MapView = () => {
  return (
    <div
        className='bg-primary w-[100svw] py-[10rem] flex items-center justify-center'
    >

        <div className='md:w-[65%] w-[90%] h-[80svh] md:h-[120svh] bg-[#7F9CFF] rounded-3xl'>

            <div className='h-[30%] flex items-center justify-evenly pt-10'>

                <div className='h-[80%]'>
                    <h1 className="tex-xl md:text-3xl text-white">
                        10+
                    </h1>
                    <p className="text-[#DBE3FF] text-sm md:text-xl text-center">
                        Cities
                    </p>
                </div>

                <div className='h-[80%]'>
                    <h1 className="tex-xl md:text-3xl text-white">
                        5 lakh+
                    </h1>
                    <p className="text-[#DBE3FF] text-sm md:text-xl text-center">
                        Driver Partners
                    </p>
                </div>

                <div className='h-[80%]'>
                    <h1 className="tex-xl md:text-3xl text-white">
                        1 Crore+
                    </h1>
                    <p className="text-[#DBE3FF] text-sm md:text-xl text-center">
                        Customers
                    </p>
                </div>

                <div className='h-[80%]'>
                    <h1 className="tex-xl md:text-3xl text-white">
                        10 Crore+
                    </h1>
                    <p className="text-[#DBE3FF] text-sm md:text-xl text-center">
                        Trips
                    </p>
                </div>
            </div>

            <div className='h-[70%] m-auto flex justify-center pb-[2rem]'>
                <MapAnimation />
                
                {/* <img 
                    src={mapView} className='h-[100%]'/> */}
            </div>
        </div>
    </div>
  )
}

export default MapView