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
    p1Type: "Data analysis",
    p1Text:
      "How much does each Greek airport depend on summer tourism? " +
      "An analysis of 27 years of Eurostat passenger data for 47 airports.",
    p1Stat1: "passengers in 2025",
    p1Stat2: "of Skiathos traffic in 4 summer months",
    p1Stat3: "passengers in 2020 (COVID-19)",
    p1Link: "View on GitHub",
    contactTitle: "Contact",
    contactText: "Have a project or a question? Write to me.",
    flowLabel: "airflow",
    labelAngle: "Angle of attack",
    labelLift: "Lift coefficient (red arrow)",
    statusOk: "Smooth airflow: more angle gives more lift.",
    statusStall: "Stall: the airflow separates from the wing and lift drops.",
    modelNote: "Simplified thin-airfoil model. Real wings differ near the stall.",
  },
  el: {
    tagline: "Επίδοξος freelancer στο AI και την ανάλυση δεδομένων",
    aboutTitle: "Σχετικά με εμένα",
    aboutText:
      "Γεια σας, είμαι ο Φοίβος. Έχω σπουδάσει αεροναυπηγική και αγαπώ τα " +
      "μαθηματικά. Αυτή τη στιγμή χτίζω τις δεξιότητές μου στο AI και στην " +
      "ανάλυση δεδομένων, και αυτό το portfolio δείχνει τι δημιουργώ στην πορεία.",
    projectsTitle: "Projects",
    p1Type: "Ανάλυση δεδομένων",
    p1Text:
      "Πόσο εξαρτάται κάθε ελληνικό αεροδρόμιο από τον καλοκαιρινό τουρισμό; " +
      "Ανάλυση 27 ετών δεδομένων επιβατών της Eurostat για 47 αεροδρόμια.",
    p1Stat1: "επιβάτες το 2025",
    p1Stat2: "της κίνησης της Σκιάθου σε 4 καλοκαιρινούς μήνες",
    p1Stat3: "επιβάτες το 2020 (COVID-19)",
    p1Link: "Δες το στο GitHub",
    contactTitle: "Επικοινωνία",
    contactText: "Έχεις project ή κάποια ερώτηση; Γράψε μου.",
    flowLabel: "ροή αέρα",
    labelAngle: "Γωνία προσβολής",
    labelLift: "Συντελεστής άνωσης (κόκκινο βέλος)",
    statusOk: "Ομαλή ροή: μεγαλύτερη γωνία δίνει περισσότερη άνωση.",
    statusStall: "Απώλεια στήριξης: η ροή αποκολλάται από την πτέρυγα και η άνωση πέφτει.",
    modelNote: "Απλοποιημένο μοντέλο λεπτής αεροτομής. Κοντά στην απώλεια στήριξης οι πραγματικές πτέρυγες διαφέρουν.",
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
