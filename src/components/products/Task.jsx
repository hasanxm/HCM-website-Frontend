import ComponentArrow from "../Resuable-component/ComponentArrow"
import FaqAccordion from "../Resuable-component/FaqAccordion"
import Form from "../Resuable-component/Form"
import ReachUs from "../Resuable-component/ReachUs"

function Task() {
    const step = [
        {
            title: "Task Management",
            description: "Task management is already integrated with all major workflows in the system, so that you can effortlessly get tasks assigned to appropriate personnel for the respective activities."
        },
        {
            title: "Assign Tasks",
            description: "Effortlessly assign a task to the team and receive notifications on the actions of the assigned tasks."
        },
        {
            title: "Corporate Programs",
            description: "Get help from a caring and knowledgeable professional. Let us know."
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
                        <h2 className="text-head-color text-3xl sm:text-4xl font-bold">Business-friendly <span className="text-[#39bef4]">Task Management</span> for your workplace</h2>
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
                <h1 className="text-[#1d4076] text-center font-bold text-3xl text-pretty p-3">Human Maximizer makes it easy to <span className="text-[#39bef4]">organize and track</span>
                    individual or team tasks in one place</h1>

                <div className="p-5 lg:px-24 py-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 shadow-[0_0_10px_#ddd] rounded-2xl p-1 md:p-5 mt-8">
                        <div className="p-8">
                            <h4 className="text-2xl font-bold text-[#1d4076]">Assign tasks and manage deadlines</h4>
                            <p className="text-lg mt-3">Human Maximizer advanced checklists give you the power to add more context to your tasks by assigning team members and due dates to checklist items, increasing visibility and keeping your team accountable.</p>
                        </div>
                        <div>
                            <img src="/images/Task/Task_Management_-_Checklist2x.webp" alt="task-image1" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 shadow-[0_0_10px_#ddd] rounded-2xl p-1 md:p-5 mt-16">
                        <div className="p-8 order-2">
                            <h4 className="text-2xl font-bold text-[#1d4076]">Prioritize tasks and keep your team aligned</h4>
                            <p className="text-lg mt-3 ">Prioritize with labels to identify what is high, medium, or low priority and bring an extra layer of shared understanding to your tasks. You can even filter by a certain label to only view cards associated with the label you want to view.</p>
                        </div>
                        <div>
                            <img src="/images/Task/Task_Management_-_Labels2x.webp" alt="task-image2" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-0 lg:p-5 mt-16">
                        <div className="p-8">
                            <h4 className="text-2xl font-bold text-[#1d4076] text-pretty">Bring a fresh perspective to the task at hand (pun intended) with Calendar View</h4>
                            <p className="text-lg mt-3 text-md text-pretty">Visualize checklist items and cards with due dates in Calendar View, showing what tasks are due in the days and weeks ahead. Cards will be arranged according to their due date and will display any labels, members, or checklists added to them.</p>
                        </div>
                        <div>
                            <img src="/images/Task/Task_Management_-_Calendar.webp" alt="task-image3" />
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
                    <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-8 p-16">
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

export default Task
