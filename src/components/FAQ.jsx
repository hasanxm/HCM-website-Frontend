import FaqAccordion from "./Resuable-component/FaqAccordion";
import ReachUs from "./Resuable-component/ReachUs";

function FAQ() {
    const faqdata = [
        {
            head: 'What is a total compensation statement?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        },
        {
            head: 'Who is Employee Community for?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        },
        {
            head: 'What is the employee database in HR?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        },
        {
            head: 'What is HCM database?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        },
        {
            head: 'What is a HCM data role?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        },
        {
            head: 'What are employee records in HR?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        },
        {
            head: 'What is employee data sheet?',
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        }
    ];

    return (
        <div>
            <section className="bg-[#1d4076] text-white">
                <h3 className="text-4xl text-center font-bold p-5">Frequently Asked Questions</h3>
                <p className="text-center text-lg mt-4">Here are the answers to some of the most common questions about our platform</p>
                <img src="/images/newbg.png" alt="partition" className="w-full mt-6" />
            </section>

            <section className="p-8">
                <FaqAccordion data={faqdata} />
            </section>

            <section className="mt-12">
                <ReachUs />
            </section>
        </div>
    );
}

export default FAQ;
