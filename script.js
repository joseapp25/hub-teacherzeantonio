
// TRANSLATION HIDDEN TEXT ↓

    function toggleTranslation(id) {
        var translation = document.getElementById(id);
        translation.classList.toggle("show");
    }
        const translations = document.querySelectorAll('.translation-text');

        translations.forEach(el => {
        el.addEventListener('click', () => {
            el.classList.toggle('visible');
        });
        });

// TRANSLATION HIDDEN TEXT ↑










// WEB SPEECH API ↓

document.addEventListener("DOMContentLoaded", () => {
    const audioButtons = document.querySelectorAll(".vocabulary-audio");

    let voices = [];
    function loadVoices() {
        voices = speechSynthesis.getVoices()
            .filter(voice => voice.lang.startsWith("en"));
    }
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;

    audioButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Find the nearest .vocabulary-word text
            const container = button.closest(".vocabulary-container");
            const wordElement = container.querySelector(".vocabulary-word");
            const word = wordElement ? wordElement.textContent.trim() : "";

            if (!word) return;

            const utterance = new SpeechSynthesisUtterance(word);

            // Pick a random English voice
            if (voices.length > 0) {
                const randomVoice = voices[Math.floor(Math.random() * voices.length)];
                utterance.voice = randomVoice;
                console.log(`Speaking "${word}" in: ${randomVoice.name} (${randomVoice.lang})`);
            }

            speechSynthesis.speak(utterance);
        });
    });
});

// WEB SPEECH API ↑