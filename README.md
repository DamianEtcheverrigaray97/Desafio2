# SIMPLEPC, Importador y distribuidor de hardware en Uruguay , React JS

Este proyecto fue realizado para el curso de React JS, dictado por CoderHouse.

# FUNCIONALIDADES 

- Se obtienen los datos de la FireStore, servicio brindado por Google.
- Utilizamos el sistema de componentes, para dividir responsabilidades entre si.
- La comunicacion con el usuario se da a traves de TOAST de React. Para esto importamos los siguiente:
    - { ToastContainer, toast } from 'react-toastify';
    - 'react-toastify/dist/ReactToastify.css';
- Los productos se pueden visualizar a traves de un catalogo en general, o bien, verlos por categorias.
- El stock de productos se chequea antes de sumarlo al carrito, para evitar errores de falta de stock, a futuro trabajara con stock a tiempo real.
- Se detalla el precio total de los elementos que se encuentran en el carrito, también existe el botón "Vaciar Carrito" para eliminar todos los elementos del carrito y dejarlo vacio.
- Al finalizar la compra, se genera un ticket de compra el cual es registrado en FireBase, el cual en un futuro, el cliente podra buscarlo y visualizar en que proceso esta su pedido, o tambien al momento de realizar la compra el ticket puede llegar al correo electronico ingresado.

# HERRAMIENTAS UTILIZADAS 
- `HTML`
- `CSS`
- `JAVASCRIPT`
- `REACT JS`
- `FIREBASE`
- `REACT DOM`
- `TOAST de React`

# DEMOSTRACION

- Pagina Principal (Home):
Se observan las Cards con los Productos disponibles, las cuales tienen la siguiente información:
    - Nombre del Producto
    - Precio en dolares
    - Stock
    - Botón para ir al detalle del producto

    <img src="./src/gift/Home.gif" />


- Filtrado por Categorias:
En el navbar se detallan las categorias, donde al clickear se filtra los productos.

    <img src="./src/gift/Filtrado-por-Categorias.gif" />

- Detalle del Producto, Agregar al Carrito (y control de stock), Mensaje de Aviso al agregar producto al carrito, Eliminar producto del Carrito, Datos recibidos en FireBase de las Ventas.
    <img src="./src/gift/Detalle-de-Producto_-Compra-de-Producto_-Registro-en-FireBase-de-la-compra.gif" />

- Limpiar Carrito de Compras:
    <img src="./src/gift/vaciar-carrito.gif" />

- Paginas Complementarias: Nosotros y Cambios y Garantias.
    <img src="./src/gift/Paginas-complementarias-_Nosotros-y-Garantias_.gif" />




Excelente curso, muy contento con el resultado y con las enseñanzas adqueridas. También algo para destacar son las excelentes clases del Profesor Horacio Gutierrez y la excelente asistencia de Pato (Patricio Pallua), mi tutor, un crack.

Damián Etcheverrigaray
