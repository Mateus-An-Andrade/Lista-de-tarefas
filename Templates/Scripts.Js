//seleção de ID
const btnconcluidas = document.getElementById ('btnconcluidas');
const btnadicionar = document.getElementById ('btnadicionar');

//função: esconder o botão +
btnconcluidas.addEventListener ('click', function(){
    btnadicionar.style.display = 'none'; //esconde o '+'
});

//função: mostra o botão '+'
const btnTodasasTarefas = document.getElementById('btnTodasasTarefas');
btnTodasasTarefas.addEventListener('click',function(){
    btnadicionar.style.display= 'block'; //aqui mostra novamente o botão
})