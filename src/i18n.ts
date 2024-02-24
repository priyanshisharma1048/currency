import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nextHttpBackend from "i18next-http-backend";

i18n
  .use(i18nextHttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          title: "Multi-language app",
          label: "Select another language!",
          about: "About",
          home: "Home",
          read: "Read",
          contactus: "contactus",
          logo: "logo",
          language: "language",
          casetype: "casetype",
          one: "one",
          two: "two",
          three: "three",
          country: "country",
          findLawyer: "findLawyer",
          others: "Others",
          searchPlaceholder: "Search",
          Home: "Home",
          justiceHistory: "Justice History",
          casePageTitle: "Case Page",
          casePageDescription:
            "Earn your customers' trust with a professional email address that matches your business name.",
          basicDescription:
            "A budget-friendly option for individuals and small businesses.",
          "Get Started": "Get Started",
          "Feautures": "Features",
          storage10GB: "10 GB storage",
          basicFileCollaboration: "Basic file collaboration",
          "Mobile app access": "Mobile app access",
          "File synchronization across devices":
            "File synchronization across devices",
          "Support for common file types": "Support for common file types",
          "Automatic file backup": "Automatic file backup",
          "Advanced security features": "Advanced security features",
          basic: "basic",
          month: "month",
          "A budget-friendly option for individuals and small businesses":
            "A budget-friendly option for individuals and small businesses",
            "Advanced file collaboration": "Advanced file collaboration",
            "Purchase additional features": "Purchase additional features",
            "Enterprise":"Enterprise",
            "Custom": "Custom",
            "A customizable plan for large organizations with specific needs.": "A customizable plan for large organizations with specific needs.",
            "Customizable storage capacity":"Customizable storage capacity"
,
"recommed":"recommed",
"Professional":"Professional",

        },
      },
      fr: {
        translation: {
          title: "Aplicación en varios idiomas",
          label: "Selecciona otro lenguaje!",
          about: "À propos",
          home: "Inicio",
          read: "lire",
          contactus: "Contactez-nous",
          logo: "logo",
          language:  "langue",
          casetype: "causa",
          one: "une",
          two: "deux",
          three: "trois",
          country: "pays",
          findLawyer: "trouverAvocat",
          others: "Autres",
          searchPlaceholder: "Rechercher",
          Home: "Accueil",
          justiceHistory: "Historique de la justice",
          casePageTitle: "Page de cas",
          casePageDescription:
            "Gagnez la confiance de vos clients avec une adresse e-mail professionnelle qui correspond au nom de votre entreprise.",
          basicDescription:
            "Une option économique pour les particuliers et les petites entreprises.",
          "Get Started": "Commencer",
          "Feautures": "Fonctionnalités",
          storage10GB: "Stockage de 10 Go",
          basicFileCollaboration: "Collaboration de base sur les fichiers",
          "Mobile app access": "Accès à l'application mobile",
          "File synchronization across devices":
            "Synchronisation des fichiers entre les appareils",
          "Support for common file types":
            "Prise en charge des types de fichiers courants",
          "Automatic file backup": "Sauvegarde automatique des fichiers",
          "Advanced security features": "Fonctionnalités de sécurité avancées",
          basic: "basique",
          month: "mois",
          "A budget-friendly option for individuals and small businesses":
            "Une option économique pour les particuliers et les petites entreprises",
            "Advanced file collaboration": "Collaboration avancée sur les fichiers",
            "Purchase additional features": "Acheter des fonctionnalités supplémentaires",
            "Enterprise":"Entreprise",
            "Custom": "Personnalisé",
            "A customizable plan for large organizations with specific needs.": "Un plan personnalisable pour les grandes organisations avec des besoins spécifiques.",
            "Customizable storage capacity": "Capacité de stockage personnalisable",
            "recommed":"Recommander" ,
            "Professional":"Professionnel"




        },
      },
    },
  });

export default i18n;
