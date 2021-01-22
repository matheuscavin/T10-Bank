// Scroll to section function
$(document).ready(function(){
    $("li").on('click', function(event) {
        let section;
        if(event.target.innerHTML === 'Home') {
            section = 'home';
        } else if(event.target.innerHTML === 'Sobre nós') {
            section = 'aboutUs';
        } else if(event.target.innerHTML === 'Serviços') {
            section = 'services';
        } else if(event.target.innerHTML === 'Portfólio') {
            section = 'portfolio';
        } else if(event.target.innerHTML === 'Contato') {
            section = 'contact';
        }
        $('html, body').animate({
            scrollTop: document.getElementById(section).offsetTop
        }, 800);
    });
});

// Open/Close Mobile menu
function openMenu() {
    let menu = document.getElementById('overflow')
    if(menu.style.display !== 'block') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}
