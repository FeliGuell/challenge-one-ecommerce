const listaProductos = () => fetch("http://localhost:3000/perfil").then(respuesta => respuesta.json());


const crearProducto = (name, imageurl, price, description, category) => {
    return fetch(`http://localhost:3000/perfil`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            imageurl,
            price,
            description,
            category
        })
    })
        .then(respuesta => {
            if (respuesta.ok) {
                return respuesta.body
            }
            throw new Error('No fue posible crear un producto');
        })
}

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE"
    });
};

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then(respuesta => respuesta.json());
};


const actualizarProducto = (name, imageurl, price, description, category, id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            imageurl,
            price,
            description,
            category
        })
    })
        .then(respuesta => respuesta)
        .catch(err => console.log(err))
}





export const productoServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    actualizarProducto,
    detalleProducto
}