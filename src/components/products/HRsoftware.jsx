
import LandingSection from '../Resuable-component/Landing-section';
import ComponentArrow from '../Resuable-component/ComponentArrow'
import { TiTick } from "react-icons/ti";
import { FaNoteSticky } from "react-icons/fa6";
import Form from '../Resuable-component/Form';
import FaqAccordion from '../Resuable-component/FaqAccordion';
import ReachUs from '../Resuable-component/ReachUs';



function HRsoftware() {
  const steps = [
    { id: '01', title: 'Employee Profiles', description: 'Create comprehensive digital profiles with all relevant employee information securely stored in one place.' },
    { id: '02', title: 'Document Management', description: 'Centralize all employee documents, contracts, and certificates with secure access control and easy retrieval.' },
    { id: '03', title: 'Analytics & Reporting', description: 'Generate insightful reports on team performance, attendance, and other KPIs to make data-driven decisions.' },
  ];

  const faqdata = [
    {
      head:'What does Human Maximizer do?' ,
      para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
    } ,
    {
      head:'What does Human Maximizer do?' ,
      para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
    } ,
    {
      head:'What does Human Maximizer do?' ,
      para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
    } ,
    {
      head:'What does Human Maximizer do?' ,
      para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
    } ,
    {
      head:'What does Human Maximizer do?' ,
      para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
    } ,
    {
      head:'What does Human Maximizer do?' ,
      para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
    } ,
    {
      head:'What does Human Maximizer do?' ,
      para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
    } ,
    {
      head:'What does Human Maximizer do?' ,
      para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
    } ,
    {
      head:'What does Human Maximizer do?' ,
      para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
    } 
  ]

  return (
    <>
      <LandingSection />
      <ComponentArrow steps={steps} />
      <section>
        <h1 className='text-center text-[#1d4076] text-3xl font-bold'>Empower your people with <span className='text-[#39bef4]'>data-driven decisions</span></h1>
        <div className='p-5 lg:p-20'>
          <div className='grid lg:grid-cols-2 p-5 lg:p-12 gap-8 rounded-xl shadow-[0_0_10px_#ddd]'>
            <div className='flex flex-col gap-3 justify-center lg:p-16'>
              <p className='text-[#39bef4] text-xl font-semibold'>Employee Record</p>
              <p className='text-[#1d4076] text-3xl font-bold'>Manage employee data the <br /> easy way</p>
              <span className='text-sm '>Say goodbye to scattered systems and hello to one centralized platform for all your employee data. Everything stays organized, secure, easy to access, and fully compliant with privacy laws.</span>
            </div>
            <div>
              <img src="/images/HrSoftware/hrfeatures1.png" alt="hrfeatures1" />
            </div>
          </div>
        </div>
        <div className='p-5 lg:p-20'>
          <div className='grid lg:grid-cols-2 p-5 lg:p-12 gap-8 rounded-xl shadow-[0_0_10px_#ddd]'>
            <div>
              <img src="/images/HrSoftware/hrfeatures2.png" alt="hrfeatures1" />
            </div>
            <div className='flex flex-col gap-3 justify-center p-5 lg:p-16'>
              <p className='text-[#39bef4] text-xl font-semibold'>Ask Human Maximizer</p>
              <p className='text-[#1d4076] text-3xl font-bold'>Get instant, accurate AI answers to routine HR questions</p>
              <span className='text-sm '>Save time for bigger priorities with Ask Human Maximizer an AI-powered assistant designed to handle employee questions about policies, benefits, and more. It delivers fast, accurate answers anytime, day or night.</span>
            </div>
          </div>
        </div>
        <div className='p-5 lg:p-20'>
          <div className='grid lg:grid-cols-2 p-5 lg:p-12 gap-8 rounded-xl shadow-[0_0_10px_#ddd]'>
            <div className='flex flex-col gap-3 justify-center p-5 lg:p-16'>
              <p className='text-[#39bef4] text-xl font-semibold'>Reporting & Analytics</p>
              <p className='text-[#1d4076] text-3xl font-bold'>Stop the guesswork with smarter HR reporting</p>
              <span className='text-sm '>Transform your HR data into smart decisions using built-in and customizable reports. Whether it's spotting workforce trends or staying on top of compliance, you'll get real-time insights instantly—no time wasted on manual work.</span>
            </div>
            <div>
              <img src="/images/HrSoftware/hrfeatures3.png" alt="hrfeatures1" />
            </div>
          </div>
        </div>
        <div className='p-5 lg:p-20'>
          <div className='grid lg:grid-cols-2 p-5 lg:p-12 gap-8 rounded-xl shadow-[0_0_10px_#ddd]'>
            <div>
              <img src="/images/HrSoftware/hrfeatures4.png" alt="hrfeatures1" />
            </div>
            <div className='flex flex-col gap-3 justify-center p-5 lg:p-16'>
              <p className='text-[#39bef4] text-xl font-semibold'>Workflows & Approvals</p>
              <p className='text-[#1d4076] text-3xl font-bold'>Avoid mistakes and reduce compliance risk</p>
              <span className='text-sm '>Ensure compliance every time with automated workflows and approvals. Human Maximizer streamlines your internal processes to reduce errors and avoid costly missteps. Ditch manual tasks and embrace a more efficient way of working.</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='grid lg:grid-cols-2 p-5 lg:p-20 gap-8'>
          <div className='shadow-[0_0_10px_#ddd] p-10 rounded-2xl'>
            <h3 className='text-[#39bef4] text-lg font-semibold'>Human Maximizer HR Data & Reporting</h3>
            <p className='text-[#1d4076] text-3xl font-bold mb-3'>Everything you need to make strategic, informed decisions</p>
            <span className='text-md'>
              Managing employee data and gaining insights doesn’t have to be a hassle. With our secure central database, robust mobile app, and AI-powered assistant, accessing and using HR data is simple, fast, and stress-free.
            </span>
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
      <section className='p-5 lg:px-24 py-8'>
        <h3 className='text-[#1d4076] font-bold text-3xl text-center mb-8'>Why Choose Human Maximizer <span className='text-[#39bef4]'>HR Date & Reporting?</span></h3>
       <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
         {
          [
            {
              head: 'Peoplework, not paperwork',
              para: 'Automate HR reporting, save time, and focus on what really matters—your people.'
            },
            {
              head: 'Approvals without the chase',
              para: 'Make bottlenecks and email follow- ups a thing of the past with automated workflows.'
            },
            {
              head: 'Data-led decision making',
              para: 'Get the reports you need, fast. Quick insights or deep dives, HR data is always on hand.'
            },
            {
              head: 'Faster answers with AI',
              para: 'Employees ask, your AI-powered HR assistant answers. Fast, friendly, and always on duty.'
            },
          ].map((data, index) => (
            <div className='border rounded-3xl flex flex-col gap-3 justify-center items-center border-gray-300 p-8' key={index}>
              <div className='bg-[#1d40761c] rounded-full p-4 flex justify-center items-center'><FaNoteSticky className='text-[#1d4076] text-2xl'/></div>
              <h4 className='text-xl font-bold text-[#1d4076] text-center'>{data.head}</h4>
              <p className='text-md text-center'>{data.para}</p>
            </div>
          )
          )}
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
            <h3 className='text-center'>Best-in-class</h3>
            <p className='text-[#1d4076] text-3xl text-center font-bold'> Software Solutions and <span className='text-[#39bef4]'>Services</span></p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 p-16">
            {[
              {
                image:"/images/HrSoftware/easy-time-icon.png" , 
                head:'Real-Time Data Visualization' ,
                para:'Using Human Maximizer software, interactive graphs, dashboards, and charts can be created, making complex data easier to comprehend.'
              },
              {
                image:"/images/HrSoftware/visibility-icon.png" , 
                head:'Assuring the security of data' ,
                para:'With the power of real-time analytics, Human Maximizer allows you to harness the power of robust data security measures.'
              },
              {
                image:"/images/HrSoftware/custom-icon.png" , 
                head:'User-Friendly Interface' ,
                para:"Human Maximizer software's intuitive design reduces the learning curve and encourages broad adoption, reducing the learning curve for experts and newcomers alike."
              },
              {
                image:"/images/HrSoftware/dashboard-icon.png" , 
                head:'Custom Dashboards' ,
                para:'With Human Maximizer Real-time Visual Analytics software, you can create customized dashboards to track business-critical performance indicators (KPIs).'
              },
              {
                image:"/images/HrSoftware/apply-leave-icon.png" , 
                head:'Advanced Reporting' ,
                para:'Create comprehensive reports based on in-depth data analysis and detailed decision-making based on the analysis, and schedule them for delivery automatically.'
              },
              {
                image:"/images/HrSoftware/sick-leave-icon.png" , 
                head:'Third-Party Integrations' ,
                para:'Integrated with other popular software tools and platforms, such as CRM systems and ERP systems, Human Maximizer software can help automate your workflow and analyze data more efficiently.'
              },
              {
                image:"/images/HrSoftware/proactively-icon.png" , 
                head:'RReal-Time Alert' ,
                para:"Setting up alerts for specific conditions or thresholds in Human Maximizer's real-time analytics software helps you stay on top of critical changes."
              },
              {
                image:"/images/HrSoftware/attendance-icon.png" , 
                head:'Scalable solutions' ,
                para:"With Human Maximizer's software, you can scale to meet your organization's needs, accommodating increasing users and data."
              },

            ].map((data , index)=>(
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
      <section  className='p-5 lg:p-28'>
            <Form/>
      </section>
      <section className='p-5 lg:px-28 py-8'>
        <h3 className='text-[#1d4076] text-center text-3xl font-bold mb-8'>Frequently Asked Questions</h3>
        <FaqAccordion data={faqdata}/>
      </section>
      <section>
        <ReachUs/>
      </section>
    </>
  )
}

export default HRsoftware
