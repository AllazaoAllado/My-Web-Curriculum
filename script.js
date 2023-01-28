let sobre = window.document.getElementById('texto-sobre')

sobre.innerHTML = `Olá, ${saudacao()}! eu sou o Allan, tenho ${idade()} anos e sou um amante da tecnologia e programação. Pretendo me tornar um grande programador, claro que estou só no começo, porém para mim nem o céu é o limite. Além de programar gosto também de ler e jogar, amo uma boa história e um bom conteudo.`


function idade(){
    var data = new Date()
    var dia = data.getDate()
    var mes = data.getMonth() +1
    var ano = data.getFullYear()
    var data_nasc = [20,7,2003]

    if(dia != data_nasc[0] || mes != data_nasc[1]){
        return ano - data_nasc[2] - 1
    }else{
        return ano - data_nasc[2]
    }
}

function saudacao(){
    data = new Date()
    hora = data.getHours()

    if(hora < 12 && hora >= 6){
        return 'bom dia'
    }else if(hora < 18 && hora >= 12){
        return 'boa tarde'
    }else{
        return 'boa noite'
    }
}




