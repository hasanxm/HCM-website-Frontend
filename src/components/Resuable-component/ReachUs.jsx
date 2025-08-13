import { FaLocationCrosshairs, FaFacebookF } from "react-icons/fa6";
import { IoMdMail, IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

function ReachUs() {
    return (
        <section className='px-4 sm:px-10 lg:px-20 py-3 text-white text-center'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#040d19] rounded-2xl p-4">
                <div className='text-center'>
                    <p className='flex justify-center mb-3'>
                        <FaLocationCrosshairs className='text-xl' />
                    </p>
                    <p className='text-sm sm:text-base'>
                        627, F/F, Westend Marg, Saiyad Ul Ajaib Extension, Sainik Farm, New Delhi, Delhi-110030
                    </p>
                </div>

                <div className='text-center'>
                    <p className='flex justify-center mb-3'>
                        <IoMdMail className='text-xl' />
                    </p>
                    <p className='text-sm sm:text-base'>sales@humanmaximizer.com</p>
                </div>

                <div className='flex justify-center items-center gap-4'>
                    <div className='bg-white p-3 text-[#040d19] rounded-full'>
                        <FaFacebookF />
                    </div>
                    <div className='bg-white p-3 text-[#040d19] rounded-full'>
                        <IoLogoInstagram />
                    </div>
                    <div className='bg-white p-3 text-[#040d19] rounded-full'>
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReachUs;
