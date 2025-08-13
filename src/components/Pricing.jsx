import React from 'react'
import ReachUs from './Resuable-component/ReachUs';

function Pricing() {

    const plans = [
        {
            title: "FOUNDATION",
            price: "₹ 9999",
            monthly: true,
            maxEmployees: "100",
            extraEmployeeCost: "₹90",
            button: "Free Trial",
            badge: "Essential Automation Features",
            sections: [
                {
                    label: "CORE HR",
                    features: [
                        "Org Structure Management",
                        "Documents & Letters",
                        "Employee Onboarding - Basic",
                        "Dynamic Employee Profiles",
                        "Standard Access Roles",
                    ],
                },
            ],
        },
        {
            title: "GROWTH",
            price: "₹ 15,999",
            monthly: true,
            maxEmployees: "100",
            extraEmployeeCost: "₹150",
            button: "Free Trial",
            badge: "All Strength Features +",
            sections: [
                {
                    label: "CORE HR",
                    features: [
                        "Workflow Automation",
                        "Custom Reports Builder",
                        "Headcount Planning",
                    ],
                },
                {
                    label: "BUSINESS PERFORMANCE",
                    features: [
                        "Company Goals/OKRs",
                        "Department and Individual Goals",
                        "Department and Individual Goals",
                    ],
                },
            ],
        },
    ];

    const cardData = [
        {
            title: "Rewards and Recognition",
            description:
                "Give a wow experience to your champion team with a Holistic Platform for Employee Rewards and Recognitions (R&R)",
            buttonLabel: "Sign up",
            buttonType: "signup",
        },
        {
            title: "Maximizer Learn",
            description:
                "Build a culture of learning by creating, publishing, and managing courses on a single platform.",
            buttonLabel: "Sign up",
            buttonType: "signup",
        },
        {
            title: `Not sure which plan is right for you? Give us a call.`,
            description:
                "Build a culture of learning by creating, publishing, and managing courses on a single platform.",
            buttonLabel: "+91 9958739560",
            buttonType: "call",
        },
    ];

    return (
        <div>
            <section className='bg-[#1d4076] text-white text-center'>
                <h3 className='text-4xl font-bold'>Plans & Pricing</h3>
                <p className='text-lg mt-4'>Have any questions about our product? We're here to help.</p>
                <img src="/images/newbg.png" alt="partition" className="w-full mt-6" />
            </section>
            <section>
                <div className='flex flex-wrap gap-4 ml-8 mb-8'>
                    <div className='bg-[#39bef4] text-white font-semibold p-3 rounded-tl-2xl rounded-tr-2xl'>HCMS & Payroll</div>
                    <div className='bg-[#39bef4] text-white font-semibold p-3 rounded-tl-2xl rounded-tr-2xl'>Hiring</div>
                    <div className='bg-[#39bef4] text-white font-semibold p-3 rounded-tl-2xl rounded-tr-2xl'>Projects & Timesheets (PSA)</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4 sm:px-8 md:px-16">
                    <div className="col-span-1 md:col-span-2 lg:col-span-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {plans.map((plan, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 text-[#1F2C4C]">
                                    <h3 className="text-lg font-bold text-center">{plan.title}</h3>
                                    <p className="text-sm text-center mt-1">For companies that are just getting started with automation</p>
                                    <hr className="my-4" />
                                    <p className="text-3xl font-bold text-center">
                                        {plan.price}
                                        <span className="text-base font-normal">/month</span>
                                    </p>
                                    <p className="text-sm text-center">(Upto {plan.maxEmployees} Employees)</p>
                                    <p className="text-sm text-center mt-1">{plan.extraEmployeeCost} per additional employee</p>

                                    <div className="text-center mt-4">
                                        <button className="bg-gradient-to-r from-[#007bff] to-[#0056b3] text-white px-6 py-2 rounded-full font-semibold">
                                            {plan.button}
                                        </button>
                                    </div>

                                    <div className="mt-6">
                                        <h4 className="font-bold text-sm uppercase">{plan.badge}</h4>
                                        {plan.sections.map((section, i) => (
                                            <div key={i} className="mt-3">
                                                <h5 className="font-bold text-sm">{section.label}</h5>
                                                <ul className="text-sm list-disc list-inside mt-1 text-gray-700 space-y-1">
                                                    {section.features.map((feature, fi) => (
                                                        <li key={fi}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-1 lg:col-span-1">
                        <div className="space-y-6 max-w-xl mx-auto">
                            {cardData.map((card, index) => (
                                <div key={index} className="border rounded-lg p-4 shadow-sm">
                                    <h3 className="text-lg font-semibold text-[#1F2C4C]">{card.title}</h3>
                                    <p className="text-sm text-gray-700 mt-2">{card.description}</p>

                                    <div className="mt-4">
                                        {card.buttonType === "signup" ? (
                                            <button className="bg-[#20b8f9] hover:bg-[#1caeea] text-white font-semibold text-sm px-5 py-2 rounded-lg">
                                                {card.buttonLabel}
                                            </button>
                                        ) : (
                                            <a
                                                href={`tel:${card.buttonLabel.replace(/\s+/g, '')}`}
                                                className="inline-block bg-[#20b8f9] hover:bg-[#1caeea] text-white font-bold text-sm px-5 py-2 rounded-lg"
                                            >
                                                {card.buttonLabel}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-12'>
                <ReachUs />
            </section>
        </div>
    );
}

export default Pricing;
