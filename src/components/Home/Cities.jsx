
import banglore from "/assets/banglore.png"
import pune from "/assets/pune.png"
import hyderabad from "/assets/hyderabad.png"
import chennai from "/assets/chennai.png"
import ahmedabad from "/assets/ahemdabad.png"
import noida from "/assets/noida.png"
import mumbai from "/assets/mumbai.png"
import chandigarh from "/assets/chandigarh.png"
import kolkata from "/assets/kolkata.png"
import bhuwaneshwar from "/assets/bhuwaneshwar.png"

const cities = [
    {
        city: "Bangalore",
        imgUrl: banglore,
    },
    {
        city: "Pune",
        imgUrl: pune,
    },
    {
        city: "Hyderabad",
        imgUrl: hyderabad,
    },
    {
        city: "Chennai",
        imgUrl: chennai,
    },
    {
        city: "Ahemdabad",
        imgUrl: ahmedabad,
    },
    {
        city: "Noida",
        imgUrl: noida,
    },
    {
        city: "Mumbai",
        imgUrl: mumbai,
    },
    {
        city: "Chandigarh",
        imgUrl: chandigarh
    },
    {
        city: "Kolkata",
        imgUrl: kolkata
    },
    {
        city: "Bhubaneswar",
        imgUrl: bhuwaneshwar
    }
]

const Cities = () => {
  return (
    <div className='w-[100svw] flex justify-center mt-16'>
        <div className='bg-[#F5F7FE] border-2 border-[#DBE3FF] md:w-[70%] w-[90%] flex md:flex-row flex-col p-8 gap-x-4 rounded-3xl text-textPrimary'>
            <div>
                <h1 className='text-3xl font-normal tracking-wider mb-2'>
                    Other Cities Covered by JKBro&apos;s
                </h1>
                <p className='text-gray-500'>
                    We are present right where you need us and take care of all your house shifting requirement. Our cost-effective solutions make us the right partner for all your relocation needs anywhere in India.
                </p>
                <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5'>
                {cities.map((city, index) => {
                    return(
                        <div className='w-[8rem] h-[8rem] mt-8 flex flex-col items-center justify-center hover:opacity-80 transition cursor-pointer' key={index}>
                            <img src={city.imgUrl}/>
                            <h1 className='text-textPrimary font-semibold mt-2'>{city.city}</h1>
                        </div>
                )})}
                </div>
            </div>

        </div>
    </div>
  )
}

export default Cities