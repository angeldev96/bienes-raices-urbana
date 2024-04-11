import React from "react";
import { MdHomeRepairService } from "react-icons/md";
const AboutUs = () => {
  return (
    <div className="w-11/12 m-auto flex flex-col md:flex-row justify-between items-center md:space-x-10 space-y-10 md:space-y-0 py-10">
      <div className="flex md:space-x-10 space-x-4">
        <div className="mt-10 space-y-4 ">
          <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-xl font-bold">Servicios de Calidad</h1>
            <p className="text-xs">
              Ofrecemos servicios de alta calidad para satisfacer tus necesidades inmobiliarias. Nuestro equipo está comprometido con brindar la mejor experiencia a nuestros clientes.
            </p>
          </div>
          <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-xl font-bold">Encuentra la Casa de tus Sueños</h1>
            <p className="text-xs">
              Te ayudamos a encontrar la casa ideal que se ajuste a tus gustos y necesidades. Nuestro objetivo es hacer realidad el sueño de tener un hogar perfecto para ti.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-xl font-bold">Vende tu Casa Fácilmente</h1>
            <p className="text-xs">
              Simplificamos el proceso de venta de tu casa para que puedas obtener el mejor valor en el mercado. Confía en nosotros para una transacción exitosa.
            </p>
          </div>
          <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-xl font-bold">Servicios de Calidad</h1>
            <p className="text-xs">
              Nos esforzamos por ofrecer servicios excepcionales que se ajusten a tus necesidades inmobiliarias. Tu satisfacción es nuestra prioridad.
            </p>
          </div>
        </div>
      </div>
      <div className="w-11/12 md:w-1/2 space-y-5">
        <h1 className="text-6xl font-bold">
          Conoce <span className="text-yellow-400">Quiénes Somos</span>{" "}
        </h1>
        <p className="text-sm text-gray-400">
          Somos un equipo dedicado a hacer que tus sueños inmobiliarios se hagan realidad. Nuestra misión es proporcionarte un servicio excepcional y guiarte en cada paso del proceso. ¡Confía en nosotros para encontrar tu hogar perfecto!
        </p>
        <button className="px-5 py-2 rounded-md bg-yellow-400">
          Leer más
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
