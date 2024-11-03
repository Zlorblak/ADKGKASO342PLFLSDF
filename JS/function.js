const Search_Options = document.querySelector('.Search-Option');


document.getElementById('Lupa').addEventListener('click',function(){    
    Search_Options.style.top='98px';    
});

const Menu = document.querySelector('.Menu-Options');

document.getElementById('Menu').addEventListener('click',function(){
    Menu.style.right='0';
});

document.getElementById('Close').addEventListener('click',function(){
    Menu.style.right='-100%';
});

document.getElementById('Close-1').addEventListener('click',function(){
    Search_Options.style.top = '-100%';
});

document.querySelector('a[href="#Category"]').addEventListener('click', function(event) {
    event.preventDefault();
    const target = document.querySelector('#Category');
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - 265;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});