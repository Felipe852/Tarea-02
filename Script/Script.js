let contain = document.getElementById('container');
let texto = document.getElementById('text');
let text2 = document.getElementById('text2');

for(let i=0;i<12;i++){
  
    let imagen = document.createElement('img');
    let imge=prompt("Ingrese la URL de la imagen deseada");
    imagen.setAttribute('src',imge);
    imagen.setAttribute('alt','Imagenes');
    contain.appendChild(imagen);
    let ciudades=document.createElement('h3');
    let paises=document.createElement('h3');
    ciudades.textContent=prompt("Ingrese el nombre de la ciudad");
    paises.textContent=prompt("Ingrese el pais");
    texto.appendChild(ciudades);
    text2.appendChild(paises);
    
}






