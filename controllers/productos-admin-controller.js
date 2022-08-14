import { productoServices } from "../services/productos-service.js";


if(localStorage.getItem("autenticado") === "true"){
    const nuevoProducto = (name, price, imageurl, id) => {

        const card = document.createElement("div");
        const contenido = ` 
            <ul class="producto__ul">
                <li class="producto__img">
                    <img src="${imageurl}" alt="">
                    <button class="producto__button" id=${id}><i class="producto__icon-trash fas fa-trash"></button></i>
                    <a href="../screens/edit-product.html?id=${id}"><i class="producto__icon-pencil fas fa-pen"></i></a>
                </li>
                <li class="producto__name">${name}</li>
                <li class="producto__price">$${price}</li>
                <li class="producto__id">#${id}</li>
        `;
        card.innerHTML = contenido;
        card.classList.add("producto__box");
        const btn = card.querySelector("button");
        btn.addEventListener("click", async () => {
            const id = btn.id;
            try{
                const perfil = await productoServices.eliminarProducto(id);
                if(perfil.id){
                    throw new Error();
                }
                window.location.href = "/screens/delete-complete.html";
            }catch(error){
                window.location.href = "/screens/error.html";
            }
        });
    
        return card;
    };
    
    const productos = document.querySelector("[data-productos]");
    
    const render = async () => {
        try {
            const listaProductos = await productoServices.listaProductos();
            listaProductos.forEach(elemento => {
                productos.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageurl, elemento.id));
            });
        } catch (error) {
            window.location.href = "/screens/error.html";
            console.log(error);
        }
    };
    
    render();
}else{
    window.location.href = "/screens/login.html";
    alert("Debe iniciar sesión");
}

