import React, { useEffect, useRef, useState } from 'react'

const ShippingProgress = ({ progress }) => {

    const parentRef = useRef(null);
    
    const [ stepHeight, setStepHeight ] = useState()

    useEffect(() => {
        const setLineHeights = () => {
            // Get the height of the parent div
            const parentHeight = parentRef.current.clientHeight;

            // Set the height of the :before and :after pseudo-elements
            const stepOutlines = document.querySelectorAll('.step-outline');

            setStepHeight(parentHeight);

            // stepOutlines.forEach((outline) => {
                // outline.style.setProperty('--line-height', `${parentHeight}px`);
            // });
        };

        setLineHeights();
        window.addEventListener('resize', setLineHeights);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', setLineHeights);
        };
    }, [parentRef]);

  return (
    <div>
        { progress.map((step, index) => {
            return(
                <div key={index} className='flex gap-5 items-center px-6'>

                    <div className='flex gap-8' ref={parentRef}>
                        <div className={`w-[1.5rem] h-[1.5rem] rounded-full border-4 
                                  ${step.stepComplete ? 'bg-primary' : 'bg-primary'}   `}>
                            <div className={`
                                    ${ index !== 0 ? 'step-outline' : ''} 
                            `}>
                            
                            <style jsx>{`
                                    .step-outline {
                                        position: relative;
                                    }
                                    
                                    .step-outline:after {
                                        content: "";
                                        position: absolute;
                                        width: 20%;
                                        /* height: 0; */
                                        height: ${stepHeight/2}px;
                                        left: 50%;
                                        top: 50%;
                                        bottom: 300%;
                                        margin-bottom: ${stepHeight * 2}px;
                                        /* margin-top: ${stepHeight}; */
                                        right: 50%;
                                        transform: translate(-50%, -50%);
                                        border:  2px solid #4871FF;
                                        box-sizing: border-box;
                                    }

                                    .step-outline:before {
                                        content: "";
                                        position: absolute;
                                        width: 20%;
                                        height: ${stepHeight}px;
                                        /* bottom: 50%; */
                                        left: 50%;
                                        right: 50%;
                                        transform: translate(-50%, -50%);
                                        border: 2px dashed #E5E7EB ;
                                        /* border: 2px dashed  #E5E7EB;  */
                                        box-sizing: border-box;
                                    }

                                    
                                `}</style>
                            </div>
                        </div>      
                        <h1 className='h-[4rem]'>
                            {step.display}
                        </h1>
                    </div>
                    
                </div>
            )
        })}
    </div>
  )
}

export default ShippingProgress


// .step-outline:after {
//     height: 100%; /* Adjust the height for the lines going below */
//     bottom: 1;
//     border-bottom: none; To prevent the dashed border from overlapping
// }

// .step-outline:before {
//     height: 100%; /* Adjust the height for the lines going above */
//     /* top: 1; */
//     border: 2px dashed #000; /* Set the dashed border color */
// }