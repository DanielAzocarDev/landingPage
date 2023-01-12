import Avatar from '../../assets/Avatar.png'

export const Footer = () => {
  return (
    <footer className="w-full h-72 relative flex justify-center items-center overflow-hidden">
      <div className='absolute -top-10 -left-10 w-4/5 h-3/4 md:-top-32 md:-left-32 md:h-2/4 bg-sky-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000'></div>
      <div className='absolute top-0 -right-10 w-2/3 h-1/2 md:-bottom-2 md:-right-24 bg-red-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-6000'></div>


      <div className='absolute bottom-0 -right-10 w-2/3 h-3/4 md:-bottom-32 md:-right-32 md:w-3/4 md:h-2/4 bg-sky-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob'></div>
      <div className='relative w-11/12 lg:w-10/12 md:h-96 md:flex justify-center gap-5 mx-auto'>
        <div className='flex flex-col md:flex-row items-center gap-3'>
          <p className=' text-lg font-light leading-5'>Hecha y diseñada por:</p>
          <a href='https://www.linkedin.com/in/danielazocardev/' target='_blank' className='md:flex items-center'>
            <div className=' w-14 mx-auto'>
              <img src={Avatar} alt="" />
            </div>
            <h2 className=' text-xl font-black'>Daniel Azócar</h2>
          </a>
        </div>
      </div>
    </footer>
  )
}
