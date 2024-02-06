import panel from '/src/assets/image/Panel.png'
import { useNavigate } from 'react-router-dom'

export const PagSustentabilidad = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white py-9 px-2 ">
      <div className='w-full h-[80px]  bg-transparent '></div>
    <div className="max-w-[1240px] max-h-[320px] md:max-h-[300px] lg:max-h-[480px] lg:max-w-[1150px] mx-auto grid lg:grid-cols-2">
      <div className=" flex flex-col justify-center px-5  lg:justify-start">
          <h1 className="font-monts  text-ontu uppercase  text-[26px] lg:text-[36px]">Sustentabilidad</h1>
        {/* <hr className="w-[350px] h-[2px] bg-ontu"/> */}
        <h2 className="lg:text-[42px] font-monts font-semibold md:text-4x1 text-[28px] leading-none py-2 mb-5">
          Energía limpia para tu hogar o negocio
        </h2>
        <p className="text-[18px] mb-10 font-monts lg:mr-5">
          Conoce los beneficios de el uso de paneles solares en tu hogar o
          negocio, además entérate de cuánto podrías estar ahorrando con el
          uso de energía limpia.
        </p>
        <button onClick={()=>navigate('/Estudio')} className="bg-veryGreen w-[220px] h-[48px] font-monts uppercase mx-auto mb-4 md:mx-0 text-white hover:bg-veryDarkBlue rounded-full active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all ">
          CALCULAR AHORRO
        </button>
      </div>
      <div className="p-4 lg:w-auto invisible lg:visible  ">
      <img className="lg:w-[290px] lg:h-[400px] lg:object-none lg:mx-auto " src={panel} alt="Panel Solar" />
      </div>
    </div>
  </div>
  )
}
