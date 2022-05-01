var segundo = 0;
var minuto = 0;
var timer_seg;
var timer_min;
var tempo;
let h = document.getElementsByTagName('h1')[0];
let mostrar_tempo = document.querySelector('.mostrar_tempo');
//let timeSalvo = document.querySelectorAll('.caixa_time');
//let excluir = document.getElementById('ex')
let lista_salvos = [

] 
 

 //functions   

function atualizarSegundo(){   
    segundo++;
    if (segundo == 60){
        segundo = 0;
    }
    console.log(segundo)

    MostrarTempo();
}
function atualizarMinuto(){
    
    minuto++;

    if(minuto == 60){
        minuto = 0;
    }
    console.log('---'+minuto)
    MostrarTempo();
}

function iniciar(){
    timer_seg = setInterval(atualizarSegundo, 1000);
    timer_min = setInterval(atualizarMinuto, (1000*60));
    
}

function parar(){
    clearInterval(timer_seg);
    clearInterval(timer_min);
}

function limpar(){
    clearInterval(timer_seg);
    clearInterval(timer_min);
    segundo = 0;
    minuto = 0;
    h.innerHTML = '00:'+ minuto + minuto+':'+segundo+segundo;

}

function MostrarTempo(){
 let h = document.getElementsByTagName('h1')[0];
    
    if(segundo <= 9){
        if(minuto <= 9){
            h.innerHTML = '00:0'+minuto+':0' + segundo;
        }else{
            h.innerHTML = '00:'+minuto+':0'+ segundo;
        }
        
    }
    else if(segundo <= 60){
        if(minuto <= 9 ){
            h.innerHTML = '00:0'+minuto+':' + segundo;
        }else{
            h.innerHTML = '00:'+minuto+':'+ segundo;
        }
    }
    else {
        // segundo = 0;
        console.log('Erro ')
        
    }
    //OBS: Não fiz a condição de mostrar horas pois acho que iria demorar muito tempo só pra repetir isso;
    
     
    console.log(segundo)
}
function salvarTempo(){
    tempo = h.textContent;
    localStorage.setItem('tempo', tempo);
    let tempo_salvo = localStorage.getItem('tempo');
    console.log('- ',tempo)
    console.log('--- ', tempo_salvo)

    lista_salvos.push(tempo_salvo);
    //console.log('-> ', lista_salvos)

     
      mostrar_tempo.innerHTML += '<p class="time_salvo">'+ tempo_salvo +'</p>'
      // '<input class="btn-excluir" onclick="excluirUm(this)" type="submit" value="Excluir">';

        
}
function excluirTudo(){
    mostrar_tempo.innerHTML = '';
}
// function excluirUm(e){

//     //e.localStorage.removeItem('tempo')
//     e.textContent = ' ';

//         console.log('oi')

// }
// function mostrarTemposSalvos(){
//     for (let i = 0; i < lista_salvos.length; i++) {
        
//       mostrar_tempo.innerHTML += '<p class="time_salvo">'+ lista_salvos[i] +'</p>' +
//       '<input class="btn-excluir" onclick="excluirUm(this)" type="submit" value="Excluir">';
//       console.log('-    xx   ' , lista_salvos[i])  
//     }
// }


