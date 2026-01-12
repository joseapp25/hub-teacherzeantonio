const VOCABULARY = {
    restaurant: {
        word: "restaurant",
        class: "noun",
        phonetic: "/ˈrɛstərɑːnt/",
        translation: "restaurante"
    },
    hotel: {
        word: "hotel",
        class: "noun",
        phonetic: "/hoʊˈtɛl/",
        translation: "hotel"
    },
    park: {
        word: "park",
        class: "noun",
        phonetic: "/pɑːrk/",
        translation: "parque"
    },
    drugstore: {
        word: "drugstore",
        class: "noun",
        phonetic: "/ˈdrʌɡstɔːr/",
        translation: "farmácia"
    },
    supermarket: {
        word: "supermarket",
        class: "noun",
        phonetic: "/ˈsuːpərˌmɑːrkɪt/",
        translation: "supermercado"
    },
    house: {
        word: "house",
        class: "noun",
        phonetic: "/haʊs/",
        translation: "casa"
    },
    job: {
        word: "job",
        class: "noun",
        phonetic: "/dʒɑːb/",
        translation: "trabalho"
    },
    shoppingMall: {
        word: "shopping mall",
        class: "noun",
        phonetic: "/ˈʃɑːpɪŋ mɔːl/",
        translation: "shopping center"
    },
    neighborhood: {
        word: "neighborhood",
        class: "noun",
        phonetic: "/ˈneɪbərˌhʊd/",
        translation: "bairro"
    },
    quiet: {
        word: "quiet",
        class: "adjective",
        phonetic: "/ˈkwaɪət/",
        translation: "silencioso / tranquilo"
    },
    peaceful: {
        word: "peaceful",
        class: "adjective",
        phonetic: "/ˈpiːsfəl/",
        translation: "pacífico / tranquilo"
    }
};

const lessonVocabularyKeys = [
    "restaurant",
    "hotel",
    "park",
    "neighborhood",
    "quiet",
    "peaceful"
];

const lessonVocabulary = lessonVocabularyKeys.map(
    key => VOCABULARY[key]
);

function renderVocabulary(list, containerId) {
    const container = document.getElementById(containerId);

    container.innerHTML = "";

    list.forEach(item => {
        container.innerHTML += `
            <div class="vocabulary-container">
                <div class="vocabulary-word-container">
                    <span class="vocabulary-word">${item.word}</span>
                    <span class="vocabulary-class-word">[${item.class}]</span>
                </div>
                <div class="vocabulary-phonetic">
                    <span>${item.phonetic}</span>
                    <img src="images/icons/audio-icon.svg" alt="Audio" class="vocabulary-audio">
                </div>
                <div class="vocabulary-translation">
                    <span>${item.translation}</span>
                </div>
            </div>
        `;
    });
}
