import Form from '../Resuable-component/Form'
import FaqAccordion from '../Resuable-component/FaqAccordion'
import ReachUs from '../Resuable-component/ReachUs'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaNoteSticky } from "react-icons/fa6";
import Cards from '../Resuable-component/Cards';


function Attandence() {

    const cardData = [
        {
            tag: "Improve",
            description: "Productivity and Workforce Discipline"
        },
        {
            tag: "Implement",
            description: "Flexible, Real-time Attendance Capture."
        },
        {
            tag: "Achieve",
            description: "100% Statutory Compliance"
        },
        {
            tag: "Ensure",
            description: "Transparency and Consistency in Attendance Policies."
        },
        {
            tag: "Simplify",
            description: "Shift Management and Rostering."
        },
        {
            tag: "Enable",
            description: "Real Time Attendance Processing."
        },
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
                        <h2 className="text-head-color text-3xl sm:text-4xl font-bold">Business-friendly <span className="text-[#39bef4]">Attendence Management</span> for your workplace</h2>
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
                <Cards data={cardData} />
            </section>
            <section>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 p-12 bg-[#F5F8FC]'>
                    <div>
                        <h2 className='text-[#1d4076] font-bold text-3xl'>Features that Make<span className='text-[#39bef4]'> Attendance  Management</span>Hassle-Free.</h2>
                        <p className='text-md mb-5'>Skip the confusion and manual effort. Human Maximizer Attendance Management Software helps you capture, track, and manage employee attendance the smart way without micromanaging.</p>
                        <img src="/images/Leave/leave-attendence.jpg" alt="image" />
                    </div>
                    <div className='h-[70vh] overflow-y-scroll p-3 md:p-12'>
                        <div className='shadow-[0_0_10px_#ddd] p-5 rounded-xl'>
                            <h2 className='text-[#1d4076] text-3xl font-bold'>Mark Attendance Your <span className='text-[#39bef4]'>Way</span></h2>
                            <p>No matter where your team works from, logging attendance is easy and flexible.</p>
                            <ul className='p-5'>
                                <li className='list-disc'>Web and mobile check-in options</li>
                                <li className='list-disc'>Biometric device integration</li>
                                <li className='list-disc'>Selfie check-in with photo capture</li>
                                <li className='list-disc'>Seamless support for hybrid and remote teams</li>
                            </ul>
                        </div>
                        <div className='shadow-[0_0_10px_#ddd] p-5 rounded-xl mt-8'>
                            <h2 className='text-[#1d4076] text-3xl font-bold'>Keep It Secure and <span className='text-[#39bef4]'>Location-Based</span></h2>
                            <p>Control where and how employees mark their attendance.</p>
                            <ul className='p-5'>
                                <li className='list-disc'>Set up geo-fencing for location-restricted check-ins</li>
                                <li className='list-disc'>Enable IP-based restrictions for office networks</li>
                                <li className='list-disc'>Track accurate time logs across multiple sites</li>
                            </ul>
                        </div>
                        <div className='shadow-[0_0_10px_#ddd] p-5 rounded-xl mt-8'>
                            <h2 className='text-[#1d4076] text-3xl font-bold'>Use Fingers<span className='text-[#39bef4]'>Not Faces</span></h2>
                            <p>Touchless, fast, and foolproof attendance with facial recognition.</p>
                            <ul className='p-5'>
                                <li className='list-disc'>AI-powered facial recognition</li>
                                <li className='list-disc'>Stops buddy punching and false entries</li>
                                <li className='list-disc'>Works via mobile or kiosk setups</li>
                            </ul>
                        </div>
                        <div className='shadow-[0_0_10px_#ddd] p-5 rounded-xl mt-8'>
                            <h2 className='text-[#1d4076] text-3xl font-bold'>Make Shift Scheduling<span className='text-[#39bef4]'>Easy</span></h2>
                            <p>No more messy spreadsheets or manual tracking, shifts just work.</p>
                            <ul className='p-5'>
                                <li className='list-disc'>Assign and rotate shifts across teams.</li>
                                <li className='list-disc'>Auto-adjust attendance logs based on shift rules</li>
                                <li className='list-disc'>Manage fixed and flexible work hours with ease</li>
                            </ul>
                        </div>
                        <div className='shadow-[0_0_10px_#ddd] p-5 rounded-xl mt-8'>
                            <h2 className='text-[#1d4076] text-3xl font-bold'>Fix Missed Punches Without the <span className='text-[#39bef4]'>Chase</span></h2>
                            <p>Let employees handle errors, and give managers quick approvals.</p>
                            <ul className='p-5'>
                                <li className='list-disc'>Employees can raise regularization requests</li>
                                <li className='list-disc'>Managers get instant notifications to approve</li>
                                <li className='list-disc'>Keeps records clean and compliant</li>
                            </ul>
                        </div>
                        <div className='shadow-[0_0_10px_#ddd] p-5 rounded-xl mt-8'>
                            <h2 className='text-[#1d4076] text-3xl font-bold'>See the Full Picture with<span className='text-[#39bef4]'>Reports</span> </h2>
                            <p>Know what’s really happening with time and attendance in your organization.</p>
                            <ul className='p-5'>
                                <li className='list-disc'>Detailed reports on early/late logins, absences, and more</li>
                                <li className='list-disc'>View overtime, breaks, and total work hours</li>
                                <li className='list-disc'>Export ready-to-use data for payroll and analysis</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
            <section class="py-12 bg-white">
                <h3 className='text-3xl text-center text-[#1d4076] font-bold'>Why Human Maximizer <span className='text-[#39bef4]'>Attendance Management</span> Software Works For You</h3>
                <p className='mt-5 text-center'>Stay in control of time tracking, reduce errors, and keep things running smoothly without overcomplicating the process.</p>
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-[inset_0_0_10px_#ddd]">
                            <div class="flex justify-center mb-4">
                                <img src="/images/Attandence/busy-teams.svg" alt="Icon" class="w-12 h-12" />
                            </div>
                            <h3 class="text-lg font-semibold text-blue-900">Built for Busy Teams</h3>
                            <p class="mt-2 text-gray-600">Human Maximizer makes it easy for employees and managers to check in, track time, and stay compliant without constant follow-ups.</p>
                        </div>


                        <div class="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-[inset_0_0_10px_#ddd]">
                            <div class="flex justify-center mb-4">
                                <img src="/images/Attandence/accurate-icon.svg" alt="Icon" class="w-12 h-12" />
                            </div>
                            <h3 class="text-lg font-semibold text-blue-900">Keeps Everything Accurate</h3>
                            <p class="mt-2 text-gray-600">With automated logs, secure check-ins, and real-time data, you get clean records you can rely on.</p>
                        </div>

                        <div class="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-[inset_0_0_10px_#ddd]">
                            <div class="flex justify-center mb-4">
                                <img src="/images/Attandence/works-icon.svg" alt="Icon" class="w-12 h-12" />
                            </div>
                            <h3 class="text-lg font-semibold text-blue-900">Works the Way You Do</h3>
                            <p class="mt-2 text-gray-600">From flexible shifts to custom attendance rules, Qandle adapts to how your teams actually work.</p>
                        </div>


                        <div class="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-[inset_0_0_10px_#ddd]">
                            <div class="flex justify-center mb-4">
                                <img src="/images/Attandence/payroll-icon.svg" alt="Icon" class="w-12 h-12" />
                            </div>
                            <h3 class="text-lg font-semibold text-blue-900">Connected with Payroll</h3>
                            <p class="mt-2 text-gray-600">No more double work! Attendance data flows straight into payroll, making salary processing faster and more accurate.</p>
                        </div>


                        <div class="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-[inset_0_0_10px_#ddd]">
                            <div class="flex justify-center mb-4">
                                <img src="/images/Attandence/extra-apps-icon.svg" alt="Icon" class="w-12 h-12" />
                            </div>
                            <h3 class="text-lg font-semibold text-blue-900">No Extra Apps Needed</h3>
                            <p class="mt-2 text-gray-600">Mobile check-ins, reports, and regularizations all happen in one place. No hopping between tools.</p>
                        </div>


                        <div class="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-[inset_0_0_10px_#ddd]">
                            <div class="flex justify-center mb-4">
                                <img src="/images/Attandence/setups-icons.svg" alt="Icon" class="w-12 h-12" />
                            </div>
                            <h3 class="text-lg font-semibold text-blue-900">Easy to Set Up and Manage</h3>
                            <p class="mt-2 text-gray-600">Employees can submit leave requests from their cloud-based management system on mobile devices. HR can approve on the go.</p>
                        </div>

                    </div>
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

            <section className='p-6 lg:p-28'>
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

export default Attandence
