import React, { useState } from 'react';
import { Button, Modal } from '../../ui';
import { Plus } from 'phosphor-react';

const pricingData = [
    {
        packageName: "Single-layer packing",
        price: 399,
    },
    {
        packageName: "Multi-layer packing",
        price: 999,
    },
    {
        packageName: "Carpenter charges",
        price: 999,
    },
    {
        packageName: "AC Uninstallation",
        price: 999,
    },
    {
        packageName: "AC Installation",
        price: 999,
    },
    {
        packageName: "TV Mounting",
        price: 999,
    },
];

const PricingModal = ({ setSteps, setOpen, onCloseClick, closeText, setData, data }) => {
    const [totalAmount, setTotalAmount] = useState(2698);
    const [selectedOptions, setSelectedOptions] = useState([]);
    console.log({data: data.pricingModal})
    const handleAddButtonClick = (item) => {
        if (!selectedOptions.includes(item)) {
            setTotalAmount((prevTotal) => prevTotal + item.price);
            setSelectedOptions((prevSelected) => [...prevSelected, item]);
        }
        setData((prevData) => ({...prevData, pricingModal: selectedOptions,totalAmount: totalAmount}));
    };
    console.log(data)
    const handleRemoveButtonClick = (item) => {
        setTotalAmount((prevTotal) => prevTotal - item.price);
        setSelectedOptions((prevSelected) => prevSelected.filter((selectedItem) => selectedItem !== item));
    };

    return (
        <Modal
            title="Select Vehicle"
            open={true}
            onCloseClick={onCloseClick}
            closeText={closeText}
            onSubmitClick={() => setSteps(4)}
            submitText={"Proceed"}
            label={"Step 3 / 6"}
        >
            <div className='bg-[#F5F7FE] h-[60svh] flex flex-col border-y-2 border-outline relative overflow-y-auto scrollbar-style relative'>
                <div className='desc flex justify-between p-5 sticky top-1 bg-[#F5F7FE] border-b-2'>
                    <div className='md:min-w-[50svw]'>
                        <h3 className='text-md '>Base price :</h3>
                        <ul className='list-disc ml-[1rem] text-xs text-gray-400 italic'>
                            <li>Transport item safely with a dedicated vehicle</li>
                            <li>Loading and unloading of Goods</li>
                            <li>Friendly and professional movers</li>
                        </ul>
                    </div>
                    <h1>₹ {totalAmount}</h1>
                </div>
                {pricingData.map((item, index) => (
                    <div
                        className={`flex justify-between border-t-2 border-outline px-5 py-2`}
                        key={index}
                    >
                        <div>
                            <p className='text-xs text-gray-400'>{item.packageName}</p>
                            <h1 className='text-sm'>{item.price}</h1>
                        </div>
                        <div>
                            {selectedOptions.includes(item) ? (
                                <>
                                    <Button
                                        variant={"secondary"}
                                        className={"text-primary"}
                                        onClick={() => handleRemoveButtonClick(item)}
                                    >
                                        {/* Remove */}
                                    <span className="mx-2">{selectedOptions.filter((selectedItem) => selectedItem === item).length} X</span>
                                    </Button>
                                </>
                            ) : (
                                <Button
                                    variant={"secondary"}
                                    className={"text-primary flex items-center"}
                                    onClick={() => handleAddButtonClick(item)}
                                >
                                    <Plus className='w-[1rem] h-[1rem]' />
                                    Add
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
                <div className='sticky bottom-0 bg-primary w-[100%] px-4 py-2 md:text-sm text-xs flex justify-between'>
                    <h1 className='text-white'>Total Cost</h1>
                    <button className='text-white'>₹ {totalAmount}</button>
                </div>
            </div>
        </Modal>
    );
};

export default PricingModal;
