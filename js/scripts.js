// window.sr = ScrollReveal({ reset:true});
// ScrollReveal({ distance: '15px' });
// sr.reveal('.desenho', {duration : 3000, origin: 'right'})
// sr.reveal('.descricao', {duration : 3000, origin: 'left'})
// sr.reveal('.linkedin', {duration : 3000,  origin: 'left'})
// sr.reveal('.projetos-itens', {duration : 3000, origin:'bottom'})
// sr.reveal('.project', {duration : 3000, origin:'bottom'})
// sr.reveal('.github-link', {duration : 3000, origin:'bottom'})
// sr.reveal('.conteiner-skills', {duration : 3000, origin:'left'})
// sr.reveal('.conteiner-descricao', {duration : 3000, origin:'right'})

document.addEventListener('DOMContentLoaded', function () {
  // Espera o DOM ser totalmente carregado

  const verMaisButton = document.querySelector('.github-link button');
  const projetosEscondidos = document.querySelectorAll('.pro.escondido');

  verMaisButton.addEventListener('click', function () {
    // Adiciona ou remove a classe 'escondido' dos projetos
    projetosEscondidos.forEach((projeto) => {
      projeto.classList.toggle('escondido');
    });

    // Verifica se está no en-index
    const isEnIndex = window.location.pathname.includes('en-index');

    // Muda o texto do botão para refletir se os projetos estão visíveis ou não
    let buttonText = '';
    if (isEnIndex) {
      buttonText = verMaisButton.textContent === 'See more' ? 'See less' : 'See more';
    } else {
      buttonText = verMaisButton.textContent === 'Ver mais' ? 'Ver menos' : 'Ver mais';
    }

    verMaisButton.textContent = buttonText;
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var downloadButton = document.getElementById('downloadButton');
  // console.log(downloadButton)
  // debugger
  if (downloadButton) {
    downloadButton.addEventListener('click', function() {
      var link = document.createElement('a');
      link.href = './Ana Julia Gaspar - Curriculo'; 
      link.download = 'Ana Julia Gaspar - Curriculo.pdf'; 
      link.click();
    });
  }
});


