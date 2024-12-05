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
    btnadicionar.style.display= 'block'; 
    //aqui mostra novamente o botão quando clicar em "TODAS AS TAREFAS", o mesmo para as funções abaixo.
})

const btnprioridades = document.getElementById ('btnprioridades');
btnprioridades.addEventListener ('click', function (){
    btnadicionar.style.display= 'block';
})

const btnsegundoplano = document.getElementById ('btnsegundoplano');
btnsegundoplano.addEventListener ('click', function (){
    btnadicionar.style.display= 'block';
})

//função: adicionar tarefa ao clicar em +
const task_adicioned_box = document.getElementById('task_adicioned_box');
btnadicionar.addEventListener ('click', function(){
    task_adicioned_box.style.display= 'block';
})