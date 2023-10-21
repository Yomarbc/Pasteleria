window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);   
})


/* Script para el carrito de compras */

document.addEventListener('DOMContentLoaded', () => {

    
    // Variables
    const baseDeDatos = [
        
        {
            id: 1,
            nombre: 'Pastel',
            precio: 200,
            imagen: 'imagenes/Pasteles/leonardicake.jpg'
        },

        {
            id: 2,
            nombre: 'Pastel',
            precio: 50,
            imagen: 'imagenes/Pasteles/simple1.jpg'
        },

        {
            id: 3,
            nombre: 'Pastel',
            precio: 75,
            imagen: 'imagenes/Pasteles/simple2.jpg'
        },
        {
            id: 4,
            nombre: 'Pastel',
            precio: 75,
            imagen: 'imagenes/Pasteles/simple3.jpg'
        },
        {
            id: 5,
            nombre: 'Pastel',
            precio: 80,
            imagen: 'imagenes/Pasteles/simple4.jpg'
        },
        {
            id: 6,
            nombre: 'Pastel',
            precio: 60,
            imagen: 'imagenes/Pasteles/simple5.jpg'
        },
        {
            id: 7,
            nombre: 'Pastel',
            precio: 80,
            imagen: 'imagenes/Pasteles/simple6.jpg'
        },
        {
            id: 8,
            nombre: 'Pastel',
            precio: 120,
            imagen: 'imagenes/Pasteles/sanriocake.jpg'
        },
        {
            id: 9,
            nombre: 'Pastel',
            precio: 120,
            imagen: 'imagenes/Pasteles/rosayazul.jpg'
        },
        {
            id: 10,
            nombre: 'Pastel',
            precio: 90,
            imagen: 'imagenes/Pasteles/rosacake.jpg'
        },
        {
            id: 11,
            nombre: 'Pastel',
            precio: 110,
            imagen: 'imagenes/Pasteles/rosabuttle.jpg'
        },
        {
            id: 12,
            nombre: 'Pastel',
            precio: 300,
            imagen: 'imagenes/Pasteles/rosa.jpg'
        },
        {
            id: 13,
            nombre: 'Pastel',
            precio: 250,
            imagen: 'imagenes/Pasteles/Primera1.jpg'
        },
        {
            id: 14,
            nombre: 'Pastel',
            precio: 175,
            imagen: 'imagenes/Pasteles/polar1.jpg'
        },
        {
            id: 15,
            nombre: 'Pastel',
            precio: 175,
            imagen: 'imagenes/Pasteles/polar.jpg'
        },
        {
            id: 16,
            nombre: 'Pastel',
            precio: 250,
            imagen: 'imagenes/Pasteles/pereza.jpg'
        },
        {
            id: 17,
            nombre: 'Pastel',
            precio: 25,
            imagen: 'imagenes/Pasteles/pasteltrozoz.jpg'
        },
        {
            id: 18,
            nombre: 'Pastel',
            precio: 260,
            imagen: 'imagenes/Pasteles/pastel3.jpg'
        },
        {
            id: 19,
            nombre: 'Pastel',
            precio: 250,
            imagen: 'imagenes/Pasteles/pardoo.jpg'
        },
        {
            id: 20,
            nombre: 'Pastel',
            precio: 240,
            imagen: 'imagenes/Pasteles/pandas.jpg'
        },
        {
            id: 21,
            nombre: 'Pastel',
            precio: 170,
            imagen: 'imagenes/Pasteles/panda1.jpg'
        },
        {
            id: 22,
            nombre: 'Pastel',
            precio: 195,
            imagen: 'imagenes/Pasteles/p.jpg'
        },
        {
            id: 23,
            nombre: 'Pastel',
            precio: 300,
            imagen: 'imagenes/Pasteles/ositos3.jpg'
        },
        {
            id: 24,
            nombre: 'Pastel',
            precio: 260,
            imagen: 'imagenes/Pasteles/mujerrojo.jpg'
        },
        {
            id: 25,
            nombre: 'Pastel',
            precio: 300,
            imagen: 'imagenes/Pasteles/lindospostres.jpg'
        },
        {
            id: 26,
            nombre: 'Pastel',
            precio: 300,
            imagen: 'imagenes/Pasteles/lindopolar.jpg'
        },
        {
            id: 27,
            nombre: 'Pastel',
            precio: 190,
            imagen: 'imagenes/Pasteles/lindocake.jpg'
        },
        {
            id: 28,
            nombre: 'Pastel',
            precio: 275,
            imagen: 'imagenes/Pasteles/lindo2.jpg'
        },
        {
            id: 29,
            nombre: 'Pastel',
            precio: 165,
            imagen: 'imagenes/Pasteles/leonardicake.jpg'
        }
        
  
    ];
  
    let carrito = [];
    const divisa = 'Q';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;
  
    // Funciones
  
    /**
    * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
    */
    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${divisa}${info.precio}`;
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }
  
    /**
    * Evento para añadir un producto al carrito de la compra
    */
    function anyadirProductoAlCarrito(evento) {
        // Anyadimos el Nodo a nuestro carrito
        carrito.push(evento.target.getAttribute('marcador'))
        // Actualizamos el carrito 
        renderizarCarrito();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();
    }
  
    /**
    * Dibuja todos los productos guardados en el carrito
    */
    function renderizarCarrito() {
        // Vaciamos todo el html
        DOMcarrito.textContent = '';
        // Quitamos los duplicados
        const carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                // ¿Coincide las id? Solo puede existir un caso
                return itemBaseDatos.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito 
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${divisa} ${miItem[0].precio}`;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        // Renderizamos el precio total en el HTML
        DOMtotal.textContent = calcularTotal();
    }
  
    /**
    * Evento para borrar un elemento del carrito
    */
    function borrarItemCarrito(evento) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;
        // Borramos todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();
  
    }
  
    /**
     * Calcula el precio total teniendo en cuenta los productos repetidos
     */
    function calcularTotal() {
        // Recorremos el array del carrito 
        return carrito.reduce((total, item) => {
            // De cada elemento obtenemos su precio
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            // Los sumamos al total
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }
  
    /**
    * Varia el carrito y vuelve a dibujarlo
    */
    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        renderizarCarrito();
        // Borra LocalStorage
        localStorage.clear();
  
    }
  
    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }
  
    function cargarCarritoDeLocalStorage () {
        // ¿Existe un carrito previo guardado en LocalStorage?
        if (miLocalStorage.getItem('carrito') !== null) {
            // Carga la información
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }
  
    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);
  
    // Inicio
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
  });
