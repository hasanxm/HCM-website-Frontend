import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

function Login() {
    return (
        <>
            <section className="grid grid-cols-1 sm:grid-cols-2 p-8 sm:p-16 bg-[#39bef41a] gap-8">
                <div className="flex flex-col items-start">
                    <p className="text-2xl sm:text-3xl font-bold">Sign In</p>
                    <span className="text-sm mb-3">to access people</span>
                    <div className="bg-white p-6 sm:p-8 flex flex-col gap-3 mt-4 w-full max-w-md">
                        <input
                            type="text"
                            className="border w-full p-3 rounded-xl"
                            placeholder="Email Address or Mobile Number"
                        />
                        <button className="bg-[#1d4076] p-3 w-full rounded-xl text-white">NEXT</button>
                        <p className="mt-4 text-lg">sign in using</p>
                        <div className="flex gap-3">
                            <span><a href=""><FaFacebook className="text-[#1d4076] text-2xl" /></a></span>
                            <span><a href=""><FaInstagramSquare className="text-[#1d4076] text-2xl" /></a></span>
                            <span><a href=""><FaLinkedin className="text-[#1d4076] text-2xl" /></a></span>
                        </div>
                        <p>Don't have a Human Maximizer account? <a href="#" className="text-[#1d4076] font-bold"> Sign up now</a></p>
                    </div>
                </div>

                <div className="p-4 sm:p-0 text-center">
                    <img
                        src="/images/login.webp"
                        alt="login-image"
                        className="h-[35vw] sm:h-auto max-w-full mx-auto"
                    />
                    <p className="font-semibold mt-4 sm:mt-6">MFA for all accounts</p>
                    <p className="text-sm sm:text-base">Secure online accounts with OneAuth 2FA. Back up OTP secrets and never lose access to your accounts.</p>
                </div>

            </section>
        </>
    );
}

export default Login;
