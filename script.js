
// TRANSLATION ↓

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

// TRANSLATION ↑










// VOCABULARY AUDIO ↓

  document.querySelectorAll(".vocabulary-audio").forEach(button => {
    button.addEventListener("click", () => {
      const audioSrc = button.getAttribute("data-audio");
      const audio = new Audio(audioSrc);
      audio.play();
    });
  });

  // VOCABULARY AUDIO ↑