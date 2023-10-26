console.log('Buenos Aires Conf')
console.log('-----')

// Obtener botón
const btnBorrar = document.getElementById('pieForm-boton-borrar');
const btnResumen = document.getElementById('pieForm-boton-resumen');

// Detectar evento
btnBorrar.addEventListener('click',borrar);
btnResumen.addEventListener('click',ObtenerValores);

// Funciones para cada botón.

function borrar() {
    alert('Boton borrar')
}

// Función para obtener valores.
function ObtenerValores() {
    let Nombre = document.formulario.nombre.value;
    let Apellido = document.formulario.apellido.value;
    let Email = document.formulario.email.value;
    let Cantidad = document.formularioCantidad.cantidad.value;
    let Categoria = document.formularioCantidad.categoria.value;

    console.log(`Nombre: ${Nombre}.`);
    console.log(`Apellido: ${Apellido}.`);
    console.log(`Email: ${Email}.`);
    console.log(`Cantidad: ${Cantidad}.`);
    console.log(`Categoria: ${Categoria}.`);

    let precio = 200

    switch (Categoria) {
        
        case "estudiante":
            precio = (200*0.2)
            break;
        
        case "trainee":
            precio = (200*0.5)
            break;
        
        case "junior":
            precio = (200*0.75)
            break;
    
        default:
            break;
    }

    // Obtengo texto precio a pagar
    let tagPrecio = document.getElementById('pago').innerHTML;

    if (tagPrecio === 'Total a Pagar: $') {

        let aPagar = `${tagPrecio}${(precio*Cantidad)}`;
        document.getElementById('pago').innerHTML = aPagar;

    } else {
        tagPrecio = 'Total a Pagar: $';
        let aPagar = `${tagPrecio}${(precio*Cantidad)}`;
        document.getElementById('pago').innerHTML = aPagar;
    }

    
}