
/*  HOVER EFFECTS FOR ACTION ITEMS BUTTONS  */

$('.action-item-details').hover(function () {
    $(this).attr("src", "../wwwroot/img/interface/info-16.png");
}, function () {
    $(this).attr("src", "../wwwroot/img/interface/outline-info-16.png");
});

$('.action-item-edit').hover(function () {
    $(this).attr("src", "../wwwroot/img/interface/editar-16.png");
}, function () {
    $(this).attr("src", "../wwwroot/img/interface/outline-editar-16.png");
});

$('.action-item-delete').hover(function () {
    $(this).attr("src", "../wwwroot/img/interface/eliminar-16.png");
}, function () {
    $(this).attr("src", "../wwwroot/img/interface/outline-eliminar-16.png");
});

/*  TEXT UNDERLINE IN HOVER  */


$('.link-card-categories').hover(function () {
    $(this).addClass("text-decoration-underline");
}, function () {
    $(this).removeClass("text-decoration-underline");
});




/* --END-- HOVER EFFECTS FOR ACTION ITEMS BUTTONS  */


$(document).ready(function () {


    let tipo_Productos = document.querySelectorAll('.tipo_Productos');

    tipo_Productos.forEach((tipo_Producto) => {
        if (tipo_Producto.innerText == "S") {

            $(tipo_Producto).addClass("badge text-bg-info text-light");
            tipo_Producto.innerText = "Simple";

        } else {

            $(tipo_Producto).addClass("badge text-bg-info text-light");
            tipo_Producto.innerText = "Compuesto";
        }

    });


});

$(document).ready(function () {


    let unidad_Productos = document.querySelectorAll('.unidad_Productos');

    unidad_Productos.forEach((unidad_Producto) => {
        switch (unidad_Producto.innerText) {
            case 0:
                day = "Sunday";
                break;
            case "1":
                unidad_Producto.innerText = "Pieza";
                break;
            case "2":
                unidad_Producto.innerText = "Elemento";
                break;
            case "3":
                unidad_Producto.innerText = "U. Servicio";
                break;
            case "4":
                unidad_Producto.innerText = "Actividad";
                break;
            case "5":
                unidad_Producto.innerText = "Kilogramo";
                break;
            case "6":
                unidad_Producto.innerText = "Trabajo";
                break;
            case "7":
                unidad_Producto.innerText = "Tarifa";
                break;
            case "8":
                unidad_Producto.innerText = "Metro";
                break;
            case "9":
                unidad_Producto.innerText = "Pq. a Granel";
                break;
            case "10":
                unidad_Producto.innerText = "Caja base";
                break;
            case "11":
                unidad_Producto.innerText = "Kit";
                break;
            case "12":
                unidad_Producto.innerText = "Conjunto";
                break;
            case "13":
                unidad_Producto.innerText = "Litro";
                break;
            case "14":
                unidad_Producto.innerText = "Caja";
                break;
            case "15":
                unidad_Producto.innerText = "Mes";
                break;
            case "16":
                unidad_Producto.innerText = "Hora";
                break;
            case "17":
                unidad_Producto.innerHTML = "M<sup>2</sup>";
                break;
            case "18":
                unidad_Producto.innerText = "Equipos";
                break;
            case "19":
                unidad_Producto.innerText = "Miligramo";
                break;
            case "20":
                unidad_Producto.innerText = "Paquete";
                break;
            case "21":
                unidad_Producto.innerText = "Kit";
                break;
            case "22":
                unidad_Producto.innerText = "Variedad";
                break;
            case "23":
                unidad_Producto.innerText = "Gramo";
                break;
            case "24":
                unidad_Producto.innerText = "Par";
                break;
            case "25":
                unidad_Producto.innerText = "Docenas";
                break;
            case "26":
                unidad_Producto.innerText = "Unidad";
                break;
            case "27":
                unidad_Producto.innerText = "Día";
                break;
            case "28":
                unidad_Producto.innerText = "Lote";
                break;
            case "29":
                unidad_Producto.innerText = "Grupos";
                break;
            case "30":
                unidad_Producto.innerText = "Mililitro";
                break;
            case "31":
                unidad_Producto.innerText = "Viaje";
        }
        
    });


});






$(document).ready(function () {


    let tipo_Almacenes = document.querySelectorAll('.tipo_Almacenes');

    tipo_Almacenes.forEach((tipo_Almacen) => {
        if (tipo_Almacen.innerText == "A") {

            $(tipo_Almacen).addClass("badge rounded-pill text-bg-light");
            tipo_Almacen.innerText = "Activo Fijo";

        } else if (tipo_Almacen.innerText == "I") {

            $(tipo_Almacen).addClass("badge rounded-pill text-bg-light");
            tipo_Almacen.innerText = "Inventario";
        } else if (tipo_Almacen.innerText == "M") {

            $(tipo_Almacen).addClass("badge rounded-pill text-bg-light");
            tipo_Almacen.innerText = "Materia Prima";
        } else {

            $(tipo_Almacen).addClass("badge rounded-pill text-bg-warning");
            tipo_Almacen.innerText = "N/A";
        }

    });


});




$(document).ready(function () {


    let venta_Almacenes = document.querySelectorAll('.venta_Almacenes');

    venta_Almacenes.forEach((venta_Almacen) => {
        if (venta_Almacen.innerText == "N") {

            $(venta_Almacen).removeClass("text-bg-primary");
            $(venta_Almacen).addClass("badge text-bg-success");
            venta_Almacen.innerText = "Disponible";

        } else if (venta_Almacen.innerText == "S")  {

            $(venta_Almacen).removeClass("text-bg-primary");
            $(venta_Almacen).addClass("badge text-bg-danger");
            venta_Almacen.innerText = "No Disponible";
        }

    });

});