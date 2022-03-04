/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import '../assets/styles/mainprofile.css'

const MainProfile = () => {
  return (
      
    <div >
        <div className="circle"></div>
        <section className="container-mainprofile">
            <div className="mainprofile-cardmap">
                <div className="separador">
                <div className="map-local">
	                <div className="google-map-code">
	                    <iframe className="ifraMap"
	                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin">
	                    </iframe>
	                </div>
                </div>
                <div className="map-perfil">
                    <div className="container-list">
                    <ul>
                    <p>🌻 Alquiler de Huerto con Merendero</p>
                        <ul className="dentro">
                            <li>🌱 por dia 40$</li>
                            <li>🌱 por mes 150$</li>
                        </ul>
                    <p>🌻 Visitas guiadas: 5$/person</p>
                        <ul className="dentro">
                            <li>🌱 1h visita</li>
                            <li>🌱 actividad con niños</li>
                            <li>🌱 cesta regalo</li>
                        </ul>
                    <p>🌻 El 1er domingo de cada mes</p>
                        <ul className="dentro">
                            <li>🌱 Market place</li>
                            <li>🌱 mercado ecológico</li>
                            <li>🌱 talleres free para todas las edades</li>
                        </ul>
                </ul>
                    </div>

                </div>
                </div>
            </div>
            <div className='mainprofile_cardperfil'>

            </div>
        </section>

    </div>
  )
}

export default MainProfile