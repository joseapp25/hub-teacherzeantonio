
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

    let englishVoices = [];

    function loadVoices() {
        const allVoices = speechSynthesis.getVoices();

        // ✅ Pick only English voices
        englishVoices = allVoices.filter(voice => voice.lang.startsWith("en"));

        if (englishVoices.length === 0) {
            setTimeout(loadVoices, 200); // retry until ready
        }
    }

    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;

    audioButtons.forEach(button => {
        button.addEventListener("click", () => {
            const container = button.closest(".vocabulary-container");
            const wordElement = container.querySelector(".vocabulary-word");
            const word = wordElement ? wordElement.textContent.trim() : "";

            if (!word) return;

            const utterance = new SpeechSynthesisUtterance(word);

            if (englishVoices.length > 0) {
                // ✅ Pick a random English voice
                const randomVoice = englishVoices[Math.floor(Math.random() * englishVoices.length)];
                utterance.voice = randomVoice;
                utterance.lang = randomVoice.lang; // keep consistency
                console.log(`Speaking "${word}" in: ${randomVoice.name} (${randomVoice.lang})`);
            } else {
                // ✅ Force English pronunciation even if device is PT
                utterance.lang = "en-US";
                console.log(`Speaking "${word}" with en-US fallback (system default may vary)`);
            }

            speechSynthesis.speak(utterance);
        });
    });
});

// WEB SPEECH API ↑










// DICTIONARY ↓


// DICTIONARY ↑