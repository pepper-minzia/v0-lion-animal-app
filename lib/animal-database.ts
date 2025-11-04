export interface AnimalData {
  emoji: string
  greeting: string
  facts: string[]
}

export const animalDatabase: Record<string, AnimalData> = {
  Löwe: {
    emoji: "🦁",
    greeting: "Brüll! Das ist ja meine Familie!",
    facts: [
      "Wir Löwen sind die Könige der Tiere! Wir leben in Gruppen, die man Rudel nennt.",
      "Männliche Löwen haben eine prächtige Mähne. Je dunkler die Mähne, desto stärker ist der Löwe!",
      "Wir können bis zu 80 Kilometer pro Stunde schnell laufen, aber nur für kurze Strecken.",
      "Löwen schlafen bis zu 20 Stunden am Tag! Wir sind echte Schlafmützen.",
      "Unser Brüllen kann man bis zu 8 Kilometer weit hören!",
    ],
  },
  Elefant: {
    emoji: "🐘",
    greeting: "Törööö! Elefanten sind fantastisch!",
    facts: [
      "Elefanten sind die größten Landtiere der Welt! Sie können bis zu 6 Tonnen wiegen.",
      "Ihr Rüssel hat über 40.000 Muskeln und kann bis zu 300 Kilogramm heben!",
      "Elefanten haben ein super Gedächtnis und können sich ihr ganzes Leben lang an Dinge erinnern.",
      "Sie kommunizieren mit tiefen Tönen, die Menschen nicht hören können.",
      "Elefanten sind sehr sozial und kümmern sich liebevoll um ihre Familie.",
    ],
  },
  Giraffe: {
    emoji: "🦒",
    greeting: "Hallo von ganz oben! Giraffen sind toll!",
    facts: [
      "Giraffen sind die größten Tiere der Welt! Sie können bis zu 6 Meter hoch werden.",
      "Ihre Zunge ist blau-schwarz und bis zu 50 Zentimeter lang!",
      "Obwohl ihr Hals so lang ist, haben Giraffen nur 7 Halswirbel - genau wie wir Menschen!",
      "Giraffen schlafen nur etwa 30 Minuten pro Tag, oft im Stehen.",
      "Jede Giraffe hat ein einzigartiges Fleckenmuster, wie ein Fingerabdruck!",
    ],
  },
  Delfin: {
    emoji: "🐬",
    greeting: "Splash! Delfine sind super clever!",
    facts: [
      "Delfine sind sehr intelligente Tiere und können sogar ihren eigenen Namen haben!",
      "Sie können bis zu 55 Kilometer pro Stunde schnell schwimmen.",
      "Delfine schlafen mit einer Gehirnhälfte, während die andere wach bleibt!",
      "Sie benutzen Echoortung, um sich unter Wasser zu orientieren.",
      "Delfine sind sehr sozial und helfen sich gegenseitig, wenn jemand verletzt ist.",
    ],
  },
  Pinguin: {
    emoji: "🐧",
    greeting: "Watschel, watschel! Pinguine sind cool!",
    facts: [
      "Pinguine können nicht fliegen, aber sie sind fantastische Schwimmer!",
      "Kaiserpinguine können bis zu 27 Minuten unter Wasser bleiben.",
      "Pinguine leben fast nur auf der Südhalbkugel, viele in der Antarktis.",
      "Papa-Pinguine brüten die Eier aus, während Mama-Pinguine Futter suchen.",
      "Pinguine können bis zu 35 Kilometer pro Stunde schnell schwimmen!",
    ],
  },
  Schmetterling: {
    emoji: "🦋",
    greeting: "Flatter, flatter! Schmetterlinge sind wunderschön!",
    facts: [
      "Schmetterlinge schmecken mit ihren Füßen! So erkennen sie, ob eine Pflanze gut ist.",
      "Sie beginnen ihr Leben als Raupe und verwandeln sich dann in einen Schmetterling.",
      "Es gibt über 180.000 verschiedene Schmetterlingsarten auf der Welt!",
      "Schmetterlinge können nur Flüssigkeiten trinken, wie Nektar aus Blumen.",
      "Manche Schmetterlinge fliegen tausende Kilometer weit, um in wärmere Gebiete zu ziehen!",
    ],
  },
}
