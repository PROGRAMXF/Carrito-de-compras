
const contenedorImagenes = document.getElementById('contenedor-img');
const selectorArticulos = document.getElementById('selec-art');

window.addEventListener('load', listSelect);
//listSelect me mapea todo el array de articulos y para ello creamos una función:

//vamos a crear la funcion de renderizar
//listSelect se encarga de listar los elementos en windows
selectorArticulos.addEventListener('change', renderCards);

function renderCards(){
    //ejercicio de validacion:
    herramientas.map(herr =>{ herr.articulo === selectorArticulos.value ? crearTarjetas(herr): null});
}

function listSelect(){
    herramientas.map(herr =>{
        //creamos una etiqueta opción que la referenciamos en el index "Elejir una opcion"
        const option = document.createElement('option');

        // a esta etiqueta le asignamos dos valores:
        option.value = herr.articulo; // me trae cada producto
        option.textContent = herr.articulo; // me lee cada producto

        selectorArticulos.appendChild(option);//coloca un elemento hijo        
    })
}
//creamos las tarjetas
function crearTarjetas(herr){
    const {articulo, imagen, id, precio} = herr;

    //creamos el contenedor
    const tarjeta = document.createElement('div');

    //me permite agregar una clase:
    tarjeta.classList.add('tarjeta-art');

    //lo mismo con las imagenes:
    const imagenTarjeta = document.createElement('img');

    //le agrego dos atributos: la direccion y la foto
    imagenTarjeta.setAttribute('src', imagen);

    //otro dos atributos: alt: texto alternativo y una concatenacion para que nos traiga el id y el articulo
    imagenTarjeta.setAttribute('alt', `${id}-${articulo}`);



    //creamos otra clase
    imagenTarjeta.classList.add('img-articulo');

    //ahora vamos con la clase del nombre del producto con un parametro p(parrafo)
    const nombreTarjeta = document.createElement('p');

    //definimos el contenido que va a tener el parrafo y su respectiva clase:   
    nombreTarjeta.textContent = articulo;
    nombreTarjeta.classList.add('nombre-articulo');

    //hacemos lo mismo para el precio:
    const precioTarjeta = document.createElement('p');

    precioTarjeta.textContent = precio;
    precioTarjeta.classList.add('precio-articulo');



    //creamos un boton:
    const btnAdd = document.createElement('button');

    //creamos un atributo para reconocer la imagen seleccionada a traves del id del objeto o articulo
    btnAdd.setAttribute('id', id);

    //la aplicamos una clase al boton y su respectivo texto:
    btnAdd.classList.add('btn-add')
    btnAdd.textContent = "Agregar al Carrito";



    //Ahora vamos agregando los elementos:
    // a las tarjetas que son el contenedor principal le vamos agregando los hijos con los appendChild()

    tarjeta.appendChild(imagenTarjeta);
    tarjeta.appendChild(nombreTarjeta);
    tarjeta.appendChild(precioTarjeta);
    tarjeta.appendChild(btnAdd);


    //de esta manera lo vinculamos al main del index
    contenedorImagenes.appendChild(tarjeta);
}