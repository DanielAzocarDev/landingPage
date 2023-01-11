import ReactLogo from '../../assets/react.svg'
import WordpressLogo from '../../assets/wordpressLogo.svg'

export const Services = () => {
  return (
    <section className='w-full'>
      <div className=' w-11/12 bg-teal-300 rounded-3xl flex flex-col gap-12 px-3 py-12 mx-auto'>
        <div className='md:flex gap-5'>
          <div className='w-1/2 mb-7 mx-auto'>
            <img className='w-full ' src={ReactLogo} alt="" />
          </div>
          <div className='w-1/2'>
            <h2 className=' text-3xl font-black mb-5 tracking-wide'>Desarrollo de aplicaciones basado en React.js.</h2>
            <p className=' text-lg font-light leading-5'> Una de las librerias mas usadas en el medio, con un ecosistema y comunidad enorme que la respaldan. Facil, rapido y ligero, son algunas de las caracteristicas que lo hacen resaltar frente a los demas. Entre las herramientas que uso para complementarlo estan:</p>
            <ul className='flex flex-col gap-3 list-disc pl-8 mt-7'>
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
        <div className=' md:flex flex-row-reverse gap-5'>
          <div className='w-1/2 mb-7 mx-auto'>
            <img className='w-full ' src={WordpressLogo} alt="" />
          </div>
          <div className='w-1/2'>
            <h2 className=' text-3xl font-black mb-5 tracking-wide'>Desarrollo web con WordPress.</h2>
            <p className=' text-lg font-light leading-5'> Una de las librerias mas usadas en el medio, con un ecosistema y comunidad enorme que la respaldan. Facil, rapido y ligero, son algunas de las caracteristicas que lo hacen resaltar frente a los demas. Entre las herramientas que uso para complementarlo estan:</p>
            <ul className='flex flex-col gap-3 list-disc pl-8 mt-7'>
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
