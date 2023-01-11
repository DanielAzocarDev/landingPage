import Avatar from '../../assets/Avatar.png'

export const Navbar = () => {
  return (
    <nav className="w-full h-16 shadow-lg">
      <div className=" w-11/12 h-full lg:w-10/12 flex justify-between items-center mx-auto">
        <div className='flex items-center gap-2'>
          <div className=' w-6'>
            <img src={Avatar} alt="" />
          </div>
          <h2 className=' text-xl font-black'>Daniel</h2>
        </div>

        <button className=" font-bold h-11 px-8 rounded-md border-2 border-teal-400 hover:border-none hover:bg-teal-400 hover:text-white">Let's talk</button>
      </div>
    </nav>
  )
}
