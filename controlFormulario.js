//console.log("controlFormulario.js funciona")
const valores= window.location.search;

//Mostramos los valores en consola
console.log(valores);

//Resultado:
//nombre=algo&telefono=algo&correo=algo

//Creamos la instancia
const urlParams=new URLSearchParams(valores)

//Accedemos a los valores
var nombre=urlParams.get("nombre")
var telefono=urlParams.get("telefono")
var correo=urlParams.get("correo")
var campo=urlParams.get("campo")
console.log(nombre);
console.log(telefono);
console.log(correo)
console.log(campo);

if(nombre !=null && telefono !=null && correo! =null && campo!=null) {
    alert("los campos han sido completados correctamente se ejecutara el codigo")
    
    } else {
        alert("los campos no han sido completados correctamente")
        }

        function validateFormContacto() {
            let nombre=document.getElementById("nombre")
            console.log(nombre);
            console.log(nombre.value);
            if(nombre.value.length >2) {
                campoNombre=true;
                document.getElementById("nombre").classList.remove("error");
                validarFormulario();
            }else{
                campoNombre=false;
                document.getElementById("nombre").classList.add("error");
                validarFormulario();
            }
        
        }