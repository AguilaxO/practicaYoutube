
const hamburguesa = document.querySelector("#encabezado .ListaNavegacion .hamburgesa");
const lista = document.querySelector('#encabezado .ListaNavegacion ul');
const encabezado = document.querySelector('#encabezado.container');


hamburguesa.addEventListener('click', ()=>{
    hamburguesa.classList.toggle('activo');
    lista.classList.toggle('activo');
})