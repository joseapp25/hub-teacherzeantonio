
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
/*
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
*/
// WEB SPEECH API ↑







/*
document.addEventListener("DOMContentLoaded", () => {
    const audioButtons = document.querySelectorAll(".vocabulary-audio");

    let voices = [];

    function loadVoices() {
        voices = speechSynthesis.getVoices()
            .filter(voice => voice.lang.startsWith("en")); // ✅ Only English voices

        // Retry if voices not ready yet
        if (voices.length === 0) {
            setTimeout(loadVoices, 200);
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

            if (voices.length > 0) {
                const randomVoice = voices[Math.floor(Math.random() * voices.length)];
                utterance.voice = randomVoice;
                console.log(`Speaking "${word}" in: ${randomVoice.name} (${randomVoice.lang})`);
            } else {
                // ✅ Force fallback to en-US if no English voice is found
                utterance.lang = "en-US";
                console.log(`Speaking "${word}" with default en-US fallback`);
            }

            speechSynthesis.speak(utterance);
        });
    });
});
*/


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
