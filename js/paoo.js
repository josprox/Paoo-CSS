let btnMenu = document.getElementById('btnmenu');
let menu = document.getElementById('menu');

btnMenu.addEventListener('click', function(){
    'use strict';
    menu.classList.toggle('mostrar');
});

//Anuncio = prompt("Bienvenido, este sitio se encuentra en actualización debido a la lentitud en celulares, para saber si entra favor de inserte su nombre para continuar");
version = "1.2.6";
//alert("El sitio web regresó a la normalidad, gracias por su espera.");
//alert("©JOSPROX MX | JP Responsivo versión: " + version);
//document.write("Número de versión: " + version);

const caja = document.querySelector('.content-tarjeta-blue');
const cajaR = caja.getBoundingClientRect();

caja.addEventListener('mousemove', e =>{
    const xP = (e.clientX - cajaR.left) / cajaR.width;
    const yP = (e.clientY - cajaR.top) / cajaR.height - 0.6;
    const xOffset = -(xP - 0.6 );
    const dxNorm = Math.min(Math.max(xOffset, -0.6), 0.6);
    caja.style.transform = 'perspective(1000px) rotateY(${dxNorm*45}deg) rotateX(${yP*45}deg)';

});

caja.addEventListener('mouseleave', () => {
    caja.style.transform = 'none';
});