var tabla = [];

function validacionLg() {
    var Usuario = document.getElementById("Usuario").value;
    var contraseña = document.getElementById("Contraseña").value;
    if (Usuario == "" || contraseña=="" ) {
        alert("Campos vacios D:")
    } 
}
function validacion() {
    var nombreN = document.getElementById("Nombre").value;
    var EcoinsN = document.getElementById("Ecoins").value;
    if (nombreN == "" ||EcoinsN == "") {
        alert("Campos vacios D:")
    } 
}

function nuevo() {
    var nombreN = document.getElementById("Nombre").value;
    var EcoinsN = document.getElementById("Ecoins").value;
    var nuevoUsuario = { nombre: nombreN, ecoins: EcoinsN};
    var casos = 0;
    if (nombreN == "" ||EcoinsN == "") {
        alert("Campos vacios D:")
    } else {
        if (casos == 0) {
            tabla.push(nuevoUsuario);
            var cuerpoTabla = document.getElementById("usuarios-tabla");  
            cuerpoTabla.innerHTML +="<tr><td>"+nombreN+"</td><td>"+EcoinsN+"</td><td><button onclick='location.href='#'' class='btn btn-primary'>Show</button></td><td><button onclick='location.href='#'' class='btn btn-primary'>Edit</button></td><td><button onclick='location.href='#'' class='btn btn-primary'>DEstroy</button></td></tr>"
        }
    }
}