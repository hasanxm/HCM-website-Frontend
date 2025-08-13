import '../../assets/css/Form.css';

function Form() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-[radial-gradient(at_25%_25%,white_0%,#19a8fd_75%)] rounded-3xl">
      <div className="p-6 flex flex-col">
        <h2 className="text-[#1d4076] text-2xl sm:text-3xl font-bold leading-snug">
          Create a more productive and organised workforce with Human Maximizer.
        </h2>
        <button className="border w-56 border-[#1d4076] text-[#1d4076] bg-transparent rounded-xl px-6 py-2 mt-6 hover:bg-[#1d4076] hover:text-white transition">
          Request a Free Trial
        </button>
      </div>

      <div>
        <form className="bg-white rounded-2xl overflow-hidden shadow-md">
          <div className="bg-[#b7e3fd] p-5">
            <h3 className="text-center font-bold text-2xl sm:text-3xl text-[#1d4076]">Start Your HCM Free Trial</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
            <FloatingInput label="Company Name" placeholder="Enter Your Company Name" />
            <FloatingInput label="Work Email" placeholder="Enter Your Email Address" />
            <FloatingInput label="First Name" placeholder="Enter Your First Name" />
            <FloatingInput label="Last Name" placeholder="Enter Your Last Name" />
            <div className="sm:col-span-2">
              <FloatingInput label="Contact No." placeholder="Enter Your Phone Number" />
            </div>
            <FloatingInput label="Country Name" placeholder="Enter Your Country Name" />
            <FloatingInput label="No. of Employees" placeholder="Enter number of Employees" />
          </div>
          <div className="flex justify-center mb-6">
            <button
              type="submit"
              className="bg-[#1d4076] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#17365d] transition"
            >
              Start Free Trial
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const FloatingInput = ({ label, placeholder }) => (
  <div className="relative">
    <label className="absolute -top-2 left-3 text-sm font-semibold text-[#1d4076] bg-white px-1 z-10">
      {label}
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border border-[#b3d9f9] rounded-xl px-4 py-2 pt-5 focus:outline-none focus:ring-2 focus:ring-[#1d4076]"
    />
  </div>
);

export default Form;
