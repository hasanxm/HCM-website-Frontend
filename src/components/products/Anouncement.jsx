import { FaNoteSticky } from "react-icons/fa6"
import Form from "../Resuable-component/Form"
import FaqAccordion from "../Resuable-component/FaqAccordion"
import ReachUs from "../Resuable-component/ReachUs"


function Anouncement() {

    const cardData = [
        {
            tag: "Regulate",
            description: "Leave Policy"
        },
        {
            tag: "Save",
            description: "Time & Efforts"
        },
        {
            tag: "Guarantee",
            description: "Accurate Leave Management"
        },
        {
            tag: "Reduce",
            description: "Redundant/Unwanted Expense"
        },
        {
            tag: "Deliver",
            description: "Exceptional Employee Experience"
        },
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
                        <h2 className="text-head-color text-3xl sm:text-4xl font-bold">Business-friendly <span className="text-[#39bef4]">Announcement</span> for your workplace</h2>
                        <p className="text-base sm:text-lg">The Human Maximizer software's performance management feature monitors, assesses, and improves worker performance while coordinating goals with corporate objectives for ongoing development.</p>
                        <button className="bg-[#1d4076] w-fit text-white p-3 px-6 rounded-full mt-4">Book a Demo</button>
                    </div>
                    <div className="relative flex justify-center lg:p-4 p-12 sm:p-8">
                        <div className="bg-[#8cb6f5] absolute  top-32 shap px-72 py-44">,</div>
                        <img src="/images/performance/attendance-management.png" alt="image" className="lg:h-90 lg:ml-10 z-0 sticky" />
                    </div>
                </div>
            </section>
            <section className='p-16'>
                <h3 className='text-3xl text-[#1d4076] font-bold mb-5 text-center'>Automated Leave Management, <span className='text-[#39bef4]'> Now Got More effortless.</span></h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-center'>
                    {
                        [
                            {
                                tag: "Regulate",
                                description: "Leave Policy"
                            },
                            {
                                tag: "Save",
                                description: "Time & Efforts"
                            },
                            {
                                tag: "Guarantee",
                                description: "Accurate Leave Management"
                            },
                            {
                                tag: "Reduce",
                                description: "Redundant/Unwanted Expense"
                            },
                            {
                                tag: "Deliver",
                                description: "Exceptional Employee Experience"
                            },
                        ].map((data, index) => (
                            <div className='shadow-[0_0_10px_#ddd] p-5 rounded-2xl hover:bg-[#1c4a961f] hover:scale-110 transition-all duration-200'>
                                <div className='bg-[#1d40761c] p-3 rounded-full flex justify-self-center'><FaNoteSticky className='text-[#1d4076]' /></div>
                                <h3 className='text-[#1d4076] font-bold text-xl text-center'>{data.tag}</h3>
                                <p className='text-sm text-center'>{data.description}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section>
                <div className='bg-[#dddddd6b] relative p-3 overflow-hidden'>
                    <div className='absolute left-1/2 -top-4 rounded-full bg-[#f56d6d] opacity-20 h-24 w-24 animate-slide '></div>
                    <div className='absolute -left-3 -top-1 rounded-full bg-[#39c9bb] opacity-20 h-24 w-24 animate-bounce'></div>
                    <div className='absolute -bottom-5  rounded-full bg-[#f56d6d] opacity-20 h-24 w-24 animate-slide'></div>
                    <div className='absolute bottom-0 right-5 rounded-full bg-black opacity-20 h-10 w-10 animate-bounce'></div>
                    <div className='absolute top-1/2 -right-5 bg-[#39c9bb] opacity-20 h-28 w-28 animate-spin -z-1'></div>
                    <div className='z-50 p-10'>
                        <h3 className='text-center'>Top-notch Human Maximizer</h3>
                        <p className='text-[#1d4076] text-3xl text-center font-bold'>Leave Manage Software and<span className='text-[#39bef4]'> Solutions</span></p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-16">
                        {[
                            {
                                image: "/images/HrSoftware/easy-time-icon.png",
                                head: 'Building Trust and Transparency',
                                para: "The fast growth of trust is hindered by the lack of timely and explicit notifications. When company regulations, changes or even company goals are disclosed to employees, they begin to feel disloyal to the corporation since they are no longer included in the framework that they perceive the business process to be conducted under. A culture of openness between management and employees could be possible as a result of the transparency."
                            },
                            {
                                image: "/images/HrSoftware/visibility-icon.png",
                                head: 'Making the Communication Consistent',
                                para: "Human Maximizer would derive this very functionality, which is consolidation of communication. So, basically the one single announcement that is made becomes common to all employees within the organization by using this system. Thus, the chances of miscommunications would be reduced. What this consistency would bring about is an avoidance of confusion, so no matter which department the person belongs to, whether he's in a different city or country, they all will be receiving the same message almost at the same time."
                            },
                            {
                                image: "/images/HrSoftware/custom-icon.png",
                                head: 'Promoting Employee Engagement',
                                para: "Timely and relevant information would keep employees posted regularly and informed to be connected with the organizations' perspectives at a time. The one possible way of increasing employee engagement is making them understand what is going around the organization and how he or she fits into these changes. Such involvement is a look into an increased morale and productivity too . "
                            },
                            {
                                image: "/images/HrSoftware/dashboard-icon.png",
                                head: 'Increase Organizational Efficiency',
                                para: "When businesses announce and categorize their internal communications, they increase their efficiency in delivering pieces of news to employees. Messages can then be structured and categorized by policy updates, team achievements or upcoming events can all be well-delivered to staff-undispersed. This minimizes noise and manages clutter while ensuring that no important messages are lost because of noise."
                            },
                            {
                                image: "/images/HrSoftware/apply-leave-icon.png",
                                head: 'Enhancing Employee Recognition and Motivation',
                                para: "Announcement management is one vehicle of creating an avenue for recognition of employee achievements and milestones. When success stories or personal achievements are effectively spread, it motivates and boosts the morale of other employees. Recognizing contributions creates an appreciation culture that maximizes human potential within an organization."
                            }

                        ].map((data, index) => (
                            <div className='shadow-[0_0_10px_#ddd] hover:shadow-[inset_0_0_10px_#ddd] p-8 rounded-2xl z-50 text-center' key={index}>
                                <img src={data.image} alt={data.image} className='h-20 flex justify-self-center' />
                                <h3 className='text-[#1d4076] text-xl font-bold mt-2'>{data.head}</h3>
                                <p className='text-xs mt-3'>{data.para}</p>
                            </div>
                        ))
                        }
                    </div>

                </div>
            </section>
            <section className='p-28'>
                <Form />
            </section>
            <section className='px-28 py-8'>
                <h3 className='text-[#1d4076] text-center text-3xl font-bold mb-8'>Frequently Asked Questions</h3>
                <FaqAccordion data={faqdata} />
            </section>
            <section>
                <ReachUs />
            </section>
        </>
    )
}

export default Anouncement
