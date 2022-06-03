audioBV = 0

num = Math.floor(Math.random() * 5 + 1)
console.log(num)
if(num == 1){
    document.getElementById('msg').innerHTML = "Bem-vindo, senhor."
}
else if(num == 2){
    document.getElementById('msg').innerHTML = "Olá, senhor."
}
else if(num == 3){
    document.getElementById('msg').innerHTML = "Welcome, sr."
}
else if(num == 4){
    document.getElementById('msg').innerHTML = "Muito bom te ver novamente, senhor."
}
else if(num == 5){
    document.getElementById('msg').innerHTML = "Fico feliz em te ver, senhor."
}

let caixa = document.getElementById('caixa');
caixa.classList.add('hide')

function mostra(){
    let caixa = document.getElementById("caixa");
    caixa.classList.remove("hide");
}

function apaga(){
    let caixa = document.getElementById("caixa")
    caixa.classList.add("hide")
}

let nume = Math.floor(Math.random() * 5 + 1)
if (nume == 1){
    document.getElementById('versiculo').innerHTML = "Porque vivemos por fé, e não pelo que vemos - 2Cor 5:7"
}
else if (nume == 2){
    document.getElementById('versiculo').innerHTML = 'Conta o número das estrelas, chamando-as todas pelos seus nomes - Sl 147:4'
}
else if (nume == 3){
    document.getElementById('versiculo').innerHTML = '"E conhecereis a verdade, e a verdade vos libertará" - Jo 8:32'
}
else if (nume == 4){
    document.getElementById('versiculo').innerHTML = "Deus é maior que o dinheiro."
}
else if (nume == 5){
    document.getElementById('versiculo').innerHTML = "E vós, irmãos, não vos canseis de fazer o bem - 2Tss 3:13"
}

function fadeSound(){
    document.getElementById('fadeSound').play();
}

function abre(){
    let barraCima = document.getElementById('sinalizador');
    barraCima.classList.add('abrir')
}

function fecha(){
    let barraCima = document.getElementById('sinalizador');
    barraCima.classList.remove('abrir')
}

//--------------------------------------------

function reconhecer(){

    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        console.log("We are listening. Try speaking into the microphone.");
    };
    
    recognition.onspeechend = function() {
        // when user is done speaking
        recognition.stop();
        console.log('parou')
    }
                  
    // start recognition
    recognition.start();

    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;
        palavra = transcript;
        console.log(transcript)
    }
}

function comandos(){
    console.log("deu tudo certo.");
    
}

function atencao(){
    while (lix == 1){
        reconhecer()
        //verificar se existe "jarvis":
        if(palavra.includes("vis") == true){
            comandos();
            lix = 0;
        }
        else{
            lix = 1;
        }
    }
}

function iniciar(){
    lix = 1;
    while(1 == 1){
        atencao()
    }
}

//-------------reconhecimento de fala--------------------------
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    
    function gravar(){
    
      abre()
    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        console.log("We are listening. Try speaking into the microphone.");
    };
    
    recognition.onspeechend = function() {
        // when user is done speaking
        recognition.stop();
        console.log('parou')
    }
                  
    // start recognition
    recognition.start();

    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;
        palavra = transcript;
        console.log(transcript)


        //voz do jarvis
        console.log('conectado')

        speaks = [{"name": "Clarinha", "lang":"pt-BR"}]

        let fala = palavra;
        console.log('valor recebido: ' + fala)

        const msg = new SpeechSynthesisUtterance(); // cria um objeto sinterizador da fala
        console.log('objeto criado')

        // ATRIBUTOS/CARACTERISTICAS  DO OBJETO/VOZ

        msg.volume = 1; //define o volume do áudio (de 0 a 1)
        msg.rate = 1; // define a velocidade do áudio (0.1 a 1)
        msg.pitch = 0.5; // define o tom em que o áudio é falado (de 0 a 2)
        msg.text = fala; //Pega o valor do input e passa para o objeto sintetizar


        const voice = speaks[0]; //pegamos o objeto que queremos que seja a nossa fala. [0], pois nosso array speaks só possui uma posição, que é a que queremos (Clarinha pt-BR)
        voice.voiceURI = voice.name; //voiceURI busca o servidor da voz escolhida, no caso, pt-BR defnido em voice.name
        msg.lang = voice.lang; // Define o idioma a ser utilizado para a fala, no caso, o que foi definido para voice.lang
        
        speechSynthesis.speak(msg); //executa a voz
        fecha()
    };
    
}