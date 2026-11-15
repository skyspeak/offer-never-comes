(function () {
  const KEY = "offer-never-comes-v1";
  const PACKET = "offer-never-comes-packet";
  const APPETITES = [
    ["all", "All"],
    ["money", "Money"],
    ["craft", "Craft"],
    ["status", "Status"],
    ["freedom", "Freedom"]
  ];
  const CHAPTERS = [
    "I already do the adjacent work",
    "I am switching from a nearby field",
    "I am early, and this is the aim",
    "I run something small already"
  ];
  const STAGES = [
    {
      id: "read",
      label: "Read",
      line: (job) => `${job.recruiter} opened the packet and read your sentence twice.`
    },
    {
      id: "screen",
      label: "Screen",
      line: (job) => `Twenty minutes with ${job.recruiter}. They asked what you meant. You knew.`
    },
    {
      id: "loop",
      label: "Loop",
      line: () => "Four conversations. Someone wrote down a line you said."
    },
    {
      id: "debrief",
      label: "Debrief",
      line: (job) => `They argued about you in a room at ${job.org}. You were not in it.`
    },
    {
      id: "offer",
      label: "Offer",
      line: (job) => `${job.recruiter} has stopped outside. The letter is ready.`
    }
  ];

  const main = document.getElementById("main");
  const dock = document.getElementById("dock");
  const state = load();
  let appetite = "all";
  let sort = "featured";
  let lastKey = "";
  let forceScroll = false;
  const scrollMemory = {};
  let routeHash = "#/";
  let trackStage = 0;
  let trackToken = 0;
  let timer = 0;
  const memoryPackets = {};

  function load() {
    try {
      const data = JSON.parse(localStorage.getItem(KEY) || "null");
      if (!data || typeof data !== "object") return { plans: {}, letters: [] };
      return {
        plans: data.plans && typeof data.plans === "object" ? data.plans : {},
        letters: Array.isArray(data.letters) ? data.letters : []
      };
    } catch (err) {
      return { plans: {}, letters: [] };
    }
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (err) {
      // Private mode or a full disk. The plan still works until the tab closes.
    }
  }

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, (ch) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[ch]));
  }

  function jobById(id) {
    return window.JOBS.find((job) => job.id === id) || null;
  }

  function planned(id) {
    return Object.prototype.hasOwnProperty.call(state.plans, id);
  }

  function bandOf(months) {
    if (months <= 0) return "now";
    if (months <= 6) return "six";
    return "later";
  }

  function whenLabel(months) {
    if (months <= 0) return "Now";
    if (months === 1) return "1 month";
    return `${months} months`;
  }

  function hoursPhrase(n) {
    return n === 1 ? "1 hour" : `${n} hours`;
  }

  function formatDate(ts, options) {
    const date = new Date(ts);
    if (Number.isNaN(date.getTime())) return "";
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  }

  function shortDate(ts) {
    return formatDate(ts, { day: "numeric", month: "short", year: "numeric" });
  }

  function longDate(ts) {
    return formatDate(ts, { day: "numeric", month: "long", year: "numeric" });
  }

  function reducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function decodePart(value) {
    try {
      return decodeURIComponent(value);
    } catch (err) {
      return value;
    }
  }

  function parse() {
    const parts = (location.hash || "#/").replace(/^#/, "").split("/").filter(Boolean);
    if (parts.length === 0) return { name: "board" };
    if (parts[0] === "plan") return { name: "plan" };
    if (["seat", "apply", "track", "letter", "saved"].includes(parts[0]) && parts[1]) {
      return { name: parts[0], id: decodePart(parts[1]) };
    }
    return { name: "missing" };
  }

  function go(hash) {
    if (location.hash === hash) render();
    else location.hash = hash;
  }

  function readPackets() {
    try {
      const data = JSON.parse(sessionStorage.getItem(PACKET) || "null");
      if (!data || typeof data !== "object") return {};
      if (data.jobId && data.id) return { [data.jobId]: data };
      return data;
    } catch (err) {
      return {};
    }
  }

  function packetFor(jobId) {
    if (memoryPackets[jobId]) return memoryPackets[jobId];
    const packet = readPackets()[jobId];
    if (packet && packet.jobId === jobId) return packet;
    const saved = state.letters.find((letter) => letter && letter.jobId === jobId);
    return saved || null;
  }

  function remember(packet) {
    memoryPackets[packet.jobId] = packet;
    try {
      const packets = readPackets();
      packets[packet.jobId] = packet;
      sessionStorage.setItem(PACKET, JSON.stringify(packets));
    } catch (err) {
      // The letter still quotes this packet until the tab closes.
    }
  }

  function archive(packet) {
    if (!packet || !packet.id) return;
    if (state.letters.some((letter) => letter.id === packet.id)) return;
    state.letters.unshift({
      id: packet.id,
      jobId: packet.jobId,
      why: packet.why,
      line: packet.line,
      chapter: packet.chapter,
      at: packet.at
    });
    save();
  }

  function addPlan(id) {
    if (!planned(id)) {
      state.plans[id] = { addedAt: Date.now(), checks: {} };
      save();
    }
  }

  function countSteps() {
    const tally = { now: 0, six: 0, later: 0 };
    Object.entries(state.plans).forEach(([id, plan]) => {
      const job = jobById(id);
      if (!job || !plan || typeof plan !== "object") return;
      job.path.forEach((step, index) => {
        if (!plan.checks || !plan.checks[String(index)]) tally[bandOf(step.months)] += 1;
      });
    });
    return tally;
  }

  function stepCopy(tally) {
    const ahead = tally.now + tally.six + tally.later;
    const finished = Object.keys(state.plans).some((id) => jobById(id)) && ahead === 0;
    return {
      note: finished
        ? "Every step on this machine is checked. The seats are still not yours."
        : "Steps still ahead. Now is the opening step. 6 months means it is due by then. Later is anything after six months.",
      label: finished ? "Steps finished on paper" : "Steps still ahead"
    };
  }

  function visibleJobs() {
    const list = window.JOBS.filter((job) => appetite === "all" || job.appetites.includes(appetite));
    if (sort === "shortest") {
      list.sort((a, b) => a.months - b.months || a.title.localeCompare(b.title));
    }
    return list;
  }

  function stopTrack() {
    trackToken += 1;
    clearTimeout(timer);
    timer = 0;
  }

  function setDock(html) {
    dock.innerHTML = html || "";
    dock.hidden = !html;
  }

  function paintNav(route) {
    const board = document.getElementById("board-link");
    const plan = document.getElementById("plan-link");
    const count = Object.keys(state.plans).filter((id) => jobById(id)).length;
    plan.textContent = count ? `Plan ${count}` : "Plan";
    if (route.name === "board") board.setAttribute("aria-current", "page");
    else board.removeAttribute("aria-current");
    if (route.name === "plan") plan.setAttribute("aria-current", "page");
    else plan.removeAttribute("aria-current");
  }

  function focusHeading() {
    const heading = main.querySelector("h1");
    if (!heading) return;
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  }

  function planControl(job, className) {
    if (planned(job.id)) {
      return `<a class="${className}" href="#/plan">In your plan</a>`;
    }
    return `<button type="button" class="${className}" data-action="plan-add" data-id="${esc(job.id)}">Plan to be in this</button>`;
  }

  function renderBoard() {
    document.title = "Offer Never Comes";
    const list = visibleJobs();
    const chips = APPETITES.map(([id, label]) => {
      const pressed = appetite === id ? "true" : "false";
      return `<button type="button" class="chip" data-action="filter" data-appetite="${id}" aria-pressed="${pressed}">${label}</button>`;
    }).join("");
    const cards = list.map((job) => `
      <li>
        <a class="card" href="#/seat/${esc(job.id)}">
          <p class="practice">${esc(job.practice)}</p>
          <div class="card-top">
            <h2>${esc(job.title)}</h2>
            <p class="price">${esc(job.comp)}</p>
          </div>
          <p class="meta">${esc(job.org)} · ${esc(job.city)}</p>
          <p class="blurb">${esc(job.blurb)}</p>
          <p class="sub">
            <span>${job.months} months out</span>
            ${planned(job.id) ? '<span class="flag">In your plan</span>' : ""}
          </p>
        </a>
      </li>
    `).join("");
    const empty = list.length ? "" : `<p class="empty">No seats in this appetite.</p>`;
    main.innerHTML = `
      <section class="pad hero">
        <h1>Seats you could grow into.</h1>
        <p class="lede">Browse the job. Read the Tuesday. Plan the path. The offer never comes.</p>
        <div class="filters" role="group" aria-label="Appetite">${chips}</div>
        <div class="sortrow">
          <p>${list.length} ${list.length === 1 ? "seat" : "seats"}</p>
          <button type="button" class="chip" data-action="sort" aria-pressed="${sort === "shortest" ? "true" : "false"}">Shortest path</button>
        </div>
        ${empty}
        <ul class="board">${cards}</ul>
        <p class="foot">The companies are invented. The paths are the kind you could actually walk.</p>
      </section>
    `;
  }

  function renderSeat(job) {
    document.title = `${job.title} · Offer Never Comes`;
    const about = job.about.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("");
    const reviews = job.reviews.map((review) => `
      <figure class="review">
        <blockquote>${esc(review.text)}</blockquote>
        <figcaption>${esc(review.name)} · ${esc(review.tenure)}</figcaption>
      </figure>
    `).join("");
    const path = job.path.map((step) => `
      <li>
        <span class="when">${esc(whenLabel(step.months))}</span>
        <p>${esc(step.text)}</p>
      </li>
    `).join("");
    main.innerHTML = `
      <article class="pad seat">
        <p class="practice">${esc(job.practice)}</p>
        <h1>${esc(job.title)}</h1>
        <p class="meta">${esc(job.org)} · ${esc(job.city)} · ${job.months} months out</p>
        <p class="price">${esc(job.comp)}</p>
        <div class="about">${about}</div>
        <section class="block">
          <h2>Tuesday</h2>
          <p class="tuesday">${esc(job.tuesday)}</p>
        </section>
        <section class="block">
          <h2>From the seat</h2>
          ${reviews}
        </section>
        <section class="block">
          <h2>The path</h2>
          <ol class="path">${path}</ol>
        </section>
      </article>
    `;
    setDock(`
      ${planControl(job, "btn ghost")}
      <a class="btn" href="#/apply/${esc(job.id)}">Apply</a>
    `);
  }

  function renderApply(job) {
    document.title = `Apply · ${job.title}`;
    const packet = packetFor(job.id) || {};
    const choices = CHAPTERS.map((chapter) => `
      <label class="choice">
        <input type="radio" name="chapter" value="${esc(chapter)}" ${chapter === packet.chapter ? "checked" : ""}>
        <span>${esc(chapter)}</span>
      </label>
    `).join("");
    main.innerHTML = `
      <section class="pad apply">
        <p class="back"><a href="#/seat/${esc(job.id)}">${esc(job.title)} · ${esc(job.org)}</a></p>
        <h1>Apply, on paper.</h1>
        <p class="lede">Chapter, one sentence, one line for the resume. Then a recruiter starts walking. No company receives this.</p>
        <form id="apply-form" data-id="${esc(job.id)}" novalidate autocomplete="off">
          <ul class="errors" role="alert" aria-live="assertive" hidden></ul>
          <fieldset>
            <legend>Which chapter are you in?</legend>
            ${choices}
          </fieldset>
          <label class="field" for="why">One sentence on why this seat</label>
          <textarea id="why" name="why" maxlength="180" placeholder="${esc(job.whyHint)}">${esc(packet.why || "")}</textarea>
          <label class="field" for="line">One line you would put on the resume</label>
          <input id="line" name="line" type="text" maxlength="180" placeholder="${esc(job.lineHint)}" value="${esc(packet.line || "")}" autocomplete="off">
        </form>
      </section>
    `;
    setDock(`<button class="btn" type="submit" form="apply-form">Submit · this is not sent</button>`);
  }

  function trackMarkup(job, index) {
    const stages = STAGES.map((stage, idx) => {
      const mode = idx < index ? "done" : idx === index ? "now" : "wait";
      const current = mode === "now" ? ' aria-current="step"' : "";
      return `<li class="stage" data-stage data-state="${mode}"${current}><span class="stage-num">${idx + 1}</span><span>${esc(stage.label)}</span></li>`;
    }).join("");
    const width = ((index + 1) / STAGES.length) * 100;
    return `
      <section class="pad track" id="track">
        <p class="back"><a href="#/seat/${esc(job.id)}">${esc(job.title)} · ${esc(job.org)}</a></p>
        <p class="kicker">Recruiter</p>
        <h1>${esc(job.recruiter)} is on the way</h1>
        <p class="route"><span>${esc(job.org)}</span><span>Your desk</span></p>
        <div class="bar" role="progressbar" aria-valuemin="1" aria-valuemax="${STAGES.length}" aria-valuenow="${index + 1}" aria-valuetext="${esc(STAGES[index].label)}">
          <span data-bar style="width:${width}%"></span>
        </div>
        <p class="stage-line" data-line aria-live="polite">${esc(STAGES[index].line(job))}</p>
        <ol class="stages">${stages}</ol>
        <p class="fine">${esc(job.recruiter)} is not a person. This loop is not happening.</p>
      </section>
    `;
  }

  function paintStage(job, index) {
    trackStage = index;
    const root = document.getElementById("track");
    if (!root) return;
    const stage = STAGES[index];
    const bar = root.querySelector(".bar");
    bar.setAttribute("aria-valuenow", String(index + 1));
    bar.setAttribute("aria-valuetext", stage.label);
    bar.querySelector("[data-bar]").style.width = `${((index + 1) / STAGES.length) * 100}%`;
    root.querySelector("[data-line]").textContent = stage.line(job);
    root.querySelectorAll("[data-stage]").forEach((item, idx) => {
      const mode = idx < index ? "done" : idx === index ? "now" : "wait";
      item.dataset.state = mode;
      if (mode === "now") item.setAttribute("aria-current", "step");
      else item.removeAttribute("aria-current");
    });
    const next = dock.querySelector("[data-action='next-stage']");
    if (next) next.textContent = index >= STAGES.length - 1 ? "Open the letter" : "Next stage";
  }

  function armTrack(job) {
    const token = ++trackToken;
    const step = () => {
      if (token !== trackToken) return;
      if (parse().name !== "track") return;
      if (trackStage >= STAGES.length - 1) {
        go(`#/letter/${job.id}`);
        return;
      }
      paintStage(job, trackStage + 1);
      timer = setTimeout(step, 2400);
    };
    timer = setTimeout(step, 2400);
  }

  function renderTrack(job) {
    document.title = `${job.recruiter} is on the way`;
    trackStage = 0;
    main.innerHTML = trackMarkup(job, 0);
    const next = reducedMotion()
      ? `<button type="button" class="btn" data-action="next-stage" data-id="${esc(job.id)}">Next stage</button>`
      : "";
    setDock(`
      ${next}
      <button type="button" class="btn ghost" data-action="skip" data-id="${esc(job.id)}">Skip to the letter</button>
    `);
    if (!reducedMotion()) armTrack(job);
  }

  function renderLetter(job) {
    document.title = `Letter · ${job.title}`;
    const packet = packetFor(job.id);
    if (packet) archive(packet);
    const quote = packet ? `<blockquote>${esc(packet.why)}</blockquote>` : "";
    const chapter = packet ? `<p>You said: ${esc(packet.chapter)}</p>` : "";
    const line = packet ? `<p>The line under your name would have been: ${esc(packet.line)}</p>` : "";
    const stamped = packet && packet.at ? packet.at : Date.now();
    main.innerHTML = `
      <article class="letter">
        <div class="letter-top">
          <p class="kicker">Offer letter</p>
          <p class="stamp">Not sent</p>
        </div>
        <p class="letter-date">${esc(longDate(stamped))}</p>
        <h1>Dear you,</h1>
        <p>${esc(job.org)} would like you to join as ${esc(job.title)} in ${esc(job.city)}.</p>
        <p>The band is ${esc(job.comp)}. The Tuesday is the one you already read.</p>
        ${chapter}
        ${quote}
        ${line}
        <p>This letter was prepared. It was not sent. No one at ${esc(job.org)} has seen it.</p>
        <p class="sign">${esc(job.recruiter)}<span>${esc(job.org)}</span></p>
        <button type="button" class="btn" data-action="to-saved" data-id="${esc(job.id)}">Put the letter down</button>
      </article>
    `;
  }

  function renderSaved(job) {
    document.title = "Delivery complete";
    const packet = packetFor(job.id);
    if (packet) archive(packet);
    main.innerHTML = `
      <section class="pad endcard">
        <p class="kicker">Delivery complete</p>
        <p class="zero">0</p>
        <h1>Applications sent</h1>
        <p class="saved-hit">You saved ${esc(hoursPhrase(job.hours))} and one rejection.</p>
        <p>The rejection you skipped: ${esc(job.rejection)}.</p>
        <p>The offer was never real.</p>
        <div class="end-actions">
          ${planControl(job, "btn")}
          <a class="btn ghost" href="#/">Back to the board</a>
        </div>
      </section>
    `;
  }

  function renderPlan() {
    document.title = "Your plan · Offer Never Comes";
    const tally = countSteps();
    const cards = Object.entries(state.plans)
      .map(([id, plan]) => ({ id, plan, job: jobById(id) }))
      .filter((item) => item.job)
      .sort((a, b) => (b.plan.addedAt || 0) - (a.plan.addedAt || 0));
    const body = cards.length
      ? cards.map(({ id, plan, job }) => {
          const done = job.path.every((_, index) => plan.checks && plan.checks[String(index)]);
          const steps = job.path.map((step, index) => {
            const checked = plan.checks && plan.checks[String(index)] ? "checked" : "";
            return `
              <label class="step">
                <input type="checkbox" data-id="${esc(id)}" data-i="${index}" ${checked}>
                <span class="when">${esc(whenLabel(step.months))}</span>
                <span class="do">${esc(step.text)}</span>
              </label>
            `;
          }).join("");
          return `
            <article class="plan-card">
              <div class="plan-head">
                <a class="plan-title" href="#/seat/${esc(id)}">${esc(job.title)}</a>
                <button type="button" class="textbtn" data-action="plan-remove" data-id="${esc(id)}">Remove</button>
              </div>
              <p class="meta">${esc(job.org)} · ${esc(job.city)} · ${job.months} months out</p>
              ${steps}
              <p class="path-done" ${done ? "" : "hidden"}>You have walked this path on paper.</p>
            </article>
          `;
        }).join("")
      : `
        <div class="empty">
          <p>You are not planning to be anywhere yet. Pick a seat and keep the path. The application can stay imaginary.</p>
          <a class="btn" href="#/">Browse the board</a>
        </div>
      `;
    const letters = state.letters
      .filter((letter) => letter && letter.jobId)
      .map((letter) => ({ letter, job: jobById(letter.jobId) }))
      .filter((item) => item.job);
    const copy = stepCopy(tally);
    const letterBlock = letters.length
      ? `
        <section class="block">
          <h2>Letters you almost had</h2>
          <ul class="letters">
            ${letters.map(({ letter, job }) => `
              <li>
                <p class="meta">${esc(shortDate(letter.at))} · Not sent</p>
                <a class="plan-title" href="#/seat/${esc(job.id)}">${esc(job.title)}, ${esc(job.org)}</a>
                <p class="why">${esc(letter.why)}</p>
              </li>
            `).join("")}
          </ul>
        </section>
      `
      : "";
    main.innerHTML = `
      <section class="pad plan">
        <h1>The plan</h1>
        <p class="lede">The part that stays on this machine. Checking a step does not make it done in the world.</p>
        <div class="strip" aria-label="${esc(copy.label)}">
          <div><b id="count-now">${tally.now}</b><span>Now</span></div>
          <div><b id="count-six">${tally.six}</b><span>6 months</span></div>
          <div><b id="count-later">${tally.later}</b><span>Later</span></div>
        </div>
        <p class="strip-note">${esc(copy.note)}</p>
        ${body}
        ${letterBlock}
      </section>
    `;
  }

  function renderMissing() {
    document.title = "Offer Never Comes";
    main.innerHTML = `
      <section class="pad missing">
        <h1>That seat is not on the board.</h1>
        <p class="lede">The sixteen seats are invented, and this one is not among them.</p>
        <a class="btn" href="#/">Back to the board</a>
      </section>
    `;
  }

  function render() {
    if (location.hash === "#main") history.replaceState(null, "", routeHash || "#/");
    stopTrack();
    const route = parse();
    const key = `${route.name}:${route.id || ""}`;
    const changed = key !== lastKey;
    if (lastKey && !forceScroll) scrollMemory[lastKey] = main.scrollTop;
    lastKey = key;
    paintNav(route);
    setDock("");
    const needsJob = ["seat", "apply", "track", "letter", "saved"].includes(route.name);
    const job = needsJob ? jobById(route.id) : null;
    if (needsJob && !job) renderMissing();
    else if (route.name === "board") renderBoard();
    else if (route.name === "seat") renderSeat(job);
    else if (route.name === "apply") renderApply(job);
    else if (route.name === "track") renderTrack(job);
    else if (route.name === "letter") renderLetter(job);
    else if (route.name === "saved") renderSaved(job);
    else if (route.name === "plan") renderPlan();
    else renderMissing();
    if (changed) focusHeading();
    if (forceScroll || scrollMemory[key] == null) main.scrollTop = 0;
    else main.scrollTop = scrollMemory[key];
    if (forceScroll) scrollMemory[key] = 0;
    forceScroll = false;
    routeHash = location.hash || "#/";
  }

  function showErrors(form, errors) {
    const box = form.querySelector(".errors");
    box.innerHTML = errors.map((error) => `<li>${esc(error)}</li>`).join("");
    box.hidden = errors.length === 0;
    if (errors.length) box.scrollIntoView({ block: "nearest" });
  }

  function onSubmit(event) {
    const form = event.target;
    if (!form || form.id !== "apply-form") return;
    event.preventDefault();
    const data = new FormData(form);
    const chapter = String(data.get("chapter") || "");
    const why = String(data.get("why") || "").trim();
    const line = String(data.get("line") || "").trim();
    const errors = [];
    if (!chapter) errors.push("Pick the chapter you are in.");
    if (why.length < 8) errors.push("Write the sentence. One is enough.");
    if (line.length < 8) errors.push("Add the line you would put on the resume.");
    showErrors(form, errors);
    if (errors.length) return;
    const packet = {
      id: (window.crypto && crypto.randomUUID && crypto.randomUUID()) || `${Date.now()}-${Math.random()}`,
      jobId: form.dataset.id,
      chapter,
      why,
      line,
      at: Date.now()
    };
    remember(packet);
    go(`#/track/${form.dataset.id}`);
  }

  function onChange(event) {
    const input = event.target;
    if (!input.matches || !input.matches(".step input")) return;
    const id = input.dataset.id;
    const index = input.dataset.i;
    const plan = state.plans[id];
    const job = jobById(id);
    if (!plan || !job) return;
    if (!plan.checks || typeof plan.checks !== "object") plan.checks = {};
    plan.checks[index] = input.checked;
    save();
    const tally = countSteps();
    const copy = stepCopy(tally);
    ["now", "six", "later"].forEach((key) => {
      const el = document.getElementById(`count-${key}`);
      if (el) el.textContent = String(tally[key]);
    });
    const note = document.querySelector(".strip-note");
    if (note) note.textContent = copy.note;
    const strip = document.querySelector(".strip");
    if (strip) strip.setAttribute("aria-label", copy.label);
    const card = input.closest(".plan-card");
    const doneNote = card && card.querySelector(".path-done");
    if (doneNote) {
      const done = job.path.every((_, stepIndex) => plan.checks[String(stepIndex)]);
      doneNote.hidden = !done;
    }
  }

  function onClick(event) {
    const skip = event.target.closest("a.skip");
    if (skip) {
      event.preventDefault();
      try { main.focus({ preventScroll: true }); } catch (err) { main.focus(); }
      return;
    }
    const home = event.target.closest("a[href='#/']");
    if (home && parse().name === "board" && (appetite !== "all" || sort !== "featured")) {
      event.preventDefault();
      appetite = "all";
      sort = "featured";
      forceScroll = true;
      render();
      return;
    }
    const btn = event.target.closest("[data-action]");
    if (!btn) return;
    const action = btn.dataset.action;
    const id = btn.dataset.id || "";
    if (action === "filter") {
      appetite = btn.dataset.appetite || "all";
      forceScroll = true;
      render();
      const again = main.querySelector(`[data-appetite="${window.CSS && CSS.escape ? CSS.escape(appetite) : appetite}"]`);
      if (again) again.focus();
      return;
    }
    if (action === "sort") {
      sort = sort === "shortest" ? "featured" : "shortest";
      forceScroll = true;
      render();
      const again = main.querySelector("[data-action='sort']");
      if (again) again.focus();
      return;
    }
    if (action === "plan-add") {
      event.preventDefault();
      addPlan(id);
      render();
      const next = document.querySelector("#dock a, .end-actions a");
      if (next) next.focus();
      return;
    }
    if (action === "plan-remove") {
      event.preventDefault();
      delete state.plans[id];
      save();
      render();
      return;
    }
    if (action === "skip" || action === "to-saved") {
      event.preventDefault();
      stopTrack();
      const dest = action === "skip" ? "letter" : "saved";
      go(`#/${dest}/${id}`);
      return;
    }
    if (action === "next-stage") {
      event.preventDefault();
      const job = jobById(id);
      if (!job) return;
      if (trackStage >= STAGES.length - 1) go(`#/letter/${id}`);
      else paintStage(job, trackStage + 1);
    }
  }

  function fitApp() {
    const app = document.querySelector(".app");
    const vv = window.visualViewport;
    if (!app || !vv) return;
    const height = `${Math.round(vv.height)}px`;
    const offset = Math.max(0, Math.round(vv.offsetTop));
    const transform = offset ? `translateY(${offset}px)` : "";
    if (app.style.height !== height) app.style.height = height;
    if (app.style.transform !== transform) app.style.transform = transform;
  }

  document.addEventListener("click", onClick);
  document.querySelector(".app").addEventListener("submit", onSubmit);
  document.querySelector(".app").addEventListener("change", onChange);
  document.querySelector(".app").addEventListener("focusin", (event) => {
    if (!event.target.matches("textarea, input[type='text']")) return;
    setTimeout(() => event.target.scrollIntoView({ block: "center" }), 50);
  });
  window.addEventListener("hashchange", render);
  if (window.visualViewport) {
    visualViewport.addEventListener("resize", fitApp);
    visualViewport.addEventListener("scroll", fitApp);
    fitApp();
  }
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  if (!location.hash || location.hash === "#") history.replaceState(null, "", "#/");
  render();
})();
