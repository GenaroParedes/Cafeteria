document.addEventListener('DOMContentLoaded', function() {
    fijarNavegacion();
    scrollNavegacion();
    resaltarEnlace();
});


function fijarNavegacion() {
    const header = document.querySelector('.header');
    const header_img = document.querySelector('.header-img');

    document.addEventListener('scroll', function() {
        //De esta forma vemos en que coordenadas está el scroll en base a la parte de sobreFestival, cuando esas coordenadas
        //sean menores a 1 quiere decir que ya se paso el elemento, cuando esto pasa tenemos que agregar la barra de navegacion.
        console.log(header_img.getBoundingClientRect().bottom);
        if(header_img.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed');
        } else{
            header.classList.remove('fixed');
        }
});
}

function scrollNavegacion(){
    const navLinks = document.querySelectorAll('.navegacion-principal a');

    navLinks.forEach(link => {
        link.addEventListener('click', e =>{
            e.preventDefault();
            //lo que hace la siguiente linea, es tomar el href del enlace y buscar el elemento que tenga ese id
            const sectionScroll = e.target.getAttribute('href');
            //El siguiente querySelector es para seleccionar el elemento que tenga el id que se obtuvo en la linea anterior
            const section = document.querySelector(sectionScroll);
            
            //Esto hace que el scroll sea suave
            section.scrollIntoView({behavior: 'smooth'});
        });
    });
}

function resaltarEnlace() {
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.navegacion-principal a')

        let actual = '';
        sections.forEach( section => {
            //offsetTop Obtiene la distancia desde la parte superior de la página hasta el inicio de cada sección.
            const sectionTop = section.offsetTop
            //ClientHeight Obtiene la altura de la sección.
            const sectionHeight = section.clientHeight
            //El siguiente if es para saber si el scroll esta en la parte superior de la pagina, si es asi el offsetTop es 0
            //cuando el scroll es mayor a la parte superior de la seccion menos la mitad de la altura de la seccion
            //es porque el scroll esta en la seccion actual
            console.log('SCROLL:' + window.scrollY)
            console.log('offsetTop: '  + sectionTop)
            console.log('clientHeight: ' + sectionHeight)
            console.log('ST - SH /3: ' + (sectionTop - sectionHeight / 3))
            if(window.scrollY >= (sectionTop - sectionHeight / 3) && section.id != 'blogs') {
                actual = section.id
            } else if(window.scrollY >= (sectionTop - sectionHeight / 5)) { 
                /*Este else if es para resaltar el enlace de la seccion blogs
                Lo hago /5 porque como la section blog es mas grande que las demas, si lo hago /3 se resalta antes de llegar a la seccion.
                sectionTop(distancia desde la parte superior a la seccion) - sectionHeight(Altura de la seccion) / 3, de esta forma
                cuando venimos dando scroll, y aparezca 1/3 partes de la seccion, se resalta su debido enlace, ahora para blogs serian 1/5 partes.*/
                actual = 'blogs'
            }
        })
        //El siguiente forEach es para resaltar el enlace que corresponde a la seccion actual
        navLinks.forEach(link => {
            link.classList.remove('active')
            if(link.getAttribute('href') === '#' + actual) {
                link.classList.add('active') //Agregar compartamientos css a la clase nueva active.
            }
        })
    })
}