import { FaNoteSticky } from "react-icons/fa6"
function Cards({ data }) {
    return (
        <section className='lg:p-16 p-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 justify-center'>
                {data.map((data, index) => (
                    <div className='shadow-[0_0_10px_#ddd] p-5 rounded-2xl hover:bg-[#1c4a961f] hover:scale-110 transition-all duration-200' key={index}>
                        <div className='bg-[#1d40761c] p-3 rounded-full flex justify-self-center'><FaNoteSticky className='text-[#1d4076]' /></div>
                        <h3 className='text-[#1d4076] font-bold text-xl text-center'>{data.tag}</h3>
                        <p className='text-sm text-center'>{data.description}</p>
                    </div>
                ))
                }
            </div>
        </section>
    )
}

export default Cards
