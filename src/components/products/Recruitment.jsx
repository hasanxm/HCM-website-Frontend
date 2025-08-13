import Form from '../Resuable-component/Form'
import ComponentArrow from "../Resuable-component/ComponentArrow"
import FaqAccordion from "../Resuable-component/FaqAccordion"
import ReachUs from "../Resuable-component/ReachUs"
import { FaNoteSticky } from 'react-icons/fa6'
function Recruitment() {

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

    const step = [
        {
            title: "Job Postings",
            description: "Post job openings on many platforms after creating them."
        },
        {
            title: "Applicant Tracking",
            description: "Manage and keep track of applicants as they move through the hiring process."
        },
        {
            title: "Resume Management",
            description: "Arrange interviews, keep resumes, and examine them."
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
                        <h2 className="text-head-color text-3xl sm:text-4xl font-bold">Business-friendly <span className="text-[#39bef4]">Recruitement Management</span> for your workplace</h2>
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
                <h2 className="text-[#1d4076] text-3xl text-center font-bold">Automate hiring from <span className="text-[#8cb6f5]">application</span> to <span className="text-[#8cb6f5]"> employment</span></h2>
                <div className="p-3 lg:p-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 shadow-[0_0_10px_#ddd] rounded-2xl p-8">
                        <div className="p-5">
                            <span className="text-[#8cb6f5]">Job Posting</span>
                            <h3 className="text-[#1d4076] text-2xl font-bold">Find the right candidates, faster</h3>
                            <p>Our ATS integrates with job boards like Indeed, ZipRecruiter, and more, letting you manage posts and candidates on one platform. With over 150 integrations, you can also connect your tools and customize your hiring tech stack.</p>
                        </div>
                        <div>
                            <img src="/images/Requirement/Task_Management_-_Checklist2x (1).webp" alt="requirement-1" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 shadow-[0_0_10px_#ddd] rounded-2xl mt-12 p-1 lg:p-8">
                        <div className="order-2 p-5">
                            <span className="text-[#8cb6f5]">Communication</span>
                            <h3 className="text-[#1d4076] text-2xl font-bold">Automate and personalize every step</h3>
                            <p>Send automated, personalized emails at every stage, and keep candidates in the loop without the extra work. Focus less on the busywork, and more on finding the right talent for the job and creating a great candidate experience.</p>
                        </div>
                        <div>
                            <img src="/images/Requirement/Task_Management_-_Labels2x.webp" alt="requirement-1" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 shadow-[0_0_10px_#ddd] rounded-2xl mt-12 p-1 lg:p-8">
                        <div className="p-5">
                            <span className="text-[#8cb6f5]">Digitial Offer Letters & e-signatures</span>
                            <h3 className="text-[#1d4076] text-2xl font-bold">Snap up your top picks before the competition</h3>
                            <p>Speed up the offer process with customizable offer letter templates that auto-populate candidate details for different positions, job types, and requirements. For the candidate, electronic signatures make accepting an offer as easy as sending an email.</p>
                        </div>
                        <div>
                            <img src="/images/Requirement/Task_Management_-_Calendar.webp" alt="requirement-1" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-1 lg:p-8 mt-12">
                        <div className="order-2 p-5">
                            <span className="text-[#8cb6f5]">Reporting</span>
                            <h3 className="text-[#1d4076] text-2xl font-bold">Hire smarter with in-depth analytics</h3>
                            <p>Human Maximizer puts your hiring data at your fingertips. The Candidate Sources Report tracks where applicants come from, so you can optimize your channels. You can also identify bottlenecks and improve your hiring strategy with the Candidate Funnel report.</p>
                        </div>
                        <div>
                            <img src="/images/Requirement/Task_Management_-_Calendar.webp" alt="requirement-1" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-5 lg:px-32 py-5">
                <h2 className="text-[#1d4076] text-3xl text-center">Turn hiring into a <span className="text-[#39bef4]"> hassle-free experience  </span>for everyone</h2>
                <div className="grid grid-cols-1 lg:grid-flow-col gap-24 mt-8 bg-[#ddd] py-8 px-6 rounded-2xl w-full max-w-6xl mx-auto w-[40vw] items-center">
                    <div className="flex justify-center ">
                        <img
                            src="/images/performance/testimonial.png"
                            alt="HR Testimonial"
                            className="h-72 rounded-2xl object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-[#1F2C4C] mb-4">
                            For <span className="text-[#39bef4]">Recruiters</span>
                        </h2>
                        <ul className="list-disc space-y-4 pl-5 text-gray-800 text-sm leading-relaxed">
                            <li>
                                <strong>Faster Time-to-Hire:</strong> Repetitive tasks can be automated, streamlining recruitment and filling positions quickly.
                            </li>
                            <li>
                                <strong>Enhanced Decision-Making:</strong>Data-driven insights enable more informed and unbiased hiring decisions.
                            </li>
                            <li>
                                <strong>Increased Efficiency:</strong>  A streamlined process frees up time for recruiters to focus on strategic activities.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-flow-col gap-24 mt-8 bg-[#ddd] py-8 px-6 rounded-2xl w-full max-w-6xl mx-auto w-[40vw] items-center">
                    <div className="flex justify-center ">
                        <img
                            src="/images/performance/testimonial.png"
                            alt="HR Testimonial"
                            className="h-72 rounded-2xl object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-[#1F2C4C] mb-4">
                            For <span className="text-[#39bef4]">Hiring Manager</span>
                        </h2>
                        <ul className="list-disc space-y-4 pl-5 text-gray-800 text-sm leading-relaxed">
                            <li>
                                <strong>Timely Hiring: </strong> Positions are filled on time, minimizing the impact of vacancies on team productivity and project timelines.
                            </li>
                            <li>
                                <strong>Better Quality Hires: </strong> Suitable candidates are shortlisted efficiently, leading to better hires who fit the role.
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-flow-col gap-24 mt-8 bg-[#ddd] py-8 px-6 rounded-2xl w-full max-w-6xl mx-auto w-[40vw] items-center">
                    <div className="flex justify-center ">
                        <img
                            src="/images/performance/testimonial.png"
                            alt="HR Testimonial"
                            className="h-72 rounded-2xl object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-[#1F2C4C] mb-4">
                            For <span className="text-[#39bef4]">Candidates</span>
                        </h2>
                        <ul className="list-disc space-y-4 pl-5 text-gray-800 text-sm leading-relaxed">
                            <li>
                                <strong>Smoother Application Process: </strong>AI-powered solutions streamline the entire process, enhancing the overall experience.
                            </li>
                            <li>
                                <strong>Faster Feedback:</strong>Automated communications keep candidates informed and engaged throughout the process.
                            </li>

                        </ul>
                    </div>
                </div>
            </section>
            <section className='px-24 py-8'>
                <h3 className='text-[#1d4076] font-bold text-3xl text-center mb-8'>Why Choose Human Maximizer<span className='text-[#39bef4]'>Employee Database</span></h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        [
                            {
                                head: 'A great candidate experience',
                                para: 'Make a positive impression by keeping candidates informed at every phase of hiring.'
                            },
                            {
                                head: 'Maximum reach',
                                para: 'Reach qualified candidates easily with leading job boards and your social networks.'
                            },
                            {
                                head: 'Effective & easy-to-use',
                                para: 'Save time with custom job posts and offer letters, e-signatures, a mobile app, and more.'
                            },
                            {
                                head: 'Built to hire as a team',
                                para: 'Collaborate with custom permissions, automatic alerts, and in-system messaging.'
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
            <section className="p-5 lg:px-28 py-5">
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

export default Recruitment
