import Form from '../Resuable-component/Form'
import ComponentArrow from "../Resuable-component/ComponentArrow";
import { FaNoteSticky } from "react-icons/fa6";
import FaqAccordion from "../Resuable-component/FaqAccordion";
import ReachUs from "../Resuable-component/ReachUs";


function Employee() {
    const step = [
        {
            title: "Orienting a New Hire",
            description: "Use an easy wizard to help new hires with the onboarding process. Workers use email to activate accounts, and they use the internet to finish onboarding activities."
        },
        {
            title: "Centralized Records",
            description: "Keeping thorough records of every employee's personal data, contact information, work history, credentials, and emergency contacts is important."
        },
        {
            title: "Search and Filter",
            description: "Employee data may be readily searched and filtered using a variety of parameters, including department, role, and location."
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
        <div>
            <section className="partition_slide overflow-hidden relative before:absolute before:inset-0 before:bg-[#e0eef9] before:opacity-100 lg:h-[85vh]">
                <div>
                    <div className='absolute left-1/2 -top-4 rounded-full bg-[#f56d6d] opacity-20 h-24 w-24 animate-slide'></div>
                    <div className='absolute -left-3 -top-1 rounded-full bg-[#39c9bb] opacity-20 h-24 w-24 animate-bounce'></div>
                    <div className='w-[20%] relative top-[32rem] -left-35'><div className=" absolute h-28 w-28 rounded-full bg-[#f56d6d] opacity-20 animate-slide" /></div>
                    <div className='absolute top-1/2 -right-5 bg-[#39c9bb] opacity-20 h-28 w-28 animate-spin'></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:p-4">
                    <div className="p-16 z-10 flex flex-col gap-4">
                        <h2 className="text-head-color text-3xl sm:text-4xl font-bold">Business-friendly <span className="text-[#39bef4]">Employee Database</span> for your workplace</h2>
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
                <ComponentArrow steps={step} />
            </section>
            <section>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4 p-5 lg:p-12 bg-[#F5F8FC] overflow-x-hidden'>
                    <div>
                        <h2 className='text-[#1d4076] font-bold text-3xl'>Experience seamless <span className='text-[#39bef4]'> Database Management</span>with us.</h2>
                        <p className='text-md mb-5'>Skip the confusion and manual effort. Human Maximizer Attendance Management Software helps you capture, track, and manage employee attendance the smart way without micromanaging.</p>
                        <img src="/images/Leave/leave-attendence.jpg" alt="image" />
                    </div>
                    <div className='h-[70vh] overflow-y-scroll overflow-x-hidden p-5 lg:p-12 text-wrap'>
                        <div className='shadow-[0_0_10px_#ddd] p-5 rounded-xl'>
                            <h2 className='text-[#1d4076] text-3xl font-bold'>Workflows for<span className='text-[#39bef4]'>paperless HR</span></h2>
                            <p>Human Maximizer ESS portal has a number of built-in workflows that streamline transactions between employees, managers and administrators, minimising the need for HR intervention.</p>
                            <ul className='p-5'>
                                <li className='list-disc'>Leave application & approval</li>
                                <li className='list-disc'>Attendance regularisation & approval</li>
                                <li className='list-disc'>SExpense claims & approval</li>
                                <li className='list-disc'>Confirmation & resignation</li>
                            </ul>
                        </div>
                        <div className='shadow-[0_0_10px_#ddd] p-5 rounded-xl mt-8 text-wrap'>
                            <h2 className='text-[#1d4076] text-3xl font-bold'>Payslips, IT forms, declarations<span className='text-[#39bef4]'>Give employees easy access </span></h2>
                            <p>Human Maximizer ESS portal reduces all payroll related documentation for employees to just a few clicks.</p>
                            <ul className='p-5'>
                                <li className='list-disc'>View/download payroll related information</li>
                                <li className='list-disc'>View/download IT related information</li>
                                <li className='list-disc'>Submit proof of investment</li>
                            </ul>
                        </div>
                        <div className='shadow-[0_0_10px_#ddd] p-5 rounded-xl mt-8'>
                            <h2 className='text-[#1d4076] text-3xl font-bold'>Leave & attendance<span className='text-[#39bef4]'>Simplify the process </span></h2>
                            <p>Employees can handle all attendance and leave related processes via the ESS portal on their desktop or mobile.</p>
                            <ul className='p-5'>
                                <li className='list-disc'>Real-time attendance marking</li>
                                <li className='list-disc'>Attendance regularisation</li>
                                <li className='list-disc'>Leave application & approval</li>
                                <li className='list-disc'>Track/view leave balance</li>
                                <li className='list-disc'>View 'team on leave' (for managers)</li>
                            </ul>
                        </div>
                        <div className='shadow-[0_0_10px_#ddd] p-5 rounded-xl mt-8'>
                            <h2 className='text-[#1d4076] text-3xl font-bold'>Employee Help Desk<span className='text-[#39bef4]'>Quick solutions, no stress.</span></h2>
                            <p>Employees have a single point of contact on the ESS portal to raise queries on absolutely any subject relevant to them.</p>
                            <ul className='p-5'>
                                <li className='list-disc'>Employee queries on payroll, accounts, holidays etc.</li>
                                <li className='list-disc'>A single platform for HR admins to offer solutions</li>
                            </ul>
                        </div>
                        <div className='shadow-[0_0_10px_#ddd] p-5 rounded-xl mt-8 text-wrap'>
                            <h2 className='text-[#1d4076] text-3xl font-bold'>Fair, uniform policy implementation<span className='text-[#39bef4]'>Designed for workplace success</span></h2>
                            <p>The ESS portal helps build trust in the workplace by enabling fair and uniform implementation of HR policies in a very transparent manner.</p>
                            <ul className='p-5'>
                                <li className='list-disc'>Direct employee access to all HR policies (published on portal)</li>
                                <li className='list-disc'>Ensures standardisation of processes across the organisations</li>
                                <li className='list-disc'>Apply auto-validation of leave balances, attendance regularisation, reimbursement caps etc.</li>
                            </ul>
                        </div>
                        <div className='shadow-[0_0_10px_#ddd] p-5 rounded-xl mt-8'>
                            <h2 className='text-[#1d4076] text-3xl font-bold'>Open communication channels<span className='text-[#39bef4]'>Lets employees express themselves</span> </h2>
                            <p>The ESS portal gives all employees direct access to colleagues, improving engagement and collaboration. It also allows HR admins to share company policies/updates and send reminders for payroll inputs to employees.</p>
                            <ul className='p-5'>
                                <li className='list-disc'>Networking with colleagues</li>
                                <li className='list-disc'>Birthday & anniversary alerts</li>
                                <li className='list-disc'>Feeds for mass communication</li>
                                <li className='list-disc'>hare company policies/updates</li>
                                <li className='list-disc'>Payroll input reminders to employees</li>
                            </ul>
                        </div>
                        <div className='shadow-[0_0_10px_#ddd] p-5 rounded-xl mt-8'>
                            <h2 className='text-[#1d4076] text-3xl font-bold'>Mobile app<span className='text-[#39bef4]'>For anytime, anywhere access</span> </h2>
                            <p>Let employees discover the convenience of being able to connect with their company while on the move.</p>
                            <ul className='p-5'>
                                <li className='list-disc'>Remote attendance marking</li>
                                <li className='list-disc'>Remote leave application/approval</li>
                                <li className='list-disc'>View/download payroll related information</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
            <section className='p-6 lg:px-24 py-8'>
                <h3 className='text-[#1d4076] font-bold text-3xl text-center mb-8'>Why Choose Human Maximizer<span className='text-[#39bef4]'>Employee Database</span></h3>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
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
            <section className="px-5 lg:px-28 py-5">
                <Form />
            </section>
            <section className='px-5 lg:px-28 py-8'>
                <h3 className='text-[#1d4076] text-center text-3xl font-bold mb-8'>Frequently Asked Questions</h3>
                <FaqAccordion data={faqdata} />
            </section>
            <section>
                <ReachUs />
            </section>
        </div>
    )
}

export default Employee
