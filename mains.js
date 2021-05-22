$("#buscar").on("click", function(){
    var busqueda = $("#busqueda").val();
    var url = "http://api.weatherstack.com/current?access_key=7812a65e28e407d5622ea9b4cf22de14&query=" + busqueda
    $.ajax({
        dataType: 'json',
        url: url,
        success: function(datos){
            // console.log(datos)
            var location = datos.location;
            var current = datos.current;
            // console.log(location)
            // console.log(current)
            

            var fila = $('<tr>');
            fila.append($(`<td>${location.name}</td>`));
            fila.append($(`<td>${location.region}</td>`));
            fila.append($(`<td>${location.country}</td>`));
            fila.append($(`<td>${current.temperature}</td>`));
            fila.append($(`<td>${current.humidity}</td>`));
            fila.append($(`<td><img src="${current.weather_icons}"></td>`));
            
            $('#clima tbody').append(fila);
        }
    })

})

