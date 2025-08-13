import ComponentArrow from "../Resuable-component/ComponentArrow"
import { TiTick } from "react-icons/ti";
import { FaNoteSticky } from "react-icons/fa6";
import Form from "../Resuable-component/Form";
import FaqAccordion from "../Resuable-component/FaqAccordion";
import ReachUs from "../Resuable-component/ReachUs";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';



function Performance() {

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

    const step = [
        {
            title: "Goal Setting",
            description: "Establish and monitor personal and group goals that are in line with the aims of the company."
        },
        {
            title: "Performance Reviews",
            description: "Utilize customisable review forms and rating scales to conduct routine performance evaluations."
        },
        {
            title: "Feedback",
            description: "Through systematic review procedures, both give and receive feedback, assisting staff members in developing and improving."
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
                        <h2 className="text-head-color text-3xl sm:text-4xl font-bold">Business-friendly <span className="text-[#39bef4]">Performance Management</span> for your workplace</h2>
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
                <h2 className="text-[#1d4076] text-3xl text-center"><span className="text-[#39bef4]">Inspire, Motivate,</span> and  <span className="text-[#39bef4]">Develop</span> your employees</h2>
                <div className="p-8 grid grid-cols-1 gap-20">
                    {[
                        {
                            id: 1,
                            tag: "Feedback",
                            head: "Create a culture of feedback",
                            para: "Deliver timely, actionable feedback at all levels of your organization and help everyone grow with self, manager-to-employee, peer, and skip-level reviews.",
                            image: "/images/HrSoftware/hrfeatures1.png"
                        },
                        {
                            id: 2,
                            tag: "Goals & One-on-Ones",
                            head: "Give employees the support they need",
                            para: "Encourage progress, tackle challenges, and celebrate wins with regular one-on-ones, right in BambooHR. Create, track, and share individual and team goals anytime, anywhere with the desktop or mobile app.",
                            image: "/images/HrSoftware/hrfeatures2.png"
                        },
                        {
                            id: 3,
                            tag: "Flexible Reviews Cycles",
                            head: "Use pre-built reviews, or make your own",
                            para: "Create custom review cycles tailored to your teams’ unique needs. Or if you need to get started quickly, take advantage of pre-built solutions and questions. Because one size doesn’t fit all when it comes to performance reviews!",
                            image: "/images/HrSoftware/hrfeatures3.png"
                        },
                    ].map((data, index) => (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:p-5 shadow-[0_0_20px_#ddd] rounded-2xl p-12" key={index}>
                            <div className={`${data.id == 2 ? 'order-2' : null} flex flex-col justify-center`}>
                                <span className="text-[#39bef4]">{data.tag}</span>
                                <p className="text-[#1d4076] text-2xl font-bold">{data.head}</p>
                                <span className="text-md w-96">{data.para}</span>
                            </div>
                            <div className="lg:p-5">
                                <img src={data.image} alt={data.image} />
                            </div>
                        </div>
                    ))
                    }
                </div>
            </section>
            <section>
                <div className="grid grid-cols-1 overflow-hidden lg:grid-cols-2 gap-8 p-5 lg:p-28">
                    <div className="flex  gap-3 shadow-[0_0_10px_#ddd] p-10 rounded-2xl flex-col">
                        <span className="text-[#39bef4]">Human Maximizer Performance Managemen</span>
                        <h4 className="text-[#1d4076] text-2xl font-bold">Everything you need in a robust<br /> talent management software</h4>
                        <p className="text-md w-96">Performance reviews don’t have to be painful. BambooHR makes employee assessments, feedback, and goal-setting easy and insightful for everyone involved—HR, business leaders, and employees.</p>
                    </div>
                    <div className='shadow-[0_0_10px_#ddd] p-10 rounded-2xl flex flex-col justify-center gap-3'>
                        {[
                            'Customizable HR reports',
                            'Real-time workforce insights',
                            'Automated compliance tracking and reporting',
                            'Secure, centralized employee record management',
                            'Role-based access',
                            'AI-powered HR assistant',
                            'Effortless workflows and approvals',
                            'Mobile access',
                            'Customizable dashboards'
                        ].map((data, index) => (
                            <div className='flex gap-3'><TiTick className='text-green-700 text-xl' />{data}</div>
                        ))
                        }

                    </div>
                </div>
            </section>
            <section className="p-5 overflow-hidden lg:px-32 py-5">
                <h2 className="text-[#1d4076] font-bold text-3xl text-center">Enhance <span className="text-[#39bef4]">efficiency, clarity & satisfaction </span> across departments</h2>
                <div className="grid lg:grid-flow-col gap-24 mt-8 bg-[#ddd] py-8 px-6 rounded-2xl w-full max-w-6xl mx-auto w-[40vw] items-center">
                    <div className="flex justify-center ">
                        <img
                            src="/images/performance/testimonial.png"
                            alt="HR Testimonial"
                            className="h-72 rounded-2xl object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-[#1F2C4C] mb-4">
                            For <span className="text-[#39bef4]">HRs</span>
                        </h2>
                        <ul className="list-disc space-y-4 pl-5 text-gray-800 text-sm leading-relaxed">
                            <li>
                                <strong>Customizable Review Processes:</strong> Implement performance
                                reviews tailored to your organization's needs, ensuring a more effective
                                and fair evaluation system.
                            </li>
                            <li>
                                <strong>Focus on Strategic Activities:</strong> Reduce the burden of
                                manual data entry and administrative tasks, allowing HR to concentrate
                                on strategic initiatives that drive organizational success.
                            </li>
                            <li>
                                <strong>Data-Driven Decision Making:</strong> Leverage comprehensive data
                                to make informed decisions on promotions, compensation, and development.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid lg:grid-flow-col gap-24 mt-8 bg-[#ddd] py-8 px-6 rounded-2xl w-full max-w-6xl mx-auto w-[40vw] items-center">
                    <div className="flex justify-center ">
                        <img
                            src="/images/performance/testimonial.png"
                            alt="HR Testimonial"
                            className="h-72 rounded-2xl object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-[#1F2C4C] mb-4">
                            For <span className="text-[#39bef4]">Team Manager</span>
                        </h2>
                        <ul className="list-disc space-y-4 pl-5 text-gray-800 text-sm leading-relaxed">
                            <li>
                                <strong>Enhanced Performance Insights: </strong> Access tools that provide a clear view of team performance, enabling better understanding and management.
                            </li>
                            <li>
                                <strong>Effective Coaching:</strong> Utilize structured feedback and development tools to coach team members effectively and support their growth.
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="grid lg:grid-flow-col gap-24 mt-8 bg-[#ddd] py-8 px-6 rounded-2xl w-full max-w-6xl mx-auto w-[40vw] items-center">
                    <div className="flex justify-center ">
                        <img
                            src="/images/performance/testimonial.png"
                            alt="HR Testimonial"
                            className="h-72 rounded-2xl object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-[#1F2C4C] mb-4">
                            For <span className="text-[#39bef4]">Employees</span>
                        </h2>
                        <ul className="list-disc space-y-4 pl-5 text-gray-800 text-sm leading-relaxed">
                            <li>
                                <strong>Clarity on Goals and Growth Opportunities:</strong>  Gain clarity on goals and career development, helping you understand your role and growth trajectory.
                            </li>
                            <li>
                                <strong>Faster Feedback:</strong> Experience higher morale and improved productivity through regular recognition and acknowledgment of your achievements.
                            </li>

                        </ul>
                    </div>
                </div>
            </section>
            <section className='p-5 overflow-hidden lg:px-24 py-8'>
                <h3 className='text-[#1d4076] font-bold text-3xl text-center mb-8'>Why Choose Human Maximizer<span className='text-[#39bef4]'>Performance Management?</span></h3>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        [
                            {
                                head: 'Easy for employees & HR',
                                para: 'Reviews should take minutes, not hours. Make the performance process easy on your people.'
                            },
                            {
                                head: 'Data-backed decisions',
                                para: 'Access company and employee performance data to see top performers and struggling employees.'
                            },
                            {
                                head: 'Better employee engagement',
                                para: 'Improve participation and morale with clear goals, growth paths, and recognition.'
                            },
                            {
                                head: 'Tools for real growth',
                                para: 'Help employees grow and stay accountable with peer feedback, manager reviews, and goals.'
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
            <section className="bg-[#8cb6f5] overflow-hidden py-20 px-4" style={{ clipPath: 'polygon(1.5% 0, 70% 3%, 70% 13%, 97% 9%, 97.5% 89%, 40% 100%, 39.9% 90%, 1% 88%)' }}>
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
        </>
    )
}

export default Performance
