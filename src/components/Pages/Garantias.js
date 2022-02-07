import React from 'react';
import '../Pages/Garantias.css'

const  Garantias  = () =>{ 
    return(
        <div className="cont">
            <h1 className="title">Cambios y Garantias</h1>
            <div className="body">
            <h3 className='warrantyProblems'><b>Tengo problemas con algo que compré, me cubre la garantía?</b></h3>
            <ol>
                <li>Todos los equipos armados cuentan con 1 año de garantía. Quedan excluidos de garantía las  fuentes, teclados, mouse y parlantes del los gabinetes genéricos.</li>
                <li>La garantía cubre defectos de fabricación en los componentes del hardware integrante del equipo original únicamente, no incluye problemas por incompatibilidades con otro hardware instalado posteriormente a la compra por parte del cliente.</li>
                <li>En todo caso, toda la mercadería deberá ser devuelta con sus manuales, cajas, drivers completos y en buen estado.</li>
                <li>Mercadería sin sello de garantía, número serial correcto, o etiqueta de garantía legible queda excluida de garantía</li>
                <li>En caso de que el sello de garantía este violado o maltratado se perderá la garantía en forma inmediata.</li>
                <li>No se aceptará mercadería golpeada, dañada, rayada o con integrados quemados, así como también toda mercadería que fuese modificada de su presentación de fábrica original (cables.enchufes, conectores, etc) o que se encuentren en condiciones sanitarias aceptables, quedarán automáticamente sin garantía.</li>
                <li>Todos los productos serán inspeccionados por nuestra empresa y los mismos pueden ser rechazados en el momento de su entrega, en caso de no cumplir con los requerimientos que los fabricantes exijan.</li>
                <li>La garantía no cubre defectos causado por picos y bajas de tensión o mala instalación eléctrica.</li>
                <li>Todos los equipos que ingresen para reparar por problemas de software tendrán un costo mínimo de U$ 20 (veinte dólares americanos), entendiéndose por problemas de software a todos aquellos problemas ocasionados por fallas en el sistema operativo, ya sea por el sistema operativo en sí o por falta de alguno de sus componentes, como por ejemplo drivers sin instalar, o que éstos estén instalados de forma inadecuada. </li>
                <li>Los equipos que ingresen para su reparación y que hayan sido comprados con "GARANTIA DE ARMADO", no tendrán costo de reparación, siempre y cuando la falla que presenten sea debida a problemas con el hardware original instalado.</li>
                <li>Entendiéndose por problemas de hardware, a todas aquellas fallas que sean ocasionadas por componentes defectuosos.</li>
                <li>La función de la "GARANTIA DE ARMADO", es la de asegurar a nuestros clientes el correcto funcionamiento del hardware del equipo, debido a lo cual si el equipo ingresa para su reparación por problemas se software se le aplicará el punto anterior.</li>
                <li>Los equipos que ingresen para su reparación, que no hayan sido comprados con "GARANTIA DE ARMADO", tendrán un costo mínimo de U$ 20 (veinte dólares americanos) así sea un problema de software o de hardware.</li>
                <li>Departamento Técnico no se responsabiliza por la información que pueda contener almacenada el equipo cuando ingresa para su reparación, entendiendo que es responsabilidad del cliente tener un respaldo de dicha información. De todas formas en caso de que la reparación pueda implicar que se pierda dicha información, no se procederá a efectuar la reparación hasta tanto no se haya informado al cliente de dicha situación.</li>
                <li>Los presupuestos por reparaciones que no excedan los U$ 30 (treinta dólares americanos) serán tomadas como aceptadas, procediéndose a la reparación del equipo. Caso contrario se informará al cliente por vía telefónica o electrónica. el monto total de la reparación.</li>
                <li>Todo transformador, cables, cartuchos, vidrios templados y fuentes de poder no cuentan con garantía.</li>
                <li>Los productos vendidos por partes cuentan con 1 año de garantía (excluyendo los del punto 16).</li>
                <li>Los cambios de producto por garantía siempre serán por un producto igual o de similares prestaciones, en el caso que no se contara con el mismo la empresa se reserva el derecho a realizar la nota de crédito correspondiente si así lo considera. La empresa no realiza devolución de dinero bajo ningún concepto.</li>
                <li>La empresa se reserva el derecho de decisión en cualquier caso que no esté incluido en los numerales anteriores.</li>
            </ol>

            <h3 className='changePolitics'><b>Políticas de cambios:</b></h3>
            Los cambios de productos se realizan únicamente dentro de los primeros 5 (cinco) días de efectuada la compra sin excepción, la misma no deberá haber sido abierta y tendrá que encontrarse con el packing en las mismas condiciones que fue entregado.
            Queda automáticamente imposibilitado de cambio si el producto presentara algunos de los puntos mencionados anteriormente. 

            <h3 className='billing'><b>Facturación:</b></h3>
            Podrá brindarnos los datos de facturación al momento de su compra, luego no habrá opción a cambios en las mismas.

            <h3 className='moneySign'><b>Señas:</b></h3>
            Las señas realizadas para la adquisición de productos por encargue ya sea de componentes o equipos no tienen devolución bajo ningún concepto.
            </div>
        </div>
    )
}

export default Garantias;