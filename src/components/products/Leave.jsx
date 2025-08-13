import React from 'react'
import Form from '../Resuable-component/Form'
import FaqAccordion from '../Resuable-component/FaqAccordion'
import ReachUs from '../Resuable-component/ReachUs'
import ComponentArrow from '../Resuable-component/ComponentArrow'
import { FaNoteSticky } from "react-icons/fa6";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


function Leave() {

    const step = [
        {
            title: "Leave Requests",
            description: "Allows employees to submit online leave requests and can monitor approval status."
        },
        {
            title: "Attendance Tracking",
            description: "Simplify the process of monitoring employee presence or absence through biometrics."
        },
        {
            title: "Leave Balances",
            description: "Provide a dashboard of paid leaves, remaining leaves, and benefits."
        }
    ]

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };


    const insights = [
        {
            icon: "/icons/law-icon.svg",
            title: "Make sure labor laws are followed",
            description:
                "The program helps firms comply with labor laws and regulatory obligations by producing leave and attendance records. This reduces the possibility of legal repercussions and fosters an equitable and law-abiding workplace.",
        },
        {
            icon: "/icons/remote-icon.svg",
            title: "Attendance from a distance",
            description:
                "Employees no longer need to travel to a central area to register attendance because they may do so from anywhere. Teams that work in the field will especially benefit from this capability.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },
        {
            icon: "/icons/perimeter-icon.svg",
            title: "Attendance enabled through a perimeter",
            description:
                "Make sure that workers can only record their attendance when they are inside a certain radius of their assigned work location. This reduces erroneous attendance records and gives a more realistic picture of working hours.",
        },

    ];


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
        <div className='overflow-hidden'>
            <section className="partition_slide overflow-hidden relative before:absolute before:inset-0 before:bg-[#e0eef9] before:opacity-100 lg:h-[85vh]">
                <div>
                    <div className='absolute left-1/2 -top-4 rounded-full bg-[#f56d6d] opacity-20 h-24 w-24 animate-slide'></div>
                    <div className='absolute -left-3 -top-1 rounded-full bg-[#39c9bb] opacity-20 h-24 w-24 animate-bounce'></div>
                    <div className='absolute -bottom-5 rounded-full bg-[#f56d6d] opacity-20 h-24 w-24 animate-slide'></div>
                    <div className='absolute top-1/2 -right-5 bg-[#39c9bb] opacity-20 h-28 w-28 animate-spin'></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:p-4">
                    <div className="p-16 z-10 flex flex-col gap-4">
                        <h2 className="text-head-color text-3xl sm:text-4xl font-bold">Business-friendly <span className="text-[#39bef4]">Performance Management</span> for your workplace</h2>
                        <p className="text-base sm:text-lg">The Human Maximizer software's performance management feature monitors, assesses, and improves worker performance while coordinating goals with corporate objectives for ongoing development.</p>
                        <button className="bg-[#1d4076] w-fit text-white p-3 px-6 rounded-full mt-4">Book a Demo</button>
                    </div>
                    <div className="relative flex justify-center lg:p-4 p-12 sm:p-8">
                        <div className="bg-[#8cb6f5] absolute  top-32 shap px-72 py-44">,</div>
                        <img src="/images/performance/attendance-management.png" alt="image" className="lg:h-90 lg:ml-10 z-50 sticky" />
                    </div>
                </div>
            </section>
            <section>
                <ComponentArrow steps={step} />
            </section>

            <section>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-12 lg:gap-4 p-5 lg:p-12 bg-[#F5F8FC]'>
                    <div>
                        <h2 className='text-[#1d4076] font-bold text-3xl'>Features that Make <span className='text-[#39bef4]'> Leave Management</span> Hassle-Free</h2>
                        <p className='text-md mb-5'>Skip the confusion and manual effort. Human Maximizer Attendance Management Software helps you capture, track, and manage employee attendance the smart way without micromanaging.</p>
                        <img src="/images/Leave/leave-attendence.jpg" alt="image" />
                    </div>
                    <div className='h-[70vh] overflow-y-scroll overflow-x-hidden p-5 lg:p-12'>
                        <div className='shadow-[0_0_10px_#ddd] p-5 rounded-xl'>
                            <h2 className='text-[#1d4076] text-3xl font-bold'>Ready for now. <span className='text-[#39bef4]'>Flexible</span> for the <br /> future.</h2>
                            <p>Manage your global workforce with a single source of truth — on the go</p>
                            <ul className='p-5'>
                                <li className='list-disc'>One-tap attendance capture</li>
                                <li className='list-disc'>Manager’s view on availabilities and absences</li>
                                <li className='list-disc'>Geofencing and GPS technology</li>
                            </ul>
                        </div>
                        <div className='shadow-[0_0_10px_#ddd] p-5 rounded-xl mt-8'>
                            <h2 className='text-[#1d4076] text-3xl font-bold'>Configure the <span className='text-[#39bef4]'>Platform </span> Your Way</h2>
                            <p>Made flexible so you stay in charge</p>
                            <ul className='p-5'>
                                <li className='list-disc'>Custom leave types, allowance, and geo-compliance</li>
                                <li className='list-disc'>Dynamic approval workflows to fit your needs</li>
                                <li className='list-disc'>Create holiday calendars across regions and teams</li>
                            </ul>
                        </div>
                        <div className='shadow-[0_0_10px_#ddd] p-5 rounded-xl mt-8'>
                            <h2 className='text-[#1d4076] text-3xl font-bold'>Compliant and <span className='text-[#39bef4]'>accurate </span> every time</h2>
                            <p>Save yourself from compliance and calculation errors</p>
                            <ul className='p-5'>
                                <li className='list-disc'>Seamless data sync with payroll module</li>
                                <li className='list-disc'>Get accurate encashments of annual leave accruals and help employees apply for leave as and when required</li>
                                <li className='list-disc'>Comply with changing laws and regulations</li>
                            </ul>
                        </div>
                        <div className='shadow-[0_0_10px_#ddd] p-5 rounded-xl mt-8'>
                            <h2 className='text-[#1d4076] text-3xl font-bold'>Zero hassle.<span className='text-[#39bef4]'>Complete satisfaction.</span></h2>
                            <p>Deliver delightful and seamless experiences to your workforce</p>
                            <ul className='p-5'>
                                <li className='list-disc'>Inbuilt reminder for queries and attendance</li>
                                <li className='list-disc'>Automatic comp off during holidays or day-off</li>
                                <li className='list-disc'>GApprove bulk leave</li>
                            </ul>
                        </div>
                        <div className='shadow-[0_0_10px_#ddd] p-5 rounded-xl mt-8'>
                            <h2 className='text-[#1d4076] text-3xl font-bold'>Leave management with <span className='text-[#39bef4]'>Human Maximizer</span></h2>
                            <p>Start by defining your company’s leave policies. With Human Maximizer online leave management system, your work ends there. Leave grants, accounting, enforcement of rules, leave applications, approvals and more will take care of themselves. Automatically.</p>
                            <ul className='p-5'>
                                <li className='list-disc'>Streamlined monthly payroll inputs</li>
                                <li className='list-disc'>One-click leave year-end processing
                                    <ul>
                                        <li>Carry forward leave balance</li>
                                        <li>Grant leave</li>
                                    </ul>
                                </li>
                                <li className='list-disc'>Leave encashment</li>
                            </ul>
                        </div>
                        <div className='shadow-[0_0_10px_#ddd] p-5 rounded-xl mt-8'>
                            <h2 className='text-[#1d4076] text-3xl font-bold'>No mess, no stress<span className='text-[#39bef4]'>With Human Maximizer ESS</span> </h2>
                            <p>MExperience online leave management with Human Maximizer Employee Self Service (ESS) portal. It minimises leave-related queries and lets employees manage their leave on their own.</p>
                            <ul className='p-5'>
                                <li className='list-disc'>Automation reduces employee efforts</li>
                                <li className='list-disc'>Employees apply for leave through web portal or mobile app</li>
                                <li className='list-disc'>Leave tracker for leave balances and transactions</li>
                                <li className='list-disc'>Manager view of team leave data & leave patterns for better insights</li>
                                <li className='list-disc'>Workflows with escalations lead to a responsive system and a great employee experience</li>
                                <li className='list-disc'>Email notifications and alerts</li>
                            </ul>
                        </div>

                    </div>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-16">
                        {[
                            {
                                image: "/images/HrSoftware/easy-time-icon.png",
                                head: 'Easy Time-off Booking for Employees',
                                para: "With Human Maximizer, you can track your vacation easily. For your employees, company, and HR needs, the vacation tracker and who's off the calendar provides a complete picture."
                            },
                            {
                                image: "/images/HrSoftware/visibility-icon.png",
                                head: 'Increased visibility',
                                para: 'WWith Human Maximizer, you can instantly see who is on leave today, tomorrow, or in the future, increasing transparency and strengthening your workforce.'
                            },
                            {
                                image: "/images/HrSoftware/custom-icon.png",
                                head: 'Proactively Take Action',
                                para: "Using Human Maximizer, you can dive deep into data and identify trends and insights to make strategic and impactful decisions."
                            },
                            {
                                image: "/images/HrSoftware/dashboard-icon.png",
                                head: 'Customization Capabilities',
                                para: "The software can be tailored to meet your organization's leave policies' unique needs. Our software allows you to manage complex approval workflows and specific accrual rules."
                            },
                            {
                                image: "/images/HrSoftware/apply-leave-icon.png",
                                head: 'All-in-one dashboard',
                                para: "While applying for leave, employees can see their leave balance. It's good to have access to HR and immediate managers so that they have clarity while approval is given."
                            },
                            {
                                image: "/images/HrSoftware/sick-leave-icon.png",
                                head: 'Apply for leaves on the go',
                                para: 'With Human Maximizer, employees can submit leave requests from their cloud-based management system on their mobile devices. Our software solution also enables HR managers to complete approvals on the go.'
                            },
                            {
                                image: "/images/HrSoftware/proactively-icon.png",
                                head: 'Management of sick leave',
                                para: "With Human Maximizer leave management software, your organization can manage absences with a comprehensive solution, allowing you to track absences due to sickness and attach all the necessary documentation."
                            },
                            {
                                image: "/images/HrSoftware/attendance-icon.png",
                                head: 'Attendance Summary',
                                para: "Using Human Maximizer, you will be able to see your team's attendance for every month, or see the attendance for all employees for the year."
                            },

                        ].map((data, index) => (
                            <div className='shadow-[0_0_10px_#ddd] hover:shadow-[inset_0_0_10px_#ddd] p-8 rounded-2xl z-50 text-center'>
                                <img src={data.image} alt={data.image} className='h-20 flex justify-self-center' />
                                <h3 className='text-[#1d4076] text-xl font-bold mt-2'>{data.head}</h3>
                                <p className='text-xs mt-3'>{data.para}</p>
                            </div>
                        ))
                        }
                    </div>

                </div>
            </section>
            <section className='p-16'>
                <h3 className='text-3xl text-[#1d4076] font-bold mb-5 text-center'>Automated Leave Management, <span className='text-[#39bef4]'> Now Got More effortless.</span></h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5'>
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
                            {
                                tag: "Improve",
                                description: "Business Brand Image"
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
            <section className="bg-[#8cb6f5] py-20 px-4" style={{ clipPath: 'polygon(1.5% 0, 70% 3%, 70% 13%, 97% 9%, 97.5% 89%, 40% 100%, 39.9% 90%, 1% 88%)' }}>
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-8">
                        Valuable Insights <span className="text-[#1F2C4C]">on the Importance of Leave Management</span>
                    </h2>

                    <Slider {...settings}>
                        {insights.map((item, index) => (
                            <div key={index} className="px-3">
                                <div className="bg-white rounded-2xl shadow-sm p-6 min-h-[300px] flex flex-col justify-start items-center text-center">
                                    <img src={item.icon} alt="icon" className="h-10 mb-4" />
                                    <h3 className="text-[#1F2C4C] font-bold text-base mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-700">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
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
        </div>
    )
}

export default Leave
