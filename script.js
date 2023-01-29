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


function greeting(){
    data = new Date()
    hora = data.getHours()

    if(hora < 12 && hora >= 6){
        return 'good morning'
    }else if(hora < 18 && hora >= 12){
        return 'good afternoon'
    }else{
        return 'good night'
    }
}

function English(){
    let about = window.document.getElementById('sobre')
    let text_about = window.document.getElementById('texto-sobre')
    let contacts = window.document.getElementById('contatos')
    let projects = window.document.getElementById('h2-projetos')
    let average_calculator = window.document.getElementById('calculadora-de-media')
    let bhaskara_calculator = window.document.getElementById('calculadora-de-bhaskara')
    let discount_calculator = window.document.getElementById('calculadora-desconto')
    let footer = window.document.getElementById('footer')

    text_about.innerHTML = `Hello, ${greeting()}! I'm Allan, I'm ${idade()} years old and I'm a technology and programming lover. I intend to become a great programmer, of course I'm just starting out, but for me not even the sky is the limit. In addition to programming, I also like to read and play video games, I love a good story and good content.`

    about.innerHTML = `About:`

    contacts.innerHTML = `Contacts:`

    projects.innerHTML = `Projects:`

    average_calculator.innerHTML ='Average Calculator'

    bhaskara_calculator.innerHTML = 'Bhaskara Calculator'

    discount_calculator.innerHTML = 'Discount Calculator'
    
    footer.innerHTML = 'Developed by Allan Souza Cordeiro'
}

function Portuguese(){
    let sobre = window.document.getElementById('sobre')
    let texto_sobre = window.document.getElementById('texto-sobre')
    let contatos = window.document.getElementById('contatos')
    let projetos = window.document.getElementById('h2-projetos')
    let calculadora_de_media = window.document.getElementById('calculadora-de-media')
    let calculadora_de_bhaskara = window.document.getElementById('calculadora-de-bhaskara')
    let calculadora_de_desconto = window.document.getElementById('calculadora-desconto')
    let footer = window.document.getElementById('footer')

    texto_sobre.innerHTML = `Olá, ${saudacao()}! eu sou o Allan, tenho ${idade()} anos e sou um amante da tecnologia e programação. Pretendo me tornar um grande programador, claro que estou só no começo, porém para mim nem o céu é o limite. Além de programar gosto também de ler e jogar, amo uma boa história e um bom conteudo.`

    sobre.innerHTML = `Sobre:`

    contatos.innerHTML = `Contatos:`

    projetos.innerHTML = `Projetos:`

    calculadora_de_media.innerHTML ='Calculadora de Média'

    calculadora_de_bhaskara.innerHTML = 'Calculadora de Bhaskara'

    calculadora_de_desconto.innerHTML = 'Calculadora de Desconto'
    
    footer.innerHTML = 'Desenvolvido por Allan Souza Cordeiro'
}



