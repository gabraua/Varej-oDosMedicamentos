function mostrarMenu() {
    $('header nav#nav_esquerda ul.menu_principal').css('display', 'flex');
    $('header nav#nav_esquerda ul#icone_menu li#menu').css('display', 'none');
    $('header nav#nav_esquerda ul#icone_menu li#menuX').css('display', 'flex');
}

function esconderMenu() {
    $('header nav#nav_esquerda ul.menu_principal').css('display', 'none');
    $('header nav#nav_esquerda ul#icone_menu li#menu').css('display', 'flex');
    $('header nav#nav_esquerda ul#icone_menu li#menuX').css('display', 'none');
}

let controle = true;

$('header nav#nav_esquerda ul#icone_menu li#menu').click(function() {
    if (controle == true) {
        mostrarMenu();
        controle = false; 
    } else {
        esconderMenu();
        controle = true; 
    }
});

// Adicionando evento de clique para o menuX também
$('header nav#nav_esquerda ul#icone_menu li#menuX').click(function() {
    esconderMenu();
    controle = true;
});
