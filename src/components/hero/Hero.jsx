
import me from '../../assets/me-1.png'
export const Hero = () => {
  return (
    <section className=" w-full">
      <div className="w-full lg:w-10/12 flex flex-col-reverse md:flex-row md:h-[70vh] mx-auto px-3 py-12">
        <div className="flex flex-col gap-3 lg:gap-8 md:w-1/2 md:justify-end ">
          <h1 className=" text-5xl font-black tracking-wide">Hola, soy Daniel. Desarrollador frontend</h1>
          <p className=" text-lg font-light leading-5">Listo para ayudarte a resolver todas las dudas que tengas sobre la web!</p>
          <div className='flex flex-col gap-4 md:flex-row'>
            <button className=" w-full bg-teal-400 hover:bg-transparent text-white hover:text-black font-bold h-14 rounded-md hover:border-2 hover:border-teal-400">Get my CV</button>
            <a href="mailto:danielazocardev@gmail.com" className=" w-full flex justify-center items-center font-bold h-14 rounded-md border-2 border-teal-400 hover:border-none hover:bg-teal-400 hover:text-white">Let's talk</a>
          </div>
        </div>
        <div className='relative flex justify-center md:h-full md:w-1/2 overflow-hidden'>
          <div style={{
            borderRadius: "23% 77% 70% 30% / 66% 45% 55% 34% "
          }} className='absolute hidden md:block bottom-1 right-0 w-56 h-80 md:w-44 md:h-64 md:left-20 lg:w-64 lg:h-80 bg-teal-400 rotate-45'>

          </div>
          <img className='h-full relative' src={me} alt="" />
        </div>
      </div>
    </section>
  )
}
