var url = "http://localhost:3035/api/laptops";

// Crear o actualizar Laptop
function postLaptop() {
    var id = $('#id').val();
    var laptopData = {
        marca: $('#marca').val(),
        modelo: $('#modelo').val(),
        procesador: $('#procesador').val(),
        ram: $('#ram').val(),
        almacenamiento: $('#almacenamiento').val(),
        pantalla: $('#pantalla').val(),
        grafica: $('#grafica').val(),
        tiempo_bateria: $('#tiempo_bateria').val(),
        peso: $('#peso').val(),
        precio: $('#precio').val(),
        fecha_lanzamiento: $('#fecha_lanzamiento').val()
    };

    var ajaxUrl = url;
    var ajaxType = 'POST';

    if (id) { // Si hay id, actualizar
        ajaxUrl += '/' + id;
        ajaxType = 'PUT';
    }

    $.ajax({
        url: ajaxUrl,
        type: ajaxType,
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
            $('#resultado').html('<p>Laptop guardada correctamente</p>');
            $('#laptopForm')[0].reset();
            getLaptops();
        },
        error: function (xhr, status, error) {
            console.error(error);
            $('#resultado').html('<p>Error al guardar laptop</p>');
        },
        data: JSON.stringify(laptopData)
    });
}

// Obtener todas las Laptops
function getLaptops() {
    $.getJSON(url, function(json) {
        console.log(json);

        var arrLaptops = json.laptops;
        var htmlTable = '<table border="1">';
        htmlTable += '<tr><th>ID</th><th>Marca</th><th>Modelo</th><th>Procesador</th><th>RAM</th><th>Almacenamiento</th><th>Pantalla</th><th>Gráfica</th><th>Batería</th><th>Peso</th><th>Precio</th><th>Fecha Lanzamiento</th><th>Acciones</th></tr>';

        arrLaptops.forEach(function(item) {
            htmlTable += '<tr>' +
                '<td>' + item.id + '</td>' +
                '<td>' + item.marca + '</td>' +
                '<td>' + item.modelo + '</td>' +
                '<td>' + item.procesador + '</td>' +
                '<td>' + item.ram + '</td>' +
                '<td>' + item.almacenamiento + '</td>' +
                '<td>' + item.pantalla + '</td>' +
                '<td>' + item.grafica + '</td>' +
                '<td>' + item.tiempo_bateria + '</td>' +
                '<td>' + item.peso + '</td>' +
                '<td>' + item.precio + '</td>' +
                '<td>' + item.fecha_lanzamiento + '</td>' +
                '<td>' +
                  '<button onclick="editLaptop(' + item.id + ')">Editar</button>' +
                  '<button onclick="deleteLaptop(' + item.id + ')">Eliminar</button>' +
                '</td>' +
                '</tr>';
        });

        htmlTable += '</table>';
        $('#resultado').html(htmlTable);
    });
}

// Editar Laptop (cargar datos al form)
function editLaptop(id) {
    $.getJSON(url + '/' + id, function(laptop) {
        $('#id').val(laptop.id);
        $('#marca').val(laptop.marca);
        $('#modelo').val(laptop.modelo);
        $('#procesador').val(laptop.procesador);
        $('#ram').val(laptop.ram);
        $('#almacenamiento').val(laptop.almacenamiento);
        $('#pantalla').val(laptop.pantalla);
        $('#grafica').val(laptop.grafica);
        $('#tiempo_bateria').val(laptop.tiempo_bateria);
        $('#peso').val(laptop.peso);
        $('#precio').val(laptop.precio);
        $('#fecha_lanzamiento').val(laptop.fecha_lanzamiento);
    });
}

// Eliminar Laptop
function deleteLaptop(id) {
    if (confirm('¿Seguro que quieres eliminar esta laptop?')) {
        $.ajax({
            url: url + '/' + id,
            type: 'DELETE',
            success: function (result) {
                console.log(result);
                $('#resultado').html('<p>Laptop eliminada correctamente</p>');
                getLaptops();
            },
            error: function (xhr, status, error) {
                console.error(error);
                $('#resultado').html('<p>Error al eliminar laptop</p>');
            }
        });
    }
}

// Enviar formulario
$('#laptopForm').submit(function (e) {
    e.preventDefault();
    postLaptop();
});
