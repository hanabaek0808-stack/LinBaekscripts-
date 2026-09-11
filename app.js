/* =========================================
   LINBAEK SCRIPTS
   Main JavaScript
========================================= */


/* =========================================
   CURRENT LANGUAGE
========================================= */

let selectedLanguage = "";


/* =========================================
   FIRST CHARACTERS
========================================= */

const firstCharacters = {

    English: {
        character: "A",
        name: "Letter A",
        description: "The first letter of the English alphabet."
    },

    Arabic: {
        character: "ا",
        name: "Alif",
        description: "Alif is the first letter of the Arabic alphabet."
    },

    Chinese: {
        character: "一",
        name: "Yī",
        description: "一 means 'one'. It is also one of the simplest Chinese strokes."
    },

    Japanese: {
        character: "あ",
        name: "Hiragana あ",
        description: "あ is the Hiragana character for the sound 'a'."
    },

    Korean: {
        character: "ㄱ",
        name: "Giyeok ㄱ",
        description: "ㄱ is a basic Korean consonant."
    },

    Russian: {
        character: "А",
        name: "А",
        description: "А is the first letter of the Russian Cyrillic alphabet."
    }

};


/* =========================================
   SELECT LANGUAGE
========================================= */

function selectLanguage(language) {

    selectedLanguage = language;

    const data = firstCharacters[language];

    if (!data) {
        return;
    }


    const title =
        document.getElementById("practice-title");

    const description =
        document.getElementById("practice-description");

    const character =
        document.getElementById("character");


    title.textContent =
        language + " Writing Practice";


    description.textContent =
        data.name + " — " + data.description;


    character.textContent =
        data.character;


    /*
       Move the learner to
       the practice section.
    */

    document
        .getElementById("practice")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   START PRACTICE
========================================= */

function startPractice() {

    if (!selectedLanguage) {

        alert(
            "Please select a language first."
        );

        return;
    }


    alert(
        "Your " +
        selectedLanguage +
        " practice lesson is coming next!"
    );

}


/* =========================================
   NAVIGATION ACTIVE STATE
========================================= */

const navigationLinks =
    document.querySelectorAll(".navbar nav a");


navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navigationLinks.forEach(function(item) {

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});


/* =========================================
   PAGE LOADED
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "LinBaek Scripts loaded successfully."
        );

    }
);
