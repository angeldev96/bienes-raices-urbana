import image from "../assets/image6.jpg";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="">
      <nav className="flex justify-between items-center py-5">
        <h1 className="text-xl md:text-2xl font-bold">Bienes Raíces Urbana</h1>
        <ul className="flex items-center space-x-5 text-xs md:text-base">
          <li><a href="/contacto" className="hover:underline">Caracteristicas</a></li>
          <li><a href="/contacto" className="hover:underline">Tendencias</a></li>
          <li><a href="/contacto" className="hover:underline">Contacto</a></li>
        </ul>
        <div className="flex space-x-4">
          <Link to="/login">
            <button className="bg-white border border-cyan-900 px-5 py-2 rounded-xl text-xs md:text-base text-cyan-900 hover:bg-gray-200">Iniciar sesión</button>
          </Link>         
            <button className="bg-cyan-900 px-5 py-2 rounded-xl text-xs md:text-base text-gray-300 hover:bg-cyan-700">Registrarse</button>
        </div>
      </nav>
      <div className="h-[500px] relative">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-md relative"
        />

        <div className="absolute bottom-5 w-full">
          <div className=" bg-white w-11/12 xl:w-4/5 m-auto grid grid-cols-2 lg:flex justify-between items-center p-5 drop-shadow-2xl md:space-x-5 md:rounded-md">
            <div className=" flex flex-col space-y-2 ">
              <label htmlFor="location">Ubicación</label>
              <input type="text" placeholder="Honduras" className="outline-0 text-xs" />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="property">Tipo de propiedad</label>
              <input type="text" placeholder="Terrenos" className="outline-0 text-xs" />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="price">Precio máximo</label>
              <input type="text" placeholder="HNL" className="outline-0 text-xs" />
            </div>
            <div>
              <button className="bg-cyan-900 px-5 py-2 mt-5 md:mt-0 md:rounded-full text-gray-300">Buscar</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Hero;
