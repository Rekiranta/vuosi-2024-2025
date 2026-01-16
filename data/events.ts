export type Tag = "Elämä" | "Työ" | "Opiskelu" | "Harrastukset";

export interface LifeEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  emoji: string;
  tag: Tag;
  year: 2024 | 2025;
}

export const events: LifeEvent[] = [
  {
    id: 1,
    date: "Tammikuu 2024",
    title: "Yhteenmuutto Micaelan kanssa",
    description:
      "Iso askel elämässä! Muutimme yhteen Micaelan kanssa ja aloitimme uuden luvun yhdessä. Koti tuntuu nyt oikealta kodilta. 🏡",
    emoji: "🏠💑",
    tag: "Elämä",
    year: 2024,
  },
  {
    id: 2,
    date: "Kevät 2024",
    title: "Opiskelu: Tietojenkäsittely",
    description:
      "Aloitin tietojenkäsittelyn opinnot! Koodaaminen, tietokannat ja uudet teknologiat ovat tulleet tutuksi. Innolla kohti IT-alaa! 💪",
    emoji: "📚💻",
    tag: "Opiskelu",
    year: 2024,
  },
  {
    id: 3,
    date: "2024",
    title: "Työt ravintola-alalla",
    description:
      "Jatkoin työskentelyä ravintola-alalla. Kiireisiä iltoja, mahtavia työkavereita ja paljon oppimista asiakaspalvelusta. 🍕",
    emoji: "🍽️👨‍🍳",
    tag: "Työ",
    year: 2024,
  },
  {
    id: 4,
    date: "Kesä 2024",
    title: "Coldplayn keikka Micaelan kanssa",
    description:
      "Ikimuistoinen ilta! Kävimme yhdessä Micaelan kanssa Coldplayn keikalla. Fix You livenä oli aivan uskomaton kokemus! 🌟",
    emoji: "🎸🎤✨",
    tag: "Elämä",
    year: 2024,
  },
  {
    id: 5,
    date: "Syksy 2024",
    title: "Työn aloitus Ravintola Solmussa",
    description:
      "Uusi työpaikka ja uudet haasteet! Aloitin työt Ravintola Solmussa. Mahtava tiimi ja mielenkiintoinen ympäristö. 🎊",
    emoji: "🍴🎉",
    tag: "Työ",
    year: 2024,
  },
  {
    id: 6,
    date: "2024-2025",
    title: "Omat golfmailat",
    description:
      "Vihdoin omat golfmailat! Nyt voin harjoitella milloin vain. Tavoitteena parantaa swingiä ja nauttia pelistä luonnossa. ⛳",
    emoji: "⛳🏌️",
    tag: "Harrastukset",
    year: 2024,
  },
  {
    id: 7,
    date: "Kevät 2025",
    title: "Sähköpyörän ostaminen",
    description:
      "Hankin sähköpyörän! Ekologinen ja kätevä tapa liikkua. Kesän pyöräilyreissut odottavat jo innolla! 🌿",
    emoji: "🚴⚡",
    tag: "Elämä",
    year: 2025,
  },
  {
    id: 8,
    date: "Syksy 2024",
    title: "Takaisin salille",
    description:
      "Palasin takaisin kuntosalille! Tavoitteena rakentaa voimaa ja pitää huolta hyvinvoinnista. Treenaaminen on tullut osaksi viikkorutiinia. 💪",
    emoji: "🏋️💪",
    tag: "Harrastukset",
    year: 2024,
  },
  {
    id: 9,
    date: "Kevät 2025",
    title: "Juoksuharrastus",
    description:
      "Aloitin juoksemisen! Aamulenkkeily on parasta – raitis ilma ja hyvä fiilis koko päiväksi. Tavoitteena pikkuhiljaa pidentää matkoja. 🏃",
    emoji: "🏃‍♂️🌅",
    tag: "Harrastukset",
    year: 2025,
  },
  {
    id: 10,
    date: "Kesä 2024",
    title: "Mökkireissu",
    description:
      "Rentouttava mökkireissu Suomen luonnossa! Saunomista, grillailua ja laatuaikaa. Parasta vastapainoa arjelle. 🌲",
    emoji: "🏕️🌲",
    tag: "Elämä",
    year: 2024,
  },
  {
    id: 11,
    date: "2025",
    title: "Viikonloppureissu Micaelan kanssa",
    description:
      "Ihana viikonloppuloma yhdessä! Uusia paikkoja, hyviä hetkiä ja muistoja, jotka jäävät mieleen. 💕",
    emoji: "🧳💑",
    tag: "Elämä",
    year: 2025,
  },
];

export const tags: Tag[] = ["Elämä", "Työ", "Opiskelu", "Harrastukset"];

export const years = [2024, 2025] as const;
