import { productoServices } from "../services/productos-service.js"; 

const nuevoProducto = (name,price,imageurl,id) =>{
    
    const card = document.createElement("div");
  
    const contenido = ` 
        <ul class="producto__ul">
            <li class="producto__img"><img src="${imageurl}" alt=""></li>
            <li class="producto__name">${name}</li>
            <li class="producto__price">$${price}</li>
            <li class="producto__button"><button  class="producto__button-verprod"> <a href="/screens/description-product.html?id=${id}">Ver Producto</a></button></li>
        </ul>
    `;
    card.innerHTML = contenido;
    card.classList.add("producto__box");
    if(window.location.pathname == "/screens/home.html"){
        card.classList.add("home");
    }
    return card;
};


const render = async() => {
    try{
        const listaProductos = await productoServices.listaProductos();
        listaProductos.forEach(elemento => {
            const productos = document.querySelector(`[data-${elemento.category}]`);
            productos.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageurl, elemento.id));
        });
    } catch(error){
        console.log(error);
    }
};

render();