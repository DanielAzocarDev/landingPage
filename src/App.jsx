import { Cta } from "./components/cta/Cta";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { ProjectContainer } from "./components/projectContainer/ProjectContainer";
import { GooglePlayButton } from "react-mobile-app-button";
import NursiMockup from "./assets/promo_nursi.png";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <BannerExperience /> */}
      {/* <Services /> */}
      <ProjectContainer>
        <div className="relative md:flex gap-5">
          <div className="w-1/2 mb-7 mx-auto">
            <img className="w-full lg:w-3/4 mx-auto" src={NursiMockup} alt="" />
          </div>
          <div className="md:w-1/2">
            <h2 className=" text-3xl font-black mb-5 tracking-wide">
              Nursi: Tu enfermera digital de confianza 🏥📱
            </h2>
            <p className=" text-lg font-light leading-5">
              {" "}
              Nursi es tu asistente personal de salud, diseñado para hacer tu
              vida más fácil y tus tratamientos más efectivos. Con una interfaz
              súper amigable, esta app te ayuda a:
            </p>
            <ul className="flex flex-col gap-3 list-disc text-lg font-light leading-5 pl-8 my-7">
              <li>📅 Llevar un registro cronológico de tus tratamientos</li>
              <li>🔔 Recibir notificaciones para nunca olvidar una dosis</li>
              <li>
                🕒 Tener siempre presente cuándo tomaste tu última medicina
              </li>
              <li>
                🏁 Saber exactamente cuántos días faltan para terminar tu
                tratamiento
              </li>
            </ul>
            <div className="flex justify-center md:justify-start">
              <GooglePlayButton
                url={
                  "https://play.google.com/store/apps/details?id=com.danielazocar.dev.nursimvp"
                }
                theme={"dark"}
                title="Descargar"
                gap={5}
                className={"custom-style"}
              />
            </div>
          </div>
        </div>
      </ProjectContainer>
      <Cta />
      <Footer />
    </>
  );
};

export default App;
