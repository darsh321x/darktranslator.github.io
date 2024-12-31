let recognition;
let isRecording = false;

document.getElementById('voiceSearchButton').addEventListener('click', function() {
    if (isRecording) {
        recognition.stop();
        isRecording = false;
        document.getElementById('voiceSearchButton').innerText = "Voice Search";
    } else {
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.onresult = function(event) {
            const descriptionElement = document.getElementById('imageDescription');
            descriptionElement.value = event.results[0][0].transcript;
        };
        recognition.start();
        isRecording = true;
        document.getElementById('voiceSearchButton').innerText = "Stop Voice Search";
    }
});

document.getElementById('searchButton').addEventListener('click', function() {
    const descriptionElement = document.getElementById('imageDescription');
    const description = descriptionElement.value;
    redirectToGoogleSearch(description);
});

function redirectToGoogleSearch(description) {
    const url = `https://www.google.com/search?q=${encodeURIComponent(description)}`;
    window.open(url, '_blank');
}
