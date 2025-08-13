import Form from "../Resuable-component/Form"
import FaqAccordion from "../Resuable-component/FaqAccordion"
import ReachUs from "../Resuable-component/ReachUs"
import Cards from "../Resuable-component/Cards"

function ReportAnalytics() {

    const cardData = [
        {
            tag: "Employee Relations",
            description: "Conflicts between team members, harassment allegations, or workplace culture concerns."
        },
        {
            tag: "Compliance",
            description: "Labor laws, health and safety regulations, and employee rights."
        },
        {
            tag: "Performance Management",
            description: "Challenges with goal-setting, managing feedback, and performance evaluations."
        },
        {
            tag: "Onboarding and Offboarding",
            description: "Issues during employee entry or exit processes."
        },
        {
            tag: "Payroll and Benefits",
            description: "Discrepancies in salary payments, benefits administration, and taxation."
        },
        {
            tag: "Technology Integration",
            description: "Problems with HR software, data security, and system interoperability."
        },
    ]

    const faqdata = [
        {
            head: 'What does Human Maximizer do?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
        },
        {
            head: 'What does Human Maximizer do?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
        },
        {
            head: 'What does Human Maximizer do?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
        },
        {
            head: 'What does Human Maximizer do?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
        },
        {
            head: 'What does Human Maximizer do?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
        },
        {
            head: 'What does Human Maximizer do?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
        },
        {
            head: 'What does Human Maximizer do?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
        },
        {
            head: 'What does Human Maximizer do?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
        },
        {
            head: 'What does Human Maximizer do?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
        },
        {
            head: 'What does Human Maximizer do?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
        },
        {
            head: 'What does Human Maximizer do?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
        },
        {
            head: 'What does Human Maximizer do?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
        },
    ]

    return (
        <>
            <section className="partition_slide overflow-hidden relative before:absolute before:inset-0 before:bg-[#e0eef9] before:opacity-100 lg:h-[85vh]">
                <div>
                    <div className='absolute left-1/2 -top-4 rounded-full bg-[#f56d6d] opacity-20 h-24 w-24 animate-slide'></div>
                    <div className='absolute -left-3 -top-1 rounded-full bg-[#39c9bb] opacity-20 h-24 w-24 animate-bounce'></div>
                    <div className='absolute -bottom-5 rounded-full bg-[#f56d6d] opacity-20 h-24 w-24 animate-slide'></div>
                    <div className='absolute top-1/2 -right-5 bg-[#39c9bb] opacity-20 h-28 w-28 animate-spin'></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                    <div className="p-10 z-10 flex flex-col gap-4">
                        <h2 className="text-head-color text-3xl sm:text-4xl font-bold">Business-friendly <span className="text-[#39bef4]">Performance Management</span> for your workplace</h2>
                        <p className="text-base sm:text-lg">The Human Maximizer software's performance management feature monitors, assesses, and improves worker performance while coordinating goals with corporate objectives for ongoing development.</p>
                        <button className="bg-[#1d4076] w-fit text-white p-3 px-6 rounded-full mt-4">Book a Demo</button>
                    </div>
                    <div className="relative p-4 sm:p-8">
                        <div className="bg-[#8cb6f5] absolute -left-8 top-32 shap px-64 py-44">,</div>
                        <img src="/images/performance/attendance-management.png" alt="image" className="h-90 z-50 sticky" />
                    </div>
                </div>
            </section>

         
            <section className="p-8 sm:p-16">
                <h3 className="text-3xl text-[#1d4076] font-bold mb-5 text-center">Areas Where<span className="text-[#39bef4]">Issues</span> May Arise in HCM</h3>
                <Cards data={cardData} />
            </section>

            <section className="bg-[#dddddd6b] relative p-4 sm:p-8 overflow-hidden">
                <div className='absolute left-1/2 -top-4 rounded-full bg-[#f56d6d] opacity-20 h-24 w-24 animate-slide'></div>
                <div className='absolute -left-3 -top-1 rounded-full bg-[#39c9bb] opacity-20 h-24 w-24 animate-bounce'></div>
                <div className='absolute -bottom-5 rounded-full bg-[#f56d6d] opacity-20 h-24 w-24 animate-slide'></div>
                <div className='absolute bottom-0 right-5 rounded-full bg-black opacity-20 h-10 w-10 animate-bounce'></div>
                <div className='absolute top-1/2 -right-5 bg-[#39c9bb] opacity-20 h-28 w-28 animate-spin -z-1'></div>
                <div className='z-50 p-8 sm:p-10'>
                    <h3 className="text-center text-lg">Top-notch Human Maximizer</h3>
                    <p className="text-[#1d4076] text-xl sm:text-3xl font-bold text-center">Managing Challenges in<span className='text-[#39bef4]'> Human Maximizer</span> Effective Solutions</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-8 sm:p-16 justify-center">
                    {[
                        {
                            image: "/images/HrSoftware/easy-time-icon.png",
                            head: 'Employee Relations Issues',
                            para: "Interpersonal conflicts, misunderstandings, or dissatisfaction with management can affect team dynamics and productivity."
                        },
                        {
                            image: "/images/HrSoftware/visibility-icon.png",
                            head: 'Payroll and Benefits Discrepancies',
                            para: "Errors in payroll and benefits administration can cause dissatisfaction and legal concerns."
                        },
                        {
                            image: "/images/HrSoftware/custom-icon.png",
                            head: 'Performance Management Issue',
                            para: "Performance management challenges can arise from unclear expectations or inconsistent appraisals."
                        },
                        {
                            image: "/images/HrSoftware/dashboard-icon.png",
                            head: 'Compliance Issues',
                            para: "Non-compliance with labor laws and regulations poses significant risks."
                        },
                        {
                            image: "/images/HrSoftware/apply-leave-icon.png",
                            head: 'Onboarding and Offboarding Issues',
                            para: "Effective onboarding and offboarding ensure a smooth transition for employees."
                        }
                    ].map((data, index) => (
                        <div className='shadow-lg hover:shadow-xl p-6 sm:p-8 rounded-2xl text-center' key={index}>
                            <img src={data.image} alt={data.head} className='h-16 sm:h-20 mx-auto mb-4' />
                            <h3 className='text-[#1d4076] text-xl font-bold mt-2'>{data.head}</h3>
                            <p className='text-xs sm:text-sm mt-3'>{data.para}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Form Section */}
            <section className="p-8 lg:p-16 sm:p-8">
                <Form />
            </section>

            {/* FAQ Section */}
            <section className="px-8 sm:px-28 py-8">
                <h3 className="text-[#1d4076] text-center text-3xl font-bold mb-8">Frequently Asked Questions</h3>
                <FaqAccordion data={faqdata} />
            </section>

            {/* Reach Us Section */}
            <section>
                <ReachUs />
            </section>
        </>
    )
}

export default ReportAnalytics;
