window.sr = ScrollReveal({ reset:true});
ScrollReveal({ distance: '15px' });
sr.reveal('.desenho', {duration : 3000, origin: 'right'})
sr.reveal('.descricao', {duration : 3000, origin: 'left'})
sr.reveal('.linkedin', {duration : 3000,  origin: 'left'})
sr.reveal('.projetos-itens', {duration : 3000, origin:'bottom'})
sr.reveal('.project', {duration : 3000, origin:'bottom'})
sr.reveal('.github-link', {duration : 3000, origin:'bottom'})
sr.reveal('.conteiner-skills', {duration : 3000, origin:'left'})
sr.reveal('.conteiner-descricao', {duration : 3000, origin:'right'})

document.addEventListener('DOMContentLoaded', function () {
  // Espera o DOM ser totalmente carregado

  const verMaisButton = document.querySelector('.github-link button');
  const projetosEscondidos = document.querySelectorAll('.pro.escondido');

  verMaisButton.addEventListener('click', function () {
    // Adiciona ou remove a classe 'escondido' dos projetos
    projetosEscondidos.forEach((projeto) => {
      projeto.classList.toggle('escondido');
    });

    // Muda o texto do botão para refletir se os projetos estão visíveis ou não
    const buttonText = verMaisButton.textContent === 'Ver mais' ? 'Ver menos' : 'Ver mais';
    verMaisButton.textContent = buttonText;
  });
});



document.getElementById('downloadButton').onclick = function() {
  // Cria um elemento <a> para o download
  var link = document.createElement('a');
  link.href = 'caminho-para-o-seu-curriculo.pdf'; // Substitua pelo caminho do seu arquivo PDF
  link.download = 'seu-curriculo.pdf'; // Substitua pelo nome do seu arquivo PDF
  link.click(); // Simula um clique no link para iniciar o download
}
