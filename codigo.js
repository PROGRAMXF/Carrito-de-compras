//const { MultiFactorAuthConfig } = require("firebase-admin/lib/auth/auth-config");

const contenedorImagenes = document.getElementById('contenedor-img');
const selectorArticulos = document.getElementById('selec-art');
const btnCreate = document.getElementById('btn-create');


//creamos una variable de la imagen seleccionada
let imgSelected = " ";
let idProduct = 0;

//ahora vamos a llamar a c.u de los elementos para trabajar con el modal
const modal = document.querySelector('.modal');
const closeModal = document.getElementById('close-modal');
const newProduct = document.getElementById('new-product');
const newPrice = document.getElementById('new-price');
const newImage = document.getElementById('new-image');
const btnNewProduct = document.getElementById('btn-new-create');
const filterXPrice = document.getElementById('filterXPrice');




window.addEventListener('load', listSelect);
//listSelect me mapea todo el array de articulos y para ello creamos una función:

//vamos a crear la funcion de renderizar
//listSelect se encarga de listar los elementos en windows
selectorArticulos.addEventListener('change', renderCards);

//creamos los eventos para el boton de crear articulo:
btnCreate.addEventListener('click',showModal);

//creamos el evento para crear el nuevo producto:
btnNewProduct.addEventListener('click', createNewProduct);

//como creamos la url para las imagenes nuevas, me trae la ruta
newImage.addEventListener('change', importImg);

closeModal.addEventListener('click',() => modal.style.display = 'none');

//creamos ele eventListener para el filtro de precios con su respectiva funcion:
filterXPrice.addEventListener('change', filterProducts);

function filterProducts(event){
//creamos una nueva variable con el desarrollo de los filtros por rango de precios:
const responseFilter = event.target.value === 'Menores a 500' 
? herramientas.filter(herr => herr.precio < 500)
: event.target.value === 'Entre 501 y 1200' 
? herramientas.filter(herr => herr.precio >= 500 && herr.precio <= 1200) 
: event.target.value === 'Mayores a 1200'
? herramientas.filter(herr => herr.precio > 1200)
: null;

//ahora limpiamos el container de imagenes para cuando aplicamos el filtro solo muestre lo que se pide en el filtro:
contenedorImagenes.innerHTML = '';
//y ahora el response filter lo vuelve a mapear para mostrar los articulos filtrados:
responseFilter.map(herr => crearTarjetas(herr));

    
}


//creamos la funcion para importar las imagenes creandolas en un array que yo quiero recorrer:
function importImg(event){
    const currentImg = event.target.files[0];
    
//para traer el objeto que nos interesa creamos una variable:
    const objectURL = URL.createObjectURL(currentImg);
   
    //imgSelect la voy a usar para guardar la url:
    imgSelected = objectURL;
}

//ahora creamos la funcion para crear el nuevo producto:
function createNewProduct(){
    //creamos una variable nueva:
    idProduct ++;
    const titleProduct = newProduct.value; //capturamos lo que va a hacer el titulo del producto
    const priceProduct = newPrice.value;
    const id = idProduct;

    //vamos a crear el nuevo objeto:
    const newHerr = {id:id, articulo:titleProduct, precio:priceProduct, imagen:imgSelected}

    //cuando llegue aca, el nuevo articulo se agrega al array de articulos:
    herramientas.push(newHerr);
    listSelect();
    modal.style.display = 'none';

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