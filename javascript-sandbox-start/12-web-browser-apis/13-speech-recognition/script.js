const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = true;

rec.onresult = function (event) {
    const acceptedColors = [
        'red',
        'blue',
        'green',
        'yellow',
        'pink',
        'brown',
        'purple',
        'orange',
        'black',
        'white',
    ];
    
    for (let i = event.resultIndex; i < event.results.length; i++) {
        const script = event.results[i][0].transcript.toLowerCase().trim();
        if (acceptedColors.includes(script)) {
            document.body.style.backgroundColor = script;
        } else {
            alert('Please say a color');
        }
    }
};

rec.start();