import React, { useEffect, useRef } from 'react'
import rightArrow from '/assets/right-arrow.png'
export const servicesConfig = [
    {
        id: 1,
        label: "2 Wheelers",
        title: "Instant delivery for up to 20 Kgs.",
    },
    {
        id: 2,
        label: "Trucks",
        title: "Hassle-free goods delivery up tp 2500 kgs.",
    },
    {
        id: 3,
        label: "Packers & Movers",
        title: 'House shifting hai? Ho jayega'
    },
    {
        id: 4,
        label: "For Enterprise",
        title: "Streamlining logistics to drive business growth",
    }
]

const ServicesCards = () => {


    const cardsWrapperRef = useRef();

    useEffect(() => {
        const wrapper = cardsWrapperRef.current;
    
        // Duplicate cards for infinite scrolling effect
        wrapper.innerHTML += wrapper.innerHTML;
    
        // Scroll animation
        const scroll = () => {
          wrapper.scrollLeft += 1;
    
          if (wrapper.scrollLeft >= wrapper.scrollWidth / 2) {
            wrapper.scrollLeft = 0;
          }
        };
    
        // Scroll automatically on mount
        const intervalId = setInterval(scroll, 20);
    
        // Clean up on component unmount
        return () => clearInterval(intervalId);
      }, []);

  return (
    <div className='w-[100svw] flex items-center justify-center'>
        <div className='h-[70svh] md:w-[70%] w-[90%] flex items-center justify-center'>


            <div className='cardsWrapper flex gap-x-4 overflow-x-scroll no-scrollbar' ref={cardsWrapperRef}>
            {servicesConfig.map((item) => {
                return(
                        <div key={item.id} className='min-w-[15rem] max-w-[15rem] h-[20rem] p-6 rounded-3xl bg-primary hover:bg-primary-200 transition cursor-pointer relative'>

                            <div className='absolute bg-[#DBE3FF] top-[15%] left-0 px-4 py-2 rounded-r-2xl'>
                                <p className='text-primary font-semibold ='>
                                    {item.label}
                                </p>
                            </div>

                            <div className='title mt-[45%]'>
                                <p className='text-white font-semibold text-2xl'>
                                    {item.title}
                                </p>
                            </div>

                            <div className='bg-[#DBE3FF] w-[5rem] absolute bottom-[10%] left-[10%] p-4 rounded-3xl'>
                                <img src={rightArrow} className='w-[2rem] m-auto'/>
                            </div>
                        </div>
                )
            }) }
            </div>

        </div>
    </div>
  )
}

export default ServicesCards