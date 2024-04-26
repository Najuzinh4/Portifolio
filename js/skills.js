const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
    '<p>HTML</p> <br> <p>I started studying HTML in 2018, during my time at Etec, and deepened my knowledge by using it in my thesis work (TCC).</p> <br>',
    '<p>CSS</p> <br> <p>Just like HTML, I began studying CSS in 2018 at Etec. During the TCC in 2020, I improved my skills to create attractive web designs.</p> <br>',
    '<p>JavaScript</p> <br> <p>My journey with JavaScript started in 2020 when I needed to quickly learn it to complete my TCC during the pandemic. Since then, I have used this powerful language in various projects, including this one.</p> <br>',
    '<p>C Sharp</p> <br> <p>Since 2019, I have been using C# to develop desktop and web applications during my technical studies. My knowledge was consolidated during an internship in the specific area of .NET and EntityFrameworkCore.</p> <br>',
    '<p>PHP</p> <br> <p>I started studying PHP in 2019 at Etec. During the pandemic in 2020, I deepened my knowledge on my own and used PHP in significant projects, including my TCC.</p> <br>',
    '<p>Java</p> <br> <p>Since 2020, I have been programming in Java, including an internship in the field. In 2022, the Systems Information discipline at Unesp solidified my knowledge in Java.</p> <br>',
    '<p>SQL</p> <br> <p>I have developed advanced skills in SQL, both during my technical course and in professional experiences. Currently, I use SQL daily to perform both complex and simple operations.</p> <br>',
    '<p>Github</p> <br> <p>I joined GitHub in 2023 and since then have completed two courses. This year, I started my practical journey with Git in the workplace, complemented by the Data Structures 2 discipline at college.</p> <br>'
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
        descricao.innerHTML = 'Hover over a skill to read the description :)';
    } )
} );