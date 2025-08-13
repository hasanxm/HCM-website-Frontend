import { TiTick } from "react-icons/ti";
import { FaNoteSticky } from "react-icons/fa6";
import Form from "../Resuable-component/Form";
import FaqAccordion from "../Resuable-component/FaqAccordion";
import ReachUs from "../Resuable-component/ReachUs";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function Payroll() {
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
                        <h2 className="text-head-color text-3xl sm:text-4xl font-bold">Business-friendly <span className="text-[#39bef4]">Payroll Management</span> for your workplace</h2>
                        <p className="text-base sm:text-lg">The Human Maximizer software's performance management feature monitors, assesses, and improves worker performance while coordinating goals with corporate objectives for ongoing development.</p>
                        <button className="bg-[#1d4076] w-fit text-white p-3 px-6 rounded-full mt-4">Book a Demo</button>
                    </div>
                    <div className="relative flex justify-center lg:p-4 p-12 sm:p-8">
                        <div className="bg-[#8cb6f5] absolute  top-32 shap px-72 py-44">,</div>
                        <img src="/images/performance/attendance-management.png" alt="image" className="lg:h-90 lg:ml-10 z-0 sticky" />
                    </div>
                </div>
            </section>
            <section className="py-12">
                <h2 className="text-[#1d4076] text-3xl text-center font-semibold mb-12">
                    <span className="text-[#39bef4] font-bold">Inspire, Motivate,</span> and <span className="text-[#39bef4]">Develop</span> your employees
                </h2>

                <div className="px-4 lg:px-20 grid grid-cols-1 gap-20">
                    {[
                        {
                            id: 1,
                            tag: "Feedback",
                            head: "Create a culture of feedback",
                            para:
                                "Deliver timely, actionable feedback at all levels of your organization and help everyone grow with self, manager-to-employee, peer, and skip-level reviews.",
                            image: "/images/HrSoftware/hrfeatures1.png",
                        },
                        {
                            id: 2,
                            tag: "Goals & One-on-Ones",
                            head: "Give employees the support they need",
                            para:
                                "Encourage progress, tackle challenges, and celebrate wins with regular one-on-ones, right in BambooHR. Create, track, and share individual and team goals anytime, anywhere with the desktop or mobile app.",
                            image: "/images/HrSoftware/hrfeatures2.png",
                        },
                        {
                            id: 3,
                            tag: "Flexible Reviews Cycles",
                            head: "Use pre-built reviews, or make your own",
                            para:
                                "Create custom review cycles tailored to your teams’ unique needs. Or if you need to get started quickly, take advantage of pre-built solutions and questions. Because one size doesn’t fit all when it comes to performance reviews!",
                            image: "/images/HrSoftware/hrfeatures3.png",
                        },
                    ].map((data) => (
                        <div
                            key={data.id}
                            className="grid lg:grid-cols-2 gap-6 items-center shadow-[0_0_20px_#ddd] rounded-2xl p-6 lg:p-12 bg-white"
                        >
                            <div className={`${data.id === 2 ? "order-2" : ""} flex flex-col justify-center`}>
                                <span className="text-[#39bef4] font-medium">{data.tag}</span>
                                <h3 className="text-[#1d4076] text-2xl font-bold mt-2 mb-4">{data.head}</h3>
                                <p className="text-gray-700 max-w-md">{data.para}</p>
                            </div>
                            <div className={`${data.id === 2 ? "order-1" : ""}`}>
                                <img src={data.image} alt={data.head} className="w-full h-auto rounded-xl" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <div className="grid lg:grid-cols-2 gap-8 p-5 lg:p-24">
                    <div className="image">
                        <img src="/images/HrSoftware/hrfeatures3.png" alt="image" />
                    </div>
                    <div className="flex flex-col justify-center gap-4">
                        <h3 className="text-head-color font-bold text-2xl">Actionable Payroll <span className="text-para-color">Insights</span></h3>
                        <p>Take payroll decisions confidently with Human Maximizer powerful reporting & analytics tools.</p>
                        <span>Pre-built compliance reports to meet regulatory requirements</span>
                        <p>Custom payroll statement builder for better financial insights</p>
                        <p>Detailed reconciliation reports for complete accuracy
                            Real-time analytics to track payroll trends and costs</p>
                    </div>
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

export default Payroll
