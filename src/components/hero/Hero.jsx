
import me from '../../assets/me-1.png'
export const Hero = () => {
  return (
    <section className=" w-full">
      <div className="w-full lg:w-10/12 flex flex-col-reverse md:flex-row md:h-[70vh] mx-auto px-3 py-12">
        <div className="flex flex-col gap-3 lg:gap-8 md:w-1/2 md:justify-end ">
          <h1 className=" text-4xl font-black">Lorem ipsum dolor sit amet consectetur</h1>
          <p className=" text-lg font-light leading-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex magni, nulla iure culpa saepe eligendi ratione tempora similique modi consequuntur quos vero enim, qui natus, nam dolorum! Labore, iure?</p>
          <div className='flex flex-col gap-4 md:flex-row'>
            <button className=" w-full bg-teal-400 hover:bg-transparent text-white hover:text-black font-bold h-14 rounded-md hover:border-2 hover:border-teal-400">Get my CV</button>
            <button className=" w-full font-bold h-14 rounded-md border-2 border-teal-400 hover:border-none hover:bg-teal-400 hover:text-white">Let's talk</button>
          </div>
        </div>
        <div className=' flex justify-center md:h-full md:w-1/2'>
          <img className='h-full' src={me} alt="" />
        </div>
      </div>
    </section>
  )
}
