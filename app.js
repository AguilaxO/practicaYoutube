
const hamburguesa = document.querySelector("#encabezado .ListaNavegacion .hamburgesa");
const lista = document.querySelector('#encabezado .ListaNavegacion ul');
const encabezado = document.querySelector('.encabezado.container');


hamburguesa.addEventListener('click', ()=>{
    hamburguesa.classList.toggle('activo');
    lista.classList.toggle('activo');
});

document.addEventListener('scroll', () => {
    let posicion = window.scrollY;
    if (posicion > 250) {
        encabezado.style.backgroundColor = '#29323c';
    } else {
        encabezado.style.backgroundColor = 'transparent';
    }
});