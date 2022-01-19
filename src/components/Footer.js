const Footer = props => {
    return(
        <footer>
            <div class="container_footer">
                <div class="box_footer">
                    <div class="logo">
                    {/* <img src="../img/logo1.png" alt="Logo"> */}
                    </div>
                    <div class="terms">
                    <p>Juan Paullier 2378 entre Amézaga y Domingo Aramburú
                        2209 1840 - 2200 2610 - 2201 2250 - 2209 8616
                        Lunes a Viernes 9:30 a 13 y 14 a 19 hrs. Sábados 9 a 13hrs.</p>
                    </div>
                </div>

                <div class="box_footer">
                    <h2>Soluciones</h2>
                    <a href="#">CAMBIOS Y GARANTÍAS</a>
                    <a href="#">NOSOTROS</a>
                    <a href="#">CENTRO DE AYUDA</a>
                    <a href="#"> TÉRMINOS Y CONDICIONES</a>
                </div>

                <div class="box_footer">
                    <h2>Redes Sociales</h2>
                    <a href="#"> <i class="fab fa-facebook-square"></i></a>
                    <a href="#"> <i class="fab fa-instagram-square"></i></a>
                </div>

                </div>
                <div class="box_copyrigth">
                <p>©2021 TODOS LOS DERECHOS RESERVADOS.</p>
                <b className="name_footer">Damián Etcheverrigaray</b>
            
            </div>
            
        </footer> 
    );
}

export default Footer;

