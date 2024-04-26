const meuNome = document.querySelector('.meu-nome');
const fName = meuNome.innerHTML;
const botaoVerMais = document.querySelector('button');
const habilidades = document.querySelectorAll('.escondido');
const node = document.querySelector('#fundo')
meuNome.innerHTML='';

function cliqueVer (e) {
    const isEnIndex = window.location.pathname.includes('en-index');
    habilidades.forEach( (elemento) => {
        if (elemento.classList.contains('escondido')) {
            elemento.classList.remove('escondido');
            elemento.classList.add('visivel');


            if (isEnIndex){
                botaoVerMais.innerHTML = 'See Less';
            } else {
                botaoVerMais.innerHTML = 'Ver menos';
            }

        } else {
            elemento.classList.add('escondido');
            elemento.classList.remove('visivel');

            if (isEnIndex){
                botaoVerMais.innerHTML = 'See More';
            } else {
                botaoVerMais.innerHTML = 'Ver mais';
            }
        }
    } )
}

function maisHabilidades (elemento) {
    elemento.addEventListener('click', cliqueVer)
}

function typeWriter (nome) {
    setTimeout( () => {
    const meuNomeF = nome.split('');
    meuNome.innerHTML='';
    meuNomeF.forEach( (letra, index) => {
        setTimeout(function (){
            meuNome.innerHTML += letra;
        }, 150 * index)
    })}, 1500)
    
}

/* typeWriter(fName); */
maisHabilidades(botaoVerMais);