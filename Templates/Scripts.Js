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

//função de registro de tarefas e mensagem de sucesso!
const btn_registration_task = document.getElementById ('btn_registration_task');
btn_registration_task.addEventListener ('click', function (){

    let tasktitle = document.getElementById ('Task_title').value;
    let firstpriority = document.getElementById ('First_priority').value;
    let secondpriority = document.getElementById ('Second_priority').value;
    let descreptask = document.getElementById ('Descrep_Task').value;

    localStorage.setItem('taskTitle', tasktitle);
    localStorage.setItem('firstPriority', firstpriority);
    localStorage.setItem('secondPriority', secondpriority);
    localStorage.setItem('descrepTask', descreptask);    

    setTimeout(() => {
        console.log("Primeiro Timer Acionado")
        const Body_Blur = document.getElementById ('Body_Blur');
   
        document.getElementById('Body_Blur').style.pointerEvents = "none"; // bloqueio de interação

        Body_Blur.classList.add('corpo_completo');
    
        document.getElementById ('confered').style.display = 'block';
        document.getElementById ('message_regs').style.display = 'block';
    }, 1000);

        setTimeout(() => {
            console.log("Segundo Timer Acionado")
            Body_Blur.classList.remove('corpo_completo');
            document.getElementById('Body_Blur').style.pointerEvents = "auto";
            document.getElementById ('confered').style.display = 'none';
            document.getElementById ('message_regs').style.display = 'none'; 
        }, 2000);
        
  
   
})  