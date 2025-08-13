import { FaUser, FaPhoneVolume, FaBuilding, FaEnvelope, FaComment } from "react-icons/fa";
import ReachUs from "./Resuable-component/ReachUs";

function ContectUs() {
    return (
        <>
            <section className='bg-[#1d4076] text-white '>
                <h3 className='text-4xl text-center p-3 font-bold'>Contact Us</h3>
                <p className='text-center text-lg'>Have any questions about our product? We’re here to help.</p>
                <img src="/images/newbg.png" alt="partition" className="w-full mt-4" />
            </section>
            <section className='p-3'>
                <h2 className='text-3xl font-bold text-[#1d4076] text-center m-4'>GET In Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className='p-2'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7011.4838722852555!2d77.198138!3d28.517411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1224e2234dd%3A0x7790e7d5f1699ce4!2sRazor%20Infotech%20Pvt.%20Ltd.%20(%20IT%20solutions)!5e0!3m2!1sen!2sin!4v1751278629789!5m2!1sen!2sin"
                            width="100%" height="450" allowFullScreen="" loading="lazy" reFerrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='p-2'>
                        <div className="bg-[#f4f7fa] p-8 rounded-2xl max-w-3xl mx-auto">
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative">
                                    <label className="block text-sm font-bold text-[#1F2C4C] absolute -top-3 left-3 bg-[#f4f7fa]">
                                        <FaUser className="inline mr-1" /> Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Name"
                                        className="w-full border border-[#9ad2f6] rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1d4076]"
                                    />
                                </div>

                                <div className="relative">
                                    <label className="block text-sm font-bold text-[#1F2C4C] absolute -top-3 left-3 bg-[#f4f7fa]">
                                        <FaPhoneVolume className="inline mr-1" /> Contact No.
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="Enter Your Phone Number"
                                        className="w-full border border-[#9ad2f6] rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1d4076]"
                                    />
                                </div>

                                <div className="relative">
                                    <label className="block text-sm font-bold text-[#1F2C4C] absolute -top-3 left-3 bg-[#f4f7fa]">
                                        <FaBuilding className="inline mr-1" /> Company Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Company Name"
                                        className="w-full border border-[#9ad2f6] rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1d4076]"
                                    />
                                </div>

                                <div className="relative">
                                    <label className="block text-sm font-bold text-[#1F2C4C] absolute -top-3 left-3 bg-[#f4f7fa]">
                                        <FaEnvelope className="inline mr-1" /> Work Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email Address"
                                        className="w-full border border-[#9ad2f6] rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1d4076]"
                                    />
                                </div>

                                <div className="col-span-1 md:col-span-2 relative">
                                    <label className="block text-sm font-bold text-[#1F2C4C] absolute -top-2 left-3 bg-[#f4f7fa]">
                                        <FaComment className="inline mr-1" /> Message
                                    </label>
                                    <textarea
                                        placeholder="Any Message"
                                        rows="4"
                                        className="w-full border border-[#9ad2f6] rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1d4076]"
                                    ></textarea>
                                </div>

                                <div className="col-span-1 md:col-span-2 text-center mt-4">
                                    <button
                                        type="submit"
                                        className="bg-[#1d4076] text-white font-bold py-2 px-8 rounded-md hover:bg-[#17365d] transition"
                                    >
                                        SUBMIT
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-5">
                <ReachUs />
            </section>
        </>
    )
}

export default ContectUs;
