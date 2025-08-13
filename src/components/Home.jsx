import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaLinkedinIn } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Form from './Resuable-component/Form'
import FaqAccordion from './Resuable-component/FaqAccordion';
import { FaUser, FaFileAlt, FaCalendarMinus, FaUserTie, FaClock, FaFileContract } from "react-icons/fa";
import { FaCircleDollarToSlot, FaChartSimple, FaFileExport, FaUserPlus, FaIdCard, FaRotate, FaCalendarDay, FaGraduationCap } from "react-icons/fa6";
import LandingSection from './Resuable-component/Landing-section';
import ComponentArrow from './Resuable-component/ComponentArrow.jsx';
import ReachUs from './Resuable-component/ReachUs.jsx';
import { LuNotepadText } from "react-icons/lu";
import { FaHandPointUp } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { GiProgression } from "react-icons/gi";
import { GiLightBulb } from "react-icons/gi";
import { IoIosLock } from "react-icons/io";




export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTab, setActiveTab] = useState('HR Director');
  const [tag, setTag] = useState('IT Director')

  const steps = [
    { id: '01', title: 'Productive Breaks', description: 'Allows employees to submit online leave requests and can monitor approval status.' },
    { id: '02', title: 'Time-bound Productivity', description: 'Simplify the process of monitoring employee presence or absence through biometrics.' },
    { id: '03', title: 'Work Optimization', description: 'Provide a dashboard of paid leaves, remaining leaves, and benefits.' },
  ];


  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cardData = [
    { icon: FaUser, tag: 'HR Analytics', color: '#9d93102e' },
    { icon: FaFileAlt, tag: 'Attendance Management', color: '#8fc02d21' },
    { icon: FaCalendarMinus, tag: 'Ticket Management', color: '#55c3f21f' },
    { icon: FaCircleDollarToSlot, tag: 'Task Management', color: '#e55a802b' },
    { icon: FaChartSimple, tag: 'Recruit Management', color: '#1d40761c' },
    { icon: FaFileExport, tag: 'Performance Management', color: '#e55a802b' },
    { icon: FaGraduationCap, tag: 'Leave Management', color: '#9d93102e' },
    { icon: FaUserPlus, tag: 'Resignation & FNF Dashboard', color: '#1d40761c' },
    { icon: FaUserTie, tag: 'Policies & Dashboard', color: '#9d93102e' },
    { icon: FaClock, tag: 'Expense Management', color: '#8fc02d21' },
    { icon: FaFileContract, tag: 'WorkFlow Automation', color: '#55c3f21f' },
    { icon: FaUserPlus, tag: 'Employee Data Management', color: '#e55a802b' },
    { icon: FaIdCard, tag: 'Payroll management', color: '#55c3f21f' },
    { icon: FaRotate, tag: 'Time Tracking', color: '#1d40761c' },
    { icon: FaCalendarDay, tag: 'Compliance Management', color: '#8fc02d21' },
  ];

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

  const content = [
    {
      title: '15+',
      description: 'HR Modules'
    },
    {
      title: '500+',
      description: 'Happy Clients'
    },
    {
      title: '1K+',
      description: 'Satisfied Users'
    },
    {
      title: '5+',
      description: 'Industries Served'
    },

  ]

  const features = [
    {
      id : 1,
      title: 'Human Resources Management',
      content: `Create org hierarchies, personalize the home page & set form & report rights for each user level. Generate N number of HRIS reports using the report designer & employee search engine.`,
    },
    {
      id: 2,
      title: 'Payroll Management',
      content: 'Create org hierarchies, personalize the home page & set form & report rights for each user level. Generate N number of HRIS reports using the report designer & employee search engine.',
    },
    {
      id: 3,
      title: 'Leave Management',
      content: 'Create org hierarchies, personalize the home page & set form & report rights for each user level. Generate N number of HRIS reports using the report designer & employee search engine.',
    },
    {
      id: 4,
      title: 'Attendance Management',
      content: 'Create org hierarchies, personalize the home page & set form & report rights for each user level. Generate N number of HRIS reports using the report designer & employee search engine.',
    },
    {
      id: 5,
      title: 'Performance Management',
      content: 'Create org hierarchies, personalize the home page & set form & report rights for each user level. Generate N number of HRIS reports using the report designer & employee search engine.',
    },
  ];

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };


  return (
    <>
      <LandingSection />
      <section className="bg-[#1D1D1F] px-12 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 py-16  mx-auto gap-16 ">
          <div>
            <p className="text-lg text-white">Silent Features</p>
            <h2 className="text-4xl font-bold text-white mt-2">Major Features</h2>
            <p className="mt-4 text-gray-300">The following are the major features of the Human Maximizer Human Capital Management software.</p>

            <div className="w-full divide-y text-white rounded-md mt-4">
              {features.map((item, index) => (
                <div key={index} className=" py-4" onClick={()=> setActiveTab(item.id)}>
                  <div
                    onClick={() => toggle(index)}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    {openIndex === index ? (
                      <FaChevronUp className="text-[#BEB1F5]" />
                    ) : (
                      <FaChevronDown className="text-[#BEB1F5]" />
                    )}
                  </div>

                  {openIndex === index && item.content && (
                    <div className="mt-2 text-gray-200 text-sm">
                      <p>{item.content}</p>
                      <a
                        href="#"
                        className="text-[#BEB1F5] font-semibold mt-2 inline-block"
                      >
                        Learn More &rarr;
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className='flex justify-center items-center'>
            <img
              src={`/images/home/${activeTab === 1 ? 'hr-management.jpg' : activeTab === 2 ? 'payrol-management.png' : activeTab === 3 ? 'leave-management.png' : activeTab === 4 ? 'attendence-management.jpg' : 'performance-management.png'}`}
              alt="Dashboard Features"
              className="rounded-xl shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>
      <section className='flex relative bg-[#1D1D1F] flex-wrap lg:p-14 justify-center gap-3'>
        <div className='p-5 lg:p-16 sm:p-8'>
          <h1 className='text-white font-bold text-4xl'>
            Human Maximizer is <br /> Dominating the <span className='text-[#BEB1F5]'>HR <br /> Software</span> Industry Globally
          </h1>
          <button className='bg-transparent border-2 border-white text-white hover:bg-[#3190B7] p-3 rounded-full mt-4 font-bold'> Book a Demo </button>
        </div>
        <div className='grid grid-cols-2 gap-5 p-4 before:opacity-20 before:h-[60%] before:w-[20%] before:absolute before:rounded-full before:bg-gradient-to-r before:from-blue-300 before:to-white  before:left-[45%]  before:top-center'>
          {content.map((data, index) => (
            <div className={`flex justify-center items-center flex-col bg-[#1d1d1f] rounded-tr-4xl rounded-bl-4xl shadow-[inset_0_0_20px_#ddd] hover:shadow-[inset_0_0_8px_#ddd] p-12 z-10 ${data.title == '15+' ? '-mt-4' : data.title == '1K+' ? '-mt-2' : data.title == '5+' ? 'mt-4' : null}`} key={index}>
              <h2 className={`${data.title == '15+' ? 'text-orange-400' : data.title == '1K+' ? 'text-blue-600' : data.title == '5+' ? 'text-green-400' : 'text-black'} text-3xl font-bold`}>{data.title}</h2>
              <p className='text-2xl font-bold text-white'>{data.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full bg-[#1D1D1F] py-20 relative lg:px-24">
        <h3 className="text-center text-3xl font-extrabold text-white relative mb-16">
          Product Demo
          <span className="absolute left-1/2 -translate-x-1/2 top-full w-40 h-[3px] bg-[#39bef4] animate-[spinleftline_3.5s_linear_infinite]"></span>
        </h3>

        <div className="relative flex flex-wrap justify-center items-center">

          <div className="hidden lg:flex text-white flex-col gap-6 absolute left-0 top-1/2 -translate-y-1/2 ml-4">
            {[
              'finance-management.png',
              'payroll-management.png',
              'task-management.png',
              'attendence.png',
              'leave-icons.png',
            ].map((img, idx) => (
              <div
                key={idx}
                className={`w-32 h-32 bg-[#1d1d1f] border-2 border-white rounded-full ${img === 'payroll-management.png' || img === 'attendence.png' ? 'ml-16' : ''} shadow-[0_0_8px_#00000021] flex items-center justify-center flex-col p-2`}
              >
                <img
                  src={`/images/home/${img}`}
                  alt=""
                  className="w-8 h-8"
                />
                <h4 className="text-md text-center mt-1 font-medium leading-tight">
                  {img.replace('.png', '').replace(/-/g, ' ')}
                </h4>
              </div>
            ))}
          </div>
          <div className="w-full max-w-3xl px-4 relative">
            <img src="/images/home/Thumbnail.webp" alt="Video Thumbnail" className="rounded-xl w-full" />
            <img src="/images/home/youtube-icon.png" alt="Play" className="w-20 md:w-24 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
            <p className="text-center text-white text-base mt-4">Watch product demo to learn everything about our service.</p>
          </div>
          <div className="hidden lg:flex text-white flex-col gap-6 absolute right-0 top-1/2 -translate-y-1/2 mr-4">
            {[
              'synergy.png',
              'ticket-management.png',
              'organisation-chart.png',
              'policies-induction.png',
              'resign.png',
            ].map((img, idx) => (
              <div key={idx} className={`w-32 h-32 bg-[#1d1d1f] border-2 border-white rounded-full ${img === 'ticket-management.png' || img === 'policies-induction.png' ? 'ml-16' : ""} shadow-[0_0_8px_#00000021] flex items-center justify-center flex-col p-2`}>
                <img src={`/images/home/${img}`} alt="" className="w-8 h-8" />
                <h4 className="text-center mt-1">{img.replace('.png', '').replace(/-/g, ' ')}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-12 px-6 lg:hidden">
          {[
            'finance-management.png',
            'payroll-management.png',
            'task-management.png',
            'attendence.png',
            'leave-icons.png',
            'synergy.png',
            'ticket-management.png',
            'organisation-chart.png',
            'policies-induction.png',
            'resign.png',
          ].map((img, idx) => (
            <div key={idx} className="w-full flex flex-col items-center justify-center p-5">
              <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center p-2">
                <img src={`/images/home/${img}`} alt="" className="w-8 h-8" />
              </div>
              <h4 className="text-md lg:text-[10px] text-center mt-2 font-medium leading-tight">{img.replace('.png', '').replace(/-/g, ' ')}</h4>
            </div>
          ))}
        </div>
      </section>
      <ComponentArrow steps={steps} />
      <section className='p-4'>
        <h2 className='text-3xl text-center text-[#1F2C4C] font-bold' >Onboarding with <span className='text-[#39bef4]'>immediate</span> returns</h2>
        <p className='text-center mt-2'>A platform loved by everyone in company - by employers and employees</p>
        <div className='flex justify-center gap-10 flex-wrap items-center'>
          {[
            {
              img: '/images/home/cio-icon.png',
              tag: 'IT Director'
            },
            {
              img: '/images/home/chro-icon.png',
              tag: 'HR Executive'
            },
            {
              img: '/images/home/payroll-admin.png',
              tag: 'Payroll Admin'
            },
            {
              img: '/images/home/manager-icon.png',
              tag: 'Managers'
            },
            {
              img: '/images/home/employee-icon.png',
              tag: 'Employees'
            },
          ].map((data, index) => {
            return (
              <div
                className={`text-center shadow-[0_0_10px_#ddd] p-8 mt-4 rounded-xl cursor-pointer focus:outline-none focus:border-2 focus:border-black`}
                onClick={() => setTag(data.tag)}
                key={index}
                tabIndex={0}
              >
                <img src={data.img} alt={data.img} className='h-28' />
                <p className='text-xl text-gray-800 font-bold'>{data.tag}</p>
              </div>
            )
          })}
        </div>

        {[
          {
            img: '/images/home/cio.png',
            firstbox: {
              head: 'IT Director',
              paragraph: "CIOs, Human Maximizer helps you tidy up all your HR data on one platform. It makes HR and payroll a doddle, cuts down on all that admin staff, and ensures your data is safe and sound and you're following the rules. Plus, it frees up your IT resources by getting rid of loads of different HR systems.",
              subhead: 'Key Perks :',
              points: [
                'Makes HR and payroll a breeze.',
                "Sorts out who's responsible for keeping data private and secure.",
                "Gives you the lowdown on workforce numbers for making smart choices.",
                "Gets rid of IT costs with cloud-based HR."
              ]

            }

          },
          {
            img: '/images/home/chro-images.webp',
            firstbox: {
              head: 'HR Executive',
              paragraph: "Human Maximizer helps you focus on looking after talent, keeping an eye on how happy the staff are, setting up pay structures, and making sure there's a plan for who takes over when folks move on. With Human Maximizer, CHROs can build a good atmosphere at work and help the business do better.",
              subhead: 'Key Perks :',
              points: [
                'Gives you good info for making sure your HR plans match what the business wants to achieve.',
                "Makes hiring and getting new people settled in a smooth process.",
                "It's easy to use and you can get to it on your mobile.",
                "Gives you all sorts of reports and dashboards you can set up how you like."
              ]

            }

          },
          {
            img: '/images/home/PayrollAdmin.webp',
            firstbox: {
              head: 'Payroll Admin',
              paragraph: "Payroll Administrators, Human Maximizer helps you get things automated, manage payments accurately and on time, and give you automatic calculations, which means fewer mistakes with data. Human Maximizer makes it clear how tax and deductions are worked out and produces proper payroll reports.",
              subhead: 'Key Perks :',
              points: [
                'Keeps a full record of everything that happens with payroll reports in the system.',
                "Cuts down on doing things by hand and the chance of making errors.",
                "Gives employees their payslips online.",
                "Produces all sorts of reports to make sure you're following the rules."
              ]

            }

          },
          {
            img: '/images/home/Managers.webp',
            firstbox: {
              head: 'Managers',
              paragraph: "Human Maximizer lets managers see how everyone's doing in real-time, get into employee info, dish out tasks, and sort out any issues. You can run appraisals, keep tabs on performance, spot where skills are lacking, and offer training that's just right for each person by making well-informed decisions.",
              subhead: 'Key Perks :',
              points: [
                'Gives you access to all sorts of employee info and stats.',
                "Makes it dead easy for managers and their teams to chat.",
                "Simplifies sticking to company rules.",
                "Improves communication with automatic alerts."
              ]

            }

          },
          {
            img: '/images/home/Employees.webp',
            firstbox: {
              head: 'Employees',
              paragraph: "Employees get access to things tailored to them to keep them involved, like raising tickets, seeing how they're doing, and having a chat with their teammates. Human Maximizer, with its mobile access, means employees can stay in the loop with company news and can work out their productive hours.",
              subhead: 'Key Perks :',
              points: [
                'Keeps everyone up to speed with important news and announcements.',
                "Let employees get involved and have their say in feeds and polls.",
                "Employees can update what they're doing each day.",
                "They can see their payslips and check their balances straight away."
              ]

            }

          },

        ].filter(data => data.firstbox.head == tag).map((data, index) => (
          <div className='grid md:grid-cols-2 grid-cols-1 p-5 lg:p-24 gap-5 justify-center items-center' key={index}>
            <div className="p-12 shadow-[0_0_15px_#ddd] rounded-xl w-fit">
              <img src={data.img} alt={data.img} className='object-cover h-96 ' />
            </div>
            <div className="h-full p-8 rounded-xl shadow-[0_0_15px_#ddd]">
              <h2 className='text-2xl font-semibold text-[#1F2C4C]'>{data.firstbox.head}</h2>
              <hr className='w-32 text-[#39bef4]'></hr>
              <p className='mt-3 text-md mb-3'>{data.firstbox.paragraph}</p>
              <span className='text-2xl font-semibold p-2'>Key Benifits : </span>
              <ul className='px-5'>
                {data.firstbox.points.map((points, index) => (
                  <li key={index} className='mt-2 list-disc'>{points}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className='grid lg:grid-cols-2 lg:px-24 gap-8'>
          <div className='p-5 border border-[#39bef4] flex flex-col justify-center  rounded-2xl shadow-[0_0_8px_#ddd]'>
            <h2 className='text-[#1F2C4C] font-smibold text-2xl'>Without human Maximizer</h2>
            <ul className='p-5'>
              <li className='list-disc'>No engagement with employees</li>
              <li className='list-disc'>Challenges in tracking productivity</li>
              <li className='list-disc'>Difficulty in staying updated with no automated notification.</li>
            </ul>
          </div>
          <div className='px-4 flex flex-col justify-center rounded-xl bg-[#39bef41f] border-blue-400 shadow-[0_0_8px_#ddd]'>
            <h2 className='text-[#1F2C4C] font-semibold text-2xl'>With Human Maximizer</h2>
            <p className='text-sm mt-4 '>Managing becomes doodle! With Human Maximizer team managers can keep an eye on all the activities without any hassle, tracking leaves, attendance, productivity, and performance with transparency so that employees don't feel they are not valued. Advanced platform for your every solution</p>
          </div>
        </div>
      </section>

      <section className='overflow-hidden bg-[#8cb6f5] p-8  mt-8' style={{
        clipPath:
          'polygon(1.5% 0, 70% 3%, 70% 13%, 97% 9%, 97.5% 89%, 40% 100%, 39.9% 90%, 1% 88%)',
      }}>
        <h2 className='text-[#1d4076] mt-32 text-3xl font-bold text-center'>Simplifying your <span className='text-white '>Business needs </span><br />from the start</h2>
        <p className='text-center mt-4'>Smart platform for meeting all the business needs of employees and employers.</p>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='mt-4 lg:p-12'>
            <img src="/images/home/girl.png" alt="/images/home/girl.png" className='object-fit mb-8' />
          </div>
          <div className="slider-container pb-32 lg:py-24 px-5">
            <Slider {...settings}>
              {[
                {
                  icon: FaClock,
                  head: "You're facing challenge in engaging employees in fostering positive workplace ",
                  paragraph: "We made it easy, by providing feed for employees to engage, creating poll, post, comment and media with permission based control."
                },
                {
                  icon: FaClock,
                  head: "You're facing challenge in engaging employees in fostering positive workplace ",
                  paragraph: "We made it easy, by providing feed for employees to engage, creating poll, post, comment and media with permission based control."
                },
                {
                  icon: FaClock,
                  head: "You're facing challenge in engaging employees in fostering positive workplace ",
                  paragraph: "We made it easy, by providing feed for employees to engage, creating poll, post, comment and media with permission based control."
                },
                {
                  icon: FaClock,
                  head: "You're facing challenge in engaging employees in fostering positive workplace ",
                  paragraph: "We made it easy, by providing feed for employees to engage, creating poll, post, comment and media with permission based control."
                },
                {
                  icon: FaClock,
                  head: "You're facing challenge in engaging employees in fostering positive workplace ",
                  paragraph: "We made it easy, by providing feed for employees to engage, creating poll, post, comment and media with permission based control."
                },
                {
                  icon: FaClock,
                  head: "You're facing challenge in engaging employees in fostering positive workplace ",
                  paragraph: "We made it easy, by providing feed for employees to engage, creating poll, post, comment and media with permission based control."
                },
                {
                  icon: FaClock,
                  head: "You're facing challenge in engaging employees in fostering positive workplace ",
                  paragraph: "We made it easy, by providing feed for employees to engage, creating poll, post, comment and media with permission based control."
                },
                {
                  icon: FaClock,
                  head: "You're facing challenge in engaging employees in fostering positive workplace ",
                  paragraph: "We made it easy, by providing feed for employees to engage, creating poll, post, comment and media with permission based control."
                },
                {
                  icon: FaClock,
                  head: "You're facing challenge in engaging employees in fostering positive workplace ",
                  paragraph: "We made it easy, by providing feed for employees to engage, creating poll, post, comment and media with permission based control."
                },
                {
                  icon: FaClock,
                  head: "You're facing challenge in engaging employees in fostering positive workplace ",
                  paragraph: "We made it easy, by providing feed for employees to engage, creating poll, post, comment and media with permission based control."
                },
                {
                  icon: FaClock,
                  head: "You're facing challenge in engaging employees in fostering positive workplace ",
                  paragraph: "We made it easy, by providing feed for employees to engage, creating poll, post, comment and media with permission based control."
                },
                {
                  icon: FaClock,
                  head: "You're facing challenge in engaging employees in fostering positive workplace ",
                  paragraph: "We made it easy, by providing feed for employees to engage, creating poll, post, comment and media with permission based control."
                },
                {
                  icon: FaClock,
                  head: "You're facing challenge in engaging employees in fostering positive workplace ",
                  paragraph: "We made it easy, by providing feed for employees to engage, creating poll, post, comment and media with permission based control."
                },
                {
                  icon: FaClock,
                  head: "You're facing challenge in engaging employees in fostering positive workplace ",
                  paragraph: "We made it easy, by providing feed for employees to engage, creating poll, post, comment and media with permission based control."
                },
                {
                  icon: FaClock,
                  head: "You're facing challenge in engaging employees in fostering positive workplace ",
                  paragraph: "We made it easy, by providing feed for employees to engage, creating poll, post, comment and media with permission based control."
                },
              ].map((data, index) => {
                const Iconcomponent = data.icon;
                return (
                  <div key={index} className="px-2">
                    <div className="bg-white rounded-xl p-6 shadow-lg min-h-[180px]">
                      <span className='flex justify-self-center bg-[#ddd] p-4 rounded-full mb-4'><Iconcomponent /></span>
                      <h3 className="font-bold text-[#1F2C4C] mb-2">{data.head}</h3>
                      <p className="text-gray-600">{data.paragraph}</p>
                    </div>
                  </div>
                )
              })
              }
            </Slider>
          </div>
        </div>
      </section>
      <section className='p-7 overflow-hidden'>
        <h3 className='text-2xl text-[#1d4076] font-bold text-center'>Employee Data Card</h3>
        <div className='grid lg:grid-cols-2 gap-5 lg:p-8 mt-5'>
          <div className='flex justify-center'>
            <img src="/images/home/MobileApp.webp" alt="http://localhost/humanmaximizer/assets/images/MobileApp.webp" className='h-[80vh]' />
          </div>
          <div className='grid grid-cols-2 gap-5'>
            {[
              {
                head: 'Manages personal & work life together',
                paragraph: "one place for all work and personal life information of your employees."
              },
              {
                head: 'Appreciation & Recognition culture',
                paragraph: "fosters positive work place where employees praise and appreciate each other."
              },
              {
                head: 'Get issues solved quickly',
                paragraph: "Simple and easy support system for quicker issue resolution"
              },
              {
                head: 'Team up across departments',
                paragraph: "Engaging employees to foster positive work environment so they feel valued and appreciated."
              },
              {
                head: 'Approve in one go',
                paragraph: "Authorise managers to approve and reject request from a single window."
              },
              {
                head: 'Complete Dashboards with real-time metrics',
                paragraph: "Comprehensive dashboards tailored to each role (admin, manager, employee)."
              },
            ].map((data, index) => (
              <div className='shadow-[0_0_10px_#ddd] p-4 text-center hover:shadow-[inset_0_0_20px_#ddd] rounded-xl'>
                <h3 className='text-[#1F2C4C] font-semibold text-xl '>{data.head}</h3>
                <p className='text-md mt-5'>{data.paragraph}</p>
              </div>
            ))
            }
          </div>
        </div>
      </section>
      <section className='bg-[url("/images/home/abstract-images.jpg")] bg-cover bg-no-repeat p-5'>

        <div className='flex justify-center flex-col items-center text-center'>
          <h3 className='text-[#1F2C4C] font-bold text-center text-2xl'>Seamless <span className='text-[#39befe]'>Human Side </span> <br /> of HR for your business needs</h3>
          <p className='lg:w-1/2  mt-2'>Evolve your business the smart way by letting Human Maximizer sort out your
            work needs, from managing the workforce to keeping tabs on productivity. Here are our top features</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4 p-5 lg:px-24">
          {cardData.map((data, index) => {
            const IconComponent = data.icon;
            return (
              <div
                key={index}
                className="rounded-xl p-4 w-full h-44 flex flex-col justify-center items-center text-center shadow-sm transition hover:shadow-md"
                style={{
                  backgroundColor: data.color,
                  boxShadow: '0 1px 5px rgba(0, 0, 0, 0.05)',
                }}
              >
                <IconComponent className="text-3xl mb-3 text-[#1d4076]" />
                <h3 className="text-[14px] font-semibold text-[#1d4076] leading-tight">
                  {data.tag}
                </h3>
              </div>
            );
          })}
        </div>


      </section>
      <section>
        <div className="grid lg:grid-cols-2 gap-5 p-5 lg:p-24">
          <div>
            <h2 className='text-[#1F2C4C] text-3xl font-semibold mb-4'>Why Choose <span className='text-[#8cb6f5]'>Human Maximizer?</span></h2>
            {[
              {
                icon: LuNotepadText,
                span: " No Bulky spreadsheets, no complex formulas"
              },
              {
                icon: FaHandPointUp,
                span: "Simple to understand, easy to use"
              },
              {
                icon: FaMoneyCheckDollar,
                span: "Pay as you go, use as you need"
              },
              {
                icon: GrMoney,
                span: "Payroll is simple, easy and enjoyable"
              },
              {
                icon: GiProgression,
                span: " Send less emails, get more productivity"
              },
              {
                icon: GiLightBulb,
                span: " Not just support, you get friends with expertise"
              },
              {
                icon: IoIosLock,
                span: "Safety of your data, and utmost privacy"
              },
            ].map((data, index) => {
              const Iconcomponent = data.icon;
              return (
                <li className='flex items-center gap-4 text-xl mt-5' key={index}><div className="rounded-full shadow-[0_0_15px_#ddd] p-3"><Iconcomponent /></div>{data.span}</li>
              )
            })}
          </div>
          <div className='bg-[#ddd] rounded-xl lg:w-[40vw] shadow-[0_0_20px_#ddd]'>
            <img src="/images/home/why-choose.webp" alt="http://localhost/humanmaximizer/assets/images/why-choose.webp" className='object-fit' />
          </div>
        </div>
      </section>
      <section className='py-4 px-5 lg:px-24'>
        <Form />
      </section>

      <section className='p-5'>
        <div className='text-3xl text-[#1F2C4C] text-center'>Frequently Asked Questions</div>
        <div className='p-5 lg:p-20'>
          <FaqAccordion data={faqData} />
        </div>
      </section>
      <ReachUs />
    </>
  );
}
