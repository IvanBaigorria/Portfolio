let menuVisible = false;
//funcion que oculta o muestra el menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false
    }else{
        document.getElementById("nav").classList = "responsive"
        menuVisible= true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//funcion que aplica las ami,aciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("c");
        habilidades[3].classList.add("net");
        habilidades[4].classList.add("sqlserver");
        habilidades[5].classList.add("wordpress");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("proyect");
    }
}

//detecta el scrolling para aplicar la animacion

window.onscroll = function(){
    efectoHabilidades();
}

