
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

    document.addEventListener("DOMContentLoaded", setYouTubeThumbnails);

// TRANSLATION ↑