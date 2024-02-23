

const VerticalShippingIndicator = ({ steps }) => {
    return (
        <div className="flex items-center relative md:ml-[1.5rem]">
            <div className="flex-grow relative">
                {steps.map((step, index) => (
                <div key={step.id} className="mb-6 flex items-center gap-[2rem]">
                    <div
                    className={`rounded-full w-5 h-5 ${
                        step.stepComplete ? 'bg-primary border-4 border-outline' : 'bg-gray-300'
                    } mr-2`}
                    />
                    <div>
                        <h4 className={`text-lg font-bold ${step.stepComplete ? 'text-primary' : 'text-gray-600'}`}>
                            {step.display}
                        </h4>
                        <p className="text-sm text-gray-600">{step.value}</p>
                    </div>
                </div>
                ))}
    
                {/* Dashed Line */}
                {steps.length > 1 && (
                <div className="absolute top-0 bottom-0 left-2 transform -translate-x-1/2">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`absolute top-4 left-0 w-0 h-[150px] ${
                                    step.stepComplete ? 'bg-primary' : 'bg-gray-300'
                                        }`}
                            style={{
                                    transform: `translateY(${index * (100 / (steps.length - 1))}%)`,
                                    borderLeft: step.stepComplete ? '2px solid transparent' : '2px dashed gray'
                            }}
                        />
                    ))}
                </div>
                )}
            </div>
        </div>
    );
};

export default VerticalShippingIndicator;