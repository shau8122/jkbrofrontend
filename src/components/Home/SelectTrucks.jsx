import React, { useState } from 'react'
import { Modal } from '../../ui'
import { Minus, Plus } from 'phosphor-react'

const truckData = [
    {
        truckType : "Small Truck",
        count : 0,
        desc: "Size, capacity & description here",
    },
    {
        truckType : "Pickup Truck",
        count : 0,
        desc: "Size, capacity & description here",
        
    },
    {
        truckType : "Box Truck",
        count : 0,
        desc: "Size, capacity & description here",
    },
    {
        truckType : "Flatbed truck Truck",
        count : 0,
        desc: "Size, capacity & description here",
    },
]


const SelectTrucks = ({ setSteps, onCloseClick, closeText, setData}) => {

    const [truckCounts, setTruckCounts] = useState(
        Object.fromEntries(truckData.map((truck) => [truck.truckType, truck.count]))
      );
    
    const handleIncrement = (truckType) => {
        setTruckCounts((prevCounts) => ({
            ...prevCounts,
            [truckType]: prevCounts[truckType] + 1,
        }));
    };
    const handleDecrement = (truckType) => {
        setTruckCounts((prevCounts) => ({
            ...prevCounts,
            [truckType]: Math.max(0, prevCounts[truckType] - 1),
        }));
    };
    const handleSubmitClick = () => {
        setSteps(3);
        const selectedTruck = truckData.find((truck) => truckCounts[truck.truckType] > 0);
        setData((prevData) => ({
            ...prevData,
            truckDetails: {
                counts: truckCounts,
                selectedTruck: selectedTruck ? { type: selectedTruck.truckType, count: truckCounts[selectedTruck.truckType] } : null,
            },
        }));
    }
  return (
    <Modal 
        title="Select Vehicle"
        open={true}
        onCloseClick={onCloseClick}
        closeText={closeText}
        onSubmitClick={handleSubmitClick}
        submitText={"Proceed"}
        label={"Step 2 / 6"}
    >   <div className='bg-[#F5F7FE] h-[60svh] flex flex-col gap-[2rem] p-5 border-y-2 border-outline overflow-y-scroll scrollbar-style'>
            {
                truckData.map((truck, index) => (
                    <div 
                        className={`flex justify-between items-center bg-white hover:bg-slate-50 
                            cursor-pointer gap-y-10 rounded-3xl 
                            md:min-w-[50rem] border-2 border-outline p-4 relative
                            ${truck.truckType === "Small Truck" && "border-primary"}
                            `} 
                        key={index} 
                    >
                            {truck.truckType === "Small Truck" &&
                                <h3 className={`text-white bg-primary p-1 rounded-xl px-2 text-sm absolute top-[-1rem] left-[1rem]`}>Recommended</h3>
                            }
                            
                            <div className='flex-1'>    
                                <div className='bg-red'>
                                    <h1>{truck.truckType}</h1>
                                    <p className='text-xs text-gray-400'>{truck.desc}</p>
                                </div>
                            </div>
                            <div>
                                <div className='text-xs flex items-center justify-center border-2 border-outline rounded-3xl'>
                                <button
                                    className='hover:bg-outline rounded-l-3xl p-1'
                                    onClick={() => handleDecrement(truck.truckType)}
                                    disabled={truckCounts[truck.truckType] === 0}
                                >
                                    <Minus size={16} />
                                </button>

                                <div className='border-x-2 boder-rounded px-2 border-outline text-xs bg-white'>
                                    {truckCounts[truck.truckType]}
                                </div>
                                
                                <button
                                    className='hover:bg-primary bg-outline rounded-r-3xl p-1 hover:text-white'
                                    onClick={() => handleIncrement(truck.truckType)}
                                    >
                                    <Plus size={16} />
                                </button>
                                </div>
                            </div>
                    </div>
                ))
            }
        </div>
    </Modal>
  )
}

export default SelectTrucks