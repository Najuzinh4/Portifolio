const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<p>HTML</p> <br> <p>Comecei a estudar HTML em 2018, durante meu tempo na Etec, e aprofundei meu conhecimento ao usá-lo no meu trabalho de conclusão de curso (TCC).</p> <br>',
                    '<p>CSS</p> <br> <p>Assim como o HTML, iniciei meus estudos em CSS em 2018 na Etec. Durante o TCC em 2020, aprimorei minhas habilidades para criar designs atraentes para a web.</p> <br>',
                    '<p>JavaScript</p> <br> <p>Minha jornada com JavaScript começou em 2020, quando precisei aprender rapidamente para concluir meu TCC durante a pandemia. Desde então, utilizei essa linguagem poderosa em diversos projetos,inclusive nesse.</p> <br>',
                    '<p>C Sharp</p> <br> <p>Desde 2019, tenho usado C# para desenvolver aplicativos desktop  web durante meu técnico. Meu conhecimento foi consolidado durante um estágio na área específico em .NET e EntityFrameWorkCore</p> <br>',
                    '<p>PHP</p> <br> <p>Iniciei meus estudos em PHP em 2019 na Etec. Durante a pandemia em 2020, aprofundei meu conhecimento por conta própria e utilizei PHP em projetos significativos, incluindo meu TCC.</p> <br>',
                    '<p>Java</p> <br> <p>Desde 2020, tenho programado em Java, incluindo um estágio na área. Em 2022, a disciplina de Sistemas de Informação na Unesp solidificou meu conhecimento em Java.</p> <br>',
                    '<p>SQL</p> <br> <p>Desenvolvi habilidades avançadas em SQL, tanto durante meu curso técnico quanto em experiências profissionais. Atualmente, uso SQL diariamente para realizar operações complexas e simples também.</p> <br>',
                    '<p>Github</p> <br> <p>ngressei no GitHub em 2023 e desde então finalizei dois cursos. Este ano, iniciei minha jornada prática no Git no ambiente de trabalho, complementado pela disciplina de Estrutura de Dados 2 na faculdade.</p> <br>'
]
const dataInicio = [
                    (new Date(2021, 10, 1)).getTime(), // 0
                    (new Date(2021, 10, 1)).getTime(), // 1
                    (new Date(2022, 0, 1)).getTime(), // 2
                    (new Date(2022, 3, 1)).getTime(), // 3
                    (new Date(2022, 3, 1)).getTime(), // 4
                    (new Date(2022, 1, 1)).getTime(), // 5
                    (new Date(2021, 11, 1)).getTime(), // 6
                    (new Date(2021, 11, 1)).getTime(), // 7
                    ]
const dataHoje = (new Date()).getTime();

skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index1])/(1000*60*60*24*30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = 'Passe o mouse por cima de alguma habilidade para ler a descrição :)';
    } )
} );