
const contenedorImagenes = document.getElementById('contenedor-img');
const selectorArticulos = document.getElementById('selec-art');
const btnCreate = document.getElementById('btn-create');
//creamos una variable de la imagen seleccionada

let imgSelected = " ";

//ahora vamos a llamar a c.u de los elementos para trabajar con el modal
const modal = document.querySelector('.modal');
const closeModal = document.getElementById('close-modal');
const newProduct = document.getElementById('new-product');
const newPrice = document.getElementById('new-price');
const newImage = document.getElementById('new-image');
const btnNewProduct = document.getElementById('btn-new-create');

window.addEventListener('load', listSelect);
//listSelect me mapea todo el array de articulos y para ello creamos una función:

//vamos a crear la funcion de renderizar
//listSelect se encarga de listar los elementos en windows
selectorArticulos.addEventListener('change', renderCards);

//creamos los eventos para el boton de crear articulo:
btnCreate.addEventListener('click',showModal);

//creamos el evento para crear el nuevo producto:
btnCreate.addEventListener('click', createNewProduct);

//ahora creamos la funcion para crear el nuevo producto:
function createNewProduct(){
    //creamos una variable nueva:
    const titleProduct = newProduct.value; //capturamos lo que va a hacer el titulo del producto
}

function showModal(){
    modal.style.display = 'flex'; //recuperamos la info de las clases, nos muestra el recuadro cuando apretamos el boton

}


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