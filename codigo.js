
const contenedorImagenes = document.getElementById('contenedor-img');
const selectorArticulos = document.getElementById('selec-art');

window.addEventListener('load', listSelect);
//listSelect me mapea todo el array de articulos y para ello creamos una función:

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
