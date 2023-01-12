import ReactLogo from '../../assets/react.svg'
import WordpressLogo from '../../assets/wordpressLogo.svg'

export const Services = () => {
  return (
    <section className='w-full'>
      <div className='relative w-11/12 lg:w-10/12 flex flex-col gap-12 px-3 py-12 mx-auto overflow-hidden'>

        <div className='absolute -top-10 -left-10 w-4/5 h-3/4 md:-top-32 md:-left-32 md:h-2/4 bg-sky-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000'></div>
        <div className='absolute top-0 -right-10 w-2/3 h-1/2 md:-bottom-2 md:-right-24 bg-red-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-6000'></div>


        <div className='absolute bottom-0 -right-10 w-2/3 h-3/4 md:-bottom-32 md:-right-32 md:w-3/4 md:h-2/4 bg-sky-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob'></div>
        <div className='absolute -bottom-10  -left-10 w-3/4 h-1/2 bg-teal-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000'></div>
        <div className='relative md:flex gap-5'>
          <div className='w-1/2 mb-7 mx-auto'>
            <img className='w-full lg:w-3/4 mx-auto' src={ReactLogo} alt="" />
          </div>
          <div className='md:w-1/2'>
            <h2 className=' text-3xl font-black mb-5 tracking-wide'>Desarrollo de aplicaciones basado en React.js.</h2>
            <p className=' text-lg font-light leading-5'> Una de las librerias mas usadas en el medio, con un ecosistema y comunidad enorme que la respaldan. Facil, rapido y ligero, son algunas de las caracteristicas que lo hacen resaltar frente a los demas. Entre las herramientas que uso para complementarlo estan:</p>
            <ul className='flex flex-col gap-3 list-disc text-lg font-light leading-5 pl-8 mt-7'>
              <li>Next.js</li>
              <li>React Native</li>
              <li>Redux/Redux Toolkit</li>
              <li>React Router</li>
              <li>TailwindCSS</li>
              <li>Firebase</li>
              <li>Chakra UI</li>
              <li>Sass</li>

            </ul>
          </div>
        </div>
        <div className='relative md:flex flex-row-reverse gap-5'>
          <div className='w-1/2 mb-7 mx-auto'>
            <img className='w-full lg:w-3/4 mx-auto' src={WordpressLogo} alt="" />
          </div>
          <div className='md:w-1/2'>
            <h2 className=' text-3xl font-black mb-5 tracking-wide'>Desarrollo web con WordPress.</h2>
            <p className=' text-lg font-light leading-5'> Una de las librerias mas usadas en el medio, con un ecosistema y comunidad enorme que la respaldan. Facil, rapido y ligero, son algunas de las caracteristicas que lo hacen resaltar frente a los demas. Entre las herramientas que uso para complementarlo estan:</p>
            <ul className='flex flex-col gap-3 list-disc text-lg font-light leading-5 pl-8 mt-7'>
              <li>Plantillas personalizadas</li>
              <li>Elementor</li>
              <li>Landing Pages</li>
              <li>Blogs</li>
              <li>WooCommerce</li>
              <li>Seo</li>
              <li>MailChimp</li>
              <li>Mantenimiento de Sitios/Ecommerce</li>

            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
