$(document).ready(function () {
var port="44369";
var controlador="empleadosqlserver";
    // POST
    $('#formEnvio').submit(function (e) { 
        e.preventDefault();
        var id=$('#IdIndex').val();
        var nombre=$('#Nombre').val();
        var apellido=$('#Apellido').val();
        var cargo=$('#Cargo').val();
        var sueldo=$('#Sueldo').val();

        $.ajax({
            method: "POST",
            url: "https://localhost:"+port+"/API/" +controlador+"/",
            data: JSON.stringify({'Id':parseInt(id),'Nombre':nombre,'Apellido':apellido,'Cargo':cargo,'Sueldo':parseFloat(sueldo)}),
            dataType: "json",
            contentType: "application/json",
            success: function(response) {
                alert(`El empleado con ID ${id} se ha añadido.`);
		console.log(response);
            },
            error: function(error) {
                alert(`El empleado con ID ${id} ya está creado.`);
                console.log(error);
            }
        });
    
    });

    //DELETE
    $('#formDel').submit(function (e) { 
        e.preventDefault();
        var id=$('#IdBorr').val();        
        
        $.ajax({
            method: "DELETE",
            url: `https://localhost:${port}/api/${controlador}/${id}`,
            data: JSON.stringify({'Id':parseInt(id)}),
            dataType: "json",
            contentType: "application/json",
            success: function(response) {
                alert(`El empleado con ID ${id} se ha borrado.`);
		console.log(response);
            },
            error: function(error) {
                alert(`El empleado con ID ${id} no se ha podido borrar.`);
                console.log(error);
            }
        });
     
    });
    
    // PUT
    $('#formAct').submit(function (e) { 
        e.preventDefault();
        var id=$('#IdAct').val();
        var nombre=$('#Nombre').val();
        var apellido=$('#Apellido').val();
        var cargo=$('#Cargo').val();
        var sueldo=$('#Sueldo').val();

        $.ajax({
            method: "PUT",
            url: `https://localhost:${port}/api/${controlador}/${id}`,
            data: JSON.stringify({'Id':parseInt(id),'Nombre':nombre,'Apellido':apellido,'Cargo':cargo,'Sueldo':parseFloat(sueldo)}),
            dataType: "json",
            contentType: "application/json",
            success: function(response) {
                alert(`El empleado con ID ${id} se ha actualizado.`);
		console.log(response);
            },
            error: function(error) {
                alert(`El empleado con ID ${id} no se ha podido actualizar.`);
                console.log(error);
            }
        });
     
    });

    // GET USUARIO

    $('#formGetUsuario').submit(function (e) { 
        e.preventDefault();
        var id1=$('#IdUsuario').val();            

        $.ajax({
            method: "GET",
            url: `https://localhost:${port}/api/${controlador}/${id1}`,
            data: JSON.stringify({'Id':id1}),
            dataType: "json",
            contentType: "application/json",
            success: function(data) {
                var employee_data='';
                console.log(data);
                $("#tableListado2 > tbody").html("");
               // $.each(data, function (index, value) {
                    
                    employee_data+='<tbody><tr>';                    
                    employee_data+='<td>'+ data.id+'</td>';
                    employee_data+='<td>'+ data.nombre+'</td>';
                    employee_data+='<td>'+ data.apellido+'</td>';
                    employee_data+='<td>'+ data.cargo+'</td>';
                    employee_data+='<td>'+ data.sueldo+'</td>';
                    employee_data+='</tr></tbody>';                  
                                
                //});
                $('#tableListado2').append(employee_data);
            },
            error: function(error) {
                alert(`El empleado con ID ${id1} no se ha podido visualizar o no existe.`);
                console.log(error);
            }
        });
     
    });
   
    // GET TODOS LOS USUARIOS
    $('#boton5').click(function () {    
                    

        $.ajax({
            method: "GET",
            url: `https://localhost:${port}/api/${controlador}/`,
            
            success: function(data) {
                let employee_data='';
                
                $("#tableListado > tbody").html("");
                $.each(data, function (index, value) {
                    
                    employee_data+='<tbody><tr>';                    
                    employee_data+='<td>'+ value.id+'</td>';
                    employee_data+='<td>'+ value.nombre+'</td>';
                    employee_data+='<td>'+ value.apellido+'</td>';
                    employee_data+='<td>'+ value.cargo+'</td>';
                    employee_data+='<td>'+ value.sueldo+'</td>';
                    employee_data+='</tr></tbody>';                  
                                
                });
                $('#tableListado').append(employee_data);
               
            },
            error: function(error) {
                alert(`El empleado con ID ${id} no se ha podido visualizar.`);
                console.log(error);
            }
        });
     
    })
   

});
