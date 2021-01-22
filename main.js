$(document).ready(function(){
    $("li").on('click', function(event) {
        // console.log(event.target.value)
        console.log(event.target.innerHTML)
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
