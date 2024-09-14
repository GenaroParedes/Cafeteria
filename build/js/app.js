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
}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgZmlqYXJOYXZlZ2FjaW9uKCk7XHJcbiAgICBzY3JvbGxOYXZlZ2FjaW9uKCk7XHJcbiAgICByZXNhbHRhckVubGFjZSgpO1xyXG59KTtcclxuXHJcblxyXG5mdW5jdGlvbiBmaWphck5hdmVnYWNpb24oKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XHJcbiAgICBjb25zdCBoZWFkZXJfaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1pbWcnKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAvL0RlIGVzdGEgZm9ybWEgdmVtb3MgZW4gcXVlIGNvb3JkZW5hZGFzIGVzdMOhIGVsIHNjcm9sbCBlbiBiYXNlIGEgbGEgcGFydGUgZGUgc29icmVGZXN0aXZhbCwgY3VhbmRvIGVzYXMgY29vcmRlbmFkYXNcclxuICAgICAgICAvL3NlYW4gbWVub3JlcyBhIDEgcXVpZXJlIGRlY2lyIHF1ZSB5YSBzZSBwYXNvIGVsIGVsZW1lbnRvLCBjdWFuZG8gZXN0byBwYXNhIHRlbmVtb3MgcXVlIGFncmVnYXIgbGEgYmFycmEgZGUgbmF2ZWdhY2lvbi5cclxuICAgICAgICBjb25zb2xlLmxvZyhoZWFkZXJfaW1nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSk7XHJcbiAgICAgICAgaWYoaGVhZGVyX2ltZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPCAxKSB7XHJcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdmaXhlZCcpO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XHJcbiAgICAgICAgfVxyXG59KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2Nyb2xsTmF2ZWdhY2lvbigpe1xyXG4gICAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2ZWdhY2lvbi1wcmluY2lwYWwgYScpO1xyXG5cclxuICAgIG5hdkxpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT57XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgLy9sbyBxdWUgaGFjZSBsYSBzaWd1aWVudGUgbGluZWEsIGVzIHRvbWFyIGVsIGhyZWYgZGVsIGVubGFjZSB5IGJ1c2NhciBlbCBlbGVtZW50byBxdWUgdGVuZ2EgZXNlIGlkXHJcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25TY3JvbGwgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICAgICAgLy9FbCBzaWd1aWVudGUgcXVlcnlTZWxlY3RvciBlcyBwYXJhIHNlbGVjY2lvbmFyIGVsIGVsZW1lbnRvIHF1ZSB0ZW5nYSBlbCBpZCBxdWUgc2Ugb2J0dXZvIGVuIGxhIGxpbmVhIGFudGVyaW9yXHJcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlY3Rpb25TY3JvbGwpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9Fc3RvIGhhY2UgcXVlIGVsIHNjcm9sbCBzZWEgc3VhdmVcclxuICAgICAgICAgICAgc2VjdGlvbi5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6ICdzbW9vdGgnfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzYWx0YXJFbmxhY2UoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24nKVxyXG4gICAgICAgIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmVnYWNpb24tcHJpbmNpcGFsIGEnKVxyXG5cclxuICAgICAgICBsZXQgYWN0dWFsID0gJyc7XHJcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaCggc2VjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIC8vb2Zmc2V0VG9wIE9idGllbmUgbGEgZGlzdGFuY2lhIGRlc2RlIGxhIHBhcnRlIHN1cGVyaW9yIGRlIGxhIHDDoWdpbmEgaGFzdGEgZWwgaW5pY2lvIGRlIGNhZGEgc2VjY2nDs24uXHJcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25Ub3AgPSBzZWN0aW9uLm9mZnNldFRvcFxyXG4gICAgICAgICAgICAvL0NsaWVudEhlaWdodCBPYnRpZW5lIGxhIGFsdHVyYSBkZSBsYSBzZWNjacOzbi5cclxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbkhlaWdodCA9IHNlY3Rpb24uY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgICAgIC8vRWwgc2lndWllbnRlIGlmIGVzIHBhcmEgc2FiZXIgc2kgZWwgc2Nyb2xsIGVzdGEgZW4gbGEgcGFydGUgc3VwZXJpb3IgZGUgbGEgcGFnaW5hLCBzaSBlcyBhc2kgZWwgb2Zmc2V0VG9wIGVzIDBcclxuICAgICAgICAgICAgLy9jdWFuZG8gZWwgc2Nyb2xsIGVzIG1heW9yIGEgbGEgcGFydGUgc3VwZXJpb3IgZGUgbGEgc2VjY2lvbiBtZW5vcyBsYSBtaXRhZCBkZSBsYSBhbHR1cmEgZGUgbGEgc2VjY2lvblxyXG4gICAgICAgICAgICAvL2VzIHBvcnF1ZSBlbCBzY3JvbGwgZXN0YSBlbiBsYSBzZWNjaW9uIGFjdHVhbFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU0NST0xMOicgKyB3aW5kb3cuc2Nyb2xsWSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ29mZnNldFRvcDogJyAgKyBzZWN0aW9uVG9wKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2xpZW50SGVpZ2h0OiAnICsgc2VjdGlvbkhlaWdodClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NUIC0gU0ggLzM6ICcgKyAoc2VjdGlvblRvcCAtIHNlY3Rpb25IZWlnaHQgLyAzKSlcclxuICAgICAgICAgICAgaWYod2luZG93LnNjcm9sbFkgPj0gKHNlY3Rpb25Ub3AgLSBzZWN0aW9uSGVpZ2h0IC8gMykgJiYgc2VjdGlvbi5pZCAhPSAnYmxvZ3MnKSB7XHJcbiAgICAgICAgICAgICAgICBhY3R1YWwgPSBzZWN0aW9uLmlkXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZih3aW5kb3cuc2Nyb2xsWSA+PSAoc2VjdGlvblRvcCAtIHNlY3Rpb25IZWlnaHQgLyA1KSkgeyBcclxuICAgICAgICAgICAgICAgIC8qRXN0ZSBlbHNlIGlmIGVzIHBhcmEgcmVzYWx0YXIgZWwgZW5sYWNlIGRlIGxhIHNlY2Npb24gYmxvZ3NcclxuICAgICAgICAgICAgICAgIExvIGhhZ28gLzUgcG9ycXVlIGNvbW8gbGEgc2VjdGlvbiBibG9nIGVzIG1hcyBncmFuZGUgcXVlIGxhcyBkZW1hcywgc2kgbG8gaGFnbyAvMyBzZSByZXNhbHRhIGFudGVzIGRlIGxsZWdhciBhIGxhIHNlY2Npb24uXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uVG9wKGRpc3RhbmNpYSBkZXNkZSBsYSBwYXJ0ZSBzdXBlcmlvciBhIGxhIHNlY2Npb24pIC0gc2VjdGlvbkhlaWdodChBbHR1cmEgZGUgbGEgc2VjY2lvbikgLyAzLCBkZSBlc3RhIGZvcm1hXHJcbiAgICAgICAgICAgICAgICBjdWFuZG8gdmVuaW1vcyBkYW5kbyBzY3JvbGwsIHkgYXBhcmV6Y2EgMS8zIHBhcnRlcyBkZSBsYSBzZWNjaW9uLCBzZSByZXNhbHRhIHN1IGRlYmlkbyBlbmxhY2UsIGFob3JhIHBhcmEgYmxvZ3Mgc2VyaWFuIDEvNSBwYXJ0ZXMuKi9cclxuICAgICAgICAgICAgICAgIGFjdHVhbCA9ICdibG9ncydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy9FbCBzaWd1aWVudGUgZm9yRWFjaCBlcyBwYXJhIHJlc2FsdGFyIGVsIGVubGFjZSBxdWUgY29ycmVzcG9uZGUgYSBsYSBzZWNjaW9uIGFjdHVhbFxyXG4gICAgICAgIG5hdkxpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICAgICAgaWYobGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSA9PT0gJyMnICsgYWN0dWFsKSB7XHJcbiAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpIC8vQWdyZWdhciBjb21wYXJ0YW1pZW50b3MgY3NzIGEgbGEgY2xhc2UgbnVldmEgYWN0aXZlLlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn0iXSwiZmlsZSI6ImFwcC5qcyJ9
