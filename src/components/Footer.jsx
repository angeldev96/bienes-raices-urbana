import React from "react";

import { FiTwitter, FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram, AiOutlineYoutube, AiFillGithub } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className="mt-20">
      <div className="download w-full  py-16 rounded-xl">
        <div className="flex flex-col justify-center items-center space-y-5">


        </div>
      </div>
      <footer className="w-full py-10 bg-neutral-800 text-white">
        <div className="w-11/12 md:w-1/3 m-auto flex flex-col items-center text-center space-y-5">
          <h1 className="text-2xl font-bold">Bienes Raices Urbana</h1>
          <ul className="flex items-cener space-x-5 text-sm">
            <li>Características</li>
            <li>Tendencias</li>
            <li>Acerca de</li>
          </ul>
          <div className="icons flex items-center space-x-4">
            <AiOutlineInstagram size={"2rem"} />
            <AiOutlineYoutube size={"2rem"} />
            <FiFacebook size={"2rem"} />
            <FiTwitter size={"1.5rem"} />

          </div>
          <p className="text-sm text-gray-400">Copyright © 2024 Bienes Raices Urbana, Todos los Derechos Reservados</p>
          <p className="text-sm text-gray-400 p-1">Aplicacion Web Hecha por Angel Valladares</p>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
