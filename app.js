/* VillaMairena gæsteapp – visning. Indholdet ligger i content.js. */
(function () {
  var C = window.VM_CONTENT, IMG = window.VM_IMG || {};
  var LANGS = ["da", "en", "es", "de"];
  var PHONES = ["+45 51 59 30 50", "+45 26 85 75 45"], EMAIL = "kontakt@villamairena.com";
  var ADDR = "Calle Navarra 5, 29612 La Mairena (Ojén), Málaga";
  var DRIVER = "Villa en Calle Navarra 5, La Mairena. Llame al interfono de la puerta y le abrimos. ¡Gracias!";
  var HOW_IDS = (C.da.how || []).map(function (h) { return h.id; });
  var TABS = ["hjem", "ankomst", "huset", "omraadet", "kontakt"], PANELS = TABS.concat(["ejer"]);

  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function pickLang() {
    var saved = store("vm-lang"); if (saved && C[saved]) return saved;
    var nav = (navigator.languages || [navigator.language || "en"]);
    for (var i = 0; i < nav.length; i++) {
      var l = String(nav[i]).slice(0, 2).toLowerCase();
      if (l === "nb" || l === "no" || l === "sv") return "da";
      if (C[l]) return l;
    }
    return "en";
  }
  var lang = pickLang(), T = C[lang];
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var ic = function (id, w) { return '<svg' + (w ? ' width="' + w + '" height="' + w + '"' : "") + ' aria-hidden="true"><use href="#' + id + '"/></svg>'; };
  var todo = function (t) { return t ? '<span class="todo">' + esc(T.ui.todo) + ": " + esc(t) + "</span>" : ""; };
  var img = function (k) { return IMG[k] || ("images/" + k + ".jpg"); };
  function fireSeason(d) { var m = d.getMonth() + 1, day = d.getDate(); return (m > 6 && m < 10) || m === 6 || (m === 10 && day <= 15); }

  var CI = { da: ["Fra kl. 15", "Senest kl. 10"], en: ["From 3 pm", "By 10 am"], es: ["A partir de las 15:00", "Antes de las 10:00"], de: ["Ab 15 Uhr", "Bis 10 Uhr"] };
  function renderHome() {
    var h = T.home, w = T.weather, W = window.VM_WIFI || { ssid: "VillaMairena", pass: "" };
    var banner = fireSeason(new Date()) ?
      '<a class="fire" href="#sikkerhed">' + ic("i-flame") + '<span><strong>' + esc(h.fireBanner.title) + "</strong><br>" + esc(h.fireBanner.body) + "</span></a>" : "";
    return '' +
      '<div class="hero"><img src="' + img("ext") + '" alt="VillaMairena" data-zoom>' +
      '<div class="txt"><p class="eyebrow" style="color:inherit;opacity:.85">' + esc(h.eyebrow) + "</p><h1>" + esc(h.title) + "</h1><p>" + esc(h.sub) + "</p></div></div>" +
      banner +
      '<div class="grid2">' +
      '<div class="card key"><span class="label">' + esc(h.gate) + '</span><span class="val">• • • •</span><span class="muted" style="font-size:.8rem">' + esc(h.gateNote) + "</span></div>" +
      '<div class="card key"><span class="label">' + esc(h.wifi) + '</span><span class="val" style="font-size:1.05rem;letter-spacing:0">' + esc(W.ssid) + '</span><span class="muted" style="font-size:.8rem">' + esc(h.wifiPassLabel) + ': <strong class="num" style="color:var(--ink)">' + esc(W.pass) + '</strong></span><button class="btn" style="width:fit-content;grid-row:auto;grid-column:auto" data-copy="' + esc(W.pass) + '">' + esc(T.ui.copy) + "</button></div>" +
      '<div class="card key"><span class="label">' + esc(h.checkin) + '</span><span class="val">15:00</span><span class="muted" style="font-size:.8rem">' + esc(CI[lang][0]) + "</span></div>" +
      '<div class="card key"><span class="label">' + esc(h.checkout) + '</span><span class="val">10:00</span><span class="muted" style="font-size:.8rem">' + esc(CI[lang][1]) + "</span></div>" +
      "</div>" +
      '<div class="card wx" id="vejr" aria-live="polite"><div style="display:flex;justify-content:space-between;align-items:baseline;gap:8px;flex-wrap:wrap"><h3>' + esc(w.title) + '</h3><span class="wx-note" id="wx-src"></span></div>' +
      '<div class="wx-now"><svg aria-hidden="true"><use id="wx-ic" href="#w-sun"/></svg><span class="wx-t" id="wx-t">--°</span><span class="wx-d" id="wx-d">' + esc(w.loading) + '</span></div>' +
      '<div class="wx-meta" id="wx-meta"></div><div class="wx-days" id="wx-days"></div></div>' +
      '<div class="card food" id="mad"><h3>' + esc(h.food.title) + '</h3><p class="muted" style="font-size:.9rem">' + esc(h.food.body) + "</p>" +
      '<div class="acts"><a class="cta" href="https://www.ubereats.com/es" target="_blank" rel="noopener">' + ic("i-cart", 18) + esc(h.food.open) + "</a>" +
      '<button class="btn" data-copy="' + esc(ADDR) + '">' + esc(T.ui.copyAddress) + "</button></div>" +
      '<div class="note"><span class="lbl">' + esc(h.food.note) + '</span><span id="drv">' + esc(DRIVER) + '</span><button class="btn" style="width:fit-content" data-copy="' + esc(DRIVER) + '">' + esc(h.food.copyNote) + "</button></div></div>" +
      '<div class="card"><h3>' + esc(h.importantTitle) + '</h3><div class="stack" style="gap:0">' +
      h.important.map(function (r) { return '<div class="row"><span class="ic">' + ic(r.icon) + '</span><div class="body"><span class="t">' + esc(r.t) + '</span><span class="s">' + esc(r.s) + "</span></div></div>"; }).join("") +
      "</div></div>";
  }

  function renderArrival() {
    var a = T.arrival;
    return '<div class="stack"><p class="eyebrow">' + esc(a.eyebrow) + "</p><h2>" + esc(a.title) + "</h2></div>" +
      '<div class="card"><span class="eyebrow" style="color:var(--muted)">' + esc(a.addressLabel) + '</span>' +
      '<p style="font-family:var(--f-display);font-size:1.3rem;line-height:1.3">Calle Navarra 5<br>29612 La Mairena (Ojén)<br>Málaga, España</p>' +
      '<div class="facts" style="margin-top:4px"><a class="linkbtn" href="https://www.google.com/maps/search/?api=1&amp;query=Calle+Navarra+5,+29612+La+Mairena,+Oj%C3%A9n,+M%C3%A1laga" target="_blank" rel="noopener">' + ic("i-pin", 18) + esc(T.ui.openMaps) + "</a>" +
      '<button class="btn" style="grid-row:auto" data-copy="' + esc(ADDR) + '">' + esc(T.ui.copyAddress) + "</button></div></div>" +
      '<ol class="steps card">' + a.steps.map(function (s) {
        return "<li><div><strong>" + esc(s.t) + "</strong>" + (s.d ? '<span class="muted">' + esc(s.d) + "</span>" : "") + todo(s.todo) + "</div></li>";
      }).join("") + "</ol>" +
      '<div class="todo-block"><strong>' + esc(a.missingLabel) + "</strong>" + esc(a.missing) + "</div>";
  }

  function renderHouse() {
    var h = T.house, keys = ["living", "kitchen", "bath", "closet"];
    return '<div class="stack"><p class="eyebrow">' + esc(h.eyebrow) + "</p><h2>" + esc(h.title) + '</h2><div class="facts">' +
      h.chips.map(function (c) { return '<span class="chip">' + esc(c) + "</span>"; }).join("") + "</div></div>" +
      '<div class="gal">' + keys.map(function (k) { return '<figure><img src="' + img(k) + '" alt="' + esc(h.gallery[k]) + '" data-zoom><figcaption>' + esc(h.gallery[k]) + "</figcaption></figure>"; }).join("") + "</div>" +
      '<div class="card"><h3>' + esc(h.roomsTitle) + '</h3><p class="muted" style="font-size:.9rem">' + esc(h.roomsIntro) + "</p><div>" +
      h.rooms.map(function (r, i) {
        var m2 = [18, 16, 14, 17, 17][i];
        return '<div class="room"><img class="th" src="' + img("r" + (i + 1)) + '" alt="' + esc(h.roomWord + " " + (i + 1) + ": " + r.name) + '" data-zoom><span class="d"><span class="n">' + (i + 1) + "</span> · " + esc(r.name) + "<small>" + esc(r.meta) + '</small></span><span class="m">' + m2 + " m²</span></div>";
      }).join("") + '</div><p class="muted" style="font-size:.9rem">' + esc(h.extraBeds) + "</p></div>" +
      '<div class="card pool"><h3>' + esc(h.poolTitle) + '</h3><img class="photo" src="' + img("pool") + '" alt="' + esc(h.poolTitle) + '" data-zoom>' +
      '<svg viewBox="0 0 320 120" role="img" aria-label="' + esc(h.poolDiagram.alt) + '"><path d="M20 30 H300 V82 L20 58 Z" fill="var(--pine-soft)" stroke="var(--pine)" stroke-width="1.5"/><line x1="20" y1="30" x2="300" y2="30" stroke="var(--pine)" stroke-width="2.5"/>' +
      '<text x="160" y="20" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Nunito Sans, sans-serif" font-weight="700">' + esc(h.poolDiagram.size) + '</text><text x="20" y="76" font-size="11" fill="var(--muted)" font-family="Nunito Sans, sans-serif">1,10 m</text><text x="300" y="100" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Nunito Sans, sans-serif">1,70 m</text></svg>' +
      '<p class="muted" style="font-size:.9rem">' + esc(h.poolText) + "</p></div>" +
      '<div class="stack" id="saadan"><h3 style="font-size:1.35rem">' + esc(h.howTitle) + '</h3><p class="muted" style="font-size:.9rem">' + esc(h.howIntro) + "</p>" +
      T.how.map(function (x) {
        return '<details class="how" id="' + x.id + '"><summary><span class="hi">' + ic(x.icon) + "</span>" + esc(x.title) + "</summary>" +
          (x.body.length ? "<ul>" + x.body.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>" : "") + (x.todo ? "<p>" + todo(x.todo) + "</p>" : "") + "</details>";
      }).join("") + "</div>";
  }

  function places(list, sug) {
    return "<div>" + list.map(function (p) {
      if (p.key === "golf") return renderGolfItem(p);
      if (p.key === "padel") return renderPadelItem(p);
      if (p.key === "kultur") return renderCultItem(p);
      return '<div class="place">' + (p.tag ? '<span class="tag">' + esc(sug) + "</span><span></span>" : "") +
        '<span class="nm" style="grid-column:1">' + esc(p.n) + '</span><span class="dist">' + esc(p.d || "") + "</span>" + (p.s ? '<span class="ds">' + esc(p.s) + "</span>" : "") +
        (p.url ? '<span class="gl" style="grid-column:1/-1;margin-top:4px"><a class="linkbtn" href="' + esc(p.url) + '" target="_blank" rel="noopener">' + ic("i-cart", 16) + esc(T.home.food.open) + "</a></span>" : "") + "</div>";
    }).join("") + "</div>";
  }
  function renderGolfItem(p) {
    var a = T.area, G = window.VM_GOLF || [];
    var origin = encodeURIComponent("Calle Navarra 5, 29612 La Mairena, Ojén");
    return '<details class="place golf" id="golf"><summary><span class="nm">' + esc(p.n) + '</span><span class="dist">' + esc(p.d || "") + '</span><span class="ds">' + esc(p.s) + "</span></summary>" +
      '<p class="muted gi">' + esc(a.golfIntro) + "</p><ol>" +
      G.map(function (g) {
        var route = "https://www.google.com/maps/dir/?api=1&origin=" + origin + "&destination=" + encodeURIComponent(g.name + ", " + g.area) + "&travelmode=driving";
        return '<li><div class="gh"><span class="gn">' + esc(g.name) + '</span><span class="gm">ca. ' + g.min + " " + esc(a.golfMin) + "</span></div>" +
          '<span class="gs">' + esc(g.area) + " · " + esc(g.holes) + " " + esc(a.golfHoles) + (g.par3 ? " · par 3" : "") + "</span>" +
          (g.note && a.golfNotes[g.note] ? '<span class="gs">' + esc(a.golfNotes[g.note]) + "</span>" : "") +
          '<span class="gl"><a href="' + route + '" target="_blank" rel="noopener">' + ic("i-pin", 14) + esc(a.golfRoute) + '</a><a href="' + esc(g.url) + '" target="_blank" rel="noopener">' + esc(a.golfWeb) + " ↗</a></span></li>";
      }).join("") + "</ol></details>";
  }
  function renderPadelItem(p) {
    var a = T.area, P = window.VM_PADEL || [];
    var origin = encodeURIComponent("Calle Navarra 5, 29612 La Mairena, Ojén");
    return '<details class="place golf" id="padel"><summary><span class="nm">' + esc(p.n) + '</span><span class="dist">' + esc(p.d || "") + '</span><span class="ds">' + esc(p.s) + "</span></summary>" +
      '<p class="muted gi">' + esc(a.padelIntro) + "</p><ol>" +
      P.map(function (g) {
        var route = "https://www.google.com/maps/dir/?api=1&origin=" + origin + "&destination=" + encodeURIComponent(g.name + ", " + g.area) + "&travelmode=driving";
        var meta = esc(g.area) + (g.courts ? " · " + g.courts + " " + esc(a.padelCourts) : "") + (g.phone ? " · " + esc(g.phone) : "");
        return '<li><div class="gh"><span class="gn">' + esc(g.name) + '</span><span class="gm">ca. ' + g.min + " " + esc(a.golfMin) + "</span></div>" +
          '<span class="gs">' + meta + "</span>" + (g.note && a.padelNotes[g.note] ? '<span class="gs">' + esc(a.padelNotes[g.note]) + "</span>" : "") +
          '<span class="gl"><a href="' + route + '" target="_blank" rel="noopener">' + ic("i-pin", 14) + esc(a.golfRoute) + "</a>" +
          (g.book ? '<a href="' + esc(g.book) + '" target="_blank" rel="noopener">' + esc(a.padelBook) + " ↗</a>" : "") +
          (g.url ? '<a href="' + esc(g.url) + '" target="_blank" rel="noopener">' + esc(a.golfWeb) + " ↗</a>" : "") + "</span></li>";
      }).join("") + "</ol></details>";
  }
  function renderBeachItem() {
    var a = T.area, B = window.VM_BEACH || [];
    var origin = encodeURIComponent("Calle Navarra 5, 29612 La Mairena, Ojén");
    return '<details class="place golf" id="strande"><summary><span class="nm">' + esc(a.beachSum) + '</span><span class="dist">' + esc(a.beachSumD) + "</span></summary>" +
      '<p class="muted gi">' + esc(a.beachIntro) + "</p><ol>" +
      B.map(function (g) {
        var route = "https://www.google.com/maps/dir/?api=1&origin=" + origin + "&destination=" + encodeURIComponent("Playa " + g.name.split(" (")[0].split(" / ")[0] + ", " + g.area) + "&travelmode=driving";
        var len = g.len ? (g.len >= 1000 ? (g.len / 1000).toLocaleString(lang === "en" ? "en-GB" : "da-DK") + " km" : g.len + " m") : "";
        return '<li><div class="gh"><span class="gn">' + esc(g.name) + '</span><span class="gm">ca. ' + g.min + " " + esc(a.golfMin) + "</span></div>" +
          '<span class="gs">' + esc(g.area) + (len ? " · " + len : "") + "</span>" +
          '<span class="gs">' + g.tags.map(function (t) { return esc(a.beachTags[t] || t); }).join(" · ") + "</span>" +
          '<span class="gl"><a href="' + route + '" target="_blank" rel="noopener">' + ic("i-pin", 14) + esc(a.golfRoute) + "</a></span></li>";
      }).join("") + "</ol></details>";
  }
  function renderShopItem() {
    var a = T.area, L = a.shops || [];
    var origin = encodeURIComponent("Calle Navarra 5, 29612 La Mairena, Ojén");
    return '<details class="place golf" id="indkoeb"><summary><span class="nm">' + esc(a.shopSum) + '</span><span class="dist">' + esc(a.shopSumD) + "</span></summary>" +
      '<p class="muted gi">' + esc(a.shopIntro) + "</p><ol>" +
      L.map(function (g) {
        var route = "https://www.google.com/maps/dir/?api=1&origin=" + origin + "&destination=" + encodeURIComponent(g.q) + "&travelmode=driving";
        return '<li><div class="gh"><span class="gn">' + esc(g.n) + '</span><span class="gm">ca. ' + g.min + " " + esc(a.golfMin) + "</span></div>" +
          '<span class="gs">' + esc(g.type) + " · " + esc(g.area) + "</span>" +
          '<span class="gs">' + esc(g.s) + "</span>" +
          (g.hours ? '<span class="gs hrs">' + ic("i-clock", 13) + " " + esc(g.hours) + "</span>" : "") +
          '<span class="gl"><a href="' + route + '" target="_blank" rel="noopener">' + ic("i-pin", 14) + esc(a.golfRoute) + "</a>" +
          (g.url ? '<a href="' + esc(g.url) + '" target="_blank" rel="noopener">' + esc(a.golfWeb) + " ↗</a>" : "") + "</span></li>";
      }).join("") + "</ol></details>";
  }
  function renderCultItem(p) {
    var a = T.area, L = a.cults || [];
    var origin = encodeURIComponent("Calle Navarra 5, 29612 La Mairena, Ojén");
    return '<details class="place golf" id="kultur"><summary><span class="nm">' + esc(p.n) + '</span><span class="dist">' + esc(p.d || "") + '</span><span class="ds">' + esc(p.s) + "</span></summary>" +
      '<p class="muted gi">' + esc(a.cultIntro) + "</p><ol>" +
      L.map(function (g) {
        var route = "https://www.google.com/maps/dir/?api=1&origin=" + origin + "&destination=" + encodeURIComponent(g.q) + "&travelmode=driving";
        return '<li><div class="gh"><span class="gn">' + esc(g.n) + '</span><span class="gm">ca. ' + g.min + " " + esc(a.golfMin) + "</span></div>" +
          '<span class="gs">' + esc(g.type) + " · " + esc(g.area) + "</span>" +
          '<span class="gs">' + esc(g.s) + "</span>" +
          (g.hours ? '<span class="gs hrs">' + ic("i-clock", 13) + " " + esc(g.hours) + "</span>" : "") +
          '<span class="gl"><a href="' + route + '" target="_blank" rel="noopener">' + ic("i-pin", 14) + esc(a.golfRoute) + "</a>" +
          (g.url ? '<a href="' + esc(g.url) + '" target="_blank" rel="noopener">' + esc(a.golfWeb) + " ↗</a>" : "") + "</span></li>";
      }).join("") + "</ol></details>";
  }
  function renderRestItem() {
    var a = T.area, L = a.rests || [];
    var origin = encodeURIComponent("Calle Navarra 5, 29612 La Mairena, Ojén");
    return '<details class="place golf" id="restauranter"><summary><span class="nm">' + esc(a.restSum) + '</span><span class="dist">' + esc(a.restSumD) + "</span></summary>" +
      '<p class="muted gi">' + esc(a.restIntro) + "</p><ol>" +
      L.map(function (g) {
        var route = "https://www.google.com/maps/dir/?api=1&origin=" + origin + "&destination=" + encodeURIComponent(g.q) + "&travelmode=driving";
        return '<li><div class="gh"><span class="gn">' + esc(g.n) + '</span><span class="gm">ca. ' + g.min + " " + esc(a.golfMin) + "</span></div>" +
          '<span class="gs">' + esc(g.type) + " · " + esc(g.area) + (g.price ? " · " + esc(g.price) : "") + "</span>" +
          '<span class="gs">' + esc(g.s) + "</span>" +
          '<span class="gl"><a href="' + route + '" target="_blank" rel="noopener">' + ic("i-pin", 14) + esc(a.golfRoute) + "</a>" +
          (g.url ? '<a href="' + esc(g.url) + '" target="_blank" rel="noopener">' + esc(a.golfWeb) + " ↗</a>" : "") + "</span></li>";
      }).join("") + "</ol></details>";
  }
  function renderArea() {
    var a = T.area;
    return '<div class="stack"><p class="eyebrow">' + esc(a.eyebrow) + "</p><h2>" + esc(a.title) + '</h2><p class="muted">' + esc(a.intro) + "</p></div>" +
      '<div class="card"><h3>' + esc(a.dailyTitle) + "</h3><div>" + renderShopItem() + renderRestItem() + "</div>" + places(a.daily) + todo(a.dailyTodo) + "</div>" +
      '<div class="card"><h3>' + esc(a.beachTitle) + '</h3><p class="muted" style="font-size:.9rem">' + esc(a.beachText) + "</p>" +
      "<div>" + renderBeachItem() + "</div></div>" +
      '<div class="card"><h3>' + esc(a.expTitle) + "</h3>" + places(a.exp, a.suggestion) + "</div>";
  }

  function contactRow(who, num, copyVal) {
    return '<div class="contact"><span class="who">' + esc(who) + '</span><span class="num">' + esc(num) + '</span><button class="btn" data-copy="' + esc(copyVal) + '">' + esc(T.ui.copy) + "</button></div>";
  }
  function renderContact() {
    var c = T.contact, s = T.safety;
    return '<div class="stack"><p class="eyebrow">' + esc(c.eyebrow) + "</p><h2>" + esc(c.title) + "</h2></div>" +
      '<div class="card sos"><span class="eyebrow" style="color:inherit">' + esc(c.sos) + '</span><span class="big">112</span></div>' +
      '<div class="card"><h3>' + esc(c.ownersTitle) + '</h3><p class="muted" style="font-size:.9rem">' + esc(c.ownersText) + "</p><div>" +
      contactRow(c.phone, PHONES[0], PHONES[0].replace(/\s/g, "")) + contactRow(c.phone, PHONES[1], PHONES[1].replace(/\s/g, "")) + contactRow(c.email, EMAIL, EMAIL) + "</div></div>" +
      '<div class="card"><h3>' + esc(c.localTitle) + "</h3><div>" + c.local.map(function (l) {
        return '<div class="contact"><span class="who">' + esc(l.who) + '</span><span class="what">' + esc(l.what) + "</span>" + todo(l.todo) + "</div>";
      }).join("") + "</div></div>" +
      '<div class="card"><h3>' + esc(c.healthTitle) + "</h3><div>" + c.health.map(function (l) {
        return '<div class="contact"><span class="who">' + esc(l.who) + "</span>" + (l.what ? '<span class="what">' + esc(l.what) + "</span>" : "") + todo(l.todo) + "</div>";
      }).join("") + "</div></div>" +
      '<section class="card safety" id="sikkerhed"><h3 style="font-size:1.35rem">' + esc(s.title) + '</h3><p class="muted" style="font-size:.9rem">' + esc(s.intro) + "</p>" +
      '<div class="season"><span class="lbl">' + ic("i-flame", 16) + esc(s.seasonLabel) + "</span><p>" + esc(s.season) + "</p></div>" +
      "<ul>" + s.rules.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul>" + todo(s.houseRuleTodo) +
      "<h4>" + esc(s.fireTitle) + '</h4><ol class="fire-steps">' + s.fire.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ol>" +
      todo(s.evacTodo) + todo(s.extTodo) + "</section>" +
      '<a class="ownerlink" href="#ejer">Ejer-login</a>';
  }


  /* ---------- ejer (login + bookinger fra Lodgify via villamairena.com/ejer/api.php) ---------- */
  var OWNER_API = "https://villamairena.com/ejer/api.php";
  function renderOwnerShell() {
    return '<a class="backlink" href="#hjem">‹ Til gæsteappen</a><div class="top-o" style="display:flex;justify-content:space-between;align-items:baseline"><h2>Ejer</h2><button class="btn" id="o-out" style="grid-row:auto;grid-column:auto" hidden>Log ud</button></div><div id="o-body"></div>';
  }
  var ownerMem = null;
  function ownerToken() { return ownerMem || store("vm-owner-token"); }
  function ownerLogin(msg) {
    var b = document.getElementById("o-body"); if (!b) return;
    document.getElementById("o-out").hidden = true; ownerTabs(false);
    b.innerHTML = '<form class="card owner-login" id="o-form"><p class="muted" style="font-size:.9rem">Kun for ejerne af VillaMairena.</p>' +
      (msg ? '<div class="err">' + esc(msg) + "</div>" : "") +
      '<label for="o-user" class="eyebrow" style="color:var(--muted)">Navn</label><input id="o-user" autocomplete="username" required>' +
      '<label for="o-pass" class="eyebrow" style="color:var(--muted)">Adgangskode</label><input id="o-pass" type="password" autocomplete="current-password" required>' +
      '<button class="cta" type="submit" style="border:0;cursor:pointer;justify-content:center">Log ind</button></form>';
    document.getElementById("o-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = e.target.querySelector("button"); btn.disabled = true; btn.textContent = "Logger ind …";
      fetch(OWNER_API + "?action=login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ user: document.getElementById("o-user").value, password: document.getElementById("o-pass").value }) })
        .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
        .then(function (x) { if (x.ok && x.j.token) { ownerMem = x.j.token; store("vm-owner-token", x.j.token); ownerLoad(); } else ownerLogin(x.j.error || "Forkert navn eller adgangskode"); })
        .catch(function () { ownerLogin("Kunne ikke kontakte serveren. Prøv igen."); });
    });
  }
  function ownerLoad() {
    var b = document.getElementById("o-body"); if (!b) return;
    var tok = ownerToken(); if (!tok) { ownerLogin(); return; }
    b.innerHTML = '<div class="card"><span class="muted">Henter bookinger fra Lodgify …</span></div>';
    fetch(OWNER_API, { headers: { Authorization: "Bearer " + tok }, cache: "no-store" })
      .then(function (r) { if (r.status === 401) { ownerMem = null; try { localStorage.removeItem("vm-owner-token"); } catch (e) {} throw "login"; } return r.json(); })
      .then(ownerRender)
      .catch(function (e) { if (e === "login") ownerLogin("Log ind igen."); else b.innerHTML = '<div class="err">Kunne ikke hente data. Tjek forbindelsen, og prøv igen.</div>'; });
  }
  document.addEventListener("click", function (e) {
    if (e.target.id === "o-out") { ownerMem = null; try { localStorage.removeItem("vm-owner-token"); } catch (x) {} ownerLogin(); }
    if (e.target.id === "o-reload") ownerLoad();
  });
  var ownerSec = "oversigt";
  function ownerTabs(on) {
    var g = document.getElementById("gtabs"), o = document.getElementById("otabs");
    if (g) g.hidden = !!on; if (o) o.hidden = !on;
  }
  function ownerShow(sec) {
    ownerSec = sec;
    document.querySelectorAll(".osec").forEach(function (s) { s.hidden = s.getAttribute("data-osec") !== sec; });
    document.querySelectorAll("#otabs button[data-osec]").forEach(function (b) { b.setAttribute("aria-selected", b.getAttribute("data-osec") === sec ? "true" : "false"); });
    window.scrollTo(0, 0);
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("#otabs button");
    if (!b) return;
    if (b.dataset.osec) { ownerShow(b.dataset.osec); if (b.dataset.osec === "analyse") anLoad(); }
    else { ownerTabs(false); show("hjem"); try { history.replaceState(null, "", "#hjem"); } catch (x) {} }
  });

  /* ---------- ejer: analyse ---------- */
  var anData = null, anTab = "betalinger", anYear = null;
  function anLoad(force) {
    var box = document.getElementById("o-an"); if (!box) return;
    if (anData && !force) { anRender(); return; }
    fetch(OWNER_API + "?view=all", { headers: { Authorization: "Bearer " + ownerToken() }, cache: "no-store" })
      .then(function (r) { if (r.status === 401) throw "login"; return r.json(); })
      .then(function (d) { anData = d; anRender(); })
      .catch(function (e) { if (e === "login") ownerLogin("Log ind igen."); else box.innerHTML = '<div class="err">Kunne ikke hente data til analyse.</div>'; });
  }
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-antab]"); if (t) { anTab = t.dataset.antab; anRender(); return; }
  });
  document.addEventListener("change", function (e) { if (e.target.id === "an-year") { anYear = +e.target.value; anRender(); } });
  function anRender() {
    var box = document.getElementById("o-an"); if (!box || !anData) return;
    var DAY = 864e5, B = (anData.bookings || []).filter(function (b) { return b.arrival && b.departure; });
    var cur = (B[0] && B[0].currency) || "EUR";
    var nf = new Intl.NumberFormat("da-DK", { style: "currency", currency: cur, maximumFractionDigits: 0 });
    var pf = function (x) { return Math.round(x) + "%"; };
    var fmtD = new Intl.DateTimeFormat("da-DK", { day: "numeric", month: "short", year: "numeric" });
    var MON = ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
    var dd = function (s) { return new Date(s + "T12:00:00"); };
    var years = {}; B.forEach(function (b) { years[+b.arrival.slice(0, 4)] = 1; years[+b.departure.slice(0, 4)] = 1; });
    var ys = Object.keys(years).map(Number).sort(); var thisY = new Date().getFullYear();
    if (!anYear) anYear = ys.indexOf(thisY) >= 0 ? thisY : (ys[ys.length - 1] || thisY);
    // nætter og omsætning fordelt pr. måned (omsætning pro rata pr. nat)
    var mN = Array(12).fill(0), mR = Array(12).fill(0), yN = 0, yR = 0;
    B.forEach(function (b) {
      var n = Math.max(1, b.nights || 1), per = (+b.amount || 0) / n;
      for (var i = 0; i < n; i++) { var x = new Date(dd(b.arrival).getTime() + i * DAY); if (x.getFullYear() !== anYear) continue; mN[x.getMonth()]++; mR[x.getMonth()] += per; yN++; yR += per; }
    });
    var daysIn = function (m) { return new Date(anYear, m + 1, 0).getDate(); };
    var yDays = (anYear % 4 === 0 && anYear % 100 !== 0) || anYear % 400 === 0 ? 366 : 365;
    var inYear = B.filter(function (b) { return b.arrival.slice(0, 4) == anYear; });
    function bars(vals, fmt, max) {
      max = max || Math.max.apply(null, vals.concat([1]));
      var top = vals.indexOf(Math.max.apply(null, vals));
      return '<div class="bars" role="img" aria-label="Søjlediagram pr. måned">' + vals.map(function (v, i) {
        var h = Math.round(v / max * 100);
        return '<div class="bar" title="' + MON[i] + ": " + esc(fmt(v)) + '"><span class="bv">' + (i === top && v > 0 ? esc(fmt(v)) : "") + '</span><span class="bf" style="height:' + h + '%"></span><span class="bl">' + MON[i] + "</span></div>";
      }).join("") + "</div>";
    }
    function hbars(rows, fmt) {
      var max = Math.max.apply(null, rows.map(function (r) { return r[1]; }).concat([1]));
      return '<div class="hbars">' + rows.map(function (r) {
        return '<div class="hb" title="' + esc(r[0]) + ": " + esc(fmt(r[1])) + '"><span class="hl">' + esc(r[0]) + '</span><span class="ht"><span class="hf" style="width:' + Math.round(r[1] / max * 100) + '%"></span></span><span class="hv">' + esc(fmt(r[1])) + "</span></div>";
      }).join("") + "</div>";
    }
    function tiles(list) { return '<div class="stat">' + list.map(function (t) { return "<div><b>" + t[0] + "</b><span>" + t[1] + "</span></div>"; }).join("") + "</div>"; }
    var tabs = [["betalinger", "Betalinger"], ["omsaetning", "Omsætning"], ["belaegning", "Belægning"], ["kanaler", "Kanaler"], ["gaester", "Gæster"]];
    var h = '<div class="antabs">' + tabs.map(function (t) { return '<button class="chipbtn" data-antab="' + t[0] + '" aria-pressed="' + (anTab === t[0]) + '">' + t[1] + "</button>"; }).join("") + "</div>";
    h += '<div class="anyear"><label for="an-year">År</label><select id="an-year" class="lang">' + ys.map(function (y) { return '<option value="' + y + '"' + (y === anYear ? " selected" : "") + ">" + y + "</option>"; }).join("") + "</select></div>";
    if (!B.length) h += '<div class="card"><p class="muted">Ingen bookinger at analysere endnu.</p></div>';
    else if (anTab === "betalinger") {
      var paid = 0, due = 0, tot = 0;
      inYear.forEach(function (b) { paid += +b.paid || 0; due += +b.due || 0; tot += +b.amount || 0; });
      var open = B.filter(function (b) { return (+b.due || 0) > 0.5; }).sort(function (x, y) { return x.arrival < y.arrival ? -1 : 1; });
      h += tiles([[nf.format(paid), "Modtaget (ankomst " + anYear + ")"], [nf.format(due), "Udestående"], [nf.format(tot), "Samlet bookingværdi"]]);
      h += '<div class="card"><h3>Mangler betaling</h3><div>' + (open.map(function (b) {
        return '<div class="turn"><span class="d">' + esc(b.guest) + '</span><span class="warn">' + nf.format(b.due) + '</span><span class="s">Ankomst ' + fmtD.format(dd(b.arrival)) + " · betalt " + nf.format(+b.paid || 0) + " af " + nf.format(+b.amount || 0) + " · " + esc(b.channel) + "</span></div>";
      }).join("") || '<p class="muted">Alt er betalt.</p>') + "</div></div>";
      h += '<p class="muted note-s">Beløb er som registreret i Lodgify. Ved Airbnb og Booking.com kan det være før platformens gebyr.</p>';
    } else if (anTab === "omsaetning") {
      h += tiles([[nf.format(yR), "Omsætning " + anYear], [nf.format(yN ? yR / yN : 0), "Gns. pris pr. nat"], [nf.format(yR / yDays), "Pr. dag i året"]]);
      h += '<div class="card"><h3>Omsætning pr. måned</h3>' + bars(mR, function (v) { return nf.format(v); }) + '<p class="muted note-s">Fordelt efter de nætter, gæsterne bor.</p></div>';
      h += '<div class="card"><h3>Tabel</h3><div class="tbl">' + MON.map(function (m, i) { return "<div><span>" + m + "</span><span>" + mN[i] + " nætter</span><span>" + nf.format(mR[i]) + "</span></div>"; }).join("") + "</div></div>";
    } else if (anTab === "belaegning") {
      var occ = mN.map(function (n, i) { return n / daysIn(i) * 100; });
      h += tiles([[pf(yN / yDays * 100), "Belægning " + anYear], [String(yN), "Udlejede nætter"], [String(inYear.length), "Ophold"]]);
      h += '<div class="card"><h3>Belægning pr. måned</h3>' + bars(occ, pf, 100) + "</div>";
    } else if (anTab === "kanaler") {
      var ch = {}; inYear.forEach(function (b) { ch[b.channel] = ch[b.channel] || [0, 0]; ch[b.channel][0]++; ch[b.channel][1] += +b.amount || 0; });
      var rows = Object.keys(ch).map(function (k) { return [k, ch[k][0], ch[k][1]]; }).sort(function (x, y) { return y[2] - x[2]; });
      h += '<div class="card"><h3>Omsætning pr. kanal</h3>' + hbars(rows.map(function (r) { return [r[0], r[2]]; }), function (v) { return nf.format(v); }) + "</div>";
      h += '<div class="card"><h3>Antal ophold pr. kanal</h3>' + hbars(rows.map(function (r) { return [r[0], r[1]]; }), function (v) { return v + " ophold"; }) + "</div>";
    } else if (anTab === "gaester") {
      var nights = 0, ppl = 0, lead = [], cc = {};
      inYear.forEach(function (b) { nights += b.nights || 0; ppl += b.people || 0; if (b.created) lead.push((dd(b.arrival) - dd(b.created)) / DAY); var c = (b.country || "?").toUpperCase(); cc[c] = (cc[c] || 0) + 1; });
      var n = inYear.length || 1; lead.sort(function (x, y) { return x - y; });
      var med = lead.length ? Math.round(lead[Math.floor(lead.length / 2)]) : 0;
      h += tiles([[(nights / n).toFixed(1).replace(".", ","), "Nætter pr. ophold"], [(ppl / n).toFixed(1).replace(".", ","), "Gæster pr. ophold"], [med + " d", "Bookes før ankomst (median)"]]);
      var rows2 = Object.keys(cc).map(function (k) { return [k, cc[k]]; }).sort(function (x, y) { return y[1] - x[1]; }).slice(0, 10);
      h += '<div class="card"><h3>Gæsternes lande</h3>' + hbars(rows2, function (v) { return v + " ophold"; }) + "</div>";
    }
    h += '<div class="foot"><span>' + B.length + ' bookinger i alt fra Lodgify</span><button class="btn" id="an-reload" style="grid-row:auto;grid-column:auto">Opdater</button></div>';
    box.innerHTML = h;
  }
  document.addEventListener("click", function (e) { if (e.target.id === "an-reload") { anData = null; anLoad(true); } });
  function ownerRender(data) {
    var DAY = 864e5, fmtD = new Intl.DateTimeFormat("da-DK", { day: "numeric", month: "short" }), fmtW = new Intl.DateTimeFormat("da-DK", { weekday: "short" }), fmtM = new Intl.DateTimeFormat("da-DK", { month: "long", year: "numeric" });
    function d(s) { return new Date(s + "T12:00:00"); }
    function iso(dt) { return new Date(dt.getTime() - dt.getTimezoneOffset() * 6e4).toISOString().slice(0, 10); }
    var todayS = iso(new Date());
    function money(b) { return b.amount != null ? new Intl.NumberFormat("da-DK", { style: "currency", currency: b.currency || "EUR", maximumFractionDigits: 0 }).format(b.amount) : ""; }
    var B = data.bookings || [];
    document.getElementById("o-out").hidden = false;
    var cur = B.filter(function (b) { return b.arrival <= todayS && b.departure > todayS; })[0];
    var fut = B.filter(function (b) { return b.arrival > todayS; });
    var OCAM = '<div class="card cam"><div><h3>Kamera ved indkørslen</h3><p class="muted" style="font-size:.86rem">' + (data.camera_url ? "Åbner live-billedet fra kameraet." : "Kameraet er ikke sat op endnu.") + "</p></div>" + (data.camera_url ? '<a class="cta" href="' + esc(data.camera_url) + '" target="_blank" rel="noopener">Se live</a>' : "") + "</div>";
    var html = '<div class="osec" data-osec="oversigt">';
    if (data.errors && data.errors.length) html += '<div class="err">Lodgify gav en fejl: ' + esc(data.errors.join(", ")) + "</div>";
    if (cur) html += '<div class="card now"><span class="pill">Optaget nu</span><span class="big">' + esc(cur.guest) + (cur.people > 1 ? " + " + (cur.people - 1) : "") + '</span><span class="muted">' + fmtD.format(d(cur.arrival)) + " – " + fmtD.format(d(cur.departure)) + " · " + cur.nights + ' nætter · <span class="ch">' + esc(cur.channel) + "</span></span></div>";
    else { var n = fut[0]; html += '<div class="card now"><span class="pill free">Ledigt nu</span><span class="big">' + (n ? "Næste gæst " + fmtW.format(d(n.arrival)) + " " + fmtD.format(d(n.arrival)) : "Ingen kommende bookinger") + "</span>" + (n ? '<span class="muted">' + esc(n.guest) + " · " + n.nights + ' nætter · <span class="ch">' + esc(n.channel) + "</span></span>" : "") + "</div>"; }
    function occ(days) { var s = d(todayS), o = 0; for (var i = 0; i < days; i++) { var x = iso(new Date(s.getTime() + i * DAY)); if (B.some(function (b) { return b.arrival <= x && b.departure > x; })) o++; } return Math.round(o / days * 100); }
    html += '<div class="stat"><div><b>' + occ(30) + "%</b><span>Belagt næste 30 dage</span></div><div><b>" + occ(90) + "%</b><span>Belagt næste 90 dage</span></div><div><b>" + fut.length + "</b><span>Kommende ophold</span></div></div>";
    html += OCAM + '</div><div class="osec" data-osec="ophold" hidden>';
    html += '<div class="card"><h3>Næste ophold</h3><div>' + (fut.slice(0, 12).map(function (b) {
      return '<div class="bk"><span class="dt">' + fmtD.format(d(b.arrival)) + "<small>" + fmtW.format(d(b.arrival)) + '</small></span><span class="who">' + esc(b.guest) + '</span><span class="ch">' + esc(b.channel) + '</span><span class="meta">' + b.nights + " nætter til " + fmtD.format(d(b.departure)) + (b.people ? " · " + b.people + " gæster" : "") + (money(b) ? " · " + money(b) : "") + (b.status && b.status.toLowerCase() !== "booked" ? " · " + esc(b.status) : "") + "</span></div>";
    }).join("") || '<p class="muted">Ingen kommende ophold.</p>') + "</div></div>";
    var deps = B.slice().sort(function (a, b) { return a.departure < b.departure ? -1 : 1; }).filter(function (b) { return b.departure >= todayS; }).slice(0, 10);
    html += '<div class="card"><h3>Skiftedage</h3><p class="muted" style="font-size:.86rem">Til rengøring og administrator.</p><div>' + (deps.map(function (b) {
      var nxt = B.filter(function (x) { return x.arrival >= b.departure; }).sort(function (x, y) { return x.arrival < y.arrival ? -1 : 1; })[0];
      var same = nxt && nxt.arrival === b.departure;
      return '<div class="turn"><span class="d">' + fmtW.format(d(b.departure)) + " " + fmtD.format(d(b.departure)) + "</span>" + (same ? '<span class="warn">Skift samme dag</span>' : '<span class="muted">' + (nxt ? Math.round((d(nxt.arrival) - d(b.departure)) / DAY) + " dage til næste" : "Ingen næste") + "</span>") + '<span class="s">' + esc(b.guest) + " rejser" + (nxt ? " · næste gæst ankommer " + fmtD.format(d(nxt.arrival)) : "") + "</span></div>";
    }).join("") || '<p class="muted">Ingen skiftedage.</p>') + "</div></div>";
    var cal = "", s0 = d(todayS);
    for (var m = 0; m < 4; m++) {
      var first = new Date(s0.getFullYear(), s0.getMonth() + m, 1, 12), dim = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate(), off = (first.getDay() + 6) % 7;
      cal += '<div class="mon"><h4>' + fmtM.format(first) + '</h4><div class="grid7">' + ["M", "T", "O", "T", "F", "L", "S"].map(function (x) { return '<span class="h">' + x + "</span>"; }).join("");
      for (var i = 0; i < off; i++) cal += "<span></span>";
      for (var day = 1; day <= dim; day++) { var x = iso(new Date(first.getFullYear(), first.getMonth(), day, 12)); var o = B.some(function (b) { return b.arrival <= x && b.departure > x; }); cal += '<span class="c' + (o ? " o" : "") + (x === todayS ? " t" : "") + '">' + day + "</span>"; }
      cal += "</div></div>";
    }
    html += '</div><div class="osec" data-osec="kalender" hidden>';
    html += '<div class="card"><h3>Belægning</h3><div class="legend"><span><i></i>Optaget nat</span></div><div class="cal">' + cal + "</div></div>";
    html += '</div><div class="osec" data-osec="analyse" hidden><div id="o-an"><div class="card"><span class="muted">Henter alle bookinger til analyse …</span></div></div></div>';
    html += '<div class="foot"><span>Logget ind som ' + esc(data.user || "") + " · opdateret " + new Date(data.updated || Date.now()).toLocaleString("da-DK", { dateStyle: "short", timeStyle: "short" }) + '</span><button class="btn" id="o-reload" style="grid-row:auto;grid-column:auto">Opdater</button></div>';
    document.getElementById("o-body").innerHTML = html;
    ownerTabs(true); ownerShow(ownerSec);
  }

  /* ---------- shell ---------- */
  var panels = { hjem: renderHome, ankomst: renderArrival, huset: renderHouse, omraadet: renderArea, kontakt: renderContact, ejer: renderOwnerShell };
  var current = "hjem";
  function renderAll() {
    T = C[lang];
    document.documentElement.lang = lang;
    PANELS.forEach(function (id) { document.getElementById(id).innerHTML = panels[id](); });
    if (current === "ejer") ownerLoad();
    document.querySelectorAll("#gtabs button").forEach(function (b) { b.querySelector("span").textContent = T.ui.tabs[b.dataset.go]; });
    var sel = document.getElementById("lang"); sel.value = lang; sel.setAttribute("aria-label", T.ui.language);
    loadWx();
  }
  function show(target, noScroll) {
    var tab = target, focusEl = null;
    if (HOW_IDS.indexOf(target) >= 0) { tab = "huset"; focusEl = target; }
    else if (target === "sikkerhed") { tab = "kontakt"; focusEl = target; }
    else if (target === "mad" || target === "vejr") { tab = "hjem"; focusEl = target; }
    else if (target === "golf" || target === "padel" || target === "strande" || target === "indkoeb" || target === "kultur" || target === "restauranter") { tab = "omraadet"; focusEl = target; }
    if (PANELS.indexOf(tab) < 0) tab = "hjem";
    current = tab;
    PANELS.forEach(function (id) { document.getElementById(id).hidden = id !== tab; });
    if (tab === "ejer") ownerLoad(); else ownerTabs(false);
    document.querySelectorAll("#gtabs button").forEach(function (t) { t.setAttribute("aria-selected", t.dataset.go === tab ? "true" : "false"); });
    if (focusEl) {
      var el = document.getElementById(focusEl);
      if (el) { if (el.tagName === "DETAILS") el.open = true; setTimeout(function () { el.scrollIntoView({ block: "start" }); }, 30); }
    } else if (!noScroll) window.scrollTo(0, 0);
  }

  document.addEventListener("click", function (e) {
    var t = e.target.closest("#gtabs button");
    if (t) { show(t.dataset.go); try { history.replaceState(null, "", "#" + t.dataset.go); } catch (x) {} return; }
    var a = e.target.closest('a[href^="#"]');
    if (a) { e.preventDefault(); var id = a.getAttribute("href").slice(1); show(id); try { history.replaceState(null, "", "#" + id); } catch (x) {} return; }
  });
  window.addEventListener("hashchange", function () { show(location.hash.slice(1)); });
  document.getElementById("lang").addEventListener("change", function (e) {
    lang = e.target.value; store("vm-lang", lang); renderAll(); show(current, true);
  });

  /* ---------- copy + toast ---------- */
  var toast = document.getElementById("toast"), tt;
  function say(msg) { toast.textContent = msg; toast.hidden = false; clearTimeout(tt); tt = setTimeout(function () { toast.hidden = true; }, 1800); }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-copy]"); if (!b) return;
    var v = b.dataset.copy;
    function fallback() {
      var el = b.parentNode.querySelector(".num") || document.getElementById("drv");
      if (el) { var r = document.createRange(); r.selectNodeContents(el); var s = getSelection(); s.removeAllRanges(); s.addRange(r); say(T.ui.selected); } else say(v);
    }
    try { navigator.clipboard.writeText(v).then(function () { say(T.ui.copied); }, fallback); } catch (err) { fallback(); }
  });

  /* ---------- lightbox ---------- */
  var lb = null;
  document.addEventListener("click", function (e) {
    var im = e.target.closest("img[data-zoom]");
    if (im) { lb = document.createElement("div"); lb.className = "lb"; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-label", im.alt);
      var big = document.createElement("img"); big.src = im.src; big.alt = im.alt; lb.appendChild(big); document.body.appendChild(lb); return; }
    if (lb && e.target.closest(".lb")) { lb.remove(); lb = null; }
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && lb) { lb.remove(); lb = null; } });

  /* ---------- vejr (Open-Meteo, gratis, ingen nøgle) ---------- */
  var WX = { lat: 36.531, lon: -4.754, seaLat: 36.49, seaLon: -4.77 }, wxCache = null;
  function kind(c) {
    var k = T.weather.kinds;
    if (c === 0) return ["w-sun", k.clear]; if (c === 1) return ["w-part", k.mostly]; if (c === 2) return ["w-part", k.partly]; if (c === 3) return ["w-cloud", k.overcast];
    if (c === 45 || c === 48) return ["w-fog", k.fog]; if (c >= 95) return ["w-storm", k.storm]; if (c >= 80) return ["w-rain", k.showers]; if (c >= 51) return ["w-rain", k.rain]; return ["w-cloud", k.cloudy];
  }
  function chip(t) { var e = document.createElement("span"); e.className = "chip"; e.textContent = t; return e; }
  function hm(iso) { return iso ? iso.slice(11, 16) : "--:--"; }
  function renderWx(f, sea, sample) {
    var w = T.weather, k = kind(f.current.weather_code), d = f.daily;
    if (!document.getElementById("wx-ic")) return;
    document.getElementById("wx-ic").setAttribute("href", "#" + k[0]);
    document.getElementById("wx-t").textContent = Math.round(f.current.temperature_2m) + "°";
    document.getElementById("wx-d").textContent = k[1] + " · " + w.feels + " " + Math.round(f.current.apparent_temperature) + "° · " + w.wind + " " + Math.round(f.current.wind_speed_10m) + " " + w.kmh;
    var m = document.getElementById("wx-meta"); m.textContent = "";
    m.appendChild(chip(w.today + " " + Math.round(d.temperature_2m_min[0]) + "°–" + Math.round(d.temperature_2m_max[0]) + "°"));
    if (d.uv_index_max && d.uv_index_max[0] != null) m.appendChild(chip(w.uv + " " + Math.round(d.uv_index_max[0])));
    m.appendChild(chip(w.sun + " " + hm(d.sunrise[0]) + "–" + hm(d.sunset[0])));
    if (sea && sea.current && sea.current.sea_surface_temperature != null) m.appendChild(chip(w.sea + " " + Math.round(sea.current.sea_surface_temperature) + "°"));
    var box = document.getElementById("wx-days"); box.textContent = "";
    var loc = { da: "da-DK", en: "en-GB", es: "es-ES", de: "de-DE" }[lang];
    var fmt = new Intl.DateTimeFormat(loc, { weekday: "short" });
    for (var i = 0; i < d.time.length && i < 7; i++) {
      var kk = kind(d.weather_code[i]), el = document.createElement("div"); el.className = "wx-day"; el.title = kk[1];
      var dn = document.createElement("span"); dn.className = "dn";
      var wd = i === 0 ? w.today : fmt.format(new Date(d.time[i] + "T12:00:00")).replace(".", "");
      dn.textContent = wd.charAt(0).toUpperCase() + wd.slice(1);
      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"), u = document.createElementNS("http://www.w3.org/2000/svg", "use"); u.setAttribute("href", "#" + kk[0]); svg.appendChild(u);
      var hi = document.createElement("strong"); hi.textContent = Math.round(d.temperature_2m_max[i]) + "°";
      var lo = document.createElement("span"); lo.className = "lo"; lo.textContent = Math.round(d.temperature_2m_min[i]) + "°";
      el.append(dn, svg, hi, lo); box.appendChild(el);
    }
    document.getElementById("wx-src").textContent = sample ? w.sample : w.updated + " " + hm(f.current.time);
  }
  function sampleWx() {
    var t = [], now = Date.now(); for (var i = 0; i < 7; i++) t.push(new Date(now + i * 864e5).toISOString().slice(0, 10));
    return { current: { time: t[0] + "T12:00", temperature_2m: 24, apparent_temperature: 25, weather_code: 1, wind_speed_10m: 9 },
      daily: { time: t, weather_code: [1, 0, 2, 3, 61, 1, 0], temperature_2m_max: [25, 26, 24, 22, 20, 23, 25], temperature_2m_min: [16, 17, 16, 15, 14, 15, 16], uv_index_max: [6], sunrise: [t[0] + "T07:58"], sunset: [t[0] + "T19:35"] } };
  }
  function loadWx() {
    if (wxCache) { renderWx(wxCache.f, wxCache.sea, wxCache.sample); return; }
    var q = "latitude=" + WX.lat + "&longitude=" + WX.lon + "&timezone=Europe%2FMadrid&forecast_days=7" +
      "&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,sunrise,sunset";
    var sq = "latitude=" + WX.seaLat + "&longitude=" + WX.seaLon + "&current=sea_surface_temperature&timezone=Europe%2FMadrid";
    var get = function (u) { return fetch(u).then(function (r) { if (!r.ok) throw r.status; return r.json(); }); };
    get("https://api.open-meteo.com/v1/forecast?" + q).then(function (f) {
      return get("https://marine-api.open-meteo.com/v1/marine?" + sq).catch(function () { return null; }).then(function (sea) { wxCache = { f: f, sea: sea, sample: false }; renderWx(f, sea, false); });
    }).catch(function () { wxCache = { f: sampleWx(), sea: { current: { sea_surface_temperature: 21 } }, sample: true }; renderWx(wxCache.f, wxCache.sea, true); });
  }

  /* ---------- start ---------- */
  var sel = document.getElementById("lang");
  sel.innerHTML = LANGS.map(function (l) { return '<option value="' + l + '">' + C[l].langName + "</option>"; }).join("");
  renderAll();
  show((location.hash || "").slice(1));
})();
