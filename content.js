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
        { t: "Fra Málaga lufthavn", d: "Kør mod Marbella langs kysten. Turen tager ca. 45 minutter.", todo: "Tilføj præcis rute og frakørsel" },
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
      eyebrow: "Området", title: "Mellem bjergene og Middelhavet",
      intro: "La Mairena er en grøn bjerglandsby 400 meter over havet, omgivet af pinje- og korkskov i kanten af naturreservatet Sierra de las Nieves. På klare dage kan man se Gibraltar og Nordafrika.",
      beachTitle: "Strandene",
      beachText: "Gyldent sand, klart vand, chiringuitos, restauranter og beach clubs. Den nærmeste strand ligger ca. 8 minutter fra huset.",
      beaches: [["Las Chapas", "ca. 750 m strand"], ["La Víbora", "ca. 850 m strand"], ["Real de Zaragoza", "ca. 1,7 km strand"]],
      dailyTitle: "Hverdag",
      daily: [
        { n: "Indkøb i Elviria", d: "8 min i bil", s: "Flere supermarkeder og bagere." },
        { n: "Takeaway", d: "Levering", s: "Uber Eats leverer til huset. Se \"Bestil mad til huset\" på forsiden." }
      ],
      dailyTodo: "Tilføj jeres foretrukne supermarked og bager",
      expTitle: "Oplevelser", suggestion: "Forslag",
      exp: [
        { key: "golf", n: "Golf", d: "Inden for 30 min", s: "Mere end 10 golfbaner i verdensklasse." },
        { key: "padel", n: "Padel", d: "Inden for 15 min", s: "Padelbaner i området." },
        { n: "Marbella", d: "15 min i bil", s: "Restauranter og natteliv." },
        { n: "Sierra de las Nieves", d: "Lige ved huset", s: "Naturreservat med vandreture i skov og bjerge." },
        { n: "Landsbyen Ojén", tag: true, s: "Hvid andalusisk bjerglandsby. Kommunen som La Mairena hører under." },
        { n: "Marbellas gamle bydel", tag: true, s: "Casco Antiguo med Plaza de los Naranjos og smalle gader." }
      ],
      expTodo: "Tilføj jeres egne favoritter: restauranter, beach clubs, golfbaner",
      golfTitle: "Golfbaner tæt på", golfIntro: "De 10 nærmeste baner. Køretiderne er omtrentlige. Tryk på Rute for præcis afstand i Google Maps.", golfHoles: "huller", golfRoute: "Rute", golfWeb: "Hjemmeside", golfMin: "min",
      golfNotes: { marbellagolf: "Ombygges til Higuerón Marbella Golf Resort", lacala: "La Cala har 3 baner med 18 huller og en par 3-bane" },
      padelIntro: "De 5 nærmeste steder med padelbaner. Køretiderne er omtrentlige. Book direkte hos klubben.", padelCourts: "baner", padelBook: "Book bane", padelNotes: { light: "Lys til aftenspil" },
      beachSum: "De 10 nærmeste strande", beachSumD: "8–15 min", beachIntro: "Køretiderne er omtrentlige. Tryk på Rute for præcis vej i Google Maps.", beachM: "m", beachTags: {"golden": "Gyldent sand", "dark": "Mørkt sand", "dunes": "Klitter (naturmonument)", "nudist": "Nudistområde", "port": "Ved lystbådehavn", "food": "Restauranter og chiringuitos", "kids": "Børneområde", "long": "Lang strand", "quiet": "Mere stille"}
    },
    contact: {
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
        { t: "From Málaga airport", d: "Drive towards Marbella along the coast. The trip takes about 45 minutes.", todo: "Exact route and exit" },
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
      eyebrow: "The area", title: "Between the mountains and the Mediterranean",
      intro: "La Mairena is a green mountain village 400 metres above sea level, surrounded by pine and cork forest on the edge of the Sierra de las Nieves nature reserve. On clear days you can see Gibraltar and North Africa.",
      beachTitle: "The beaches",
      beachText: "Golden sand, clear water, chiringuitos, restaurants and beach clubs. The closest beach is about 8 minutes from the villa.",
      beaches: [["Las Chapas", "approx. 750 m of beach"], ["La Víbora", "approx. 850 m of beach"], ["Real de Zaragoza", "approx. 1.7 km of beach"]],
      dailyTitle: "Everyday",
      daily: [
        { n: "Shopping in Elviria", d: "8 min by car", s: "Several supermarkets and bakeries." },
        { n: "Takeaway", d: "Delivery", s: "Uber Eats delivers to the villa. See \"Order food to the villa\" on the home screen." }
      ],
      dailyTodo: "Your favourite supermarket and bakery",
      expTitle: "Things to do", suggestion: "Suggestion",
      exp: [
        { key: "golf", n: "Golf", d: "Within 30 min", s: "More than 10 world-class golf courses." },
        { key: "padel", n: "Padel", d: "Within 15 min", s: "Padel courts in the area." },
        { n: "Marbella", d: "15 min by car", s: "Restaurants and nightlife." },
        { n: "Sierra de las Nieves", d: "Right by the villa", s: "Nature reserve with walks in forest and mountains." },
        { n: "Ojén village", tag: true, s: "White Andalusian mountain village, the municipality La Mairena belongs to." },
        { n: "Marbella old town", tag: true, s: "The Casco Antiguo with Plaza de los Naranjos and narrow streets." }
      ],
      expTodo: "Your own favourites: restaurants, beach clubs, golf courses",
      golfTitle: "Golf courses nearby", golfIntro: "The 10 closest courses. Drive times are approximate. Tap Route for the exact distance in Google Maps.", golfHoles: "holes", golfRoute: "Route", golfWeb: "Website", golfMin: "min",
      golfNotes: { marbellagolf: "Being redeveloped as Higuerón Marbella Golf Resort", lacala: "La Cala has three 18-hole courses and a par-3 course" },
      padelIntro: "The 5 closest places with padel courts. Drive times are approximate. Book directly with the club.", padelCourts: "courts", padelBook: "Book a court", padelNotes: { light: "Floodlit for evening play" },
      beachSum: "The 10 closest beaches", beachSumD: "8–15 min", beachIntro: "Drive times are approximate. Tap Route for directions in Google Maps.", beachM: "m", beachTags: {"golden": "Golden sand", "dark": "Dark sand", "dunes": "Dunes (protected)", "nudist": "Nudist area", "port": "By the marina", "food": "Restaurants and chiringuitos", "kids": "Children's area", "long": "Long beach", "quiet": "Quieter"}
    },
    contact: {
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
        { t: "Desde el aeropuerto de Málaga", d: "Conducid hacia Marbella por la costa. El trayecto dura unos 45 minutos.", todo: "Ruta exacta y salida" },
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
      eyebrow: "La zona", title: "Entre la montaña y el Mediterráneo",
      intro: "La Mairena es un pueblo verde de montaña a 400 metros sobre el mar, rodeado de pinos y alcornoques en el borde de la reserva natural Sierra de las Nieves. En días claros se ven Gibraltar y el norte de África.",
      beachTitle: "Las playas",
      beachText: "Arena dorada, agua clara, chiringuitos, restaurantes y beach clubs. La playa más cercana está a unos 8 minutos de la villa.",
      beaches: [["Las Chapas", "aprox. 750 m de playa"], ["La Víbora", "aprox. 850 m de playa"], ["Real de Zaragoza", "aprox. 1,7 km de playa"]],
      dailyTitle: "Día a día",
      daily: [
        { n: "Compras en Elviria", d: "8 min en coche", s: "Varios supermercados y panaderías." },
        { n: "Comida a domicilio", d: "Entrega", s: "Uber Eats entrega en la villa. Ver \"Pedir comida a la villa\" en Inicio." }
      ],
      dailyTodo: "Vuestro supermercado y panadería favoritos",
      expTitle: "Qué hacer", suggestion: "Sugerencia",
      exp: [
        { key: "golf", n: "Golf", d: "A menos de 30 min", s: "Más de 10 campos de golf de primer nivel." },
        { key: "padel", n: "Pádel", d: "A menos de 15 min", s: "Pistas de pádel en la zona." },
        { n: "Marbella", d: "15 min en coche", s: "Restaurantes y vida nocturna." },
        { n: "Sierra de las Nieves", d: "Junto a la villa", s: "Reserva natural con rutas por bosque y montaña." },
        { n: "El pueblo de Ojén", tag: true, s: "Pueblo blanco andaluz de montaña, el municipio al que pertenece La Mairena." },
        { n: "Casco Antiguo de Marbella", tag: true, s: "La Plaza de los Naranjos y sus calles estrechas." }
      ],
      expTodo: "Vuestros favoritos: restaurantes, beach clubs, campos de golf",
      golfTitle: "Campos de golf cercanos", golfIntro: "Los 10 campos más cercanos. Los tiempos son aproximados. Pulsa Ruta para ver la distancia exacta en Google Maps.", golfHoles: "hoyos", golfRoute: "Ruta", golfWeb: "Web", golfMin: "min",
      golfNotes: { marbellagolf: "En transformación como Higuerón Marbella Golf Resort", lacala: "La Cala tiene tres campos de 18 hoyos y uno de par 3" },
      padelIntro: "Los 5 lugares más cercanos con pistas de pádel. Los tiempos son aproximados. Reserva directamente con el club.", padelCourts: "pistas", padelBook: "Reservar pista", padelNotes: { light: "Con luz para jugar de noche" },
      beachSum: "Las 10 playas más cercanas", beachSumD: "8–15 min", beachIntro: "Los tiempos son aproximados. Pulsa Ruta para ver el camino en Google Maps.", beachM: "m", beachTags: {"golden": "Arena dorada", "dark": "Arena oscura", "dunes": "Dunas (monumento natural)", "nudist": "Zona nudista", "port": "Junto al puerto deportivo", "food": "Restaurantes y chiringuitos", "kids": "Zona infantil", "long": "Playa larga", "quiet": "Más tranquila"}
    },
    contact: {
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
        { t: "Vom Flughafen Málaga", d: "Fahren Sie an der Küste entlang Richtung Marbella. Die Fahrt dauert etwa 45 Minuten.", todo: "Genaue Route und Ausfahrt" },
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
      eyebrow: "Die Umgebung", title: "Zwischen Bergen und Mittelmeer",
      intro: "La Mairena ist ein grünes Bergdorf 400 Meter über dem Meer, umgeben von Pinien- und Korkeichenwald am Rand des Naturparks Sierra de las Nieves. An klaren Tagen sieht man Gibraltar und Nordafrika.",
      beachTitle: "Die Strände",
      beachText: "Goldener Sand, klares Wasser, Chiringuitos, Restaurants und Beach Clubs. Der nächste Strand ist etwa 8 Minuten von der Villa entfernt.",
      beaches: [["Las Chapas", "ca. 750 m Strand"], ["La Víbora", "ca. 850 m Strand"], ["Real de Zaragoza", "ca. 1,7 km Strand"]],
      dailyTitle: "Alltag",
      daily: [
        { n: "Einkaufen in Elviria", d: "8 Min. mit dem Auto", s: "Mehrere Supermärkte und Bäckereien." },
        { n: "Essen bestellen", d: "Lieferung", s: "Uber Eats liefert zur Villa. Siehe \"Essen zur Villa bestellen\" auf der Startseite." }
      ],
      dailyTodo: "Ihr Lieblingssupermarkt und Ihre Lieblingsbäckerei",
      expTitle: "Erlebnisse", suggestion: "Vorschlag",
      exp: [
        { key: "golf", n: "Golf", d: "Innerhalb von 30 Min.", s: "Mehr als 10 Golfplätze der Spitzenklasse." },
        { key: "padel", n: "Padel", d: "Innerhalb von 15 Min.", s: "Padelplätze in der Umgebung." },
        { n: "Marbella", d: "15 Min. mit dem Auto", s: "Restaurants und Nachtleben." },
        { n: "Sierra de las Nieves", d: "Direkt an der Villa", s: "Naturpark mit Wanderungen durch Wald und Berge." },
        { n: "Das Dorf Ojén", tag: true, s: "Weißes andalusisches Bergdorf, zu dessen Gemeinde La Mairena gehört." },
        { n: "Altstadt von Marbella", tag: true, s: "Der Casco Antiguo mit der Plaza de los Naranjos und engen Gassen." }
      ],
      expTodo: "Ihre eigenen Favoriten: Restaurants, Beach Clubs, Golfplätze",
      golfTitle: "Golfplätze in der Nähe", golfIntro: "Die 10 nächstgelegenen Plätze. Fahrzeiten sind ungefähr. Tippen Sie auf Route für die genaue Entfernung in Google Maps.", golfHoles: "Löcher", golfRoute: "Route", golfWeb: "Website", golfMin: "Min.",
      golfNotes: { marbellagolf: "Wird zum Higuerón Marbella Golf Resort umgebaut", lacala: "La Cala hat drei 18-Loch-Plätze und einen Par-3-Platz" },
      padelIntro: "Die 5 nächstgelegenen Orte mit Padelplätzen. Fahrzeiten sind ungefähr. Direkt beim Club buchen.", padelCourts: "Plätze", padelBook: "Platz buchen", padelNotes: { light: "Mit Flutlicht für abends" },
      beachSum: "Die 10 nächsten Strände", beachSumD: "8–15 Min.", beachIntro: "Fahrzeiten sind ungefähr. Tippen Sie auf Route für den Weg in Google Maps.", beachM: "m", beachTags: {"golden": "Goldener Sand", "dark": "Dunkler Sand", "dunes": "Dünen (Naturdenkmal)", "nudist": "FKK-Bereich", "port": "Am Yachthafen", "food": "Restaurants und Chiringuitos", "kids": "Kinderbereich", "long": "Langer Strand", "quiet": "Ruhiger"}
    },
    contact: {
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
