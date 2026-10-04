/* VillaMairena – alt indhold i appen, på alle sprog.
   Ret tekster her. TODO-felter vises som gule "udfyldes"-mærker, indtil de er udfyldt.
   Sprog: da (dansk), en (engelsk), es (spansk), de (tysk). */
window.VM_CONTENT = {
  da: {
    langName: "Dansk",
    ui: {
      tabs: { hjem: "Hjem", ankomst: "Ankomst", huset: "Huset", omraadet: "Området", kontakt: "Kontakt" },
      todo: "Udfyldes", copy: "Kopiér", copied: "Kopieret", selected: "Markeret. Kopiér manuelt",
      copyAddress: "Kopiér adresse", openMaps: "Åbn i Google Maps", language: "Sprog"
    },
    weather: {
      title: "Vejret i La Mairena", loading: "Henter vejrudsigt …", feels: "føles som", wind: "vind", kmh: "km/t",
      today: "I dag", uv: "UV", sun: "Sol", sea: "Havet ved Elviria", sample: "Eksempel · live i appen", updated: "Opdateret",
      kinds: { clear: "Klart", mostly: "Overvejende klart", partly: "Let skyet", overcast: "Overskyet", fog: "Tåge", rain: "Regn", showers: "Byger", storm: "Torden", cloudy: "Skyet" }
    },
    home: {
      eyebrow: "La Mairena · Ojén · Costa del Sol",
      title: "Velkommen til VillaMairena",
      sub: "400 meter over havet, 8 minutter fra stranden i Elviria.",
      gate: "Portkode", gateNote: "Sendes til jer i beskeden før ankomst",
      wifi: "Wi‑Fi", wifiPassLabel: "Kode",
      checkin: "Check-in", checkout: "Check-ud",
      fireBanner: { title: "Høj brandfare 1. juni – 15. oktober", body: "Ingen grill, bål eller åben ild i perioden. Læs mere under Kontakt.", link: "Brand og sikkerhed" },
      food: {
        title: "Bestil mad til huset",
        body: "Uber Eats leverer til VillaMairena. Brug adressen herunder, og indsæt beskeden til buddet, så de finder porten.",
        open: "Åbn Uber Eats", note: "Besked til buddet (spansk)", copyNote: "Kopiér besked"
      },
      importantTitle: "Det vigtigste under opholdet",
      important: [
        { icon: "i-flame", t: "Rygning er forbudt i huset", s: "Ryg gerne udenfor, med respekt for naturen omkring huset." },
        { icon: "i-sun", t: "Gulvvarme og aircondition", s: "Termostaterne er indstillet på forhånd. Alle soveværelser har aircondition." },
        { icon: "i-home", t: "I skal ikke gøre rent", s: "Slutrengøring klares af professionelle rengøringsfolk, når I er rejst." }
      ],
      sosLabel: "Nødsituation", sosText: "Fælles europæisk alarmnummer. Virker overalt i Spanien, også uden SIM-kort."
    },
    arrival: {
      eyebrow: "Ankomst", title: "Sådan finder I huset", addressLabel: "Adresse",
      steps: [
        { t: "Fra Málaga lufthavn", d: "Kør mod Marbella langs kysten. Turen tager ca. 45 minutter.", route: "airport" },
        { t: "Op til La Mairena", d: "Fra kysten ved Elviria kører I op i bjergene. Det tager ca. 8 minutter.", todo: "Tilføj vejbeskrivelse og kendetegn" },
        { t: "Ved porten", d: "Grunden er lukket med en port med dørtelefon og kamera. Tast portkoden for at åbne.", todo: "Beskriv hvor tastaturet sidder" },
        { t: "Parkering", d: "Der er privat parkering til 4 biler på grunden." },
        { t: "Ind i huset", todo: "Beskriv nøgleboks eller kodelås" }
      ],
      missing: "Billeder af porten og indkørslen gør ankomsten meget lettere for gæster, der kommer efter mørkets frembrud.",
      missingLabel: "Mangler fra jer"
    },
    house: {
      eyebrow: "Huset", title: "314 kvm til 10–12 gæster",
      chips: ["5 soveværelser", "3+1 badeværelser", "Aircondition", "Gulvvarme", "Wi‑Fi og TV", "2.500 kvm grund", "Havudsigt"],
      gallery: { living: "Stue og spisebord til 12", kitchen: "Køkkenet", bath: "Masterbedroom med eget bad", closet: "Walk-in closet" },
      roomsTitle: "Soveværelser",
      roomsIntro: "Alle værelser har aircondition og udsigt til bjergene. Værelse 1, 3, 4 og 5 har fjernstyrede udvendige rullepersienner, så I kan mørklægge helt.",
      rooms: [
        { name: "Masterbedroom", meta: "Stueplan · walk-in closet · eget bad · udsigt til poolen" },
        { name: "Det ekstra værelse", meta: "Stueplan · deler bad · ingen rullepersienner" },
        { name: "Udsigt med altan", meta: "1. sal · altan · deler bad med værelse 4" },
        { name: "Udsigt fra 1. sal", meta: "1. sal · deler bad med værelse 3" },
        { name: "Mini masterbedroom", meta: "1. sal · eget bad · altan · hav- og bjergudsigt" }
      ],
      roomWord: "Værelse",
      extraBeds: "Ekstra: 2 transportable gæstesenge og 1 babyseng.",
      poolTitle: "Swimmingpool",
      poolText: "Opvarmet året rundt, ca. 40 kvm. Solsenge og lounge omkring poolen, direkte adgang fra stuen og soveværelserne.",
      poolDiagram: { size: "11 m × 3,5 m", alt: "Poolen set fra siden: 11 meter lang, 1,10 til 1,70 meter dyb" },
      howTitle: "Sådan virker huset",
      howIntro: "Korte vejledninger til husets installationer. QR-mærkaterne i huset fører direkte hertil."
    },
    how: [
      { id: "pool", icon: "i-wave", title: "Poolvarme", body: ["Poolen er opvarmet året rundt.", "Dybden er 1,10 m i den ene ende og 1,70 m i den anden."], todo: "Hvordan temperaturen styres, og poolregler" },
      { id: "aircondition", icon: "i-snow", title: "Aircondition", body: ["Alle soveværelser har aircondition.", "Hold vinduer og døre lukket, når den kører, så køler den bedst."], todo: "Hvor fjernbetjeningen ligger, og anbefalet temperatur" },
      { id: "gulvvarme", icon: "i-sun", title: "Gulvvarme", body: ["Der er gulvvarme i hele huset, styret af termostater.", "Termostaterne er indstillet på forhånd."], todo: "Hvordan man skruer op og ned" },
      { id: "persienner", icon: "i-blind", title: "Rullepersienner", body: ["Værelse 1, 3, 4 og 5 har fjernstyrede udvendige rullepersienner, som kan mørklægge helt.", "Værelse 2 har ikke rullepersienner."], todo: "Hvor kontakten eller fjernbetjeningen sidder" },
      { id: "wifi", icon: "i-wifi", title: "Wi‑Fi", body: ["Netværk: VillaMairena.", "Kode: VillaMairena2027", "Der er Wi‑Fi i hele huset og ude ved poolen."] },
      { id: "tv", icon: "i-tv", title: "TV", body: [], todo: "Hvordan man tænder, og hvilke tjenester der er" },
      { id: "kaffe", icon: "i-cup", title: "Kaffemaskine", body: [], todo: "Type maskine og hvor kapsler eller bønner står" },
      { id: "vask", icon: "i-wash", title: "Vask og tørretumbler", body: ["Vaskemaskine og tørretumbler er til fri afbenyttelse."], todo: "Hvor de står, og hvor vaskemiddel er" },
      { id: "affald", icon: "i-bin", title: "Affald og genbrug", body: [], todo: "Hvor containerne står, og sortering" },
      { id: "afrejse", icon: "i-key", title: "Inden I rejser", body: ["I skal ikke gøre rent. Slutrengøring er inkluderet."], todo: "Tjekliste ved afrejse (nøgler, vinduer, aircondition)" }
    ],
    area: {
      eyebrow: "Området", title: "Guide til området",
      intro: "Her er vores guide til området omkring villaen: strande, indkøb og restauranter, sport, kultur og andre oplevelser. Tryk på et punkt med en trekant for at folde listen ud.",
      beachTitle: "Strande",
      beachText: "Gyldent sand, klart vand, chiringuitos, restauranter og beach clubs. Den nærmeste strand ligger ca. 8 minutter fra huset.",
      beaches: [["Las Chapas", "ca. 750 m strand"], ["La Víbora", "ca. 850 m strand"], ["Real de Zaragoza", "ca. 1,7 km strand"]],
      dailyTitle: "Indkøb og restauranter",
      daily: [
        { url: "https://www.ubereats.com/es", n: "Takeaway", d: "Levering", s: "Uber Eats leverer til huset. Se \"Bestil mad til huset\" på forsiden." }
      ],
      dailyTodo: "Tilføj jeres foretrukne supermarked og bager",
      expTitle: "Oplevelser", suggestion: "Forslag",
      exp: [
        { key: "golf", n: "Golf", d: "Inden for 30 min", s: "Mere end 10 golfbaner i verdensklasse." },
        { key: "padel", n: "Padel", d: "Inden for 15 min", s: "Padelbaner i området." },
        { key: "kultur", n: "Seværdigheder og kultur", d: "20–25 min", s: "Museer, kirker, gamle bydele og historiske steder." }
      ],
      golfTitle: "Golfbaner tæt på", golfIntro: "De 10 nærmeste baner. Køretiderne er omtrentlige. Tryk på Rute for præcis afstand i Google Maps.", golfHoles: "huller", golfRoute: "Rute", golfWeb: "Hjemmeside", golfMin: "min",
      golfNotes: { marbellagolf: "Ombygges til Higuerón Marbella Golf Resort", lacala: "La Cala har 3 baner med 18 huller og en par 3-bane" },
      padelIntro: "De 5 nærmeste steder med padelbaner. Køretiderne er omtrentlige. Book direkte hos klubben.", padelCourts: "baner", padelBook: "Book bane", padelNotes: { light: "Lys til aftenspil" },
      beachSum: "De 10 nærmeste strande", beachSumD: "8–15 min", beachIntro: "Køretiderne er omtrentlige. Tryk på Rute for præcis vej i Google Maps.", beachM: "m", beachTags: {"golden": "Gyldent sand", "dark": "Mørkt sand", "dunes": "Klitter (naturmonument)", "nudist": "Nudistområde", "port": "Ved lystbådehavn", "food": "Restauranter og chiringuitos", "kids": "Børneområde", "long": "Lang strand", "quiet": "Mere stille"},
      shopSum: "Dagligvarer", shopSumD: "8–20 min", shopIntro: "Køretider er omtrentlige. Mange supermarkeder har lukket eller kortere åbent om søndagen, så tjek gerne før I kører.", shopHours: "Åbningstider",
      shops: [{"n": "Carrefour Market Elviria", "area": "Elviria", "min": 8, "type": "Supermarked", "s": "Almindeligt supermarked med frugt, grønt, kød, fisk og vin. Det nærmeste store indkøb.", "q": "Carrefour Market Elviria, Marbella", "hours": "Man–lør 9–22", "url": "https://www.carrefour.es/tiendas-carrefour/supermercados/carrefour-market/elviria-marbella-s.aspx"}, {"n": "Mercadillo de Las Chapas", "area": "Parking Elviria", "min": 8, "type": "Marked", "s": "Lokalt fredagsmarked med ca. 30 boder: frugt og grønt, tøj, tasker og kunsthåndværk.", "q": "Pinar de Elviria, 29604 Marbella", "hours": "Fredag 9–14", "url": "https://mercadillos.org/es/marbella/mercadillo-las-chapas"}, {"n": "Elviria Centro", "area": "Elviria", "min": 8, "type": "Butikker og service", "s": "Det lille centrum i Elviria med bagere, apotek, banker, cafeer og restauranter.", "q": "Centro Comercial Elviria, Marbella"}, {"n": "Mercadona", "area": "La Cala de Mijas", "min": 15, "type": "Supermarked", "s": "Spaniens største supermarkedskæde. Stort udvalg og gode priser.", "q": "Mercadona La Cala de Mijas", "hours": "De fleste dage til kl. 21"}, {"n": "Lidl", "area": "La Cala de Mijas", "min": 15, "type": "Discount", "s": "Billigt supermarked med ugens tilbud.", "q": "Lidl La Cala de Mijas"}, {"n": "Aldi", "area": "La Cala de Mijas", "min": 15, "type": "Discount", "s": "Billigt supermarked med basisvarer.", "q": "Aldi La Cala de Mijas"}, {"n": "Mercadillo de La Cala", "area": "La Cala de Mijas", "min": 15, "type": "Marked", "s": "Stort marked med over 100 boder: frugt, grønt, lokale specialiteter, tøj og husholdning. Kom før kl. 10 for de bedste råvarer.", "q": "Mercadillo La Cala de Mijas", "hours": "Onsdag og lørdag 9–14"}, {"n": "La Cañada", "area": "Marbella", "min": 20, "type": "Indkøbscenter", "s": "Stort indkøbscenter med hypermarked (Alcampo) og mange kendte butikker.", "q": "Centro Comercial La Cañada, Marbella"}],
      cultIntro: "Køretider er omtrentlige, og åbningstider kan ændre sig, så tjek gerne før I kører. De fleste af stederne har gratis adgang.", cults: [{"n": "Iglesia de la Encarnación", "area": "Ojén", "min": 20, "type": "Kirke", "s": "Landsbyens kirke fra 1400-tallet med et smukt træloft i maurisk (mudéjar) stil fra 1500–1600-tallet.", "q": "Iglesia Nuestra Señora de la Encarnación, Ojén"}, {"n": "Museo del Molino y del Aguardiente", "area": "Ojén", "min": 20, "type": "Museum", "s": "Gammel vandmølle fra 1700-tallet med originale maskiner til olivenolie. Ovenpå: museum for Ojéns berømte brændevin, aguardiente.", "q": "Museo del Molino, Calle Charcas 60, Ojén", "url": "https://sierradelasnieves.es/en/?p=6605"}, {"n": "Casco Antiguo", "area": "Marbella", "min": 20, "type": "Gammel bydel", "s": "Marbellas hvide gamle bydel med Plaza de los Naranjos, smalle gader og kirken Iglesia de la Encarnación.", "q": "Plaza de los Naranjos, Marbella", "hours": "Altid åben"}, {"n": "Museo del Grabado Español Contemporáneo", "area": "Marbella", "min": 20, "type": "Kunstmuseum", "s": "Spaniens første museum for grafik med ca. 2.000 værker, bl.a. af Picasso, Miró og Dalí, i et hospital fra 1600-tallet. Gratis.", "q": "Museo del Grabado Español Contemporáneo, Marbella", "hours": "Man–lør 10–20, søn 10–14"}, {"n": "Colección Arqueológica Municipal", "area": "Marbella", "min": 20, "type": "Museum", "s": "Arkæologiske fund fra området, bl.a. romerske villaer, i en bygning fra 1500-tallet. Gratis.", "q": "Plaza Altamirano, Marbella", "hours": "Man–fre 9–14"}, {"n": "Cortijo Miraflores", "area": "Marbella", "min": 20, "type": "Kulturcenter", "s": "Historisk gård med olivenoliemuseum og arkæologiske udstillinger fra stenalderen og frem. Gratis.", "q": "Cortijo Miraflores, Marbella", "hours": "Dagligt 9–20.30"}, {"n": "Museo Ralli", "area": "Golden Mile, Marbella", "min": 25, "type": "Kunstmuseum", "s": "En af Europas vigtigste samlinger af latinamerikansk kunst, 50 m fra stranden. Gratis.", "q": "Museo Ralli, Marbella", "hours": "Tir–fre 10–17, lør 10–15 (lukket 21/12–14/2)", "url": "https://museoralli.es/en/museum-ralli-and-its-surroundings/"}, {"n": "Villa Romana de Río Verde", "area": "Marbella", "min": 25, "type": "Romersk ruin", "s": "Romersk villa fra 100–200-tallet med usædvanlige sort-hvide mosaikker. Gratis.", "q": "Villa Romana de Río Verde, Marbella", "hours": "Fre–søn 10.30–13.30", "url": "https://www.historyhit.com/locations/rio-verde-roman-villa/"}, {"n": "Mijas Pueblo", "area": "Mijas", "min": 25, "type": "Hvid landsby", "s": "Bjerglandsby med kirker, kapellet Virgen de la Peña, en oval tyrefægterarena fra 1900 og et miniaturemuseum.", "q": "Mijas Pueblo"}, {"n": "Castillo Sohail", "area": "Fuengirola", "min": 25, "type": "Borg", "s": "Maurisk borg fra 1100-tallet ved kysten med flot udsigt. Gratis.", "q": "Castillo Sohail, Fuengirola", "hours": "Tir–fre 10–14, weekend 10–18"}],
      restSum: "Restauranter", restSumD: "3–30 min", restIntro: "20 restauranter fra La Mairena og ned langs kysten. Køretider er omtrentlige, og det er en god idé at reservere bord, især om sommeren.", rests: [{"n": "Kudu Bar", "area": "La Mairena", "min": 3, "type": "International", "s": "Populært sted i La Mairena med terrasse og flot udsigt. Kendt for curry, laks og ribs. Reservér gerne.", "q": "Kudu Bar, La Mairena, Ojén", "price": "€€", "url": "https://thekudubar.com"}, {"n": "El Soto de Marbella", "area": "La Mairena", "min": 5, "type": "Bar og restaurant", "s": "Bar og restaurant ved golfbanen i El Soto. Åben for alle, med livemusik i løbet af året.", "q": "El Soto de Marbella club house, Ojén"}, {"n": "El Lago", "area": "Elviria Hills", "min": 10, "type": "Gourmet", "s": "Gourmetrestaurant ved en sø i Elviria Hills med andalusiske råvarer. Har haft en Michelin-stjerne.", "q": "Restaurante El Lago, Elviria, Marbella"}, {"n": "Ombú", "area": "Don Carlos Resort, Elviria", "min": 10, "type": "Middelhavskøkken", "s": "Restaurant i tropiske haver på Don Carlos Resort.", "q": "Ombú, Don Carlos Resort, Marbella"}, {"n": "La Scala Marbella", "area": "Elviria", "min": 10, "type": "Italiensk", "s": "Højt bedømt italiensk restaurant.", "q": "La Scala Marbella, Elviria", "price": "€€€€"}, {"n": "Nikki Beach Marbella", "area": "Elviria", "min": 10, "type": "Beach club", "s": "Kendt beach club i hvidt med fest, musik og international stemning.", "q": "Nikki Beach Marbella", "price": "€€€€"}, {"n": "The Beach House", "area": "Elviria", "min": 10, "type": "Middelhavskøkken", "s": "Restaurant på stranden med middelhavsmad og havudsigt.", "q": "The Beach House Marbella, Elviria", "price": "€€–€€€"}, {"n": "La Plage Casanis", "area": "Elviria", "min": 10, "type": "Beach club", "s": "Elegant beach club med middelhavskøkken.", "q": "La Plage Casanis, Marbella"}, {"n": "Chiringuito Tony's", "area": "Elviria", "min": 10, "type": "Fisk og skaldyr", "s": "Meget populær chiringuito på stranden med fisk og skaldyr.", "q": "Chiringuito Tonys, Elviria, Marbella", "price": "€€–€€€"}, {"n": "Restaurante Merendero Cristina", "area": "Elviria", "min": 10, "type": "Fisk og skaldyr", "s": "Klassisk strandrestaurant med fisk og skaldyr.", "q": "Merendero Cristina, Elviria, Marbella", "price": "€€–€€€"}, {"n": "Alma de Papagayo", "area": "Elviria", "min": 10, "type": "International", "s": "Højt bedømt restaurant med internationalt køkken.", "q": "Alma de Papagayo, Elviria, Marbella", "price": "€€–€€€"}, {"n": "Zumaque", "area": "Elviria", "min": 10, "type": "Steakhouse og fisk", "s": "Kød og fisk, højt bedømt af gæsterne.", "q": "Zumaque, Elviria, Marbella", "price": "€€–€€€"}, {"n": "Mini India Elviria", "area": "Elviria", "min": 10, "type": "Indisk", "s": "Indisk restaurant, meget populær blandt gæster.", "q": "Mini India Elviria, Marbella", "price": "€€–€€€"}, {"n": "Nosso Summer Club", "area": "Las Chapas", "min": 12, "type": "Beach club", "s": "Stilfuld beach club på Las Chapas-stranden med asiatisk-middelhavsmad.", "q": "Nosso Summer Club, Las Chapas, Marbella"}, {"n": "Siroko Beach", "area": "Las Chapas", "min": 12, "type": "Beach club", "s": "Strandrestaurant og lounge med solsenge og musik.", "q": "Siroko Beach, Las Chapas, Marbella"}, {"n": "Simbad", "area": "Marbesa", "min": 12, "type": "Fisk og skaldyr", "s": "Afslappet strandbar med espetos (grillede sardiner) og god vinliste.", "q": "Simbad Restaurant Beach Bar, Marbesa, Marbella"}, {"n": "Andy's Beach", "area": "Cabopino", "min": 12, "type": "Fisk og skaldyr", "s": "Restaurant direkte på sandet med fisk og havudsigt.", "q": "Andy's Beach, Cabopino, Marbella"}, {"n": "Mesón Lorente", "area": "Ojén", "min": 20, "type": "Andalusisk", "s": "Andalusisk mad i Ojén med store portioner. Kendt for fiskegryde.", "q": "Mesón Lorente, Ojén"}, {"n": "El Fogón de Flore", "area": "Ojén", "min": 20, "type": "Spansk og europæisk", "s": "Restaurant på en bakke i Ojén med udsigt over dalen.", "q": "El Fogón de Flore, Ojén"}, {"n": "El Refugio de Juanar", "area": "Sierra Blanca, Ojén", "min": 30, "type": "Andalusisk", "s": "Hyggelig bjergrestaurant med andalusisk hjemmelavet mad. Flot tur op i bjergene.", "q": "El Refugio de Juanar, Ojén"}]
    },
    contact: {
      report: {"title": "Meld en fejl eller giv et forslag", "intro": "Er noget gået i stykker, eller har I en idé til, hvordan huset kan blive bedre? Skriv til os her, gerne med et foto. Det går direkte til ejerne.", "issue": "Noget er gået i stykker", "idea": "Forslag til forbedring", "where": "Hvor?", "text": "Beskriv det kort", "photo": "Tag eller vælg et foto", "photoAdded": "Foto tilføjet", "name": "Navn på den, der har booket", "send": "Send", "sending": "Sender …", "thanks": "Tak! Vi har modtaget jeres besked og vender tilbage, hvis det er nødvendigt.", "error": "Beskeden blev ikke sendt. Prøv igen, eller ring til os.", "empty": "Skriv en kort beskrivelse eller tilføj et foto.", "urgent": "Haster det, så ring til os på +45 51 59 30 50.", "choose": "Vælg sted", "inside": "Inde i huset", "outside": "Udendørs", "nameReq": "Skriv navnet på den, der har booket opholdet.", "roomsIn": ["Værelse 1 (masterbedroom)", "Værelse 2", "Værelse 3", "Værelse 4", "Værelse 5", "Badeværelse", "Gæstetoilet", "Walk-in closet", "Køkken", "Stue og spisestue", "Gang og trappe", "Vaskemaskine og tørretumbler"], "roomsOut": ["Pool", "Terrasse og solsenge", "Altan", "Have", "Indkørsel og port", "Parkering"], "other": "Andet"},
      eyebrow: "Kontakt", title: "Hvem ringer I til?",
      sos: "Akut: politi, ambulance, brand",
      ownersTitle: "Ejerne",
      ownersText: "Pernille, Jens, Christina og Thomas. Vi svarer mellem kl. 08 og 23, ofte inden for få timer.",
      phone: "Telefon", email: "E-mail",
      localTitle: "På stedet",
      local: [
        { who: "Lokal vært / administrator", what: "Nøgler, port, alt praktisk", todo: "Navn og nummer" },
        { who: "Poolservice", what: "Hvis poolen ikke er i orden", todo: "Navn og nummer" },
        { who: "Elektriker / VVS", what: "Strøm, vand, aircondition", todo: "Navn og nummer" },
        { who: "Rengøring", what: "Ekstra rengøring under opholdet", todo: "Navn og nummer" }
      ],
      healthTitle: "Sundhed",
      health: [
        { who: "Hospital Costa del Sol", what: "Offentligt hospital med skadestue i Marbella" },
        { who: "Nærmeste apotek og læge", todo: "Navn og adresse" }
      ]
    },
    safety: {
      title: "Brand og sikkerhed",
      intro: "Huset ligger op ad skoven. Brand i naturen er den største risiko i området, især om sommeren.",
      seasonLabel: "1. juni – 15. oktober",
      season: "I Andalusien er det forbudt at grille, tænde bål og bruge åben ild i skovområder og inden for 400 meter fra skov. Det gælder også ved huset.",
      rules: [
        "Smid aldrig cigaretskod i naturen. Brug et askebæger.",
        "Parker ikke bilen på tørt græs. En varm udstødning kan antænde det.",
        "Ingen fyrværkeri eller himmellygter."
      ],
      houseRuleTodo: "Husets egne regler for grill (fx om gasgrill på terrassen er tilladt)",
      fireTitle: "Hvis I ser røg eller ild",
      fire: [
        "Ring 112 med det samme, og sig adressen: Calle Navarra 5, La Mairena.",
        "Følg anvisninger fra politi, brandvæsen og Guardia Civil.",
        "Myndighederne kan sende advarsler direkte til jeres telefon (ES-Alert). Følg dem."
      ],
      evacTodo: "Flugtvej og mødested ved evakuering",
      extTodo: "Hvor brandslukker og brandtæppe står"
    }
  },

  en: {
    langName: "English",
    ui: {
      tabs: { hjem: "Home", ankomst: "Arrival", huset: "House", omraadet: "Area", kontakt: "Contact" },
      todo: "To be added", copy: "Copy", copied: "Copied", selected: "Selected. Copy manually",
      copyAddress: "Copy address", openMaps: "Open in Google Maps", language: "Language"
    },
    weather: {
      title: "Weather in La Mairena", loading: "Loading forecast …", feels: "feels like", wind: "wind", kmh: "km/h",
      today: "Today", uv: "UV", sun: "Sun", sea: "Sea at Elviria", sample: "Example · live in the app", updated: "Updated",
      kinds: { clear: "Clear", mostly: "Mostly clear", partly: "Partly cloudy", overcast: "Overcast", fog: "Fog", rain: "Rain", showers: "Showers", storm: "Thunderstorm", cloudy: "Cloudy" }
    },
    home: {
      eyebrow: "La Mairena · Ojén · Costa del Sol",
      title: "Welcome to VillaMairena",
      sub: "400 metres above sea level, 8 minutes from the beach at Elviria.",
      gate: "Gate code", gateNote: "Sent to you in the message before arrival",
      wifi: "Wi‑Fi", wifiPassLabel: "Password",
      checkin: "Check-in", checkout: "Check-out",
      fireBanner: { title: "High fire risk 1 June – 15 October", body: "No barbecues, campfires or open flames during this period. More under Contact.", link: "Fire and safety" },
      food: {
        title: "Order food to the villa",
        body: "Uber Eats delivers to VillaMairena. Use the address below and paste the note for the driver so they can find the gate.",
        open: "Open Uber Eats", note: "Note for the driver (Spanish)", copyNote: "Copy note"
      },
      importantTitle: "The essentials during your stay",
      important: [
        { icon: "i-flame", t: "No smoking indoors", s: "You are welcome to smoke outside, with care for the nature around the house." },
        { icon: "i-sun", t: "Underfloor heating and air conditioning", s: "The thermostats are set in advance. All bedrooms have air conditioning." },
        { icon: "i-home", t: "No cleaning needed", s: "Professional cleaners take care of the final cleaning after you leave." }
      ],
      sosLabel: "Emergency", sosText: "The European emergency number. Works everywhere in Spain, even without a SIM card."
    },
    arrival: {
      eyebrow: "Arrival", title: "How to find the villa", addressLabel: "Address",
      steps: [
        { t: "From Málaga airport", d: "Drive towards Marbella along the coast. The trip takes about 45 minutes.", route: "airport" },
        { t: "Up to La Mairena", d: "From the coast at Elviria you drive up into the hills. It takes about 8 minutes.", todo: "Directions and landmarks" },
        { t: "At the gate", d: "The property has a gate with intercom and camera. Enter the gate code to open it.", todo: "Where the keypad is" },
        { t: "Parking", d: "Private parking for 4 cars on the property." },
        { t: "Into the house", todo: "Key box or code lock" }
      ],
      missing: "Photos of the gate and driveway make arrival much easier for guests who arrive after dark.",
      missingLabel: "Still needed"
    },
    house: {
      eyebrow: "The house", title: "314 m² for 10–12 guests",
      chips: ["5 bedrooms", "3+1 bathrooms", "Air conditioning", "Underfloor heating", "Wi‑Fi and TV", "2,500 m² plot", "Sea view"],
      gallery: { living: "Living room and dining table for 12", kitchen: "The kitchen", bath: "Master bedroom with en-suite", closet: "Walk-in closet" },
      roomsTitle: "Bedrooms",
      roomsIntro: "All rooms have air conditioning and mountain views. Rooms 1, 3, 4 and 5 have remote-controlled external roller shutters for full blackout.",
      rooms: [
        { name: "Master bedroom", meta: "Ground floor · walk-in closet · en-suite · pool view" },
        { name: "The extra room", meta: "Ground floor · shared bathroom · no shutters" },
        { name: "View with balcony", meta: "First floor · balcony · bathroom shared with room 4" },
        { name: "First-floor view", meta: "First floor · bathroom shared with room 3" },
        { name: "Mini master bedroom", meta: "First floor · en-suite · balcony · sea and mountain view" }
      ],
      roomWord: "Room",
      extraBeds: "Extra: 2 portable guest beds and 1 baby cot.",
      poolTitle: "Swimming pool",
      poolText: "Heated all year, about 40 m². Sun loungers and lounge area around the pool, with direct access from the living room and bedrooms.",
      poolDiagram: { size: "11 m × 3.5 m", alt: "The pool from the side: 11 metres long, 1.10 to 1.70 metres deep" },
      howTitle: "How the house works",
      howIntro: "Short guides to the house's equipment. The QR stickers around the house link straight here."
    },
    how: [
      { id: "pool", icon: "i-wave", title: "Pool heating", body: ["The pool is heated all year.", "Depth is 1.10 m at one end and 1.70 m at the other."], todo: "How the temperature is set, and pool rules" },
      { id: "aircondition", icon: "i-snow", title: "Air conditioning", body: ["All bedrooms have air conditioning.", "Keep windows and doors closed while it runs for the best cooling."], todo: "Where the remote is, and recommended temperature" },
      { id: "gulvvarme", icon: "i-sun", title: "Underfloor heating", body: ["Underfloor heating throughout the house, controlled by thermostats.", "The thermostats are set in advance."], todo: "How to turn it up or down" },
      { id: "persienner", icon: "i-blind", title: "Roller shutters", body: ["Rooms 1, 3, 4 and 5 have remote-controlled external roller shutters for full blackout.", "Room 2 has no shutters."], todo: "Where the switch or remote is" },
      { id: "wifi", icon: "i-wifi", title: "Wi‑Fi", body: ["Network: VillaMairena.", "Password: VillaMairena2027", "Wi‑Fi covers the whole house and the pool area."] },
      { id: "tv", icon: "i-tv", title: "TV", body: [], todo: "How to switch on, and available services" },
      { id: "kaffe", icon: "i-cup", title: "Coffee machine", body: [], todo: "Machine type and where capsules or beans are" },
      { id: "vask", icon: "i-wash", title: "Washer and dryer", body: ["The washing machine and tumble dryer are free to use."], todo: "Where they are, and detergent" },
      { id: "affald", icon: "i-bin", title: "Rubbish and recycling", body: [], todo: "Where the bins are, and sorting" },
      { id: "afrejse", icon: "i-key", title: "Before you leave", body: ["No cleaning needed. Final cleaning is included."], todo: "Departure checklist (keys, windows, air conditioning)" }
    ],
    area: {
      eyebrow: "The area", title: "Guide to the area",
      intro: "Here is our guide to the area around the villa: beaches, shopping and restaurants, sport, culture and more. Tap an item with a triangle to open the list.",
      beachTitle: "The beaches",
      beachText: "Golden sand, clear water, chiringuitos, restaurants and beach clubs. The closest beach is about 8 minutes from the villa.",
      beaches: [["Las Chapas", "approx. 750 m of beach"], ["La Víbora", "approx. 850 m of beach"], ["Real de Zaragoza", "approx. 1.7 km of beach"]],
      dailyTitle: "Shopping and restaurants",
      daily: [
        { url: "https://www.ubereats.com/es", n: "Takeaway", d: "Delivery", s: "Uber Eats delivers to the villa. See \"Order food to the villa\" on the home screen." }
      ],
      dailyTodo: "Your favourite supermarket and bakery",
      expTitle: "Things to do", suggestion: "Suggestion",
      exp: [
        { key: "golf", n: "Golf", d: "Within 30 min", s: "More than 10 world-class golf courses." },
        { key: "padel", n: "Padel", d: "Within 15 min", s: "Padel courts in the area." },
        { key: "kultur", n: "Sights and culture", d: "20–25 min", s: "Museums, churches, old towns and historic sites." }
      ],
      golfTitle: "Golf courses nearby", golfIntro: "The 10 closest courses. Drive times are approximate. Tap Route for the exact distance in Google Maps.", golfHoles: "holes", golfRoute: "Route", golfWeb: "Website", golfMin: "min",
      golfNotes: { marbellagolf: "Being redeveloped as Higuerón Marbella Golf Resort", lacala: "La Cala has three 18-hole courses and a par-3 course" },
      padelIntro: "The 5 closest places with padel courts. Drive times are approximate. Book directly with the club.", padelCourts: "courts", padelBook: "Book a court", padelNotes: { light: "Floodlit for evening play" },
      beachSum: "The 10 closest beaches", beachSumD: "8–15 min", beachIntro: "Drive times are approximate. Tap Route for directions in Google Maps.", beachM: "m", beachTags: {"golden": "Golden sand", "dark": "Dark sand", "dunes": "Dunes (protected)", "nudist": "Nudist area", "port": "By the marina", "food": "Restaurants and chiringuitos", "kids": "Children's area", "long": "Long beach", "quiet": "Quieter"},
      shopSum: "Groceries", shopSumD: "8–20 min", shopIntro: "Drive times are approximate. Many supermarkets are closed or open shorter hours on Sundays, so check before you go.", shopHours: "Opening hours",
      shops: [{"n": "Carrefour Market Elviria", "area": "Elviria", "min": 8, "type": "Supermarket", "s": "Regular supermarket with fruit, vegetables, meat, fish and wine. The nearest big shop.", "q": "Carrefour Market Elviria, Marbella", "hours": "Mon–Sat 9:00–22:00", "url": "https://www.carrefour.es/tiendas-carrefour/supermercados/carrefour-market/elviria-marbella-s.aspx"}, {"n": "Mercadillo de Las Chapas", "area": "Parking Elviria", "min": 8, "type": "Market", "s": "Local Friday market with about 30 stalls: fruit and vegetables, clothes, bags and crafts.", "q": "Pinar de Elviria, 29604 Marbella", "hours": "Friday 9:00–14:00", "url": "https://mercadillos.org/es/marbella/mercadillo-las-chapas"}, {"n": "Elviria Centro", "area": "Elviria", "min": 8, "type": "Shops and services", "s": "Elviria's small centre with bakeries, pharmacy, banks, cafés and restaurants.", "q": "Centro Comercial Elviria, Marbella"}, {"n": "Mercadona", "area": "La Cala de Mijas", "min": 15, "type": "Supermarket", "s": "Spain's largest supermarket chain. Wide range and good prices.", "q": "Mercadona La Cala de Mijas", "hours": "Most days until 21:00"}, {"n": "Lidl", "area": "La Cala de Mijas", "min": 15, "type": "Discount", "s": "Low-cost supermarket with weekly offers.", "q": "Lidl La Cala de Mijas"}, {"n": "Aldi", "area": "La Cala de Mijas", "min": 15, "type": "Discount", "s": "Low-cost supermarket with the basics.", "q": "Aldi La Cala de Mijas"}, {"n": "Mercadillo de La Cala", "area": "La Cala de Mijas", "min": 15, "type": "Market", "s": "Large market with over 100 stalls: produce, local specialities, clothes and household goods. Arrive before 10:00 for the best produce.", "q": "Mercadillo La Cala de Mijas", "hours": "Wednesday and Saturday 9:00–14:00"}, {"n": "La Cañada", "area": "Marbella", "min": 20, "type": "Shopping centre", "s": "Large shopping centre with a hypermarket (Alcampo) and many well-known shops.", "q": "Centro Comercial La Cañada, Marbella"}],
      cultIntro: "Drive times are approximate and opening hours can change, so check before you go. Most places are free.", cults: [{"n": "Iglesia de la Encarnación", "area": "Ojén", "min": 20, "type": "Church", "s": "The village church from the 1400s with a fine Mudéjar wooden ceiling from the 1500–1600s.", "q": "Iglesia Nuestra Señora de la Encarnación, Ojén"}, {"n": "Museo del Molino y del Aguardiente", "area": "Ojén", "min": 20, "type": "Museum", "s": "18th-century water mill with original olive oil machinery. Upstairs: museum of Ojén's famous aguardiente brandy.", "q": "Museo del Molino, Calle Charcas 60, Ojén", "url": "https://sierradelasnieves.es/en/?p=6605"}, {"n": "Casco Antiguo", "area": "Marbella", "min": 20, "type": "Old town", "s": "Marbella's white old town with Plaza de los Naranjos, narrow streets and the Iglesia de la Encarnación.", "q": "Plaza de los Naranjos, Marbella", "hours": "Always open"}, {"n": "Museo del Grabado Español Contemporáneo", "area": "Marbella", "min": 20, "type": "Art museum", "s": "Spain's first museum of printmaking, about 2,000 works incl. Picasso, Miró and Dalí, in a 17th-century hospital. Free.", "q": "Museo del Grabado Español Contemporáneo, Marbella", "hours": "Mon–Sat 10–20, Sun 10–14"}, {"n": "Colección Arqueológica Municipal", "area": "Marbella", "min": 20, "type": "Museum", "s": "Archaeological finds from the area, incl. Roman villas, in a 16th-century building. Free.", "q": "Plaza Altamirano, Marbella", "hours": "Mon–Fri 9–14"}, {"n": "Cortijo Miraflores", "area": "Marbella", "min": 20, "type": "Cultural centre", "s": "Historic farmhouse with an olive oil museum and archaeology exhibitions. Free.", "q": "Cortijo Miraflores, Marbella", "hours": "Daily 9–20:30"}, {"n": "Museo Ralli", "area": "Golden Mile, Marbella", "min": 25, "type": "Art museum", "s": "One of Europe's key collections of Latin American art, 50 m from the beach. Free.", "q": "Museo Ralli, Marbella", "hours": "Tue–Fri 10–17, Sat 10–15 (closed 21 Dec–14 Feb)", "url": "https://museoralli.es/en/museum-ralli-and-its-surroundings/"}, {"n": "Villa Romana de Río Verde", "area": "Marbella", "min": 25, "type": "Roman site", "s": "Roman villa from the 1st–3rd century with unusual black-and-white mosaics. Free.", "q": "Villa Romana de Río Verde, Marbella", "hours": "Fri–Sun 10:30–13:30", "url": "https://www.historyhit.com/locations/rio-verde-roman-villa/"}, {"n": "Mijas Pueblo", "area": "Mijas", "min": 25, "type": "White village", "s": "Mountain village with churches, the Virgen de la Peña chapel, an oval bullring from 1900 and a miniature museum.", "q": "Mijas Pueblo"}, {"n": "Castillo Sohail", "area": "Fuengirola", "min": 25, "type": "Castle", "s": "12th-century Moorish castle on the coast with great views. Free.", "q": "Castillo Sohail, Fuengirola", "hours": "Tue–Fri 10–14, weekends 10–18"}],
      restSum: "Restaurants", restSumD: "3–30 min", restIntro: "20 restaurants from La Mairena down along the coast. Drive times are approximate. Booking ahead is a good idea, especially in summer.", rests: [{"n": "Kudu Bar", "area": "La Mairena", "min": 3, "type": "International", "s": "Popular spot in La Mairena with a terrace and great views. Known for curry, salmon and ribs. Book ahead.", "q": "Kudu Bar, La Mairena, Ojén", "price": "€€", "url": "https://thekudubar.com"}, {"n": "El Soto de Marbella", "area": "La Mairena", "min": 5, "type": "Bar and restaurant", "s": "Bar and restaurant by the El Soto golf course. Open to everyone, with live music during the year.", "q": "El Soto de Marbella club house, Ojén"}, {"n": "El Lago", "area": "Elviria Hills", "min": 10, "type": "Fine dining", "s": "Fine dining by a lake in Elviria Hills using Andalusian produce. Has held a Michelin star.", "q": "Restaurante El Lago, Elviria, Marbella"}, {"n": "Ombú", "area": "Don Carlos Resort, Elviria", "min": 10, "type": "Mediterranean", "s": "Restaurant in tropical gardens at the Don Carlos Resort.", "q": "Ombú, Don Carlos Resort, Marbella"}, {"n": "La Scala Marbella", "area": "Elviria", "min": 10, "type": "Italian", "s": "Highly rated Italian restaurant.", "q": "La Scala Marbella, Elviria", "price": "€€€€"}, {"n": "Nikki Beach Marbella", "area": "Elviria", "min": 10, "type": "Beach club", "s": "Famous all-white beach club with music and an international crowd.", "q": "Nikki Beach Marbella", "price": "€€€€"}, {"n": "The Beach House", "area": "Elviria", "min": 10, "type": "Mediterranean", "s": "Beachfront restaurant with Mediterranean food and sea views.", "q": "The Beach House Marbella, Elviria", "price": "€€–€€€"}, {"n": "La Plage Casanis", "area": "Elviria", "min": 10, "type": "Beach club", "s": "Elegant beach club with Mediterranean cuisine.", "q": "La Plage Casanis, Marbella"}, {"n": "Chiringuito Tony's", "area": "Elviria", "min": 10, "type": "Seafood", "s": "Very popular beach chiringuito serving seafood.", "q": "Chiringuito Tonys, Elviria, Marbella", "price": "€€–€€€"}, {"n": "Restaurante Merendero Cristina", "area": "Elviria", "min": 10, "type": "Seafood", "s": "Classic beach restaurant with fish and seafood.", "q": "Merendero Cristina, Elviria, Marbella", "price": "€€–€€€"}, {"n": "Alma de Papagayo", "area": "Elviria", "min": 10, "type": "International", "s": "Highly rated restaurant with international cuisine.", "q": "Alma de Papagayo, Elviria, Marbella", "price": "€€–€€€"}, {"n": "Zumaque", "area": "Elviria", "min": 10, "type": "Steakhouse and seafood", "s": "Meat and fish, highly rated by guests.", "q": "Zumaque, Elviria, Marbella", "price": "€€–€€€"}, {"n": "Mini India Elviria", "area": "Elviria", "min": 10, "type": "Indian", "s": "Indian restaurant, very popular with visitors.", "q": "Mini India Elviria, Marbella", "price": "€€–€€€"}, {"n": "Nosso Summer Club", "area": "Las Chapas", "min": 12, "type": "Beach club", "s": "Stylish beach club on Las Chapas beach with Asian-Mediterranean food.", "q": "Nosso Summer Club, Las Chapas, Marbella"}, {"n": "Siroko Beach", "area": "Las Chapas", "min": 12, "type": "Beach club", "s": "Beach restaurant and lounge with sunbeds and music.", "q": "Siroko Beach, Las Chapas, Marbella"}, {"n": "Simbad", "area": "Marbesa", "min": 12, "type": "Seafood", "s": "Relaxed beach bar with espetos (grilled sardines) and a good wine list.", "q": "Simbad Restaurant Beach Bar, Marbesa, Marbella"}, {"n": "Andy's Beach", "area": "Cabopino", "min": 12, "type": "Seafood", "s": "Restaurant right on the sand with seafood and sea views.", "q": "Andy's Beach, Cabopino, Marbella"}, {"n": "Mesón Lorente", "area": "Ojén", "min": 20, "type": "Andalusian", "s": "Andalusian food in Ojén with generous portions. Known for its fish stew.", "q": "Mesón Lorente, Ojén"}, {"n": "El Fogón de Flore", "area": "Ojén", "min": 20, "type": "Spanish and European", "s": "Hilltop restaurant in Ojén with valley views.", "q": "El Fogón de Flore, Ojén"}, {"n": "El Refugio de Juanar", "area": "Sierra Blanca, Ojén", "min": 30, "type": "Andalusian", "s": "Cosy mountain restaurant with homely Andalusian food. A scenic drive up into the hills.", "q": "El Refugio de Juanar, Ojén"}]
    },
    contact: {
      report: {"title": "Report a problem or suggest an improvement", "intro": "Has something broken, or do you have an idea for how the house could be better? Tell us here, ideally with a photo. It goes straight to the owners.", "issue": "Something is broken", "idea": "Suggestion", "where": "Where?", "text": "Describe it briefly", "photo": "Take or choose a photo", "photoAdded": "Photo added", "name": "Name of the person who booked", "send": "Send", "sending": "Sending …", "thanks": "Thank you! We have received your message and will get back to you if needed.", "error": "The message was not sent. Please try again or call us.", "empty": "Add a short description or a photo.", "urgent": "If it is urgent, call us on +45 51 59 30 50.", "choose": "Choose a place", "inside": "Inside the house", "outside": "Outdoors", "nameReq": "Please enter the name of the person who booked the stay.", "roomsIn": ["Room 1 (master bedroom)", "Room 2", "Room 3", "Room 4", "Room 5", "Bathroom", "Guest toilet", "Walk-in closet", "Kitchen", "Living and dining room", "Hallway and stairs", "Washer and dryer"], "roomsOut": ["Pool", "Terrace and sun loungers", "Balcony", "Garden", "Driveway and gate", "Parking"], "other": "Other"},
      eyebrow: "Contact", title: "Who to call",
      sos: "Emergency: police, ambulance, fire",
      ownersTitle: "The owners",
      ownersText: "Pernille, Jens, Christina and Thomas. We answer between 08:00 and 23:00, often within a few hours.",
      phone: "Phone", email: "Email",
      localTitle: "On site",
      local: [
        { who: "Local host / property manager", what: "Keys, gate, anything practical", todo: "Name and number" },
        { who: "Pool service", what: "If something is wrong with the pool", todo: "Name and number" },
        { who: "Electrician / plumber", what: "Power, water, air conditioning", todo: "Name and number" },
        { who: "Cleaning", what: "Extra cleaning during your stay", todo: "Name and number" }
      ],
      healthTitle: "Health",
      health: [
        { who: "Hospital Costa del Sol", what: "Public hospital with A&E in Marbella" },
        { who: "Nearest pharmacy and doctor", todo: "Name and address" }
      ]
    },
    safety: {
      title: "Fire and safety",
      intro: "The villa borders the forest. Wildfire is the biggest risk in the area, especially in summer.",
      seasonLabel: "1 June – 15 October",
      season: "In Andalusia, barbecues, campfires and open flames are prohibited in forest areas and within 400 metres of forest. This also applies at the villa.",
      rules: [
        "Never throw cigarette ends into nature. Use an ashtray.",
        "Do not park on dry grass. A hot exhaust can set it alight.",
        "No fireworks or sky lanterns."
      ],
      houseRuleTodo: "House rules for barbecues (e.g. whether a gas grill on the terrace is allowed)",
      fireTitle: "If you see smoke or fire",
      fire: [
        "Call 112 immediately and give the address: Calle Navarra 5, La Mairena.",
        "Follow instructions from police, fire service and Guardia Civil.",
        "The authorities can send alerts directly to your phone (ES-Alert). Follow them."
      ],
      evacTodo: "Evacuation route and meeting point",
      extTodo: "Where the fire extinguisher and fire blanket are"
    }
  },

  es: {
    langName: "Español",
    ui: {
      tabs: { hjem: "Inicio", ankomst: "Llegada", huset: "La casa", omraadet: "La zona", kontakt: "Contacto" },
      todo: "Pendiente", copy: "Copiar", copied: "Copiado", selected: "Seleccionado. Cópialo manualmente",
      copyAddress: "Copiar dirección", openMaps: "Abrir en Google Maps", language: "Idioma"
    },
    weather: {
      title: "El tiempo en La Mairena", loading: "Cargando previsión …", feels: "sensación", wind: "viento", kmh: "km/h",
      today: "Hoy", uv: "UV", sun: "Sol", sea: "Mar en Elviria", sample: "Ejemplo · en directo en la app", updated: "Actualizado",
      kinds: { clear: "Despejado", mostly: "Mayormente despejado", partly: "Parcialmente nublado", overcast: "Cubierto", fog: "Niebla", rain: "Lluvia", showers: "Chubascos", storm: "Tormenta", cloudy: "Nublado" }
    },
    home: {
      eyebrow: "La Mairena · Ojén · Costa del Sol",
      title: "Bienvenidos a VillaMairena",
      sub: "A 400 metros sobre el mar, a 8 minutos de la playa de Elviria.",
      gate: "Código de la puerta", gateNote: "Os lo enviamos en el mensaje antes de la llegada",
      wifi: "Wi‑Fi", wifiPassLabel: "Contraseña",
      checkin: "Entrada", checkout: "Salida",
      fireBanner: { title: "Peligro alto de incendios del 1 de junio al 15 de octubre", body: "Prohibidas las barbacoas, hogueras y el fuego abierto en este periodo. Más información en Contacto.", link: "Incendios y seguridad" },
      food: {
        title: "Pedir comida a la villa",
        body: "Uber Eats entrega en VillaMairena. Usa la dirección de abajo y pega la nota para el repartidor para que encuentre la puerta.",
        open: "Abrir Uber Eats", note: "Nota para el repartidor", copyNote: "Copiar nota"
      },
      importantTitle: "Lo más importante durante la estancia",
      important: [
        { icon: "i-flame", t: "Prohibido fumar dentro de la casa", s: "Se puede fumar fuera, respetando la naturaleza que rodea la casa." },
        { icon: "i-sun", t: "Suelo radiante y aire acondicionado", s: "Los termostatos ya están ajustados. Todos los dormitorios tienen aire acondicionado." },
        { icon: "i-home", t: "No tenéis que limpiar", s: "La limpieza final la hace un equipo profesional después de vuestra salida." }
      ],
      sosLabel: "Emergencias", sosText: "Número europeo de emergencias. Funciona en toda España, incluso sin tarjeta SIM."
    },
    arrival: {
      eyebrow: "Llegada", title: "Cómo llegar a la villa", addressLabel: "Dirección",
      steps: [
        { t: "Desde el aeropuerto de Málaga", d: "Conducid hacia Marbella por la costa. El trayecto dura unos 45 minutos.", route: "airport" },
        { t: "Subida a La Mairena", d: "Desde la costa en Elviria se sube a la montaña. Son unos 8 minutos.", todo: "Indicaciones y referencias" },
        { t: "En la puerta", d: "La parcela tiene puerta con interfono y cámara. Introducid el código para abrir.", todo: "Dónde está el teclado" },
        { t: "Aparcamiento", d: "Aparcamiento privado para 4 coches en la parcela." },
        { t: "Entrar en la casa", todo: "Caja de llaves o cerradura con código" }
      ],
      missing: "Fotos de la puerta y el acceso facilitan mucho la llegada a quienes llegan de noche.",
      missingLabel: "Falta"
    },
    house: {
      eyebrow: "La casa", title: "314 m² para 10–12 huéspedes",
      chips: ["5 dormitorios", "3+1 baños", "Aire acondicionado", "Suelo radiante", "Wi‑Fi y TV", "Parcela de 2.500 m²", "Vistas al mar"],
      gallery: { living: "Salón y mesa de comedor para 12", kitchen: "La cocina", bath: "Dormitorio principal con baño", closet: "Vestidor" },
      roomsTitle: "Dormitorios",
      roomsIntro: "Todos los dormitorios tienen aire acondicionado y vistas a la montaña. Los dormitorios 1, 3, 4 y 5 tienen persianas exteriores con mando para oscurecer del todo.",
      rooms: [
        { name: "Dormitorio principal", meta: "Planta baja · vestidor · baño propio · vistas a la piscina" },
        { name: "La habitación extra", meta: "Planta baja · baño compartido · sin persianas" },
        { name: "Vistas con balcón", meta: "Primera planta · balcón · baño compartido con el dormitorio 4" },
        { name: "Vistas desde la primera planta", meta: "Primera planta · baño compartido con el dormitorio 3" },
        { name: "Mini suite", meta: "Primera planta · baño propio · balcón · vistas al mar y la montaña" }
      ],
      roomWord: "Dormitorio",
      extraBeds: "Extra: 2 camas supletorias y 1 cuna.",
      poolTitle: "Piscina",
      poolText: "Climatizada todo el año, unos 40 m². Tumbonas y zona lounge alrededor, con acceso directo desde el salón y los dormitorios.",
      poolDiagram: { size: "11 m × 3,5 m", alt: "La piscina de perfil: 11 metros de largo, de 1,10 a 1,70 metros de profundidad" },
      howTitle: "Cómo funciona la casa",
      howIntro: "Guías breves de las instalaciones de la casa. Los códigos QR de la casa llevan directamente aquí."
    },
    how: [
      { id: "pool", icon: "i-wave", title: "Climatización de la piscina", body: ["La piscina está climatizada todo el año.", "La profundidad es de 1,10 m en un extremo y 1,70 m en el otro."], todo: "Cómo se ajusta la temperatura y normas de la piscina" },
      { id: "aircondition", icon: "i-snow", title: "Aire acondicionado", body: ["Todos los dormitorios tienen aire acondicionado.", "Mantened puertas y ventanas cerradas mientras funciona para que enfríe mejor."], todo: "Dónde está el mando y temperatura recomendada" },
      { id: "gulvvarme", icon: "i-sun", title: "Suelo radiante", body: ["Suelo radiante en toda la casa, con termostatos.", "Los termostatos ya están ajustados."], todo: "Cómo subir o bajar la temperatura" },
      { id: "persienner", icon: "i-blind", title: "Persianas", body: ["Los dormitorios 1, 3, 4 y 5 tienen persianas exteriores con mando para oscurecer del todo.", "El dormitorio 2 no tiene persianas."], todo: "Dónde está el interruptor o el mando" },
      { id: "wifi", icon: "i-wifi", title: "Wi‑Fi", body: ["Red: VillaMairena.", "Contraseña: VillaMairena2027", "Hay Wi‑Fi en toda la casa y en la zona de la piscina."] },
      { id: "tv", icon: "i-tv", title: "Televisión", body: [], todo: "Cómo encenderla y qué servicios hay" },
      { id: "kaffe", icon: "i-cup", title: "Cafetera", body: [], todo: "Tipo de cafetera y dónde están las cápsulas o el café" },
      { id: "vask", icon: "i-wash", title: "Lavadora y secadora", body: ["La lavadora y la secadora son de libre uso."], todo: "Dónde están y dónde está el detergente" },
      { id: "affald", icon: "i-bin", title: "Basura y reciclaje", body: [], todo: "Dónde están los contenedores y cómo separar" },
      { id: "afrejse", icon: "i-key", title: "Antes de salir", body: ["No tenéis que limpiar. La limpieza final está incluida."], todo: "Lista de salida (llaves, ventanas, aire acondicionado)" }
    ],
    area: {
      eyebrow: "La zona", title: "Guía de la zona",
      intro: "Esta es nuestra guía de la zona alrededor de la villa: playas, compras y restaurantes, deporte, cultura y mucho más. Pulsa un apartado con triángulo para abrir la lista.",
      beachTitle: "Las playas",
      beachText: "Arena dorada, agua clara, chiringuitos, restaurantes y beach clubs. La playa más cercana está a unos 8 minutos de la villa.",
      beaches: [["Las Chapas", "aprox. 750 m de playa"], ["La Víbora", "aprox. 850 m de playa"], ["Real de Zaragoza", "aprox. 1,7 km de playa"]],
      dailyTitle: "Compras y restaurantes",
      daily: [
        { url: "https://www.ubereats.com/es", n: "Comida a domicilio", d: "Entrega", s: "Uber Eats entrega en la villa. Ver \"Pedir comida a la villa\" en Inicio." }
      ],
      dailyTodo: "Vuestro supermercado y panadería favoritos",
      expTitle: "Qué hacer", suggestion: "Sugerencia",
      exp: [
        { key: "golf", n: "Golf", d: "A menos de 30 min", s: "Más de 10 campos de golf de primer nivel." },
        { key: "padel", n: "Pádel", d: "A menos de 15 min", s: "Pistas de pádel en la zona." },
        { key: "kultur", n: "Monumentos y cultura", d: "20–25 min", s: "Museos, iglesias, cascos antiguos y lugares históricos." }
      ],
      golfTitle: "Campos de golf cercanos", golfIntro: "Los 10 campos más cercanos. Los tiempos son aproximados. Pulsa Ruta para ver la distancia exacta en Google Maps.", golfHoles: "hoyos", golfRoute: "Ruta", golfWeb: "Web", golfMin: "min",
      golfNotes: { marbellagolf: "En transformación como Higuerón Marbella Golf Resort", lacala: "La Cala tiene tres campos de 18 hoyos y uno de par 3" },
      padelIntro: "Los 5 lugares más cercanos con pistas de pádel. Los tiempos son aproximados. Reserva directamente con el club.", padelCourts: "pistas", padelBook: "Reservar pista", padelNotes: { light: "Con luz para jugar de noche" },
      beachSum: "Las 10 playas más cercanas", beachSumD: "8–15 min", beachIntro: "Los tiempos son aproximados. Pulsa Ruta para ver el camino en Google Maps.", beachM: "m", beachTags: {"golden": "Arena dorada", "dark": "Arena oscura", "dunes": "Dunas (monumento natural)", "nudist": "Zona nudista", "port": "Junto al puerto deportivo", "food": "Restaurantes y chiringuitos", "kids": "Zona infantil", "long": "Playa larga", "quiet": "Más tranquila"},
      shopSum: "Alimentación", shopSumD: "8–20 min", shopIntro: "Los tiempos son aproximados. Muchos supermercados cierran o abren menos horas los domingos; conviene comprobarlo antes.", shopHours: "Horario",
      shops: [{"n": "Carrefour Market Elviria", "area": "Elviria", "min": 8, "type": "Supermercado", "s": "Supermercado con fruta, verdura, carne, pescado y vino. La compra grande más cercana.", "q": "Carrefour Market Elviria, Marbella", "hours": "Lun–sáb 9:00–22:00", "url": "https://www.carrefour.es/tiendas-carrefour/supermercados/carrefour-market/elviria-marbella-s.aspx"}, {"n": "Mercadillo de Las Chapas", "area": "Parking Elviria", "min": 8, "type": "Mercadillo", "s": "Mercadillo local de los viernes con unos 30 puestos: fruta y verdura, ropa, bolsos y artesanía.", "q": "Pinar de Elviria, 29604 Marbella", "hours": "Viernes 9:00–14:00", "url": "https://mercadillos.org/es/marbella/mercadillo-las-chapas"}, {"n": "Elviria Centro", "area": "Elviria", "min": 8, "type": "Tiendas y servicios", "s": "El pequeño centro de Elviria con panaderías, farmacia, bancos, cafeterías y restaurantes.", "q": "Centro Comercial Elviria, Marbella"}, {"n": "Mercadona", "area": "La Cala de Mijas", "min": 15, "type": "Supermercado", "s": "La mayor cadena de supermercados de España. Gran surtido y buenos precios.", "q": "Mercadona La Cala de Mijas", "hours": "La mayoría de días hasta las 21:00"}, {"n": "Lidl", "area": "La Cala de Mijas", "min": 15, "type": "Descuento", "s": "Supermercado económico con ofertas semanales.", "q": "Lidl La Cala de Mijas"}, {"n": "Aldi", "area": "La Cala de Mijas", "min": 15, "type": "Descuento", "s": "Supermercado económico con lo básico.", "q": "Aldi La Cala de Mijas"}, {"n": "Mercadillo de La Cala", "area": "La Cala de Mijas", "min": 15, "type": "Mercadillo", "s": "Gran mercadillo con más de 100 puestos: productos frescos, especialidades locales, ropa y hogar. Mejor antes de las 10:00.", "q": "Mercadillo La Cala de Mijas", "hours": "Miércoles y sábado 9:00–14:00"}, {"n": "La Cañada", "area": "Marbella", "min": 20, "type": "Centro comercial", "s": "Gran centro comercial con hipermercado (Alcampo) y muchas tiendas conocidas.", "q": "Centro Comercial La Cañada, Marbella"}],
      cultIntro: "Los tiempos son aproximados y los horarios pueden cambiar; conviene comprobarlos antes. La mayoría son gratuitos.", cults: [{"n": "Iglesia de la Encarnación", "area": "Ojén", "min": 20, "type": "Iglesia", "s": "Iglesia del pueblo del siglo XV con un bello artesonado mudéjar de los siglos XVI–XVII.", "q": "Iglesia Nuestra Señora de la Encarnación, Ojén"}, {"n": "Museo del Molino y del Aguardiente", "area": "Ojén", "min": 20, "type": "Museo", "s": "Molino de agua del siglo XVIII con la maquinaria original de aceite. Arriba: museo del famoso aguardiente de Ojén.", "q": "Museo del Molino, Calle Charcas 60, Ojén", "url": "https://sierradelasnieves.es/en/?p=6605"}, {"n": "Casco Antiguo", "area": "Marbella", "min": 20, "type": "Casco antiguo", "s": "El casco antiguo blanco de Marbella con la Plaza de los Naranjos, calles estrechas y la Iglesia de la Encarnación.", "q": "Plaza de los Naranjos, Marbella", "hours": "Siempre abierto"}, {"n": "Museo del Grabado Español Contemporáneo", "area": "Marbella", "min": 20, "type": "Museo de arte", "s": "Primer museo de grabado de España, unas 2.000 obras de Picasso, Miró y Dalí, entre otros, en un hospital del siglo XVII. Gratis.", "q": "Museo del Grabado Español Contemporáneo, Marbella", "hours": "Lun–sáb 10–20, dom 10–14"}, {"n": "Colección Arqueológica Municipal", "area": "Marbella", "min": 20, "type": "Museo", "s": "Hallazgos arqueológicos de la zona, como villas romanas, en un edificio del siglo XVI. Gratis.", "q": "Plaza Altamirano, Marbella", "hours": "Lun–vie 9–14"}, {"n": "Cortijo Miraflores", "area": "Marbella", "min": 20, "type": "Centro cultural", "s": "Cortijo histórico con museo del aceite y exposiciones de arqueología. Gratis.", "q": "Cortijo Miraflores, Marbella", "hours": "Todos los días 9–20:30"}, {"n": "Museo Ralli", "area": "Golden Mile, Marbella", "min": 25, "type": "Museo de arte", "s": "Una de las colecciones de arte latinoamericano más importantes de Europa, a 50 m de la playa. Gratis.", "q": "Museo Ralli, Marbella", "hours": "Mar–vie 10–17, sáb 10–15 (cerrado 21/12–14/2)", "url": "https://museoralli.es/en/museum-ralli-and-its-surroundings/"}, {"n": "Villa Romana de Río Verde", "area": "Marbella", "min": 25, "type": "Yacimiento romano", "s": "Villa romana de los siglos I–III con curiosos mosaicos en blanco y negro. Gratis.", "q": "Villa Romana de Río Verde, Marbella", "hours": "Vie–dom 10:30–13:30", "url": "https://www.historyhit.com/locations/rio-verde-roman-villa/"}, {"n": "Mijas Pueblo", "area": "Mijas", "min": 25, "type": "Pueblo blanco", "s": "Pueblo de montaña con iglesias, la ermita de la Virgen de la Peña, una plaza de toros oval de 1900 y un museo de miniaturas.", "q": "Mijas Pueblo"}, {"n": "Castillo Sohail", "area": "Fuengirola", "min": 25, "type": "Castillo", "s": "Castillo andalusí del siglo XII junto al mar con grandes vistas. Gratis.", "q": "Castillo Sohail, Fuengirola", "hours": "Mar–vie 10–14, fin de semana 10–18"}],
      restSum: "Restaurantes", restSumD: "3–30 min", restIntro: "20 restaurantes desde La Mairena y a lo largo de la costa. Los tiempos son aproximados. Conviene reservar, sobre todo en verano.", rests: [{"n": "Kudu Bar", "area": "La Mairena", "min": 3, "type": "Internacional", "s": "Sitio muy popular en La Mairena con terraza y grandes vistas. Famoso por el curry, el salmón y las costillas. Mejor reservar.", "q": "Kudu Bar, La Mairena, Ojén", "price": "€€", "url": "https://thekudubar.com"}, {"n": "El Soto de Marbella", "area": "La Mairena", "min": 5, "type": "Bar y restaurante", "s": "Bar y restaurante junto al golf de El Soto. Abierto a todos, con música en directo durante el año.", "q": "El Soto de Marbella club house, Ojén"}, {"n": "El Lago", "area": "Elviria Hills", "min": 10, "type": "Alta cocina", "s": "Alta cocina junto a un lago en Elviria Hills con producto andaluz. Ha tenido estrella Michelin.", "q": "Restaurante El Lago, Elviria, Marbella"}, {"n": "Ombú", "area": "Don Carlos Resort, Elviria", "min": 10, "type": "Mediterránea", "s": "Restaurante en jardines tropicales del Don Carlos Resort.", "q": "Ombú, Don Carlos Resort, Marbella"}, {"n": "La Scala Marbella", "area": "Elviria", "min": 10, "type": "Italiana", "s": "Restaurante italiano muy bien valorado.", "q": "La Scala Marbella, Elviria", "price": "€€€€"}, {"n": "Nikki Beach Marbella", "area": "Elviria", "min": 10, "type": "Beach club", "s": "Conocido beach club en blanco con música y ambiente internacional.", "q": "Nikki Beach Marbella", "price": "€€€€"}, {"n": "The Beach House", "area": "Elviria", "min": 10, "type": "Mediterránea", "s": "Restaurante en la playa con cocina mediterránea y vistas al mar.", "q": "The Beach House Marbella, Elviria", "price": "€€–€€€"}, {"n": "La Plage Casanis", "area": "Elviria", "min": 10, "type": "Beach club", "s": "Elegante beach club con cocina mediterránea.", "q": "La Plage Casanis, Marbella"}, {"n": "Chiringuito Tony's", "area": "Elviria", "min": 10, "type": "Pescado y marisco", "s": "Chiringuito muy popular en la playa con pescado y marisco.", "q": "Chiringuito Tonys, Elviria, Marbella", "price": "€€–€€€"}, {"n": "Restaurante Merendero Cristina", "area": "Elviria", "min": 10, "type": "Pescado y marisco", "s": "Clásico restaurante de playa con pescado y marisco.", "q": "Merendero Cristina, Elviria, Marbella", "price": "€€–€€€"}, {"n": "Alma de Papagayo", "area": "Elviria", "min": 10, "type": "Internacional", "s": "Restaurante de cocina internacional muy bien valorado.", "q": "Alma de Papagayo, Elviria, Marbella", "price": "€€–€€€"}, {"n": "Zumaque", "area": "Elviria", "min": 10, "type": "Carnes y pescado", "s": "Carne y pescado, muy bien valorado.", "q": "Zumaque, Elviria, Marbella", "price": "€€–€€€"}, {"n": "Mini India Elviria", "area": "Elviria", "min": 10, "type": "India", "s": "Restaurante indio muy popular.", "q": "Mini India Elviria, Marbella", "price": "€€–€€€"}, {"n": "Nosso Summer Club", "area": "Las Chapas", "min": 12, "type": "Beach club", "s": "Beach club con estilo en la playa de Las Chapas, cocina asiático-mediterránea.", "q": "Nosso Summer Club, Las Chapas, Marbella"}, {"n": "Siroko Beach", "area": "Las Chapas", "min": 12, "type": "Beach club", "s": "Restaurante de playa y lounge con tumbonas y música.", "q": "Siroko Beach, Las Chapas, Marbella"}, {"n": "Simbad", "area": "Marbesa", "min": 12, "type": "Pescado y marisco", "s": "Chiringuito relajado con espetos y buena carta de vinos.", "q": "Simbad Restaurant Beach Bar, Marbesa, Marbella"}, {"n": "Andy's Beach", "area": "Cabopino", "min": 12, "type": "Pescado y marisco", "s": "Restaurante sobre la arena con pescado y vistas al mar.", "q": "Andy's Beach, Cabopino, Marbella"}, {"n": "Mesón Lorente", "area": "Ojén", "min": 20, "type": "Andaluza", "s": "Cocina andaluza en Ojén con raciones generosas. Famoso por su guiso de pescado.", "q": "Mesón Lorente, Ojén"}, {"n": "El Fogón de Flore", "area": "Ojén", "min": 20, "type": "Española y europea", "s": "Restaurante en lo alto de Ojén con vistas al valle.", "q": "El Fogón de Flore, Ojén"}, {"n": "El Refugio de Juanar", "area": "Sierra Blanca, Ojén", "min": 30, "type": "Andaluza", "s": "Acogedor restaurante de montaña con cocina andaluza casera. Bonita subida a la sierra.", "q": "El Refugio de Juanar, Ojén"}]
    },
    contact: {
      report: {"title": "Avisar de una avería o hacer una sugerencia", "intro": "¿Se ha roto algo o tenéis una idea para mejorar la casa? Escribidnos aquí, si podéis con una foto. Llega directamente a los propietarios.", "issue": "Algo se ha roto", "idea": "Sugerencia de mejora", "where": "¿Dónde?", "text": "Descríbelo brevemente", "photo": "Hacer o elegir una foto", "photoAdded": "Foto añadida", "name": "Nombre de quien hizo la reserva", "send": "Enviar", "sending": "Enviando …", "thanks": "¡Gracias! Hemos recibido vuestro mensaje y os responderemos si hace falta.", "error": "El mensaje no se ha enviado. Inténtalo de nuevo o llámanos.", "empty": "Escribe una breve descripción o añade una foto.", "urgent": "Si es urgente, llamadnos al +45 51 59 30 50.", "choose": "Elige un lugar", "inside": "Dentro de la casa", "outside": "Exterior", "nameReq": "Escribe el nombre de quien hizo la reserva.", "roomsIn": ["Dormitorio 1 (principal)", "Dormitorio 2", "Dormitorio 3", "Dormitorio 4", "Dormitorio 5", "Baño", "Aseo de invitados", "Vestidor", "Cocina", "Salón y comedor", "Pasillo y escalera", "Lavadora y secadora"], "roomsOut": ["Piscina", "Terraza y tumbonas", "Balcón", "Jardín", "Entrada y puerta", "Aparcamiento"], "other": "Otro"},
      eyebrow: "Contacto", title: "A quién llamar",
      sos: "Urgencias: policía, ambulancia, bomberos",
      ownersTitle: "Los propietarios",
      ownersText: "Pernille, Jens, Christina y Thomas. Respondemos de 08:00 a 23:00, a menudo en pocas horas.",
      phone: "Teléfono", email: "Correo",
      localTitle: "En la zona",
      local: [
        { who: "Anfitrión local / gestor", what: "Llaves, puerta, todo lo práctico", todo: "Nombre y teléfono" },
        { who: "Mantenimiento de piscina", what: "Si algo falla en la piscina", todo: "Nombre y teléfono" },
        { who: "Electricista / fontanero", what: "Luz, agua, aire acondicionado", todo: "Nombre y teléfono" },
        { who: "Limpieza", what: "Limpieza extra durante la estancia", todo: "Nombre y teléfono" }
      ],
      healthTitle: "Salud",
      health: [
        { who: "Hospital Costa del Sol", what: "Hospital público con urgencias en Marbella" },
        { who: "Farmacia y médico más cercanos", todo: "Nombre y dirección" }
      ]
    },
    safety: {
      title: "Incendios y seguridad",
      intro: "La villa linda con el bosque. Los incendios forestales son el mayor riesgo de la zona, sobre todo en verano.",
      seasonLabel: "1 de junio – 15 de octubre",
      season: "En Andalucía están prohibidas las barbacoas, hogueras y el fuego abierto en terrenos forestales y a menos de 400 metros de ellos. También en la villa.",
      rules: [
        "No tiréis nunca colillas en la naturaleza. Usad un cenicero.",
        "No aparquéis sobre hierba seca. Un tubo de escape caliente puede prenderla.",
        "Nada de fuegos artificiales ni farolillos voladores."
      ],
      houseRuleTodo: "Normas de la casa para barbacoas (p. ej. si se permite la parrilla de gas en la terraza)",
      fireTitle: "Si veis humo o fuego",
      fire: [
        "Llamad al 112 enseguida y dad la dirección: Calle Navarra 5, La Mairena.",
        "Seguid las indicaciones de la policía, los bomberos y la Guardia Civil.",
        "Las autoridades pueden enviar avisos directamente al móvil (ES-Alert). Seguidlos."
      ],
      evacTodo: "Ruta de evacuación y punto de encuentro",
      extTodo: "Dónde están el extintor y la manta ignífuga"
    }
  },

  de: {
    langName: "Deutsch",
    ui: {
      tabs: { hjem: "Start", ankomst: "Anreise", huset: "Haus", omraadet: "Umgebung", kontakt: "Kontakt" },
      todo: "Folgt", copy: "Kopieren", copied: "Kopiert", selected: "Markiert. Bitte manuell kopieren",
      copyAddress: "Adresse kopieren", openMaps: "In Google Maps öffnen", language: "Sprache"
    },
    weather: {
      title: "Wetter in La Mairena", loading: "Vorhersage wird geladen …", feels: "gefühlt", wind: "Wind", kmh: "km/h",
      today: "Heute", uv: "UV", sun: "Sonne", sea: "Meer bei Elviria", sample: "Beispiel · live in der App", updated: "Aktualisiert",
      kinds: { clear: "Klar", mostly: "Überwiegend klar", partly: "Leicht bewölkt", overcast: "Bedeckt", fog: "Nebel", rain: "Regen", showers: "Schauer", storm: "Gewitter", cloudy: "Bewölkt" }
    },
    home: {
      eyebrow: "La Mairena · Ojén · Costa del Sol",
      title: "Willkommen in der VillaMairena",
      sub: "400 Meter über dem Meer, 8 Minuten vom Strand in Elviria.",
      gate: "Torcode", gateNote: "Kommt mit der Nachricht vor der Anreise",
      wifi: "WLAN", wifiPassLabel: "Passwort",
      checkin: "Check-in", checkout: "Check-out",
      fireBanner: { title: "Hohe Waldbrandgefahr 1. Juni – 15. Oktober", body: "In dieser Zeit kein Grillen, kein Lagerfeuer, kein offenes Feuer. Mehr unter Kontakt.", link: "Brand und Sicherheit" },
      food: {
        title: "Essen zur Villa bestellen",
        body: "Uber Eats liefert zur VillaMairena. Nutzen Sie die Adresse unten und fügen Sie die Nachricht für den Fahrer ein, damit er das Tor findet.",
        open: "Uber Eats öffnen", note: "Nachricht für den Fahrer (Spanisch)", copyNote: "Nachricht kopieren"
      },
      importantTitle: "Das Wichtigste während Ihres Aufenthalts",
      important: [
        { icon: "i-flame", t: "Rauchen im Haus verboten", s: "Rauchen ist draußen erlaubt, mit Rücksicht auf die Natur rund ums Haus." },
        { icon: "i-sun", t: "Fußbodenheizung und Klimaanlage", s: "Die Thermostate sind voreingestellt. Alle Schlafzimmer haben eine Klimaanlage." },
        { icon: "i-home", t: "Kein Putzen nötig", s: "Die Endreinigung übernehmen professionelle Reinigungskräfte nach Ihrer Abreise." }
      ],
      sosLabel: "Notfall", sosText: "Europäischer Notruf. Funktioniert überall in Spanien, auch ohne SIM-Karte."
    },
    arrival: {
      eyebrow: "Anreise", title: "So finden Sie die Villa", addressLabel: "Adresse",
      steps: [
        { t: "Vom Flughafen Málaga", d: "Fahren Sie an der Küste entlang Richtung Marbella. Die Fahrt dauert etwa 45 Minuten.", route: "airport" },
        { t: "Hinauf nach La Mairena", d: "Von der Küste bei Elviria geht es hinauf in die Berge. Etwa 8 Minuten.", todo: "Wegbeschreibung und Orientierungspunkte" },
        { t: "Am Tor", d: "Das Grundstück hat ein Tor mit Gegensprechanlage und Kamera. Geben Sie den Torcode ein.", todo: "Wo das Tastenfeld ist" },
        { t: "Parken", d: "Private Parkplätze für 4 Autos auf dem Grundstück." },
        { t: "Ins Haus", todo: "Schlüsselbox oder Codeschloss" }
      ],
      missing: "Fotos von Tor und Einfahrt erleichtern die Anreise im Dunkeln sehr.",
      missingLabel: "Fehlt noch"
    },
    house: {
      eyebrow: "Das Haus", title: "314 m² für 10–12 Gäste",
      chips: ["5 Schlafzimmer", "3+1 Bäder", "Klimaanlage", "Fußbodenheizung", "WLAN und TV", "2.500 m² Grundstück", "Meerblick"],
      gallery: { living: "Wohnzimmer und Esstisch für 12", kitchen: "Die Küche", bath: "Hauptschlafzimmer mit eigenem Bad", closet: "Begehbarer Kleiderschrank" },
      roomsTitle: "Schlafzimmer",
      roomsIntro: "Alle Zimmer haben Klimaanlage und Bergblick. Zimmer 1, 3, 4 und 5 haben ferngesteuerte Außenrollläden zur vollständigen Verdunkelung.",
      rooms: [
        { name: "Hauptschlafzimmer", meta: "Erdgeschoss · begehbarer Kleiderschrank · eigenes Bad · Poolblick" },
        { name: "Das Extrazimmer", meta: "Erdgeschoss · gemeinsames Bad · keine Rollläden" },
        { name: "Aussicht mit Balkon", meta: "Obergeschoss · Balkon · Bad geteilt mit Zimmer 4" },
        { name: "Aussicht vom Obergeschoss", meta: "Obergeschoss · Bad geteilt mit Zimmer 3" },
        { name: "Kleine Suite", meta: "Obergeschoss · eigenes Bad · Balkon · Meer- und Bergblick" }
      ],
      roomWord: "Zimmer",
      extraBeds: "Extra: 2 mobile Gästebetten und 1 Babybett.",
      poolTitle: "Pool",
      poolText: "Ganzjährig beheizt, etwa 40 m². Sonnenliegen und Lounge rund um den Pool, direkter Zugang vom Wohnzimmer und den Schlafzimmern.",
      poolDiagram: { size: "11 m × 3,5 m", alt: "Der Pool von der Seite: 11 Meter lang, 1,10 bis 1,70 Meter tief" },
      howTitle: "So funktioniert das Haus",
      howIntro: "Kurze Anleitungen zur Ausstattung. Die QR-Aufkleber im Haus führen direkt hierher."
    },
    how: [
      { id: "pool", icon: "i-wave", title: "Poolheizung", body: ["Der Pool ist ganzjährig beheizt.", "Die Tiefe beträgt 1,10 m an einem Ende und 1,70 m am anderen."], todo: "Wie die Temperatur eingestellt wird, und Poolregeln" },
      { id: "aircondition", icon: "i-snow", title: "Klimaanlage", body: ["Alle Schlafzimmer haben eine Klimaanlage.", "Halten Sie Fenster und Türen geschlossen, solange sie läuft."], todo: "Wo die Fernbedienung ist, und empfohlene Temperatur" },
      { id: "gulvvarme", icon: "i-sun", title: "Fußbodenheizung", body: ["Fußbodenheizung im ganzen Haus, über Thermostate gesteuert.", "Die Thermostate sind voreingestellt."], todo: "Wie man sie höher oder niedriger stellt" },
      { id: "persienner", icon: "i-blind", title: "Rollläden", body: ["Zimmer 1, 3, 4 und 5 haben ferngesteuerte Außenrollläden zur vollständigen Verdunkelung.", "Zimmer 2 hat keine Rollläden."], todo: "Wo Schalter oder Fernbedienung sind" },
      { id: "wifi", icon: "i-wifi", title: "WLAN", body: ["Netzwerk: VillaMairena.", "Passwort: VillaMairena2027", "WLAN im ganzen Haus und am Pool."] },
      { id: "tv", icon: "i-tv", title: "Fernseher", body: [], todo: "Einschalten und verfügbare Dienste" },
      { id: "kaffe", icon: "i-cup", title: "Kaffeemaschine", body: [], todo: "Maschinentyp und wo Kapseln oder Bohnen sind" },
      { id: "vask", icon: "i-wash", title: "Waschmaschine und Trockner", body: ["Waschmaschine und Trockner stehen zur freien Nutzung."], todo: "Wo sie stehen, und Waschmittel" },
      { id: "affald", icon: "i-bin", title: "Müll und Recycling", body: [], todo: "Wo die Container stehen, und Mülltrennung" },
      { id: "afrejse", icon: "i-key", title: "Vor der Abreise", body: ["Kein Putzen nötig. Die Endreinigung ist inklusive."], todo: "Checkliste zur Abreise (Schlüssel, Fenster, Klimaanlage)" }
    ],
    area: {
      eyebrow: "Die Umgebung", title: "Guide für die Umgebung",
      intro: "Hier ist unser Guide für die Umgebung der Villa: Strände, Einkaufen und Restaurants, Sport, Kultur und mehr. Tippen Sie auf einen Punkt mit Dreieck, um die Liste zu öffnen.",
      beachTitle: "Die Strände",
      beachText: "Goldener Sand, klares Wasser, Chiringuitos, Restaurants und Beach Clubs. Der nächste Strand ist etwa 8 Minuten von der Villa entfernt.",
      beaches: [["Las Chapas", "ca. 750 m Strand"], ["La Víbora", "ca. 850 m Strand"], ["Real de Zaragoza", "ca. 1,7 km Strand"]],
      dailyTitle: "Einkaufen und Restaurants",
      daily: [
        { url: "https://www.ubereats.com/es", n: "Essen bestellen", d: "Lieferung", s: "Uber Eats liefert zur Villa. Siehe \"Essen zur Villa bestellen\" auf der Startseite." }
      ],
      dailyTodo: "Ihr Lieblingssupermarkt und Ihre Lieblingsbäckerei",
      expTitle: "Erlebnisse", suggestion: "Vorschlag",
      exp: [
        { key: "golf", n: "Golf", d: "Innerhalb von 30 Min.", s: "Mehr als 10 Golfplätze der Spitzenklasse." },
        { key: "padel", n: "Padel", d: "Innerhalb von 15 Min.", s: "Padelplätze in der Umgebung." },
        { key: "kultur", n: "Sehenswürdigkeiten und Kultur", d: "20–25 Min.", s: "Museen, Kirchen, Altstädte und historische Orte." }
      ],
      golfTitle: "Golfplätze in der Nähe", golfIntro: "Die 10 nächstgelegenen Plätze. Fahrzeiten sind ungefähr. Tippen Sie auf Route für die genaue Entfernung in Google Maps.", golfHoles: "Löcher", golfRoute: "Route", golfWeb: "Website", golfMin: "Min.",
      golfNotes: { marbellagolf: "Wird zum Higuerón Marbella Golf Resort umgebaut", lacala: "La Cala hat drei 18-Loch-Plätze und einen Par-3-Platz" },
      padelIntro: "Die 5 nächstgelegenen Orte mit Padelplätzen. Fahrzeiten sind ungefähr. Direkt beim Club buchen.", padelCourts: "Plätze", padelBook: "Platz buchen", padelNotes: { light: "Mit Flutlicht für abends" },
      beachSum: "Die 10 nächsten Strände", beachSumD: "8–15 Min.", beachIntro: "Fahrzeiten sind ungefähr. Tippen Sie auf Route für den Weg in Google Maps.", beachM: "m", beachTags: {"golden": "Goldener Sand", "dark": "Dunkler Sand", "dunes": "Dünen (Naturdenkmal)", "nudist": "FKK-Bereich", "port": "Am Yachthafen", "food": "Restaurants und Chiringuitos", "kids": "Kinderbereich", "long": "Langer Strand", "quiet": "Ruhiger"},
      shopSum: "Lebensmittel", shopSumD: "8–20 Min.", shopIntro: "Fahrzeiten sind ungefähr. Viele Supermärkte haben sonntags geschlossen oder kürzer geöffnet, also vorher prüfen.", shopHours: "Öffnungszeiten",
      shops: [{"n": "Carrefour Market Elviria", "area": "Elviria", "min": 8, "type": "Supermarkt", "s": "Normaler Supermarkt mit Obst, Gemüse, Fleisch, Fisch und Wein. Der nächste große Einkauf.", "q": "Carrefour Market Elviria, Marbella", "hours": "Mo–Sa 9–22 Uhr", "url": "https://www.carrefour.es/tiendas-carrefour/supermercados/carrefour-market/elviria-marbella-s.aspx"}, {"n": "Mercadillo de Las Chapas", "area": "Parking Elviria", "min": 8, "type": "Markt", "s": "Lokaler Freitagsmarkt mit etwa 30 Ständen: Obst und Gemüse, Kleidung, Taschen und Kunsthandwerk.", "q": "Pinar de Elviria, 29604 Marbella", "hours": "Freitag 9–14 Uhr", "url": "https://mercadillos.org/es/marbella/mercadillo-las-chapas"}, {"n": "Elviria Centro", "area": "Elviria", "min": 8, "type": "Geschäfte und Service", "s": "Das kleine Zentrum von Elviria mit Bäckereien, Apotheke, Banken, Cafés und Restaurants.", "q": "Centro Comercial Elviria, Marbella"}, {"n": "Mercadona", "area": "La Cala de Mijas", "min": 15, "type": "Supermarkt", "s": "Spaniens größte Supermarktkette. Große Auswahl und gute Preise.", "q": "Mercadona La Cala de Mijas", "hours": "Meist bis 21 Uhr"}, {"n": "Lidl", "area": "La Cala de Mijas", "min": 15, "type": "Discounter", "s": "Günstiger Supermarkt mit Wochenangeboten.", "q": "Lidl La Cala de Mijas"}, {"n": "Aldi", "area": "La Cala de Mijas", "min": 15, "type": "Discounter", "s": "Günstiger Supermarkt mit dem Nötigsten.", "q": "Aldi La Cala de Mijas"}, {"n": "Mercadillo de La Cala", "area": "La Cala de Mijas", "min": 15, "type": "Markt", "s": "Großer Markt mit über 100 Ständen: frische Produkte, lokale Spezialitäten, Kleidung und Haushalt. Vor 10 Uhr kommen für die beste Ware.", "q": "Mercadillo La Cala de Mijas", "hours": "Mittwoch und Samstag 9–14 Uhr"}, {"n": "La Cañada", "area": "Marbella", "min": 20, "type": "Einkaufszentrum", "s": "Großes Einkaufszentrum mit Hypermarkt (Alcampo) und vielen bekannten Geschäften.", "q": "Centro Comercial La Cañada, Marbella"}],
      cultIntro: "Fahrzeiten sind ungefähr und Öffnungszeiten können sich ändern, bitte vorher prüfen. Die meisten Orte sind kostenlos.", cults: [{"n": "Iglesia de la Encarnación", "area": "Ojén", "min": 20, "type": "Kirche", "s": "Dorfkirche aus dem 15. Jahrhundert mit schöner Mudéjar-Holzdecke aus dem 16.–17. Jahrhundert.", "q": "Iglesia Nuestra Señora de la Encarnación, Ojén"}, {"n": "Museo del Molino y del Aguardiente", "area": "Ojén", "min": 20, "type": "Museum", "s": "Wassermühle aus dem 18. Jahrhundert mit originalen Ölmühlen-Maschinen. Oben: Museum des berühmten Ojén-Aguardiente.", "q": "Museo del Molino, Calle Charcas 60, Ojén", "url": "https://sierradelasnieves.es/en/?p=6605"}, {"n": "Casco Antiguo", "area": "Marbella", "min": 20, "type": "Altstadt", "s": "Marbellas weiße Altstadt mit der Plaza de los Naranjos, engen Gassen und der Iglesia de la Encarnación.", "q": "Plaza de los Naranjos, Marbella", "hours": "Immer geöffnet"}, {"n": "Museo del Grabado Español Contemporáneo", "area": "Marbella", "min": 20, "type": "Kunstmuseum", "s": "Spaniens erstes Museum für Druckgrafik mit rund 2.000 Werken, u. a. von Picasso, Miró und Dalí, in einem Hospital aus dem 17. Jahrhundert. Kostenlos.", "q": "Museo del Grabado Español Contemporáneo, Marbella", "hours": "Mo–Sa 10–20, So 10–14 Uhr"}, {"n": "Colección Arqueológica Municipal", "area": "Marbella", "min": 20, "type": "Museum", "s": "Archäologische Funde aus der Gegend, u. a. römische Villen, in einem Gebäude aus dem 16. Jahrhundert. Kostenlos.", "q": "Plaza Altamirano, Marbella", "hours": "Mo–Fr 9–14 Uhr"}, {"n": "Cortijo Miraflores", "area": "Marbella", "min": 20, "type": "Kulturzentrum", "s": "Historisches Landgut mit Olivenölmuseum und archäologischen Ausstellungen. Kostenlos.", "q": "Cortijo Miraflores, Marbella", "hours": "Täglich 9–20.30 Uhr"}, {"n": "Museo Ralli", "area": "Golden Mile, Marbella", "min": 25, "type": "Kunstmuseum", "s": "Eine der wichtigsten Sammlungen lateinamerikanischer Kunst in Europa, 50 m vom Strand. Kostenlos.", "q": "Museo Ralli, Marbella", "hours": "Di–Fr 10–17, Sa 10–15 Uhr (geschlossen 21.12.–14.2.)", "url": "https://museoralli.es/en/museum-ralli-and-its-surroundings/"}, {"n": "Villa Romana de Río Verde", "area": "Marbella", "min": 25, "type": "Römische Stätte", "s": "Römische Villa aus dem 1.–3. Jahrhundert mit ungewöhnlichen Schwarz-Weiß-Mosaiken. Kostenlos.", "q": "Villa Romana de Río Verde, Marbella", "hours": "Fr–So 10.30–13.30 Uhr", "url": "https://www.historyhit.com/locations/rio-verde-roman-villa/"}, {"n": "Mijas Pueblo", "area": "Mijas", "min": 25, "type": "Weißes Dorf", "s": "Bergdorf mit Kirchen, der Kapelle Virgen de la Peña, einer ovalen Stierkampfarena von 1900 und einem Miniaturenmuseum.", "q": "Mijas Pueblo"}, {"n": "Castillo Sohail", "area": "Fuengirola", "min": 25, "type": "Burg", "s": "Maurische Burg aus dem 12. Jahrhundert an der Küste mit toller Aussicht. Kostenlos.", "q": "Castillo Sohail, Fuengirola", "hours": "Di–Fr 10–14, Wochenende 10–18 Uhr"}],
      restSum: "Restaurants", restSumD: "3–30 Min.", restIntro: "20 Restaurants von La Mairena bis entlang der Küste. Fahrzeiten sind ungefähr. Reservieren lohnt sich, vor allem im Sommer.", rests: [{"n": "Kudu Bar", "area": "La Mairena", "min": 3, "type": "International", "s": "Beliebtes Lokal in La Mairena mit Terrasse und toller Aussicht. Bekannt für Curry, Lachs und Ribs. Besser reservieren.", "q": "Kudu Bar, La Mairena, Ojén", "price": "€€", "url": "https://thekudubar.com"}, {"n": "El Soto de Marbella", "area": "La Mairena", "min": 5, "type": "Bar und Restaurant", "s": "Bar und Restaurant am Golfplatz El Soto. Für alle geöffnet, mit Livemusik im Laufe des Jahres.", "q": "El Soto de Marbella club house, Ojén"}, {"n": "El Lago", "area": "Elviria Hills", "min": 10, "type": "Gourmet", "s": "Gourmetrestaurant an einem See in Elviria Hills mit andalusischen Zutaten. Hatte einen Michelin-Stern.", "q": "Restaurante El Lago, Elviria, Marbella"}, {"n": "Ombú", "area": "Don Carlos Resort, Elviria", "min": 10, "type": "Mediterran", "s": "Restaurant in tropischen Gärten im Don Carlos Resort.", "q": "Ombú, Don Carlos Resort, Marbella"}, {"n": "La Scala Marbella", "area": "Elviria", "min": 10, "type": "Italienisch", "s": "Sehr gut bewertetes italienisches Restaurant.", "q": "La Scala Marbella, Elviria", "price": "€€€€"}, {"n": "Nikki Beach Marbella", "area": "Elviria", "min": 10, "type": "Beach Club", "s": "Bekannter Beach Club ganz in Weiß mit Musik und internationalem Publikum.", "q": "Nikki Beach Marbella", "price": "€€€€"}, {"n": "The Beach House", "area": "Elviria", "min": 10, "type": "Mediterran", "s": "Restaurant am Strand mit mediterraner Küche und Meerblick.", "q": "The Beach House Marbella, Elviria", "price": "€€–€€€"}, {"n": "La Plage Casanis", "area": "Elviria", "min": 10, "type": "Beach Club", "s": "Eleganter Beach Club mit mediterraner Küche.", "q": "La Plage Casanis, Marbella"}, {"n": "Chiringuito Tony's", "area": "Elviria", "min": 10, "type": "Fisch und Meeresfrüchte", "s": "Sehr beliebter Chiringuito am Strand mit Fisch und Meeresfrüchten.", "q": "Chiringuito Tonys, Elviria, Marbella", "price": "€€–€€€"}, {"n": "Restaurante Merendero Cristina", "area": "Elviria", "min": 10, "type": "Fisch und Meeresfrüchte", "s": "Klassisches Strandrestaurant mit Fisch und Meeresfrüchten.", "q": "Merendero Cristina, Elviria, Marbella", "price": "€€–€€€"}, {"n": "Alma de Papagayo", "area": "Elviria", "min": 10, "type": "International", "s": "Sehr gut bewertetes Restaurant mit internationaler Küche.", "q": "Alma de Papagayo, Elviria, Marbella", "price": "€€–€€€"}, {"n": "Zumaque", "area": "Elviria", "min": 10, "type": "Steakhaus und Fisch", "s": "Fleisch und Fisch, von Gästen sehr gut bewertet.", "q": "Zumaque, Elviria, Marbella", "price": "€€–€€€"}, {"n": "Mini India Elviria", "area": "Elviria", "min": 10, "type": "Indisch", "s": "Indisches Restaurant, bei Gästen sehr beliebt.", "q": "Mini India Elviria, Marbella", "price": "€€–€€€"}, {"n": "Nosso Summer Club", "area": "Las Chapas", "min": 12, "type": "Beach Club", "s": "Stilvoller Beach Club am Strand von Las Chapas mit asiatisch-mediterraner Küche.", "q": "Nosso Summer Club, Las Chapas, Marbella"}, {"n": "Siroko Beach", "area": "Las Chapas", "min": 12, "type": "Beach Club", "s": "Strandrestaurant und Lounge mit Liegen und Musik.", "q": "Siroko Beach, Las Chapas, Marbella"}, {"n": "Simbad", "area": "Marbesa", "min": 12, "type": "Fisch und Meeresfrüchte", "s": "Entspannte Strandbar mit Espetos (gegrillte Sardinen) und guter Weinkarte.", "q": "Simbad Restaurant Beach Bar, Marbesa, Marbella"}, {"n": "Andy's Beach", "area": "Cabopino", "min": 12, "type": "Fisch und Meeresfrüchte", "s": "Restaurant direkt im Sand mit Fisch und Meerblick.", "q": "Andy's Beach, Cabopino, Marbella"}, {"n": "Mesón Lorente", "area": "Ojén", "min": 20, "type": "Andalusisch", "s": "Andalusische Küche in Ojén mit großen Portionen. Bekannt für Fischeintopf.", "q": "Mesón Lorente, Ojén"}, {"n": "El Fogón de Flore", "area": "Ojén", "min": 20, "type": "Spanisch und europäisch", "s": "Restaurant auf einem Hügel in Ojén mit Blick ins Tal.", "q": "El Fogón de Flore, Ojén"}, {"n": "El Refugio de Juanar", "area": "Sierra Blanca, Ojén", "min": 30, "type": "Andalusisch", "s": "Gemütliches Bergrestaurant mit andalusischer Hausmannskost. Schöne Fahrt in die Berge.", "q": "El Refugio de Juanar, Ojén"}]
    },
    contact: {
      report: {"title": "Schaden melden oder Vorschlag machen", "intro": "Ist etwas kaputtgegangen oder haben Sie eine Idee, wie das Haus besser werden kann? Schreiben Sie uns hier, gern mit Foto. Die Nachricht geht direkt an die Eigentümer.", "issue": "Etwas ist kaputt", "idea": "Verbesserungsvorschlag", "where": "Wo?", "text": "Kurz beschreiben", "photo": "Foto aufnehmen oder auswählen", "photoAdded": "Foto hinzugefügt", "name": "Name der Person, die gebucht hat", "send": "Senden", "sending": "Wird gesendet …", "thanks": "Danke! Wir haben Ihre Nachricht erhalten und melden uns, falls nötig.", "error": "Die Nachricht wurde nicht gesendet. Bitte erneut versuchen oder anrufen.", "empty": "Bitte kurz beschreiben oder ein Foto hinzufügen.", "urgent": "Wenn es eilt, rufen Sie uns an: +45 51 59 30 50.", "choose": "Ort wählen", "inside": "Im Haus", "outside": "Draußen", "nameReq": "Bitte den Namen der Person eingeben, die gebucht hat.", "roomsIn": ["Zimmer 1 (Hauptschlafzimmer)", "Zimmer 2", "Zimmer 3", "Zimmer 4", "Zimmer 5", "Badezimmer", "Gäste-WC", "Begehbarer Kleiderschrank", "Küche", "Wohn- und Esszimmer", "Flur und Treppe", "Waschmaschine und Trockner"], "roomsOut": ["Pool", "Terrasse und Liegen", "Balkon", "Garten", "Einfahrt und Tor", "Parkplatz"], "other": "Sonstiges"},
      eyebrow: "Kontakt", title: "Wen Sie anrufen",
      sos: "Notfall: Polizei, Rettungsdienst, Feuerwehr",
      ownersTitle: "Die Eigentümer",
      ownersText: "Pernille, Jens, Christina und Thomas. Wir antworten zwischen 8 und 23 Uhr, oft innerhalb weniger Stunden.",
      phone: "Telefon", email: "E-Mail",
      localTitle: "Vor Ort",
      local: [
        { who: "Gastgeber vor Ort / Verwalter", what: "Schlüssel, Tor, alles Praktische", todo: "Name und Nummer" },
        { who: "Poolservice", what: "Wenn mit dem Pool etwas nicht stimmt", todo: "Name und Nummer" },
        { who: "Elektriker / Installateur", what: "Strom, Wasser, Klimaanlage", todo: "Name und Nummer" },
        { who: "Reinigung", what: "Zusätzliche Reinigung während des Aufenthalts", todo: "Name und Nummer" }
      ],
      healthTitle: "Gesundheit",
      health: [
        { who: "Hospital Costa del Sol", what: "Öffentliches Krankenhaus mit Notaufnahme in Marbella" },
        { who: "Nächste Apotheke und Arzt", todo: "Name und Adresse" }
      ]
    },
    safety: {
      title: "Brand und Sicherheit",
      intro: "Die Villa grenzt an den Wald. Waldbrand ist das größte Risiko in der Gegend, besonders im Sommer.",
      seasonLabel: "1. Juni – 15. Oktober",
      season: "In Andalusien sind Grillen, Lagerfeuer und offenes Feuer in Waldgebieten und im Umkreis von 400 Metern verboten. Das gilt auch an der Villa.",
      rules: [
        "Werfen Sie nie Zigarettenkippen in die Natur. Benutzen Sie einen Aschenbecher.",
        "Parken Sie nicht auf trockenem Gras. Ein heißer Auspuff kann es entzünden.",
        "Kein Feuerwerk und keine Himmelslaternen."
      ],
      houseRuleTodo: "Hausregeln zum Grillen (z. B. ob ein Gasgrill auf der Terrasse erlaubt ist)",
      fireTitle: "Wenn Sie Rauch oder Feuer sehen",
      fire: [
        "Rufen Sie sofort 112 an und nennen Sie die Adresse: Calle Navarra 5, La Mairena.",
        "Folgen Sie den Anweisungen von Polizei, Feuerwehr und Guardia Civil.",
        "Die Behörden können Warnungen direkt auf Ihr Handy senden (ES-Alert). Folgen Sie ihnen."
      ],
      evacTodo: "Fluchtweg und Treffpunkt bei Evakuierung",
      extTodo: "Wo Feuerlöscher und Löschdecke sind"
    }
  }
};

/* Golfbaner (fælles for alle sprog). min = omtrentlig køretid fra villaen. */
window.VM_GOLF = [
  { name: "El Soto Golf", area: "El Soto de Marbella, Ojén", holes: "9", par3: true, min: 5, url: "https://www.andalucia.com/golf/el-soto/home.htm" },
  { name: "Greenlife Golf", area: "Elviria", holes: "9", par3: true, min: 10, url: "https://greenlife-golf.com/" },
  { name: "Santa María Golf & Country Club", area: "Elviria", holes: "18", min: 10, url: "https://santamariagolfclub.com/" },
  { name: "La Cala Resort", area: "Mijas", holes: "3 × 18 + 9", min: 15, url: "https://www.lacala.com", note: "lacala" },
  { name: "Cabopino Golf Marbella", area: "Artola, Cabopino", holes: "18", min: 15, url: "https://www.cabopinogolfmarbella.com" },
  { name: "Club de Golf La Siesta", area: "Calahonda", holes: "9", min: 15, url: "https://www.clubdegolflasiesta.com/" },
  { name: "Miraflores Golf", area: "Riviera del Sol, Mijas", holes: "18", min: 15, url: "https://www.miraflores-golf.com" },
  { name: "Marbella Golf & Country Club", area: "Los Monteros, Marbella", holes: "18", min: 15, url: "https://andalucia.com/golf/clubmarbella/home.htm", note: "marbellagolf" },
  { name: "Santa Clara Golf Marbella", area: "Los Monteros, Marbella", holes: "18", min: 15, url: "https://santaclaragolfmarbella.com/" },
  { name: "Calanova Golf Club", area: "La Cala de Mijas", holes: "18", min: 20, url: "https://www.andalucia.com/golf/calanova/home.htm" }
];

/* Padel (fælles for alle sprog). */
window.VM_PADEL = [
  { name: "La Cala Racquet Club", area: "La Cala Resort, Mijas", courts: 3, min: 15, url: "https://www.lacala.com/sports/racquet-club/", book: "https://book.lacala.com/racquet-club/", note: "light" },
  { name: "Padel · La Siesta Golf", area: "Calahonda", min: 15, url: "https://calahondaeuc.com/en/discover-calahonda-2/paddle-court-la-siesta-golf-course", phone: "+34 608 416 302" },
  { name: "Miraflores Tennis Club", area: "Riviera del Sol, Mijas", courts: 2, min: 15, book: "https://playtomic.com/clubs/miraflores-tennis-club" },
  { name: "Royal Tennis Club", area: "El Rosario, Marbella", min: 15, url: "https://www.royaltennisclub.com" },
  { name: "Los Monteros Racket Club", area: "Los Monteros, Marbella", courts: 6, min: 15 }
];

/* Strande (fælles for alle sprog). len = strandens længde i meter, min = omtrentlig køretid. */
window.VM_BEACH = [
  { name: "Real de Zaragoza", area: "Elviria, Marbella", len: 1700, min: 8, tags: ["golden", "long", "food"] },
  { name: "La Víbora", area: "Elviria, Marbella", len: 850, min: 8, tags: ["golden", "food"] },
  { name: "Las Chapas", area: "Elviria, Marbella", len: 750, min: 8, tags: ["golden", "food"] },
  { name: "Pinomar", area: "Marbella", len: 350, min: 10, tags: ["golden", "quiet"] },
  { name: "Artola / Cabopino", area: "Cabopino, Marbella", min: 12, tags: ["dunes", "port", "nudist"] },
  { name: "Costabella", area: "Marbella", len: 750, min: 12, tags: ["golden"] },
  { name: "El Alicate", area: "Marbella", len: 850, min: 12, tags: ["dark"] },
  { name: "Calahonda", area: "Mijas Costa", len: 4400, min: 12, tags: ["long", "food"] },
  { name: "El Bombo", area: "La Cala de Mijas", len: 1100, min: 15, tags: ["kids", "food"] },
  { name: "La Cala (La Butibamba)", area: "La Cala de Mijas", len: 1300, min: 15, tags: ["kids", "food"] }
];

/* Wi-Fi */
window.VM_WIFI = { ssid: "VillaMairena", pass: "VillaMairena2027" };

/* Ekstra indhold: husregler, praktisk Spanien, transport, dagsture, børn, natur, kom igen */
window.VM_EXTRA = {
 "da": {
  "rulesTitle": "Husregler",
  "rulesIntro": "Så alle får et godt ophold, og huset er klar til de næste gæster.",
  "rules": [
   {
    "t": "Maks. 12 personer",
    "s": "Huset er til 10–12 gæster. Der er 5 soveværelser, 2 ekstra gæstesenge og 1 babyseng."
   },
   {
    "t": "Rygning forbudt indendørs",
    "s": "Ryg gerne udenfor, og brug et askebæger."
   },
   {
    "t": "Børn ved poolen",
    "s": "Børn skal altid være under opsyn ved poolen. Ingen glas ved poolkanten."
   },
   {
    "t": "Skader",
    "s": "Er noget gået i stykker, så meld det i appen under Huset. Det er helt i orden, vi vil bare gerne vide det."
   },
   {
    "t": "Ro og naboer",
    "todo": "Ro-tider om aftenen"
   },
   {
    "t": "Fester og arrangementer",
    "todo": "Er fester tilladt?"
   },
   {
    "t": "Kæledyr",
    "todo": "Er kæledyr tilladt?"
   }
  ],
  "pracTitle": "Praktisk i Spanien",
  "prac": [
   {
    "t": "Spisetider",
    "s": "Frokost spises typisk kl. 14–16 og aftensmad fra kl. 21. Mange restauranter åbner først køkkenet til aften omkring kl. 20."
   },
   {
    "t": "Butikker og søndage",
    "s": "Mange mindre butikker holder lukket om søndagen og nogle steder midt på dagen. Større supermarkeder har længere åbent."
   },
   {
    "t": "Apotek",
    "s": "Apoteker har et grønt kors. Uden for åbningstid har et vagtapotek (farmacia de guardia) åbent. Hvilket det er, står på døren af alle apoteker."
   },
   {
    "t": "Drikkepenge",
    "s": "Ikke et krav. Det er almindeligt at runde op eller give 5–10 % for god service på restaurant."
   },
   {
    "t": "Vand fra hanen",
    "s": "Vandet kan drikkes, men mange foretrækker flaskevand på grund af smagen."
   },
   {
    "t": "Strøm",
    "s": "230 volt og de samme stikkontakter som i Danmark og det meste af Nordeuropa. Gæster fra UK og USA skal bruge en adapter."
   },
   {
    "t": "Betaling",
    "s": "Kort accepteres næsten overalt. Hav lidt kontanter til markeder og chiringuitos."
   }
  ],
  "wordsTitle": "10 nyttige spanske ord",
  "words": [
   {
    "es": "Hola",
    "x": "Hej"
   },
   {
    "es": "Buenos días",
    "x": "Godmorgen"
   },
   {
    "es": "Por favor",
    "x": "Vær så venlig"
   },
   {
    "es": "Gracias",
    "x": "Tak"
   },
   {
    "es": "Perdón",
    "x": "Undskyld"
   },
   {
    "es": "¿Cuánto cuesta?",
    "x": "Hvad koster det?"
   },
   {
    "es": "La cuenta, por favor",
    "x": "Regningen, tak"
   },
   {
    "es": "Agua",
    "x": "Vand"
   },
   {
    "es": "¡Ayuda!",
    "x": "Hjælp!"
   },
   {
    "es": "Adiós",
    "x": "Farvel"
   }
  ],
  "trTitle": "Transport",
  "trIntro": "Der kører ingen offentlig transport op til La Mairena, så bil er klart det nemmeste.",
  "tr": [
   {
    "t": "Lejebil",
    "s": "Lej bilen i Málaga lufthavn. Der er god plads til 4 biler på grunden."
   },
   {
    "t": "Taxa og Uber",
    "s": "Uber og Cabify kører i Marbella-området. Til La Mairena er det en god idé at bestille i god tid."
   },
   {
    "t": "Lufthavnstransfer",
    "todo": "Jeres foretrukne transferselskab og pris"
   },
   {
    "t": "Tog til Málaga",
    "s": "Fra Fuengirola kører nærtoget (Cercanías C1) til Málaga lufthavn og centrum, ca. 45 min."
   },
   {
    "t": "Bus",
    "s": "Busser kører langs kysten fra Elviria til Marbella og Fuengirola, men ikke op til huset."
   },
   {
    "t": "Parkering i Marbella",
    "s": "Brug en af de underjordiske parkeringskældre i centrum. Det er nemmere end at lede efter plads på gaden."
   }
  ],
  "trips": [
   {
    "n": "Málaga",
    "area": "Málaga",
    "min": 45,
    "q": "Málaga centro",
    "s": "Picasso-museet, katedralen, borgen Alcazaba og en god indkøbsgade.",
    "type": "By"
   },
   {
    "n": "Ronda",
    "area": "Ronda",
    "min": 75,
    "q": "Ronda",
    "s": "Byen på klippen med den berømte bro Puente Nuevo over kløften.",
    "type": "By"
   },
   {
    "n": "Caminito del Rey",
    "area": "Ardales",
    "min": 75,
    "q": "Caminito del Rey",
    "url": "https://www.caminitodelrey.info",
    "s": "Gangsti langs klippevæggen højt over en kløft. Billetter skal bookes i forvejen.",
    "type": "Natur"
   },
   {
    "n": "Gibraltar",
    "area": "Gibraltar",
    "min": 75,
    "q": "Gibraltar",
    "s": "Klippen med aberne, udsigt over Afrika og britisk stemning. Husk pas.",
    "type": "Udflugt"
   },
   {
    "n": "Nerja",
    "area": "Nerja",
    "min": 75,
    "q": "Cueva de Nerja",
    "s": "Hyggelig kystby med udsigtspunktet Balcón de Europa og store drypstenshuler.",
    "type": "By og huler"
   },
   {
    "n": "Setenil de las Bodegas",
    "area": "Cádiz",
    "min": 90,
    "q": "Setenil de las Bodegas",
    "s": "Landsby bygget ind under klippeudhæng.",
    "type": "Hvid landsby"
   },
   {
    "n": "Granada – Alhambra",
    "area": "Granada",
    "min": 120,
    "q": "Alhambra, Granada",
    "url": "https://tickets.alhambra-patronato.es",
    "s": "Det mauriske palads Alhambra. Billetter skal bookes i god tid.",
    "type": "Kultur"
   }
  ],
  "kidsList": [
   {
    "n": "Aquamijas",
    "area": "Mijas Costa",
    "min": 20,
    "q": "Aquamijas",
    "s": "Vandland med rutsjebaner. Kun åbent om sommeren.",
    "type": "Vandland"
   },
   {
    "n": "Bioparc Fuengirola",
    "area": "Fuengirola",
    "min": 25,
    "q": "Bioparc Fuengirola",
    "s": "Moderne zoo med dyr fra regnskoven i naturlige omgivelser.",
    "type": "Zoo"
   },
   {
    "n": "Sea Life Benalmádena",
    "area": "Benalmádena",
    "min": 35,
    "q": "Sea Life Benalmádena",
    "s": "Akvarium ved lystbådehavnen med hajer og skildpadder.",
    "type": "Akvarium"
   },
   {
    "n": "Selwo Marina",
    "area": "Benalmádena",
    "min": 35,
    "q": "Selwo Marina Benalmádena",
    "s": "Delfiner, søløver og pingviner.",
    "type": "Delfiner og dyr"
   },
   {
    "n": "Selwo Aventura",
    "area": "Estepona",
    "min": 40,
    "q": "Selwo Aventura Estepona",
    "s": "Safaripark hvor man kører rundt blandt dyrene.",
    "type": "Safaripark"
   }
  ],
  "kidsHouse": "I huset: 1 babyseng og 2 ekstra gæstesenge. Børn skal være under opsyn ved poolen.",
  "natureList": [
   {
    "n": "Hofsaess Tennis Academy",
    "area": "La Mairena",
    "min": 3,
    "q": "Hofsaess Tennis Academy, La Mairena",
    "s": "Tennisakademi i La Mairena med grus- og hardcourtbaner, åbent for alle.",
    "type": "Tennis"
   },
   {
    "n": "Refugio de Juanar",
    "area": "Sierra Blanca, Ojén",
    "min": 30,
    "q": "Refugio de Juanar, Ojén",
    "s": "Startsted for vandreture i pinjeskov, bl.a. op til udsigtspunktet Mirador del Macho Montés.",
    "type": "Vandring"
   },
   {
    "n": "Parque Nacional Sierra de las Nieves",
    "area": "Sierra de las Nieves",
    "min": 45,
    "q": "Parque Nacional Sierra de las Nieves",
    "s": "Nationalpark med bjerge, skove og hvide landsbyer. Mange afmærkede ruter.",
    "type": "Nationalpark"
   },
   {
    "n": "La Concha",
    "area": "Marbella",
    "min": 30,
    "q": "La Concha, Marbella",
    "s": "Marbellas eget bjerg. Hård tur, men en fantastisk udsigt. Start tidligt om sommeren.",
    "type": "Bjergtur"
   },
   {
    "n": "Istán og Río Verde",
    "area": "Istán",
    "min": 35,
    "q": "Istán",
    "s": "Lille bjerglandsby ved en sø med ture langs floden Río Verde.",
    "type": "Natur"
   }
  ],
  "expExtra": [
   {
    "key": "dagsture",
    "n": "Dagsture",
    "d": "45 min – 2 t",
    "s": "Málaga, Ronda, Gibraltar, Alhambra og mere."
   },
   {
    "key": "born",
    "n": "For børn",
    "d": "20–40 min",
    "s": "Vandland, zoo, akvarium og safaripark."
   },
   {
    "key": "natur",
    "n": "Natur, vandring og tennis",
    "d": "3–45 min",
    "s": "Vandreture i bjergene og tennis i La Mairena."
   }
  ],
  "listIntro": "Køretider er omtrentlige. Tjek åbningstider og book billetter, hvor det er nødvendigt.",
  "backTitle": "Kom igen",
  "backText": "Tak fordi I boede hos os. En anmeldelse betyder meget for os. Og næste gang kan I booke direkte hos os, så får I den bedste pris.",
  "backReview": "Skriv en anmeldelse",
  "backBook": "Book direkte",
  "backCode": "Rabatkode til direkte booking",
  "backTodo": "Rabatkode og link til anmeldelser"
 },
 "en": {
  "rulesTitle": "House rules",
  "rulesIntro": "So everyone has a good stay and the house is ready for the next guests.",
  "rules": [
   {
    "t": "Max. 12 people",
    "s": "The house sleeps 10–12. There are 5 bedrooms, 2 extra guest beds and 1 baby cot."
   },
   {
    "t": "No smoking indoors",
    "s": "You are welcome to smoke outside – please use an ashtray."
   },
   {
    "t": "Children at the pool",
    "s": "Children must always be supervised at the pool. No glass at the pool edge."
   },
   {
    "t": "Damage",
    "s": "If something breaks, please report it in the app under House. That is completely fine – we just want to know."
   },
   {
    "t": "Quiet and neighbours",
    "todo": "Quiet hours in the evening"
   },
   {
    "t": "Parties and events",
    "todo": "Are parties allowed?"
   },
   {
    "t": "Pets",
    "todo": "Are pets allowed?"
   }
  ],
  "pracTitle": "Practical tips for Spain",
  "prac": [
   {
    "t": "Meal times",
    "s": "Lunch is usually 2–4 pm and dinner from 9 pm. Many restaurants open their kitchens for dinner around 8 pm."
   },
   {
    "t": "Shops and Sundays",
    "s": "Many smaller shops close on Sundays and some at midday. Larger supermarkets open longer."
   },
   {
    "t": "Pharmacy",
    "s": "Pharmacies have a green cross. Outside opening hours a duty pharmacy (farmacia de guardia) is open – it is posted on every pharmacy door."
   },
   {
    "t": "Tipping",
    "s": "Not required. It is common to round up or leave 5–10% for good service in restaurants."
   },
   {
    "t": "Tap water",
    "s": "Tap water is safe to drink, but many prefer bottled water for the taste."
   },
   {
    "t": "Electricity",
    "s": "230 V with European two-pin sockets. Guests from the UK and US need an adapter."
   },
   {
    "t": "Payment",
    "s": "Cards are accepted almost everywhere. Keep some cash for markets and chiringuitos."
   }
  ],
  "wordsTitle": "10 useful Spanish words",
  "words": [
   {
    "es": "Hola",
    "x": "Hello"
   },
   {
    "es": "Buenos días",
    "x": "Good morning"
   },
   {
    "es": "Por favor",
    "x": "Please"
   },
   {
    "es": "Gracias",
    "x": "Thank you"
   },
   {
    "es": "Perdón",
    "x": "Sorry"
   },
   {
    "es": "¿Cuánto cuesta?",
    "x": "How much is it?"
   },
   {
    "es": "La cuenta, por favor",
    "x": "The bill, please"
   },
   {
    "es": "Agua",
    "x": "Water"
   },
   {
    "es": "¡Ayuda!",
    "x": "Help!"
   },
   {
    "es": "Adiós",
    "x": "Goodbye"
   }
  ],
  "trTitle": "Getting around",
  "trIntro": "There is no public transport up to La Mairena, so a car is by far the easiest option.",
  "tr": [
   {
    "t": "Rental car",
    "s": "Pick up a car at Málaga airport. There is room for 4 cars on the property."
   },
   {
    "t": "Taxi and Uber",
    "s": "Uber and Cabify operate in the Marbella area. Book in good time to La Mairena."
   },
   {
    "t": "Airport transfer",
    "todo": "Your preferred transfer company and price"
   },
   {
    "t": "Train to Málaga",
    "s": "From Fuengirola the local train (Cercanías C1) runs to Málaga airport and centre, about 45 min."
   },
   {
    "t": "Bus",
    "s": "Buses run along the coast from Elviria to Marbella and Fuengirola, but not up to the house."
   },
   {
    "t": "Parking in Marbella",
    "s": "Use one of the underground car parks in the centre – easier than street parking."
   }
  ],
  "trips": [
   {
    "n": "Málaga",
    "area": "Málaga",
    "min": 45,
    "q": "Málaga centro",
    "s": "The Picasso Museum, the cathedral, the Alcazaba fortress and good shopping.",
    "type": "City"
   },
   {
    "n": "Ronda",
    "area": "Ronda",
    "min": 75,
    "q": "Ronda",
    "s": "The clifftop town with the famous Puente Nuevo bridge over the gorge.",
    "type": "Town"
   },
   {
    "n": "Caminito del Rey",
    "area": "Ardales",
    "min": 75,
    "q": "Caminito del Rey",
    "url": "https://www.caminitodelrey.info",
    "s": "Walkway along the cliff high above a gorge. Book tickets in advance.",
    "type": "Nature"
   },
   {
    "n": "Gibraltar",
    "area": "Gibraltar",
    "min": 75,
    "q": "Gibraltar",
    "s": "The Rock with its monkeys, views to Africa and a British feel. Bring your passport.",
    "type": "Day trip"
   },
   {
    "n": "Nerja",
    "area": "Nerja",
    "min": 75,
    "q": "Cueva de Nerja",
    "s": "Charming coastal town with the Balcón de Europa viewpoint and huge caves.",
    "type": "Town and caves"
   },
   {
    "n": "Setenil de las Bodegas",
    "area": "Cádiz",
    "min": 90,
    "q": "Setenil de las Bodegas",
    "s": "A village built under overhanging rocks.",
    "type": "White village"
   },
   {
    "n": "Granada – Alhambra",
    "area": "Granada",
    "min": 120,
    "q": "Alhambra, Granada",
    "url": "https://tickets.alhambra-patronato.es",
    "s": "The Moorish Alhambra palace. Book tickets well ahead.",
    "type": "Culture"
   }
  ],
  "kidsList": [
   {
    "n": "Aquamijas",
    "area": "Mijas Costa",
    "min": 20,
    "q": "Aquamijas",
    "s": "Water park with slides. Summer only.",
    "type": "Water park"
   },
   {
    "n": "Bioparc Fuengirola",
    "area": "Fuengirola",
    "min": 25,
    "q": "Bioparc Fuengirola",
    "s": "Modern zoo with rainforest animals in natural settings.",
    "type": "Zoo"
   },
   {
    "n": "Sea Life Benalmádena",
    "area": "Benalmádena",
    "min": 35,
    "q": "Sea Life Benalmádena",
    "s": "Aquarium by the marina with sharks and turtles.",
    "type": "Aquarium"
   },
   {
    "n": "Selwo Marina",
    "area": "Benalmádena",
    "min": 35,
    "q": "Selwo Marina Benalmádena",
    "s": "Dolphins, sea lions and penguins.",
    "type": "Dolphins and animals"
   },
   {
    "n": "Selwo Aventura",
    "area": "Estepona",
    "min": 40,
    "q": "Selwo Aventura Estepona",
    "s": "Safari park where you drive among the animals.",
    "type": "Safari park"
   }
  ],
  "kidsHouse": "In the house: 1 baby cot and 2 extra guest beds. Children must be supervised at the pool.",
  "natureList": [
   {
    "n": "Hofsaess Tennis Academy",
    "area": "La Mairena",
    "min": 3,
    "q": "Hofsaess Tennis Academy, La Mairena",
    "s": "Tennis academy in La Mairena with clay and hard courts, open to everyone.",
    "type": "Tennis"
   },
   {
    "n": "Refugio de Juanar",
    "area": "Sierra Blanca, Ojén",
    "min": 30,
    "q": "Refugio de Juanar, Ojén",
    "s": "Starting point for walks in the pine forest, e.g. up to the Mirador del Macho Montés viewpoint.",
    "type": "Hiking"
   },
   {
    "n": "Parque Nacional Sierra de las Nieves",
    "area": "Sierra de las Nieves",
    "min": 45,
    "q": "Parque Nacional Sierra de las Nieves",
    "s": "National park with mountains, forests and white villages. Many marked trails.",
    "type": "National park"
   },
   {
    "n": "La Concha",
    "area": "Marbella",
    "min": 30,
    "q": "La Concha, Marbella",
    "s": "Marbella's own mountain. A hard hike with fantastic views. Start early in summer.",
    "type": "Mountain hike"
   },
   {
    "n": "Istán og Río Verde",
    "area": "Istán",
    "min": 35,
    "q": "Istán",
    "s": "Small mountain village by a lake with walks along the Río Verde river.",
    "type": "Nature"
   }
  ],
  "expExtra": [
   {
    "key": "dagsture",
    "n": "Day trips",
    "d": "45 min – 2 h",
    "s": "Málaga, Ronda, Gibraltar, the Alhambra and more."
   },
   {
    "key": "born",
    "n": "For children",
    "d": "20–40 min",
    "s": "Water park, zoo, aquarium and safari park."
   },
   {
    "key": "natur",
    "n": "Nature, hiking and tennis",
    "d": "3–45 min",
    "s": "Mountain walks and tennis in La Mairena."
   }
  ],
  "listIntro": "Drive times are approximate. Check opening hours and book tickets where needed.",
  "backTitle": "Come back",
  "backText": "Thank you for staying with us. A review means a lot to us. Next time, book directly with us for the best price.",
  "backReview": "Write a review",
  "backBook": "Book direct",
  "backCode": "Discount code for direct booking",
  "backTodo": "Discount code and review link"
 },
 "es": {
  "rulesTitle": "Normas de la casa",
  "rulesIntro": "Para que todos disfruten y la casa esté lista para los próximos huéspedes.",
  "rules": [
   {
    "t": "Máx. 12 personas",
    "s": "La casa es para 10–12 huéspedes. Hay 5 dormitorios, 2 camas supletorias y 1 cuna."
   },
   {
    "t": "Prohibido fumar dentro",
    "s": "Se puede fumar fuera; usad un cenicero, por favor."
   },
   {
    "t": "Niños en la piscina",
    "s": "Los niños siempre deben estar vigilados en la piscina. Nada de vidrio junto a la piscina."
   },
   {
    "t": "Daños",
    "s": "Si algo se rompe, avisad en la app en La casa. No pasa nada, solo queremos saberlo."
   },
   {
    "t": "Descanso y vecinos",
    "todo": "Horario de silencio por la noche"
   },
   {
    "t": "Fiestas y eventos",
    "todo": "¿Se permiten fiestas?"
   },
   {
    "t": "Mascotas",
    "todo": "¿Se admiten mascotas?"
   }
  ],
  "pracTitle": "Consejos prácticos",
  "prac": [
   {
    "t": "Horarios de comidas",
    "s": "Se come normalmente de 14 a 16 h y se cena a partir de las 21 h."
   },
   {
    "t": "Tiendas y domingos",
    "s": "Muchas tiendas pequeñas cierran los domingos y algunas a mediodía. Los supermercados grandes abren más horas."
   },
   {
    "t": "Farmacia",
    "s": "Las farmacias tienen una cruz verde. Fuera de horario hay una farmacia de guardia, indicada en la puerta de todas las farmacias."
   },
   {
    "t": "Propinas",
    "s": "No son obligatorias. Es habitual redondear o dejar un 5–10 % si el servicio es bueno."
   },
   {
    "t": "Agua del grifo",
    "s": "Es potable, aunque mucha gente prefiere agua embotellada por el sabor."
   },
   {
    "t": "Electricidad",
    "s": "230 V y enchufes europeos. Los huéspedes de Reino Unido y EE. UU. necesitan adaptador."
   },
   {
    "t": "Pago",
    "s": "Se acepta tarjeta casi en todas partes. Llevad algo de efectivo para mercadillos y chiringuitos."
   }
  ],
  "wordsTitle": "10 palabras útiles",
  "words": [
   {
    "es": "Hola",
    "x": "Hello"
   },
   {
    "es": "Buenos días",
    "x": "Good morning"
   },
   {
    "es": "Por favor",
    "x": "Please"
   },
   {
    "es": "Gracias",
    "x": "Thank you"
   },
   {
    "es": "Perdón",
    "x": "Sorry"
   },
   {
    "es": "¿Cuánto cuesta?",
    "x": "How much is it?"
   },
   {
    "es": "La cuenta, por favor",
    "x": "The bill, please"
   },
   {
    "es": "Agua",
    "x": "Water"
   },
   {
    "es": "¡Ayuda!",
    "x": "Help!"
   },
   {
    "es": "Adiós",
    "x": "Goodbye"
   }
  ],
  "trTitle": "Transporte",
  "trIntro": "No hay transporte público hasta La Mairena, así que el coche es lo más cómodo.",
  "tr": [
   {
    "t": "Coche de alquiler",
    "s": "Recogedlo en el aeropuerto de Málaga. Hay sitio para 4 coches en la parcela."
   },
   {
    "t": "Taxi y Uber",
    "s": "Uber y Cabify funcionan en la zona de Marbella. Mejor reservar con tiempo hasta La Mairena."
   },
   {
    "t": "Traslado al aeropuerto",
    "todo": "Vuestra empresa de traslados preferida y precio"
   },
   {
    "t": "Tren a Málaga",
    "s": "Desde Fuengirola el Cercanías C1 va al aeropuerto y al centro de Málaga, unos 45 min."
   },
   {
    "t": "Autobús",
    "s": "Hay autobuses por la costa de Elviria a Marbella y Fuengirola, pero no suben a la casa."
   },
   {
    "t": "Aparcar en Marbella",
    "s": "Usad un parking subterráneo del centro; es más fácil que buscar sitio en la calle."
   }
  ],
  "trips": [
   {
    "n": "Málaga",
    "area": "Málaga",
    "min": 45,
    "q": "Málaga centro",
    "s": "Museo Picasso, catedral, Alcazaba y buenas compras.",
    "type": "Ciudad"
   },
   {
    "n": "Ronda",
    "area": "Ronda",
    "min": 75,
    "q": "Ronda",
    "s": "La ciudad sobre el tajo con el famoso Puente Nuevo.",
    "type": "Pueblo"
   },
   {
    "n": "Caminito del Rey",
    "area": "Ardales",
    "min": 75,
    "q": "Caminito del Rey",
    "url": "https://www.caminitodelrey.info",
    "s": "Pasarela colgada sobre el desfiladero. Hay que reservar entrada.",
    "type": "Naturaleza"
   },
   {
    "n": "Gibraltar",
    "area": "Gibraltar",
    "min": 75,
    "q": "Gibraltar",
    "s": "El Peñón con sus monos y vistas a África. Llevad pasaporte.",
    "type": "Excursión"
   },
   {
    "n": "Nerja",
    "area": "Nerja",
    "min": 75,
    "q": "Cueva de Nerja",
    "s": "Pueblo costero con el Balcón de Europa y la Cueva de Nerja.",
    "type": "Pueblo y cuevas"
   },
   {
    "n": "Setenil de las Bodegas",
    "area": "Cádiz",
    "min": 90,
    "q": "Setenil de las Bodegas",
    "s": "Pueblo construido bajo las rocas.",
    "type": "Pueblo blanco"
   },
   {
    "n": "Granada – Alhambra",
    "area": "Granada",
    "min": 120,
    "q": "Alhambra, Granada",
    "url": "https://tickets.alhambra-patronato.es",
    "s": "La Alhambra. Reservad la entrada con mucha antelación.",
    "type": "Cultura"
   }
  ],
  "kidsList": [
   {
    "n": "Aquamijas",
    "area": "Mijas Costa",
    "min": 20,
    "q": "Aquamijas",
    "s": "Parque acuático con toboganes. Solo en verano.",
    "type": "Parque acuático"
   },
   {
    "n": "Bioparc Fuengirola",
    "area": "Fuengirola",
    "min": 25,
    "q": "Bioparc Fuengirola",
    "s": "Zoo moderno con animales de selva.",
    "type": "Zoo"
   },
   {
    "n": "Sea Life Benalmádena",
    "area": "Benalmádena",
    "min": 35,
    "q": "Sea Life Benalmádena",
    "s": "Acuario junto al puerto con tiburones y tortugas.",
    "type": "Acuario"
   },
   {
    "n": "Selwo Marina",
    "area": "Benalmádena",
    "min": 35,
    "q": "Selwo Marina Benalmádena",
    "s": "Delfines, leones marinos y pingüinos.",
    "type": "Delfines y animales"
   },
   {
    "n": "Selwo Aventura",
    "area": "Estepona",
    "min": 40,
    "q": "Selwo Aventura Estepona",
    "s": "Parque safari entre los animales.",
    "type": "Safari"
   }
  ],
  "kidsHouse": "En la casa: 1 cuna y 2 camas supletorias. Los niños deben estar vigilados en la piscina.",
  "natureList": [
   {
    "n": "Hofsaess Tennis Academy",
    "area": "La Mairena",
    "min": 3,
    "q": "Hofsaess Tennis Academy, La Mairena",
    "s": "Academia de tenis en La Mairena con pistas de tierra y duras, abierta a todos.",
    "type": "Tenis"
   },
   {
    "n": "Refugio de Juanar",
    "area": "Sierra Blanca, Ojén",
    "min": 30,
    "q": "Refugio de Juanar, Ojén",
    "s": "Punto de partida de rutas por el pinar, como el Mirador del Macho Montés.",
    "type": "Senderismo"
   },
   {
    "n": "Parque Nacional Sierra de las Nieves",
    "area": "Sierra de las Nieves",
    "min": 45,
    "q": "Parque Nacional Sierra de las Nieves",
    "s": "Parque nacional con montañas, bosques y pueblos blancos. Muchas rutas señalizadas.",
    "type": "Parque nacional"
   },
   {
    "n": "La Concha",
    "area": "Marbella",
    "min": 30,
    "q": "La Concha, Marbella",
    "s": "La montaña de Marbella. Ruta dura con vistas espectaculares. Salid temprano en verano.",
    "type": "Ruta de montaña"
   },
   {
    "n": "Istán og Río Verde",
    "area": "Istán",
    "min": 35,
    "q": "Istán",
    "s": "Pueblo junto a un embalse con rutas por el Río Verde.",
    "type": "Naturaleza"
   }
  ],
  "expExtra": [
   {
    "key": "dagsture",
    "n": "Excursiones",
    "d": "45 min – 2 h",
    "s": "Málaga, Ronda, Gibraltar, la Alhambra y más."
   },
   {
    "key": "born",
    "n": "Para niños",
    "d": "20–40 min",
    "s": "Parque acuático, zoo, acuario y safari."
   },
   {
    "key": "natur",
    "n": "Naturaleza, senderismo y tenis",
    "d": "3–45 min",
    "s": "Rutas de montaña y tenis en La Mairena."
   }
  ],
  "listIntro": "Los tiempos son aproximados. Consultad horarios y reservad entradas cuando haga falta.",
  "backTitle": "Volved pronto",
  "backText": "Gracias por alojaros con nosotros. Una reseña significa mucho. La próxima vez, reservad directamente para el mejor precio.",
  "backReview": "Escribir una reseña",
  "backBook": "Reservar directamente",
  "backCode": "Código de descuento",
  "backTodo": "Código de descuento y enlace a reseñas"
 },
 "de": {
  "rulesTitle": "Hausregeln",
  "rulesIntro": "Damit alle einen schönen Aufenthalt haben und das Haus für die nächsten Gäste bereit ist.",
  "rules": [
   {
    "t": "Max. 12 Personen",
    "s": "Das Haus ist für 10–12 Gäste. Es gibt 5 Schlafzimmer, 2 Zustellbetten und 1 Babybett."
   },
   {
    "t": "Rauchen im Haus verboten",
    "s": "Rauchen ist draußen erlaubt – bitte einen Aschenbecher benutzen."
   },
   {
    "t": "Kinder am Pool",
    "s": "Kinder müssen am Pool immer beaufsichtigt werden. Kein Glas am Beckenrand."
   },
   {
    "t": "Schäden",
    "s": "Wenn etwas kaputtgeht, melden Sie es bitte in der App unter Haus. Das ist völlig in Ordnung – wir möchten es nur wissen."
   },
   {
    "t": "Ruhe und Nachbarn",
    "todo": "Ruhezeiten am Abend"
   },
   {
    "t": "Partys und Veranstaltungen",
    "todo": "Sind Partys erlaubt?"
   },
   {
    "t": "Haustiere",
    "todo": "Sind Haustiere erlaubt?"
   }
  ],
  "pracTitle": "Praktisches für Spanien",
  "prac": [
   {
    "t": "Essenszeiten",
    "s": "Mittagessen meist 14–16 Uhr, Abendessen ab 21 Uhr. Viele Restaurantküchen öffnen abends erst gegen 20 Uhr."
   },
   {
    "t": "Geschäfte und Sonntage",
    "s": "Viele kleinere Geschäfte sind sonntags und teils mittags geschlossen. Größere Supermärkte haben länger geöffnet."
   },
   {
    "t": "Apotheke",
    "s": "Apotheken haben ein grünes Kreuz. Außerhalb der Öffnungszeiten hat eine Notdienst-Apotheke (farmacia de guardia) geöffnet – sie steht an jeder Apothekentür."
   },
   {
    "t": "Trinkgeld",
    "s": "Nicht Pflicht. Üblich ist Aufrunden oder 5–10 % bei gutem Service."
   },
   {
    "t": "Leitungswasser",
    "s": "Trinkbar, viele bevorzugen aber wegen des Geschmacks Flaschenwasser."
   },
   {
    "t": "Strom",
    "s": "230 V mit europäischen Steckdosen. Gäste aus UK und USA brauchen einen Adapter."
   },
   {
    "t": "Bezahlen",
    "s": "Karten werden fast überall akzeptiert. Etwas Bargeld für Märkte und Chiringuitos mitnehmen."
   }
  ],
  "wordsTitle": "10 nützliche spanische Wörter",
  "words": [
   {
    "es": "Hola",
    "x": "Hallo"
   },
   {
    "es": "Buenos días",
    "x": "Guten Morgen"
   },
   {
    "es": "Por favor",
    "x": "Bitte"
   },
   {
    "es": "Gracias",
    "x": "Danke"
   },
   {
    "es": "Perdón",
    "x": "Entschuldigung"
   },
   {
    "es": "¿Cuánto cuesta?",
    "x": "Was kostet das?"
   },
   {
    "es": "La cuenta, por favor",
    "x": "Die Rechnung, bitte"
   },
   {
    "es": "Agua",
    "x": "Wasser"
   },
   {
    "es": "¡Ayuda!",
    "x": "Hilfe!"
   },
   {
    "es": "Adiós",
    "x": "Tschüss"
   }
  ],
  "trTitle": "Unterwegs",
  "trIntro": "Es gibt keine öffentlichen Verkehrsmittel nach La Mairena, ein Auto ist daher am einfachsten.",
  "tr": [
   {
    "t": "Mietwagen",
    "s": "Am Flughafen Málaga abholen. Auf dem Grundstück ist Platz für 4 Autos."
   },
   {
    "t": "Taxi und Uber",
    "s": "Uber und Cabify fahren im Raum Marbella. Nach La Mairena rechtzeitig bestellen."
   },
   {
    "t": "Flughafentransfer",
    "todo": "Ihr bevorzugtes Transferunternehmen und Preis"
   },
   {
    "t": "Zug nach Málaga",
    "s": "Ab Fuengirola fährt die S-Bahn (Cercanías C1) zum Flughafen und ins Zentrum von Málaga, ca. 45 Min."
   },
   {
    "t": "Bus",
    "s": "Busse fahren entlang der Küste von Elviria nach Marbella und Fuengirola, aber nicht zum Haus."
   },
   {
    "t": "Parken in Marbella",
    "s": "Am besten eines der Tiefgaragen im Zentrum nutzen."
   }
  ],
  "trips": [
   {
    "n": "Málaga",
    "area": "Málaga",
    "min": 45,
    "q": "Málaga centro",
    "s": "Picasso-Museum, Kathedrale, Festung Alcazaba und gute Einkaufsstraßen.",
    "type": "Stadt"
   },
   {
    "n": "Ronda",
    "area": "Ronda",
    "min": 75,
    "q": "Ronda",
    "s": "Die Stadt auf dem Felsen mit der berühmten Brücke Puente Nuevo.",
    "type": "Stadt"
   },
   {
    "n": "Caminito del Rey",
    "area": "Ardales",
    "min": 75,
    "q": "Caminito del Rey",
    "url": "https://www.caminitodelrey.info",
    "s": "Steg an der Felswand hoch über einer Schlucht. Tickets vorab buchen.",
    "type": "Natur"
   },
   {
    "n": "Gibraltar",
    "area": "Gibraltar",
    "min": 75,
    "q": "Gibraltar",
    "s": "Der Felsen mit den Affen und Blick nach Afrika. Reisepass mitnehmen.",
    "type": "Ausflug"
   },
   {
    "n": "Nerja",
    "area": "Nerja",
    "min": 75,
    "q": "Cueva de Nerja",
    "s": "Hübscher Küstenort mit dem Balcón de Europa und großen Tropfsteinhöhlen.",
    "type": "Stadt und Höhlen"
   },
   {
    "n": "Setenil de las Bodegas",
    "area": "Cádiz",
    "min": 90,
    "q": "Setenil de las Bodegas",
    "s": "Ein Dorf unter Felsüberhängen gebaut.",
    "type": "Weißes Dorf"
   },
   {
    "n": "Granada – Alhambra",
    "area": "Granada",
    "min": 120,
    "q": "Alhambra, Granada",
    "url": "https://tickets.alhambra-patronato.es",
    "s": "Der maurische Palast Alhambra. Tickets früh buchen.",
    "type": "Kultur"
   }
  ],
  "kidsList": [
   {
    "n": "Aquamijas",
    "area": "Mijas Costa",
    "min": 20,
    "q": "Aquamijas",
    "s": "Wasserpark mit Rutschen. Nur im Sommer.",
    "type": "Wasserpark"
   },
   {
    "n": "Bioparc Fuengirola",
    "area": "Fuengirola",
    "min": 25,
    "q": "Bioparc Fuengirola",
    "s": "Moderner Zoo mit Regenwaldtieren.",
    "type": "Zoo"
   },
   {
    "n": "Sea Life Benalmádena",
    "area": "Benalmádena",
    "min": 35,
    "q": "Sea Life Benalmádena",
    "s": "Aquarium am Hafen mit Haien und Schildkröten.",
    "type": "Aquarium"
   },
   {
    "n": "Selwo Marina",
    "area": "Benalmádena",
    "min": 35,
    "q": "Selwo Marina Benalmádena",
    "s": "Delfine, Seelöwen und Pinguine.",
    "type": "Delfine und Tiere"
   },
   {
    "n": "Selwo Aventura",
    "area": "Estepona",
    "min": 40,
    "q": "Selwo Aventura Estepona",
    "s": "Safaripark, in dem man zwischen den Tieren fährt.",
    "type": "Safaripark"
   }
  ],
  "kidsHouse": "Im Haus: 1 Babybett und 2 Zustellbetten. Kinder am Pool beaufsichtigen.",
  "natureList": [
   {
    "n": "Hofsaess Tennis Academy",
    "area": "La Mairena",
    "min": 3,
    "q": "Hofsaess Tennis Academy, La Mairena",
    "s": "Tennisakademie in La Mairena mit Sand- und Hartplätzen, für alle offen.",
    "type": "Tennis"
   },
   {
    "n": "Refugio de Juanar",
    "area": "Sierra Blanca, Ojén",
    "min": 30,
    "q": "Refugio de Juanar, Ojén",
    "s": "Ausgangspunkt für Wanderungen im Pinienwald, z. B. zum Mirador del Macho Montés.",
    "type": "Wandern"
   },
   {
    "n": "Parque Nacional Sierra de las Nieves",
    "area": "Sierra de las Nieves",
    "min": 45,
    "q": "Parque Nacional Sierra de las Nieves",
    "s": "Nationalpark mit Bergen, Wäldern und weißen Dörfern. Viele markierte Wege.",
    "type": "Nationalpark"
   },
   {
    "n": "La Concha",
    "area": "Marbella",
    "min": 30,
    "q": "La Concha, Marbella",
    "s": "Marbellas Hausberg. Anstrengend, aber tolle Aussicht. Im Sommer früh starten.",
    "type": "Bergtour"
   },
   {
    "n": "Istán og Río Verde",
    "area": "Istán",
    "min": 35,
    "q": "Istán",
    "s": "Kleines Bergdorf am Stausee mit Wegen am Río Verde.",
    "type": "Natur"
   }
  ],
  "expExtra": [
   {
    "key": "dagsture",
    "n": "Tagesausflüge",
    "d": "45 Min. – 2 Std.",
    "s": "Málaga, Ronda, Gibraltar, Alhambra und mehr."
   },
   {
    "key": "born",
    "n": "Für Kinder",
    "d": "20–40 Min.",
    "s": "Wasserpark, Zoo, Aquarium und Safaripark."
   },
   {
    "key": "natur",
    "n": "Natur, Wandern und Tennis",
    "d": "3–45 Min.",
    "s": "Bergwanderungen und Tennis in La Mairena."
   }
  ],
  "listIntro": "Fahrzeiten sind ungefähr. Öffnungszeiten prüfen und Tickets wo nötig buchen.",
  "backTitle": "Kommen Sie wieder",
  "backText": "Danke für Ihren Aufenthalt. Eine Bewertung bedeutet uns viel. Buchen Sie beim nächsten Mal direkt bei uns zum besten Preis.",
  "backReview": "Bewertung schreiben",
  "backBook": "Direkt buchen",
  "backCode": "Rabattcode für Direktbuchung",
  "backTodo": "Rabattcode und Bewertungslink"
 }
};
