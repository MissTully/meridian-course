/* The Meridian Course — symbolic emblem art.
   One thin-line nautical emblem per module, each a metaphor for the round's
   game concept, per the design vision: abstract, not literal; thin-line
   chart aesthetics; brass on navy or white; generous negative space.

     1  Dawn over the horizon — first light on the games already in play
     2  Lighthouse — a costly signal cutting through information darkness
     3  Interlocked rings — the repeated game; ties that hold across rounds
     4  Sextant — measuring your true position (BATNA) before you bargain
     5  Ship's bell — the call-out; sound that makes knowledge common
     6  Life ring — one ring, and the question of who receives it
     7  Fleet of sails — the coalition, moving because it moves together
     8  Helm wheel — redesigning the mechanism that steers the ship

   All emblems share one grammar: 64×64 viewBox, 1.6px strokes, round caps,
   no fills except tiny functional dots. Color flows from `currentColor` so
   context (navy page, white card) chooses the ink. */

const NS = "http://www.w3.org/2000/svg";

function svgRoot(size) {
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 64 64");
  svg.setAttribute("width", size);
  svg.setAttribute("height", size);
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "1.6");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("aria-hidden", "true");
  return svg;
}

function p(svg, d, attrs = {}) {
  const node = document.createElementNS(NS, "path");
  node.setAttribute("d", d);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
  svg.append(node);
  return node;
}

function circle(svg, cx, cy, r, attrs = {}) {
  const node = document.createElementNS(NS, "circle");
  node.setAttribute("cx", cx);
  node.setAttribute("cy", cy);
  node.setAttribute("r", r);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
  svg.append(node);
  return node;
}

/* Point on a circle, angle in degrees, SVG orientation (y down, 0° = east). */
function polar(cx, cy, r, deg) {
  const a = (deg * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}
const fmt = (n) => Math.round(n * 100) / 100;
const pt = ([x, y]) => `${fmt(x)} ${fmt(y)}`;

/* ------------------------------ The emblems ------------------------------ */

const emblems = {
  /* 1 · Dawn — sun rising on a horizon, contours of the water below. */
  1(svg) {
    p(svg, "M6 40 H58");
    p(svg, "M22 40 A10 10 0 0 1 42 40");
    for (const deg of [200, 230, 260, 290, 320, 340]) {
      const a = polar(32, 40, 13, deg);
      const b = polar(32, 40, 17.5, deg);
      p(svg, `M${pt(a)} L${pt(b)}`);
    }
    p(svg, "M18 47 Q32 44 46 47", { opacity: "0.55" });
    p(svg, "M23 53 Q32 50.5 41 53", { opacity: "0.35" });
  },

  /* 2 · Lighthouse — the beam is the costly signal. */
  2(svg) {
    p(svg, "M27.5 50 L29.5 22 M36.5 50 L34.5 22");
    p(svg, "M25 50 H39");
    p(svg, "M29.5 22 H34.5 M29 16 H35 M29 16 L29.5 22 M35 16 L34.5 22");
    p(svg, "M28.5 16 L32 11 L35.5 16");
    p(svg, "M38 17 L51 13 M38 20.5 L53 20.5", { opacity: "0.7" });
    p(svg, "M26 17 L13 13 M26 20.5 L11 20.5", { opacity: "0.35" });
    p(svg, "M14 56 q4.5 -4 9 0 t9 0 t9 0 t9 0", { opacity: "0.55" });
  },

  /* 3 · Interlocked rings — drawn with weave gaps: the repeated game. */
  3(svg) {
    circle(svg, 26, 32, 10);
    p(svg, "M30.45 38.56 A10 10 0 0 1 30.45 25.44");
    p(svg, "M33.77 22.94 A10 10 0 1 1 33.77 41.06");
    p(svg, "M14 52 Q32 48 50 52", { opacity: "0.35" });
  },

  /* 4 · Sextant — frame, graduated arc, index arm on its pivot. */
  4(svg) {
    p(svg, "M32 17 L15.5 37 M32 17 L48.5 37");
    p(svg, "M15.5 37 A21.5 21.5 0 0 0 48.5 37");
    p(svg, "M32 17 L38.5 43.5");
    circle(svg, 32, 17, 2.4);
    for (const deg of [62, 90, 118]) {
      const a = polar(32, 17, 21.5, deg);
      const b = polar(32, 17, 18.5, deg);
      p(svg, `M${pt(a)} L${pt(b)}`, { opacity: "0.7" });
    }
    p(svg, "M22 24.5 L42 31", { opacity: "0.5" });
  },

  /* 5 · Ship's bell — and the arcs of sound that make knowledge common. */
  5(svg) {
    p(svg, "M22.5 39 Q22.5 20 32 20 Q41.5 20 41.5 39");
    p(svg, "M20 39 H44");
    p(svg, "M32 20 V15");
    circle(svg, 32, 13, 2);
    circle(svg, 32, 43, 2.2);
    p(svg, "M47 26 q5.5 6 0 12", { opacity: "0.7" });
    p(svg, "M51.5 23 q8 9 0 18", { opacity: "0.4" });
    p(svg, "M17 26 q-5.5 6 0 12", { opacity: "0.7" });
    p(svg, "M12.5 23 q-8 9 0 18", { opacity: "0.4" });
  },

  /* 6 · Life ring — four rope bands; one ring, many hands. */
  6(svg) {
    circle(svg, 32, 32, 14);
    circle(svg, 32, 32, 7);
    for (const base of [22, 68, 112, 158, 202, 248, 292, 338]) {
      const a = polar(32, 32, 7, base);
      const b = polar(32, 32, 14, base);
      p(svg, `M${pt(a)} L${pt(b)}`, { opacity: "0.8" });
    }
    p(svg, "M15 54 q4.5 -4 9 0 t9 0 t9 0 t9 0", { opacity: "0.4" });
  },

  /* 7 · The fleet — three sails, one heading. */
  7(svg) {
    p(svg, "M26 14 V42 M26 14 Q40 28 38 42 L26 42");
    p(svg, "M45 26 V44 M45 26 Q53 35 52 44 L45 44");
    p(svg, "M14 28 V43 M14 28 Q21 35.5 20 43 L14 43");
    p(svg, "M8 50 q4.5 -4 9 0 t9 0 t9 0 t9 0 t9 0", { opacity: "0.55" });
  },

  /* 8 · Helm — eight spokes; the mechanism that steers everything else. */
  8(svg) {
    circle(svg, 32, 32, 13);
    circle(svg, 32, 32, 4.5);
    for (let i = 0; i < 8; i++) {
      const deg = i * 45 - 90;
      const a = polar(32, 32, 4.5, deg);
      const b = polar(32, 32, 13, deg);
      const c = polar(32, 32, 18, deg);
      p(svg, `M${pt(a)} L${pt(b)}`);
      p(svg, `M${pt(b)} L${pt(c)}`, { "stroke-width": "2.2" });
    }
  },
};

/** Build the emblem for a module. Color via CSS `color` on the parent. */
export function emblemSVG(moduleId, size = 44) {
  const svg = svgRoot(size);
  const draw = emblems[moduleId];
  if (draw) draw(svg);
  else circle(svg, 32, 32, 14);
  return svg;
}

/* ------------------------------ Course photography ------------------------------
   Uploaded course art (art/source), served from optimized derivatives in
   art/web. Each image is chosen as the photographic echo of its round's
   emblem metaphor, and always sits beneath a deep-navy scrim so the
   "Nautical Calm" palette—and the text—stay in charge. */

export const artwork = {
  modules: {
    1: { src: "art/web/m1-dawn.jpg", pos: "center 40%", alt: "A solo sailor stands at the bow at dawn" },
    2: { src: "art/web/m2-wake.jpg", pos: "center", alt: "Aerial view of a sailboat cutting a clean wake" },
    3: { src: "art/web/m3-after-storm.jpg", pos: "center 35%", alt: "A sailboat emerges from a storm into light" },
    4: { src: "art/web/m4-two-boats.jpg", pos: "center 55%", alt: "Two sailboats race neck and neck at sunset" },
    5: { src: "art/web/m5-squall.jpg", pos: "center 22%", alt: "A captain calls orders through a squall" },
    6: { src: "art/web/m6-rogue-wave.jpg", pos: "center 45%", alt: "A bow crashes through a massive wave" },
    7: { src: "art/web/m7-fleet.jpg", pos: "center 60%", alt: "A fleet of many-colored spinnakers rounds a mark" },
    8: { src: "art/web/m8-helm-hands.jpg", pos: "center", alt: "Weathered hands grip a wet ship's wheel" },
  },
  pages: {
    home: { src: "art/web/home-truenorth.jpg", pos: "center 30%", alt: "A schooner under full sail beneath a great compass rose — your true north" },
    helm: { src: "art/web/home-helm.jpg", pos: "center 35%", alt: "A lone captain at the helm of a heeling sailboat" },
    cast: { src: "art/web/cast-crew.jpg", pos: "center 30%", alt: "A crew works together to reef the mainsail" },
    program: { src: "art/web/program-light.jpg", pos: "center 45%", alt: "A sailboat sails out of a storm beneath breaking light" },
  },
};

/** Layered navy scrim + photo, as a CSS background value. Direction of the
    gradient keeps the text zone (left) deep navy while the art breathes on
    the right. `strength` raises the wash for busier images. */
export function scrimBackground(art, { from = 0.97, mid = 0.87, to = 0.52 } = {}) {
  return (
    `linear-gradient(100deg, rgba(12,27,42,${from}) 0%, rgba(12,27,42,${mid}) 46%, rgba(12,27,42,${to}) 100%),` +
    ` url("${art.src}")`
  );
}

/** Apply a photo background with scrim to an element. */
export function applyArt(node, art, opts) {
  if (!art) return;
  node.style.backgroundImage = scrimBackground(art, opts);
  node.style.backgroundSize = "cover, cover";
  node.style.backgroundPosition = `center, ${art.pos || "center"}`;
  node.setAttribute("role", "img");
  node.setAttribute("aria-label", art.alt);
}

/** A wide horizon-and-contours band used as quiet section art. */
export function horizonBand(width = 320, height = 56) {
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 320 56");
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "1");
  svg.setAttribute("aria-hidden", "true");
  p(svg, "M0 18 H320", { "stroke-width": "1.3" });
  p(svg, "M20 30 Q160 22 300 30", { opacity: "0.5" });
  p(svg, "M50 41 Q160 34 270 41", { opacity: "0.32" });
  p(svg, "M85 51 Q160 45.5 235 51", { opacity: "0.18" });
  return svg;
}
