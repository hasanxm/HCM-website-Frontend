import ComponentArrow from "../Resuable-component/ComponentArrow";
import FaqAccordion from "../Resuable-component/FaqAccordion"
import Form from "../Resuable-component/Form"
import ReachUs from "../Resuable-component/ReachUs"
import { FaNoteSticky } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

function EmployeeEngagement() {

    const step = [
        {
            title: "40%",
            description: "Higher employee satisfaction"
        },
        {
            title: "28%",
            description: "Higher employee retention"
        },
        {
            title: "26%",
            description: "Lower employee turnover"
        }
    ]

    const faqdata = [
        {
            head: 'What does Human Maximizer do?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        },
        {
            head: 'What does Human Maximizer do?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        },
        {
            head: 'What does Human Maximizer do?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        },
        {
            head: 'What does Human Maximizer do?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        },
        {
            head: 'What does Human Maximizer do?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        },
        {
            head: 'What does Human Maximizer do?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        },
        {
            head: 'What does Human Maximizer do?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        },
        {
            head: 'What does Human Maximizer do?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        },
        {
            head: 'What does Human Maximizer do?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        }
    ]

    return (
        <>
            <section className="partition_slide overflow-hidden relative before:absolute before:inset-0 before:bg-[#e0eef9] before:opacity-100 lg:h-[85vh]">
                <div>
                    <div className='absolute left-1/2 -top-4 rounded-full bg-[#f56d6d] opacity-20 h-24 w-24 animate-slide'></div>
                    <div className='absolute -left-3 -top-1 rounded-full bg-[#39c9bb] opacity-20 h-24 w-24 animate-bounce'></div>
                    <div className='w-[20%] relative top-[32rem] -left-35'><div className=" absolute h-28 w-28 rounded-full bg-[#f56d6d] opacity-20 animate-slide" /></div>
                    <div className='absolute top-1/2 -right-5 bg-[#39c9bb] opacity-20 h-28 w-28 animate-spin'></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:p-4">
                    <div className="p-16 z-10 flex flex-col gap-4">
                        <h2 className="text-head-color text-3xl sm:text-4xl font-bold">Business-friendly <span className="text-[#39bef4]">Employee Engagement</span> for your workplace</h2>
                        <p className="text-base sm:text-lg">The Human Maximizer software's performance management feature monitors, assesses, and improves worker performance while coordinating goals with corporate objectives for ongoing development.</p>
                        <button className="bg-[#1d4076] w-fit text-white p-3 px-6 rounded-full mt-4">Book a Demo</button>
                    </div>
                    <div className="relative flex justify-center lg:p-4 p-12 sm:p-8">
                        <div className="bg-[#8cb6f5] absolute  top-32 shap px-72 py-44">,</div>
                        <img src="/images/performance/attendance-management.png" alt="image" className="lg:h-90 lg:ml-10 z-0 sticky" />
                    </div>
                </div>
            </section>
            <section>
                <h3 className="text-center text-3xl text-[#1d4076] mt-8 font-bold">Engaged employees do great work — <span className="text-[#8cb6f5]">we help make that happen.</span></h3>
                <ComponentArrow steps={step} />
            </section>
            <section className='px-24 py-8'>
                <h3 className='text-[#1d4076] font-bold text-3xl text-center mb-8'>Why Choose Human Maximizer<span className='text-[#39bef4]'>Performance Management?</span></h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        [
                            {
                                head: 'Lower turnover',
                                para: 'Keep top talent with clear channels for feedback, updates, and career progression.'
                            },
                            {
                                head: 'Increased engagement',
                                para: 'Break down silos, create space for connection, and watch employee satisfaction soar.'
                            },
                            {
                                head: 'Clear communication',
                                para: 'Build a culture of transparency and feedback where everyone is both heard and informed.'
                            },
                            {
                                head: 'Elevated employer brand',
                                para: 'Attract top talent to your organization with a reputation for being a great place to work.'
                            },
                        ].map((data, index) => (
                            <div className='border rounded-3xl flex flex-col gap-3 justify-center items-center border-gray-300 p-8' key={index}>
                                <div className='bg-[#1d40761c] rounded-full p-4 flex justify-center items-center'><FaNoteSticky className='text-[#1d4076] text-2xl' /></div>
                                <h4 className='text-xl font-bold text-[#1d4076] text-center'>{data.head}</h4>
                                <p className='text-md text-center'>{data.para}</p>
                            </div>
                        )
                        )}
                </div>
            </section>
            <section className="mt-20">
                <h3 className="text-3xl text-center text-[#1d4076] font-bold"><span className="text-[#39bef4]">Authentic workplaces</span> start here</h3>
                <div className="p-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 shadow-[0_0_10px_#ddd] rounded-2xl p-5 lg:p-16 ">
                        <div>
                            <span className="text-[#39bef4]">Employee Community</span>
                            <h3 className="text-2xl text-[#1d4076] font-bold">Foster engagement, satisfaction, and connection</h3>
                            <p>Simplify your internal communications and increase employee engagement with a central platform for announcements, updates, and recognition—keeping everyone included and in the know.</p>
                        </div>
                        <div>
                            <img src="/images/Empoyee-engagement/hrfeatures2.png" alt="hrfearure1" />
                        </div>
                    </div>
                    <div className="grid grid grid-cols-1 lg:grid-cols-2 gap-5 shadow-[0_0_10px_#ddd] rounded-2xl p-5 lg:p-16 mt-12">
                        <div className="p-5 order-2">
                            <span className="text-[#39bef4]">Employee Community</span>
                            <h3 className="text-2xl text-[#1d4076] font-bold">Foster engagement, satisfaction, and connection</h3>
                            <p>Simplify your internal communications and increase employee engagement with a central platform for announcements, updates, and recognition—keeping everyone included and in the know.</p>
                        </div>
                        <div>
                            <img src="/images/Empoyee-engagement/hrfeatures3.png" alt="hrfearure1" />
                        </div>
                    </div>
                    <div className="grid grid grid-cols-1 lg:grid-cols-2 gap-5 shadow-[0_0_10px_#ddd] rounded-2xl p-5 lg:p-16 mt-12">
                        <div>
                            <span className="text-[#39bef4]">Employee Community</span>
                            <h3 className="text-2xl text-[#1d4076] font-bold">Foster engagement, satisfaction, and connection</h3>
                            <p>Simplify your internal communications and increase employee engagement with a central platform for announcements, updates, and recognition—keeping everyone included and in the know.</p>
                        </div>
                        <div>
                            <img src="/images/Empoyee-engagement/hrfeatures3.png" alt="hrfearure1" />
                        </div>
                    </div>
                    <div className="grid grid grid-cols-1 lg:grid-cols-2 gap-5 shadow-[0_0_10px_#ddd] rounded-2xl p-5 lg:p-16 mt-12">
                        <div className="p-5 order-2">
                            <span className="text-[#39bef4]">Employee Community</span>
                            <h3 className="text-2xl text-[#1d4076] font-bold">Foster engagement, satisfaction, and connection</h3>
                            <p>Simplify your internal communications and increase employee engagement with a central platform for announcements, updates, and recognition—keeping everyone included and in the know.</p>
                        </div>
                        <div className="p-3">
                            <img src="/images/Empoyee-engagement/hrfeatures1.png" alt="hrfearure1" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="grid grid grid-cols-1 lg:grid-cols-2 gap-8 px-20 py-5">
                    <div className="shadow-[0_0_10px_#ddd] rounded-3xl flex justify-center flex-col p-8">
                        <h2 className="text-[#39bef4] text-lg">Human Maximizer Employee Experience</h2>
                        <span className="text-3xl text-[#1d4076]">Everything you need in a robust employee experience solution</span>
                        <p>Develop an environment of honest, two-way communication, great employee engagement, transparent compensation discussions, and more to set the stage for growth, connection, and a great employee experience.</p>
                    </div>
                    <div className="shadow-[0_0_10px_#ddd] rounded-3xl flex justify-center gap-6 flex-col p-8">
                        <div>
                            <h2 className="text-[#1d4076] text-2xl">Employee Community</h2>
                            <ul>
                                <li className="flex gap-5"><TiTick className="text-green-600" /><span>Company announcements</span></li>
                                <li className="flex gap-5"><TiTick className="text-green-600" /><span> Read confirmations</span></li>
                                <li className="flex gap-5"><TiTick className="text-green-600" /><span>Customizable groups</span></li>
                                <li className="flex gap-5"><TiTick className="text-green-600" /><span>Post scheduling</span></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-[#1d4076] text-2xl">Employee Satisfaction</h2>
                            <ul>
                                <li className="flex gap-5"><TiTick className="text-green-600" /><span>Trackable eNPS score</span></li>
                                <li className="flex gap-5"><TiTick className="text-green-600" /><span>AI topic summaries</span></li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="text-[#1d4076] text-2xl">Employee Wellbeing</h2>
                            <ul>
                                <li className="flex gap-5"><TiTick className="text-green-600" /><span> Wellbeing heatmap report</span></li>
                                <li className="flex gap-5"><TiTick className="text-green-600" /><span> Research-validated questions</span></li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="text-[#1d4076] text-2xl">Total Rewards</h2>
                            <ul>
                                <li className="flex gap-5"><TiTick className="text-green-600" /><span>Open response</span></li>
                                <li className="flex gap-5"><TiTick className="text-green-600" /><span> Total compensation overview</span></li>
                                <li className="flex gap-5"><TiTick className="text-green-600" /><span>Equity projections</span></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className='p-5 lg:p-28'>
                <Form />
            </section>
            <section className='p-5 lg:px-28 py-8'>
                <h3 className='text-[#1d4076] text-center text-3xl font-bold mb-8'>Frequently Asked Questions</h3>
                <FaqAccordion data={faqdata} />
            </section>
            <section>
                <ReachUs />
            </section>
        </>
    )
}

export default EmployeeEngagement
