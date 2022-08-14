import { productoServices } from "../services/productos-service.js";

const nuevoProducto = (name, price, imageurl, description) => {

    const product = document.createElement("div");
    const contenido = ` 
                <img class="producto__descr-img" src="${imageurl}" alt="">
                <div class="producto__info">
                    <h2 class="producto__descr-title">${name}</h2>
                    <p class="producto__descr-price">$${price}</p>
                    <p class="producto__descr-description">${description}</p>
                </div>
    `;
    product.innerHTML = contenido;
    product.classList.add("producto__descripcion-container");

    return product;
 
};

const productoDesc = document.querySelector("[data-producto-description]");

const url = new URL(window.location);
const id = url.searchParams.get("id");

if (id == null) {
    window.location.href = "/screens/error.html";
}

const render = async () => {
    try {
        const detalleProd = await productoServices.detalleProducto(id);
        productoDesc.appendChild(nuevoProducto(detalleProd.name, detalleProd.price, detalleProd.imageurl, detalleProd.description));
    } catch (error) {
        window.location.href = "/screens/error.html";
        console.log(error);
    }
};

render(); 