document.addEventListener('DOMContentLoaded', function () {
  // Espera o DOM ser totalmente carregado

  const verMaisButton = document.querySelector('.github-link button');
  const projetosEscondidos = document.querySelectorAll('.pro escondido');

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
          buttonText =
              verMaisButton.textContent === 'See more'
                  ? 'See less'
                  : 'See more';
      } else {
          buttonText =
              verMaisButton.textContent === 'Ver mais'
                  ? 'Ver menos'
                  : 'Ver mais';
      }

      verMaisButton.textContent = buttonText;
  });
});

document.getElementById('downloadButton').addEventListener('click', () => {
    const isEnIndex = window.location.pathname.includes('en-index');
    console.log ('alouuuuu');
    if (isEnIndex){
        var link = document.createElement('a');
        link.href = './Ana Julia Gaspar - resume.pdf';
        link.download = `Ana Julia Gaspar - resume.pdf`;
        link.click();
    }
    else {
        var link = document.createElement('a');
        link.href = './Ana Julia Gaspar - Curriculo.pdf';
        link.download = `Ana Julia Gaspar - Curriculo.pdf`;
        link.click();
    }
 
});