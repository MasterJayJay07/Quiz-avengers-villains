const escolhas = document.getElementsByClassName("choose")
let botaoSubmit = document.getElementById("resultado")
let botaoReset = document.getElementById("reset")
let containerResultado = document.getElementById("tipoDePokemon")
let containerEscolhas = document.getElementById("formulario")
let tituloQuiz = document.getElementsByTagName("h1")[0]
let tituloTipo = document.getElementById("tituloTipo")
let fraseTipo = document.getElementById("frase")
let boxImage = document.getElementById("boxImage")
let boxMsg = document.getElementById("nameMsg")
let botaoNome = document.getElementById("botaoNome")
let msgDoNome = document.getElementById("nomeDaPessoa")



//botão calcula tipo do pokemon pelas respostas
botaoSubmit.addEventListener("click", function(e){
    e.preventDefault()
    let sum = 0
    let num = 0
    for (let i=0; i<escolhas.length; i++){
        if(escolhas[i].checked){
            num = parseInt(escolhas[i].value)
            sum = sum+num
        }
    }
    tituloQuiz.classList.add("sumir")
    containerEscolhas.classList.add("sumir")
    nameMsg.classList.remove("sumir")
    if(sum===210){
        boxImage.style.backgroundImage="url(./img/flashreverso.jpg)"
        tituloTipo.innerHTML="Flash Reverso"
        fraseTipo.innerHTML="Cara, você não deixa ninguém e nada ficar entre você e seus planos, nem o tempo. Não se importa nem um pouco com as consequências dos seus atos e vai até o seu fim ou do seu adversário."
    }
    if(sum===140){
        boxImage.style.backgroundImage="url(./img/thanos.jpeg)"
        tituloTipo.innerHTML="Thanos"
        fraseTipo.innerHTML="Você acredita que tem as melhores soluções para os problemas de todos e não importa o mal que você cause para provar que está certo. Suas motivações são apenas baseadas no seu ponto de vista e se recusa a aceitar quando erra, quase um militante de twitter."
    }
    if(sum===70){
        boxImage.style.backgroundImage="url(./img/magneto.jpg)"
        tituloTipo.innerHTML="Magneto"
        fraseTipo.innerHTML="Você buscaria ter muita influência e fidelidade dos seus seguidores, quase que criando uma seita. Também acha que todos aqueles que ficarem contra você devem ser exterminados, mesmo se forem seus amigos."
    }
    if(sum===0){
        boxImage.style.backgroundImage="url(./img/coringa.jpg)"
        tituloTipo.innerHTML="Coringa"
        fraseTipo.innerHTML="Você apenas quer ver o caos, onde tem briga ou confusão você está lá com sua pipoca e refrigerante assistindo toda a treta que em algumas vezes você causou. Certeza que você era aquela pessoa na escola que quando via um principio de briga falava; 'Eu não deixava'."
    }
    if(sum<210 && sum>140){
        boxImage.style.backgroundImage="url(./img/venom.jpg)"
        tituloTipo.innerHTML="Venom"
        fraseTipo.innerHTML="Você se parece muito com aqueles que considera rivais e pode até só ser do jeito que é atualmente por causa deles. Você não é totalmente mal, apenas acha que foi injustiçado e busca se vingar por causa disso."
    }
    if(sum<140 && sum>70){
        boxImage.style.backgroundImage="url(./img/rasalghul.jpg)"
        tituloTipo.innerHTML="Ra's al Ghul"
        fraseTipo.innerHTML="Você é mais quieto na sua e poucos sabem quando você está envolvido em algo mas mesmo assim você é peça chave em grandes acontecimentos. Embora você se importe com poder e dinheiro, você rejeita fama e prefere controlar tudo das sombras."
    }
    if(sum<70 && sum>0){
        boxImage.style.backgroundImage="url(./img/exterminador.jpg)"
        tituloTipo.innerHTML="Exterminador"
        fraseTipo.innerHTML="Você é muito estrategista e frio, pensa muito bem nos seus planos antes de por em prática e isso sempre te dá uma vantagem caso haja um imprevisto. Você sempre procura desafios a sua altura ou mais para se provar e sempre está atrás das melhores recompensas."
    }
    return sum
})



//botão resetar teste
botaoReset.addEventListener("click", function(){
    tituloQuiz.classList.remove("sumir")
    containerResultado.classList.add("sumir")
    containerEscolhas.classList.remove("sumir")
    location.reload()
})



//modo escuro site
let botaoDark = document.getElementById("dark")
let fraseDarkmode = document.getElementById("labelDark")
fraseDarkmode.innerHTML="modo-escuro"

botaoDark.addEventListener("click", function(){
    let container = document.getElementById("container")
    let h1 = document.getElementsByTagName("h1")[0]
    let corpo = document.getElementsByTagName("body")[0]
    let modo = botaoDark.checked
    if(modo===true){
        container.classList.add("dark-mode")
        h1.classList.add("dark-mode")
        corpo.classList.add("dark-mode")
        fraseDarkmode.innerHTML="modo-escuro ligado"
        fraseDarkmode.style.color="#fff"
        return modo
    }
    if(modo===false){
        container.classList.remove("dark-mode")
        h1.classList.remove("dark-mode")
        corpo.classList.remove("dark-mode")
        fraseDarkmode.innerHTML="modo-escuro desligado"
        fraseDarkmode.style.color="#1C1C1C"
        return modo
    }
})

//caixa de nome
botaoNome.addEventListener("click", function(){
    let inputNome = document.getElementById("escreverNome").value
    let nome = inputNome
    let newParagraph = document.createElement("p")
    if(nome==="Nathália" || nome==="Nathalia" || nome==="nathália" || nome==="nathalia"){
        newParagraph.innerHTML=`${nome}, primeiramente, você à melhor professora de inglês da história mundial, e o tipo que mais combina com você é o :`
        msgDoNome.appendChild(newParagraph)
        containerResultado.classList.remove("sumir")
        nameMsg.classList.add("sumir")
        return nome
    }
    if(nome==="Ingrid" || nome==="ingrid"){
        newParagraph.innerHTML=`${nome}, não sei porque você está aqui, você devia estar ganhando dinheiro, mas já que está aqui, o tipo que mais combina com você é o :`
        msgDoNome.appendChild(newParagraph)
        containerResultado.classList.remove("sumir")
        nameMsg.classList.add("sumir")
        return nome
    }
    if(nome==="Igor" || nome==="igor"){
        newParagraph.innerHTML=`${nome}, lembre-se, esqueça os erros do passado e foque nos erros do futuro, o tipo que mais combina com você é o :`
        msgDoNome.appendChild(newParagraph)
        containerResultado.classList.remove("sumir")
        nameMsg.classList.add("sumir")
        return nome
    }
    if(nome==="André" || nome==="Andre" || nome==="andré" || nome==="andre"){
        newParagraph.innerHTML=`${nome}, bão demais, é os guri, o tipo que mais combina com você é o :`
        msgDoNome.appendChild(newParagraph)
        containerResultado.classList.remove("sumir")
        nameMsg.classList.add("sumir")
        return nome
    }
    else {
        newParagraph.innerHTML=`${nome}, com certeza você seria o:`
        msgDoNome.appendChild(newParagraph)
        containerResultado.classList.remove("sumir")
        nameMsg.classList.add("sumir")
        return nome
    }
})