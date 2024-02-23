import React from 'react'

const tableData = [
    { shiftingType: 'Up to 2 items', startingFrom: '₹ 1,750' },
    { shiftingType: '1 RK/Studio', startingFrom: '₹ 1,750' },
    { shiftingType: '1 BHK', startingFrom: '₹ 1,750' },
    { shiftingType: '2 BHK', startingFrom: '₹ 1,750' },
    { shiftingType: '3 BHK', startingFrom: '₹ 1,750' },
    { shiftingType: '4 BHK', startingFrom: '₹ 1,750' },
];

const PricingSection = () => {
  return (
    <div className='w-[100svw] flex justify-center mt-16'>

        <div className='w-[90%] md:w-[70%] flex bg-primary p-8 rounded-xl gap-x-5 md:flex-row flex-col'>
            
            <div className='flex-1 h-[100%] relative text-white'>
                <h1 className='text-4xl pb-4 font-normal'>
                Economical House Shifting Prices with JKBro’s Packers & Movers in Surat
                </h1>
                <p>
                Tired of paying high prices for traditional relocation services? Not anymore! Porter packers and movers offer effortless house shifting solutions at the best prices. Prices may differ considering your apartment size, the distance of shifting, the quantity of household goods to be transported, and the locality you are residing in. Road tax, toll, and parking are not a part of packers and movers charges. Porter Packers and Movers charges start at INR 1200, inclusive of transportation, packing, and labor charges. Book the best packers and movers in town.
                </p>
            </div>

            <div className='flex-1 text-white'>

                <table className='w-full'>
                    <tr className="text-xl text-left border-b-2 border-[#DBE3FF] border-dotted">
                        <th className="py-4">Shifting Type</th>
                        <th className="py-4 text-right">Starting From</th>
                    </tr>
                    {tableData.map((row, index) => (
                        <tr key={index} className="text-xl text-left">
                            <td className="py-3">{row.shiftingType}</td>
                            <td className="py-3 text-right">{row.startingFrom}</td>
                        </tr>
                    ))}
                </table>
            </div>

        </div>

    </div>
  )
}

export default PricingSection