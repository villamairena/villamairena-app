/* VillaMairena gæsteapp – visning. Indholdet ligger i content.js. */
(function () {
  var C = window.VM_CONTENT, IMG = window.VM_IMG || {};
  var LANGS = ["da", "en", "es", "de"];
  var PHONES = ["+45 51 59 30 50", "+45 26 85 75 45"], EMAIL = "kontakt@villamairena.com";
  var ADDR = "Calle Navarra 5, 29612 La Mairena (Ojén), Málaga";
  var DRIVER = "Villa en Calle Navarra 5, La Mairena. Llame al interfono de la puerta y le abrimos. ¡Gracias!";
  var HOW_IDS = (C.da.how || []).map(function (h) { return h.id; });
  var TABS = ["hjem", "ankomst", "huset", "omraadet", "kontakt"];

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

  function renderHome() {
    var h = T.home, w = T.weather;
    var banner = fireSeason(new Date()) ?
      '<a class="fire" href="#sikkerhed">' + ic("i-flame") + '<span><strong>' + esc(h.fireBanner.title) + "</strong><br>" + esc(h.fireBanner.body) + "</span></a>" : "";
    return '' +
      '<div class="hero"><img src="' + img("ext") + '" alt="VillaMairena" data-zoom>' +
      '<div class="txt"><p class="eyebrow" style="color:inherit;opacity:.85">' + esc(h.eyebrow) + "</p><h1>" + esc(h.title) + "</h1><p>" + esc(h.sub) + "</p></div></div>" +
      banner +
      '<div class="grid2">' +
      '<div class="card key"><span class="label">' + esc(h.gate) + '</span><span class="val">• • • •</span><span class="muted" style="font-size:.8rem">' + esc(h.gateNote) + "</span></div>" +
      '<div class="card key"><span class="label">' + esc(h.wifi) + '</span><span class="val" style="font-size:1.05rem;letter-spacing:0">VillaMairena</span><span class="todo">' + esc(h.wifiTodo) + "</span></div>" +
      '<div class="card key"><span class="label">' + esc(h.checkin) + '</span><span class="val">--:--</span><span class="todo">' + esc(T.ui.todo) + "</span></div>" +
      '<div class="card key"><span class="label">' + esc(h.checkout) + '</span><span class="val">--:--</span><span class="todo">' + esc(T.ui.todo) + "</span></div>" +
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
      "</div></div>" +
      '<div class="card sos"><span class="eyebrow" style="color:inherit">' + esc(h.sosLabel) + '</span><span class="big">112</span><span class="s">' + esc(h.sosText) + "</span></div>";
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
      return '<div class="place">' + (p.tag ? '<span class="tag">' + esc(sug) + "</span><span></span>" : "") +
        '<span class="nm" style="grid-column:1">' + esc(p.n) + '</span><span class="dist">' + esc(p.d || "") + "</span>" + (p.s ? '<span class="ds">' + esc(p.s) + "</span>" : "") + "</div>";
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
  function renderArea() {
    var a = T.area;
    return '<div class="stack"><p class="eyebrow">' + esc(a.eyebrow) + "</p><h2>" + esc(a.title) + '</h2><p class="muted">' + esc(a.intro) + "</p></div>" +
      '<div class="card"><h3>' + esc(a.beachTitle) + '</h3><p class="muted" style="font-size:.9rem">' + esc(a.beachText) + "</p>" +
      "<div>" + renderBeachItem() + "</div></div>" +
      '<div class="card"><h3>' + esc(a.dailyTitle) + "</h3>" + places(a.daily) + todo(a.dailyTodo) + "</div>" +
      '<div class="card"><h3>' + esc(a.expTitle) + "</h3>" + places(a.exp, a.suggestion) + todo(a.expTodo) + "</div>";
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
      todo(s.evacTodo) + todo(s.extTodo) + "</section>";
  }

  /* ---------- shell ---------- */
  var panels = { hjem: renderHome, ankomst: renderArrival, huset: renderHouse, omraadet: renderArea, kontakt: renderContact };
  var current = "hjem";
  function renderAll() {
    T = C[lang];
    document.documentElement.lang = lang;
    TABS.forEach(function (id) { document.getElementById(id).innerHTML = panels[id](); });
    document.querySelectorAll(".tabs button").forEach(function (b) { b.querySelector("span").textContent = T.ui.tabs[b.dataset.go]; });
    var sel = document.getElementById("lang"); sel.value = lang; sel.setAttribute("aria-label", T.ui.language);
    loadWx();
  }
  function show(target, noScroll) {
    var tab = target, focusEl = null;
    if (HOW_IDS.indexOf(target) >= 0) { tab = "huset"; focusEl = target; }
    else if (target === "sikkerhed") { tab = "kontakt"; focusEl = target; }
    else if (target === "mad" || target === "vejr") { tab = "hjem"; focusEl = target; }
    else if (target === "golf" || target === "padel" || target === "strande") { tab = "omraadet"; focusEl = target; }
    if (TABS.indexOf(tab) < 0) tab = "hjem";
    current = tab;
    TABS.forEach(function (id) { document.getElementById(id).hidden = id !== tab; });
    document.querySelectorAll(".tabs button").forEach(function (t) { t.setAttribute("aria-selected", t.dataset.go === tab ? "true" : "false"); });
    if (focusEl) {
      var el = document.getElementById(focusEl);
      if (el) { if (el.tagName === "DETAILS") el.open = true; setTimeout(function () { el.scrollIntoView({ block: "start" }); }, 30); }
    } else if (!noScroll) window.scrollTo(0, 0);
  }

  document.addEventListener("click", function (e) {
    var t = e.target.closest(".tabs button");
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
