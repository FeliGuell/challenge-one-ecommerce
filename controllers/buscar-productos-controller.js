import { productoServices } from "../services/productos-service.js";



const buscar = async () => {
    try {
        const productos = await productoServices.listaProductos();
        let seleccionados = new Array(2);
        seleccionados[0] = new Array();
        seleccionados[1] = new Array();
        const buscador = document.querySelector("[data-buscador]");
        const resultado = document.querySelector(".header__resultado");

        buscador.addEventListener("input", () => {
            seleccionados[0].length = 0;
            seleccionados[1].length = 0;
            let fragment = document.createDocumentFragment();
            let valor = buscador.value.toLowerCase();

            if (valor.length > 0) {

                productos.forEach(j => {
                    if (j.name.toLowerCase().includes(valor)) {
                        seleccionados[0].push(j.name.toLowerCase());
                        seleccionados[1].push(j.id);
                    }
                });

                for (let i = 0; i < seleccionados[0].length; i++) {
                    let a = document.createElement("a");
                    let id = `/screens/description-product.html?id=${seleccionados[1][i]}`;
                    a.innerHTML = seleccionados[0][i];
                    a.setAttribute("href", id);
                    a.classList.add("resultado__link")
                    fragment.appendChild(a); 
                };
            }

            resultado.innerHTML = "";
            resultado.appendChild(fragment);
        });
    } catch (error) {
        console.log(error);
    }
}

buscar();



