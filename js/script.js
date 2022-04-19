var segundo = 0;
var minuto = 0;

var timer_seg;
var timer_min;


    
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
    let h = document.getElementsByTagName('h1')[0];
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
    
    console.log(segundo)
    
    
    

}