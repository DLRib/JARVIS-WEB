function jarvis(){
    const button = document.getElementById("titulo");
    const statuson = document.getElementById('statuson');
    let paraContinuar;

    const timeout = setTimeout(() => {
      reconhecimento.start();
    }, 500);

    const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

    const content = document.getElementById('content');

    const reconhecimento = new SpeechRecognition;
    reconhecimento.continuous = true;
    reconhecimento.interimResults = true;
    reconhecimento.onresult = function (event) {
      let minhaFrase = '';
      
      for (let i = event.resultIndex; i < event.results.length; i++) {
        minhaFrase += event.results[i][0].transcript;
      }

      speaks = [
        {
          "name": "Clarinha",
          "lang":"pt-BR"
       }
      ]
      const msg = new SpeechSynthesisUtterance();
      msg.volume = 1; //define o volume do áudio (de 0 a 1)
      msg.rate = 2; // define a velocidade do áudio (0.1 a 1)
      msg.pitch = 0.2; // define o tom em que o áudio é falado ( de 0 a 2)
      if (minhaFrase.includes('arvis')){
          reconhecimento.stop();
          respostanum = Math.floor(Math.random() * 5 + 1);

          if (respostanum == 1){
            resposta = 'Estou aqui'
          }
          else if(respostanum == 2){
            resposta = 'Bem vindo de volta'
          }
          else if(respostanum == 3){
            resposta = 'Sim?'
          }
          else if(respostanum == 4){
            resposta = 'jarvis ativo'
          }
          else if(respostanum == 5){
            resposta = 'Inicializando servidor principal. Olá senhor!'
          }
          msg.text = resposta;
          const voice = speaks[0];
          // console.log(`Voice: ${voice.name} and Lang: ${voice.lang}`);
          voice.voiceURI = voice.name; //voiceURI busca o servidor da voz escolhida, no caso, pt-BR defnido em voice.name
          msg.lang = voice.lang; // Define o idioma a ser utilizado para a fala, no caso, o que foi definido para voice.lang
          speechSynthesis.speak(msg); //executa a voz
          iniciado();
          console.log('Jarvis foi ativado com sucesso')
      }
      content.innerText = minhaFrase;
}
}

jarvis()

function iniciado(){
    console.log("função iniciada")
    const settime = setTimeout(() => {
      jarvisTwo()
    }, 1000);
    function jarvisTwo(){
    console.log("onload funcionando")
    const button = document.getElementById("titulo");
    const statuson = document.getElementById('statuson');
      console.log("click detectado")
      const recognition = new webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.start();
      console.log('reconhecimento de comandos iniciada')
      recognition.onresult = function (event) {
      let result = '';

      const content = document.getElementById('content');
    
      
      for (let i = event.resultIndex; i < event.results.length; i++) {
        result += event.results[i][0].transcript;
      }
      if (result !== 1 && result.includes('arvi')){
        // INCLUIR O QUE QUER FALAR
        console.log('vc disse Jarvis.')
      }
      content.innerText = result;
      finall = result

      //VOZ DO JARVIS ----------------------------------------------
      
      speakss = [
        {
          "name": "Clarinha",
          "lang":"pt-BR"
       }
      ]

      if (result.includes('udo') && result.includes('e')){
        resposta = 'Tudo bem, e com o senhor?'
      }
      else if (result.includes('nos') && result.includes('oc') && result.includes('em')){
        resposta = 'Fui criado anteontem, tenho dois dias de, entre aspas, vida.'
      }
      else if (result.includes('oc') && result.includes('é') && result.includes('ue')){
        resposta = 'Só um script qualquer'
      }
      else if(result.includes('esligar')){
        resposta = "desligando, até mais."
        recognition.stop();
        statuson.style['animation-name'] = 'none';
        statuson.innerText = 'Press to Start';
        content.innerText = '';
      }
      else if(result.includes('+')){
        let x = result.substring(0, 1);
        x = parseInt(x)
        let y = result.substring(4);
        y = parseInt(y)
        iguala = x + y;
        console.log(iguala);
        result = iguala;
      }
      else if(result.includes('sica') && result.includes('oque')){
        var audio = new Audio('img/SONGS TONY/[MP3DL.CC] Back In Black-320k.MP3');
        audio.volume = 0.2;
        audio.play();
        result = "lesgo";
        resposta = "";
      }
      else if(result.includes('olume') && result.includes('ument')){
        audio.volume = 0.5;
        result = "lesgo";
        resposta = "";
      }
      else if(result.includes('ause')){
        audio.pause(audio);
        result = "lesgo";
        resposta = "";
      }
      
      else if(result.includes('Agenda') || result.includes('agenda')){
        openInNewTab();
        result = "lesgo";
        resposta = "";
      }

      else if(result.includes('obrigado') || result.includes('valeu')){
        recognition.stop()
        result = "Obrigado.";
        resposta = "por nada, até depois";
      }

      else{
        resposta = ""
        console.log(resposta)
        };
      

      document.getElementById('falaJarvis').innerHTML = resposta;

      const msg = new SpeechSynthesisUtterance();
      msg.volume = 1; //define o volume do áudio (de 0 a 1)
      msg.rate = 2; // define a velocidade do áudio (0.1 a 1)
      msg.pitch = 0.2; // define o tom em que o áudio é falado ( de 0 a 2)
      msg.text = resposta;
        
        
      const voice = speakss[0];
      // console.log(`Voice: ${voice.name} and Lang: ${voice.lang}`);
      voice.voiceURI = voice.name; //voiceURI busca o servidor da voz escolhida, no caso, pt-BR defnido em voice.name
      msg.lang = voice.lang; // Define o idioma a ser utilizado para a fala, no caso, o que foi definido para voice.lang
        
      speechSynthesis.speak(msg); //executa a voz
    };
  };
}


/*window.onload = () => {
    const button = document.getElementById("titulo");
    const statuson = document.getElementById('statuson');
    button.addEventListener('mouseover', () => {
      if (button.style['animation-name'] === 'flash') {
        recognition.stop();
        statuson.style['animation-name'] = 'none';
        statuson.innerText = 'rt';
        content.innerText = '';
      } else {
        statuson.style['animation-name'] = 'flash';
        statuson.innerText = 'op';
        recognition.start();
      }
    });

    const content = document.getElementById('content');

    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.onresult = function (event) {
      let result = '';
      
      for (let i = event.resultIndex; i < event.results.length; i++) {
        result += event.results[i][0].transcript;
      }
      if (result !== 1 && result.includes('arvi')){
        // INCLUIR O QUE QUER FALAR
        console.log('vc disse Jarvis.')


      }
      content.innerText = result;
      finall = result

      //VOZ DO JARVIS ----------------------------------------------
      
      speaks = [
        {
          "name": "Clarinha",
          "lang":"pt-BR"
       }
      ]

      if (result.includes('arvi')){
        respostanum = Math.floor(Math.random() * 5 + 1);

        if (respostanum == 1){
          resposta = 'Estou aqui'
        }
        else if(respostanum == 2){
          resposta = 'Bem vindo de volta'
        }
        else if(respostanum == 3){
          resposta = 'Sim?'
        }
        else if(respostanum == 4){
          resposta = 'jarvis ativo'
        }
        else if(respostanum == 5){
          resposta = 'Inicializando servidor principal. Olá senhor!'
        }
      }
      else if (result.includes('udo') && result.includes('e')){
        resposta = 'Tudo bem, e com o senhor?'
      }
      else if (result.includes('nos') && result.includes('oc') && result.includes('em')){
        resposta = 'Fui criado anteontem, tenho dois dias de, entre aspas, vida.'
      }
      else if (result.includes('oc') && result.includes('é') && result.includes('ue')){
        resposta = 'Só um script qualquer'
      }
      else if(result.includes('esligar')){
        resposta = "desligando, até mais."
        recognition.stop();
        statuson.style['animation-name'] = 'none';
        statuson.innerText = 'Press to Start';
        content.innerText = '';
      }
      else if(result.includes('+')){
        let x = result.substring(0, 1);
        x = parseInt(x)
        let y = result.substring(4);
        y = parseInt(y)
        iguala = x + y;
        console.log(iguala);
        result = iguala;
      }
      else if(result.includes('sica') && result.includes('oque')){
        var audio = new Audio('img/SONGS TONY/[MP3DL.CC] Back In Black-320k.MP3');
        audio.volume = 0.2;
        audio.play();
        result = "lesgo";
        resposta = "";
      }
      else if(result.includes('olume') && result.includes('ument')){
        audio.volume = 0.5;
        result = "lesgo";
        resposta = "";
      }
      else if(result.includes('ause')){
        var audio = new Audio('img/SONGS TONY/[MP3DL.CC] Back In Black-320k.MP3')
        audio.pause(audio);
        result = "lesgo";
        resposta = "";
      }
      
      else if(result.includes('Agenda') || result.includes('agenda')){
        openInNewTab();
        result = "lesgo";
        resposta = "";
      }

      else if(result.includes('obrigado') || result.includes('valeu')){
        recognition.stop()
        result = "Obrigado.";
        resposta = "por nada, até depois";
      }

      else{
        resposta = ""
        console.log(resposta)
        };
      

      document.getElementById('falaJarvis').innerHTML = resposta;

      const msg = new SpeechSynthesisUtterance();
      msg.volume = 1; //define o volume do áudio (de 0 a 1)
      msg.rate = 2; // define a velocidade do áudio (0.1 a 1)
      msg.pitch = 0.2; // define o tom em que o áudio é falado ( de 0 a 2)
      msg.text = resposta;
        
        
      const voice = speaks[0];
      // console.log(`Voice: ${voice.name} and Lang: ${voice.lang}`);
      voice.voiceURI = voice.name; //voiceURI busca o servidor da voz escolhida, no caso, pt-BR defnido em voice.name
      msg.lang = voice.lang; // Define o idioma a ser utilizado para a fala, no caso, o que foi definido para voice.lang
        
      speechSynthesis.speak(msg); //executa a voz
    };
  };*/