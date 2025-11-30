// Efecto de escritura en el título
function efectoEscritura(elemento, texto, velocidad = 100) {    
    let i = 0;    
    elemento.textContent = '';    
    const timer = setInterval(() => {        
        elemento.textContent += texto[i];        
        i++;        
        if (i >= texto.length) clearInterval(timer);    
    }, velocidad);
}

// Usar el efecto
const titulo = document.getElementById('titulo');
efectoEscritura(titulo, "Bienvenido a mi Laboratorio Práctico de la Semana 15", 50);
