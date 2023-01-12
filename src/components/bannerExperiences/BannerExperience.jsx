
export const BannerExperience = () => {
  return (
    <section className="w-full px-3">
      <div className="lg:w-10/12 px-3 py-12 lg:flex items-center lg:mx-auto">
        <h2 className=" w-4/5 text-3xl font-black mb-5 tracking-wide">Los numeros hablan solos</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div >
            <span className=" text-8xl font-black text-teal-500 mb-6">+2</span>
            <p className=" text-lg font-light leading-5">Años de experiencia con React</p>
          </div>
          <div >
            <span className=" text-8xl font-black text-teal-500 mb-6">+10</span>
            <p className=" text-lg font-light leading-5">Proyectos realizados en mi trayectoria</p>
          </div>
          <div >
            <span className=" text-8xl font-black text-teal-500 mb-6">+30</span>
            <p className=" text-lg font-light leading-5">repositorios en github</p>
          </div>
        </div>

      </div>
    </section>
  )
}
