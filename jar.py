import pyaudio
import vosk
import pyttsx3
import json

# Configurações do PyAudio
FORMAT = pyaudio.paInt16
CHANNELS = 1
RATE = 32000
CHUNK = 1024

# Inicializa o PyAudio, tts e o Vosk
pa = pyaudio.PyAudio()
engine = pyttsx3.init('sapi5')
model = vosk.Model("model")

# configurar a voz
voice = engine.getProperty('voices')
engine.setProperty("voice", voice[0].id)

# função para agilizar as falas, só usar "speak('fala')"
def speak(tts):
    engine.say(tts)
    engine.runAndWait()

# criar um objeto Vosk Recognizer
rec = vosk.KaldiRecognizer(model, RATE)
print(pa.get_default_input_device_info())

# começar a gravar (iniciar a gravação)
stream = pa.open(format=FORMAT,
                 channels=CHANNELS,
                 rate=RATE,
                 input=True,
                 frames_per_buffer=CHUNK)

info = pa.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

# for i in range(0, numdevices):
#     if (pa.get_device_info_by_host_api_device_index(0, i).get('maxOutputChannels')) > 0:
#         print("Input Device id ", i, " - ", pa.get_device_info_by_host_api_device_index(0, i).get('name'))

print('Estou te ouvindo...') 

# Reconhcendo/Gravando em si
while True:

    # Lê os dados do "stream" do ádio que está sendo captado
    data = stream.read(CHUNK)

    # Enviar os dados que acabaram de ser captados para o VOSK hehe
    if rec.AcceptWaveform(data):# "se" ele reconhecer algo...

        # escreva qual o resultado, o que reconheceu.
        result = rec.Result()
        result = json.loads(result)
        print(result['text'])
            

# Encerrar
stream.stop_stream()
stream.close()
pa.terminate()
