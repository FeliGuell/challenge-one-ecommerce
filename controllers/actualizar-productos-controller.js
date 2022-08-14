import { productoServices } from "../services/productos-service.js";



if(localStorage.getItem("autenticado") === "true"){
    const form = document.querySelector("[data-form");

    const obtenerInformacion = async () =>{
        const url = new URL(window.location);
        const id = url.searchParams.get("id");
    
        if(id==null){
            window.location.href = "/screens/error.html";
        }
    
        const imageurl = document.querySelector("[data-url]");
        const name = document.querySelector("[data-name]");
        const price = document.querySelector("[data-price]");
        const category = document.querySelector("[data-category]");
        const description = document.querySelector("[data-description]");
    
        try{
            const perfil = await productoServices.detalleProducto(id);
            if(perfil.imageurl && perfil.name && perfil.price && perfil.category && perfil.description){
                imageurl.value = perfil.imageurl;
                name.value = perfil.name; 
                price.value = perfil.price;
                category.value = perfil.category;
                description.value = perfil.description;
            }else{
                throw new Error();
            }
        }catch(error){
            console.log(error);
            window.location.href = "/screens/error.html";
        }
    };
    
    obtenerInformacion();
    
    form.addEventListener("submit", async(evento)=>{
        evento.preventDefault();
        const url = new URL(window.location);
        const id = url.searchParams.get("id");
    
        const imageurl = document.querySelector("[data-url]").value;
        const name = document.querySelector("[data-name]").value;
        const price = document.querySelector("[data-price]").value;
        const category = document.querySelector("[data-category]").value;
        const description = document.querySelector("[data-description]").value;
        
        const perfil = await productoServices.actualizarProducto(name, imageurl,price,description, category, id);
        window.location.href  ="/screens/update-complete.html";
    
    });
}else{
    window.location.href = "/screens/login.html";
    alert("Debe iniciar sesión");
}


 