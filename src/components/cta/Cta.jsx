import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

export const Cta = () => {
  return (
    <section className="w-full">
      <div className="w-11/12 lg:w-10/12 md:h-96 md:flex items-center gap-5 px-3 py-12 mx-auto">
        <div className="md:w-1/2">
          <h2 className="md:w-3/4 text-3xl lg:text-5xl font-black mb-5 tracking-wide">Puedes contactarme por:</h2>
        </div>

        <div className="w-1/2 flex flex-col gap-3">
          <a href="https://www.linkedin.com/in/danielazocardev/" target='_blank' className="flex items-center gap-3">
            <BsLinkedin className=" text-teal-400 text-2xl" />
            <p className=" text-lg font-bold leading-5">LinkedIn</p>
          </a>
          <a href="https://www.instagram.com/daniel.azocar.v/" target='_blank' className="flex items-center gap-3">
            <BsInstagram className=" text-teal-400 text-2xl" />
            <p className=" text-lg font-bold leading-5">Instagram</p>
          </a>
          <a href="mailto:danielazocardev@gmail.com" className="flex items-center gap-3">
            <MdAlternateEmail className=" text-teal-400 text-2xl" />
            <p className=" text-lg font-bold leading-5">Danielazocardev@gmail.com</p>
          </a>
        </div>
      </div>
    </section>
  )
}
