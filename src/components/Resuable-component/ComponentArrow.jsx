function ComponentArrow({ steps }) {
    return (
        <section className="w-full bg-white py-16 px-6 sm:px-8 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative gap-20">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center text-center relative z-10 ${index === 0 ? 'mt-16 md:mt-32' : index === 2 ? 'mt-12 md:mt-20' : ''
                            } hover:scale-110 transition-all duration-200`}
                    >
                        {(index === 0 || index === 2) && (
                            <div className="text-4xl sm:text-6xl text-gray-200 font-bold absolute -top-16 md:-top-20 left-1/2 transform -translate-x-1/2 select-none">
                                {step.id}
                            </div>
                        )}
                        <img
                            src={
                                index === 0
                                    ? '/images/componentArrow/compensation.png'
                                    : index === 1
                                        ? '/images/componentArrow/leadership-training.png'
                                        : '/images/componentArrow/corporate-programs.png'
                            }
                            alt={step.title}
                            className="w-20 h-20 sm:w-24 sm:h-24 mb-4"
                        />
                        <h3 className="text-xl sm:text-2xl font-semibold text-[#1F2C4C]">{step.title}</h3>
                        <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xs sm:max-w-md">{step.description}</p>
                        <button className="mt-4 px-5 py-2 bg-gray-100 text-[#1F2C4C] rounded-full font-medium hover:bg-blue-50 transition-all">
                            Read More →
                        </button>
                        {index === 1 && (
                            <div className="text-6xl text-gray-200 font-bold ml-12 transform -translate-x-1/2 select-none">
                                {step.id}
                            </div>
                        )}
                    </div>
                ))}

                <img
                    src="/images/componentArrow/arrow.png"
                    alt="arrow"
                    className="absolute top-[35%] left-[25%] rotate-[305deg] w-24 md:w-32 hidden md:block"
                />
                <img
                    src="/images/componentArrow/arrow2.png"
                    alt="arrow"
                    className="absolute top-[35%] right-[25%] rotate-[53deg] w-24 md:w-32 hidden md:block"
                />
            </div>
        </section>
    );
}

export default ComponentArrow;
