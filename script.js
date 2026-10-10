// All texts of the page in both languages.
// The keys (tagline, aboutTitle, ...) match the data-i18n attributes in index.html.
const translations = {
  en: {
    tagline: "Aspiring AI and data analysis freelancer",
    aboutTitle: "About me",
    aboutText:
      "Hi, I'm Foivos. I studied aircraft engineering and I love mathematics. " +
      "I'm now building my skills in AI and data analysis, and this portfolio " +
      "shows what I create along the way.",
    projectsTitle: "Projects",
    projectsText: "Coming soon.",
    contactTitle: "Contact",
    emailLabel: "Email:",
  },
  el: {
    tagline: "Επίδοξος freelancer στο AI και την ανάλυση δεδομένων",
    aboutTitle: "Σχετικά με εμένα",
    aboutText:
      "Γεια σας, είμαι ο Φοίβος. Έχω σπουδάσει αεροναυπηγική και αγαπώ τα " +
      "μαθηματικά. Αυτή τη στιγμή χτίζω τις δεξιότητές μου στο AI και στην " +
      "ανάλυση δεδομένων, και αυτό το portfolio δείχνει τι δημιουργώ στην πορεία.",
    projectsTitle: "Projects",
    projectsText: "Έρχονται σύντομα.",
    contactTitle: "Επικοινωνία",
    emailLabel: "Email:",
  },
};

const toggleButton = document.getElementById("lang-toggle");
let currentLanguage = "en";

// Replace the text of every element that has a data-i18n attribute.
function applyLanguage(language) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(function (element) {
    const key = element.getAttribute("data-i18n");
    element.textContent = translations[language][key];
  });

  document.documentElement.lang = language;
  // The button shows the language you will switch TO.
  toggleButton.textContent = language === "en" ? "EL" : "EN";
}

// When the button is clicked, switch to the other language.
toggleButton.addEventListener("click", function () {
  currentLanguage = currentLanguage === "en" ? "el" : "en";
  applyLanguage(currentLanguage);
});
