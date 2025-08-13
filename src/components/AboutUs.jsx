import { FaRegLightbulb, FaUsers, FaFile, FaCalendarAlt, FaClock, FaClipboard } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaNoteSticky } from "react-icons/fa6";
import Form from "./Resuable-component/Form";
import FaqAccordion from "./Resuable-component/FaqAccordion";
import ReachUs from "./Resuable-component/ReachUs";

function AboutUs() {

    const faqData = [
        {
            head: 'What is Human Maximizer?',
            para: 'Human Maximizer is a smart HRMS platform that helps businesses manage employee productivity, attendance, payroll, and engagement in one place.',
        },
        {
            head: 'Can I try it before purchasing?',
            para: 'Yes, we offer a free trial so you can explore all the features before making a commitment.',
        },
        {
            head: 'Is my data secure?',
            para: 'Absolutely. We follow best practices in data security, with end-to-end encryption and role-based access controls.',
        },
        {
            head: 'Is my data secure?',
            para: 'Absolutely. We follow best practices in data security, with end-to-end encryption and role-based access controls.',
        },
        {
            head: 'Is my data secure?',
            para: 'Absolutely. We follow best practices in data security, with end-to-end encryption and role-based access controls.',
        },
        {
            head: 'Is my data secure?',
            para: 'Absolutely. We follow best practices in data security, with end-to-end encryption and role-based access controls.',
        },
        {
            head: 'Is my data secure?',
            para: 'Absolutely. We follow best practices in data security, with end-to-end encryption and role-based access controls.',
        },
        {
            head: 'Is my data secure?',
            para: 'Absolutely. We follow best practices in data security, with end-to-end encryption and role-based access controls.',
        },
    ];

    return (
        <>
            <section className='bg-[#1d4076] text-white text-center'>
                <h3 className='text-4xl font-bold'>The Smarter Way to Payroll <span className='text-[#39bef4]'>Human Maximizers</span></h3>
                <p className='text-lg mt-4'>Everything you need to know about Human Capital Management Systems (HCMS)</p>
                <img src="/images/newbg.png" alt="partition" className="w-full mt-6" />
            </section>

            <section>
                <div className="px-4 sm:px-8 md:px-20 py-5 text-center">
                    <p className='text-[#3498db] text-lg'>Our Philosophy</p>
                    <h3 className='text-[#1d4076] text-2xl sm:text-3xl font-bold'>What We <span className='text-[#3498db]'>Believe</span> in</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-6">
                        {[
                            {
                                icon: FaRegLightbulb,
                                head: 'Innovative Learning',
                                paragraph: 'We believe in embracing new technologies and teaching methods to create engaging and effective learning experiences.'
                            },
                            {
                                icon: FaUsers,
                                head: 'Inclusive Education',
                                paragraph: 'Education should be accessible to everyone regardless of background, learning style, or individual needs.'
                            },
                            {
                                icon: AiFillThunderbolt,
                                head: 'Lifelong Growth',
                                paragraph: 'Learning is a continuous journey that extends beyond the classroom and throughout all stages of life.'
                            },
                        ].map((data, index) => {
                            const IconComponent = data.icon;

                            return (
                                <div className="rounded-tl-4xl rounded-br-4xl shadow-[0_0_10px_#ddd] text-center p-8 flex flex-col items-center gap-2 hover:scale-110 transition-all duration-200">
                                    <div className="rounded-full bg-[#ddd] text-[#1d4076] flex justify-center items-center w-fit p-4">
                                        <IconComponent className="text-xl" />
                                    </div>
                                    <h3 className="text-2xl text-[#1d4076]">{data.head}</h3>
                                    <p className="text-sm sm:text-base text-center">{data.paragraph}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section>
                <div className="relative bg-[url('/images/crm-customers.webp')] bg-cover bg-no-repeat p-20 text-center text-white">
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-semibold">Our Purpose</h2>
                        <p className="mt-2">
                            Help a new wave of entrepreneurs to unleash their ambitions and help them succeed for everyone – themselves, others and the planet.
                        </p>
                    </div>
                </div>
            </section>

            <section className="p-12">
                <h2 className="text-[#1d4076] text-3xl text-center my-4 font-semibold">One <span className="text-[#39bef4]">Value</span></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
                    {[
                        {
                            icon: FaFile,
                            head: 'Improve Every Day',
                            paragraph: 'Growth is not "set it and forget it". We strive to be better every day, as a business and as individuals.',
                            color: '#1d4076'
                        },
                        {
                            icon: FaCalendarAlt,
                            head: 'Deliver Excellence',
                            paragraph: 'Excellence, both in our products and customer success, is our North Star.',
                            color: '#8fc02d'
                        },
                        {
                            icon: FaClock,
                            head: 'Focus on Impact',
                            paragraph: 'As a business, the impact we create for our customers and solving their problems is our Chief Key Performance Indicator.',
                            color: '#55c3f2'
                        },
                        {
                            icon: FaClipboard,
                            head: 'Drive Customer Success',
                            paragraph: 'Listen and treat every interaction with our customers as an opportunity to create an enduring relationship that adds value to them.',
                            color: '#e55a80'
                        },
                        {
                            icon: FaNoteSticky,
                            head: 'Nurture Learning & Sharing',
                            paragraph: 'We thrive in an environment of mutual trust, shared knowledge and collaboration.',
                            color: '#9d9310'
                        },
                    ].map((data, index) => {
                        const IconComponent = data.icon;
                        return (
                            <div className="p-5 text-center bg-[#ddd] rounded-2xl flex flex-col items-center gap-2">
                                <IconComponent className="text-xl flex justify-center" style={{ color: data.color }} />
                                <h3 className="text-xl font-bold">{data.head}</h3>
                                <p>{data.paragraph}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="p-16">
                <Form />
            </section>

            <section className="p-20">
                <h2 className="text-3xl text-[#1d4076] font-semibold text-center my-5">Frequently Asked Questions</h2>
                <FaqAccordion data={faqData} />
            </section>

            <section>
                <ReachUs />
            </section>
        </>
    );
}

export default AboutUs;
