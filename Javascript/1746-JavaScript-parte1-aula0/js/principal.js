var paciente=document.querySelectorAll('.paciente');
console.log(paciente);
var titulo=document.querySelector('.titulo');
titulo.textContent="Buena Vida Nutricion";

function calculaIcm(){
    for (let i = 0; i < paciente.length; i++) {
        
       
        var tdpeso=paciente[i].querySelector(".info-peso");
        var peso=tdpeso.textContent;

        var altura=paciente[i].querySelector(".info-altura").textContent;

        console.log(peso>0||peso<200);
        console.log(altura<3||altura>0 );
        if ((peso>0&&peso<200)&&(altura<3&&altura>0)){
        
            paciente[i].querySelector(".info-imc").textContent=(peso/(altura*altura)).toFixed(2);
        }
        else {
            paciente[i].querySelector(".info-imc").textContent="Peso o altura incorrecto";
            
            paciente[i].classList.add ("paciente-incorrecto") ;//   añade un clase como paciente incorrecto y en el css le asigno propiedades     style.backgroundColor="orange";
            console.log("Peso tiene que ser mayor a:0 y altura mayor a 0.5S ");
        }

    }    
}
calculaIcm();

function adicionarPaciennnte(){

    var nombreA =document.querySelector("#nombre");
    var pesoA=document.querySelector("#peso");
    var aluraA=document.querySelector("#altura");
    var gordura=document.querySelector("#gordura");
    console.log(nombreA,pesoA)
    console.log("boton hola");

}




var botonAdicionar =document.querySelector("#adicionar-paciente")
botonAdicionar.addEventListener("click",function (){
    console.log("boton hola");
});

    