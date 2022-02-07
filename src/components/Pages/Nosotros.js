import React from 'react';
import '../Pages/Nosotros.css'

const  Nosotros  = () =>{ 
    return(
        <div className="cont">
            <h1 className="title">Nosotros</h1>
            <img className="imgWe" src="https://i.imgur.com/AzdJqif.jpeg"></img>
            <div className="body">
            Establecida en Uruguay desde 2008, nuestra empresa es líder en el desarrollo e integración de tecnología.

            Apuntando no sólo a la venta de artículos informáticos, sino también a la atención personalizada y asesoramiento adaptado a cada necesidad.
            Nuestro equipo, está capacitado para brindarle la mejor atención y soluciones rápidas y efectivas a sus inconvenientes. Siempre en busca de mejorar nuestros procesos de trabajo para garantizar la calidad de nuestros productos y servicios.

            Logrando cubrir los requerimientos de grandes, medianos y pequeños clientes acorde a las exigencias del mercado y el ritmo de los cambios tecnológicos.

            Nuestro objetivo es ofrecerle una solución diferente, lo invitamos a descubrirla.
            </div>
        </div>
    )
}

export default Nosotros;