/* @ds-bundle: {"format":3,"namespace":"OpsByNoellDesignSystem_fe4542","components":[],"sourceHashes":{"logo-explorations/LogoSystem.jsx":"fdcf6e74b4e2","logo-explorations/Logos.jsx":"1766f1d3d271","logo-explorations/design-canvas.jsx":"3b0e985041dd","ui_kits/admin-inbox/NoellDash.jsx":"0efb27730817","ui_kits/marketing-site/Hero.jsx":"be2606d68fb7","ui_kits/marketing-site/Navbar.jsx":"383bcc6a7a7a","ui_kits/marketing-site/Sections.jsx":"1597e05e3bb9","ui_kits/noell-support-chat/SupportChat.jsx":"1a46c1d0f057"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OpsByNoellDesignSystem_fe4542 = window.OpsByNoellDesignSystem_fe4542 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// logo-explorations/LogoSystem.jsx
try { (() => {
// LogoSystem.jsx — full system around chosen Direction 02 (Stacked Masthead)
// AI systems agency · Mission Viejo

const WINE = "#6B1A2E";
const WINE_LIGHT = "#8B2A42";
const CREAM = "#F5EAE0";
const PLUM = "#1F1219";

// ─── Primary horizontal lockup ────────────────────────────
// The canonical logo. Use everywhere by default.
function PrimaryLockup({
  color = WINE,
  scale = 1
}) {
  const c = color;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 36 * scale,
      transform: `scale(${1})`
    }
  }, /*#__PURE__*/React.createElement(Monogram, {
    size: 170 * scale,
    color: c
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6 * scale
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: 76 * scale,
      color: c,
      lineHeight: 0.95,
      letterSpacing: "0.04em",
      textTransform: "uppercase"
    }
  }, "OPS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8 * scale
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22 * scale,
      height: 1,
      background: c,
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: 20 * scale,
      color: c
    }
  }, "by Noell"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22 * scale,
      height: 1,
      background: c,
      opacity: 0.5
    }
  }))));
}

// ─── The monogram (favicon, avatar, watermark) ────────────
function Monogram({
  size = 170,
  color = WINE,
  showAgency = true
}) {
  const scale = size / 170;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10 * scale
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: size,
      color,
      lineHeight: 0.85,
      letterSpacing: "-0.05em"
    }
  }, "O"), showAgency && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110 * scale,
      height: 1,
      background: color,
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 500,
      fontSize: Math.max(9 * scale, 7),
      letterSpacing: "0.32em",
      color,
      textTransform: "uppercase",
      opacity: 0.75
    }
  }, "AI systems agency")));
}

// ─── Stacked variant (square crops, social avatars at large size) ──
function StackedLockup({
  color = WINE
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Monogram, {
    size: 140,
    color: color,
    showAgency: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 90,
      height: 1,
      background: color,
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: 44,
      color,
      lineHeight: 0.95,
      letterSpacing: "0.06em",
      textTransform: "uppercase"
    }
  }, "OPS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 18,
      height: 1,
      background: color,
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: 14,
      color
    }
  }, "by Noell"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 18,
      height: 1,
      background: color,
      opacity: 0.5
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 500,
      fontSize: 8,
      letterSpacing: "0.32em",
      color,
      textTransform: "uppercase",
      opacity: 0.75,
      marginTop: 4
    }
  }, "AI systems agency")));
}

// ─── Avatar (chat orb, app icon, social profile) ──────────
// Just the O on a wine-gradient disc. No agency line at this size.
function AvatarMark({
  size = 96
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      background: "linear-gradient(to bottom, #B5415E 0%, #8B2A42 50%, #5C1A2A 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: `0 ${size * 0.15}px ${size * 0.3}px -${size * 0.08}px rgba(139, 42, 66, 0.50), inset 0 1px 2px rgba(255,255,255,0.20)`,
      color: CREAM,
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: size * 0.58,
      lineHeight: 1,
      letterSpacing: "-0.04em"
    }
  }, "O");
}

// ─── Wordmark only (when monogram is being used elsewhere) ──
function Wordmark({
  color = WINE
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: 76,
      color,
      lineHeight: 0.95,
      letterSpacing: "0.04em",
      textTransform: "uppercase"
    }
  }, "OPS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 1,
      background: color,
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: 20,
      color
    }
  }, "by Noell"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 1,
      background: color,
      opacity: 0.5
    }
  })));
}
Object.assign(window, {
  PrimaryLockup,
  Monogram,
  StackedLockup,
  AvatarMark,
  Wordmark,
  WINE,
  CREAM,
  PLUM,
  WINE_LIGHT
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "logo-explorations/LogoSystem.jsx", error: String((e && e.message) || e) }); }

// logo-explorations/Logos.jsx
try { (() => {
// Logo.jsx — 6 logo exploration directions for "Ops by Noell"
// Each direction renders a primary monogram + horizontal lockup
// Brief: refresh, keep serif + script pairing, O as primary mark, mix editorial + handcrafted + operator

// Wine palette
const WINE = "#6B1A2E";
const WINE_DARK = "#5A1F30";
const CREAM = "#F5EAE0";
const PLUM = "#1F1219";

// ─── Direction 01: The Italic ─────────────────────────────
// Editorial. Uses Playfair Display Italic for "by Noell" — the brand's signature italic move.
// Monogram is a generous Playfair O with the wine gradient on the wordmark.
function Logo01_TheItalic() {
  return /*#__PURE__*/React.createElement(ArtboardBody, {
    bg: CREAM
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 600,
      fontSize: 180,
      color: WINE,
      lineHeight: 0.85,
      letterSpacing: "-0.04em"
    }
  }, "O"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: `1px solid ${WINE}33`,
      paddingLeft: 28,
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 600,
      fontSize: 56,
      color: WINE,
      lineHeight: 1,
      letterSpacing: "-0.02em"
    }
  }, "Ops"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: 22,
      color: WINE,
      lineHeight: 1.1
    }
  }, "by Noell"))), /*#__PURE__*/React.createElement(Caption, {
    note: "Playfair italic for the script half \u2014 same family, different voice. Ties the logo to your signature italic-accent treatment everywhere else."
  }));
}

// ─── Direction 02: Stacked Masthead ───────────────────────
// Editorial / magazine-cover. All-caps OPS with tracked italic "by Noell" tucked under.
function Logo02_StackedMasthead() {
  return /*#__PURE__*/React.createElement(ArtboardBody, {
    bg: CREAM
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: 170,
      color: WINE,
      lineHeight: 0.85,
      letterSpacing: "-0.05em"
    }
  }, "O"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110,
      height: 1,
      background: WINE,
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 500,
      fontSize: 9,
      letterSpacing: "0.32em",
      color: WINE,
      textTransform: "uppercase",
      opacity: 0.75
    }
  }, "AI systems agency")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
      fontSize: 76,
      color: WINE,
      lineHeight: 0.95,
      letterSpacing: "0.04em",
      textTransform: "uppercase"
    }
  }, "OPS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 1,
      background: WINE,
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: 20,
      color: WINE
    }
  }, "by Noell"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 1,
      background: WINE,
      opacity: 0.5
    }
  })))), /*#__PURE__*/React.createElement(Caption, {
    note: "Magazine masthead. OPS in tracked all-caps. Italic 'by Noell' between rules. Monogram has its own micro-masthead."
  }));
}

// ─── Direction 03: Ops Bureau ─────────────────────────────
// Technical / operator. Mono "BY NOELL" treated as a system stamp instead of a script.
// O sits in a hairline ring — echoes the hero's concentric rings.
function Logo03_OpsBureau() {
  return /*#__PURE__*/React.createElement(ArtboardBody, {
    bg: CREAM
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 180,
      height: 180
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      border: `1px solid ${WINE}55`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 14,
      borderRadius: "50%",
      border: `1px solid ${WINE}22`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Playfair Display', serif",
      fontWeight: 600,
      fontSize: 110,
      color: WINE,
      lineHeight: 1,
      letterSpacing: "-0.03em"
    }
  }, "O")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 600,
      fontSize: 60,
      color: WINE,
      lineHeight: 1,
      letterSpacing: "-0.02em"
    }
  }, "Ops"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Courier New', monospace",
      fontWeight: 400,
      fontSize: 12,
      letterSpacing: "0.32em",
      color: WINE,
      textTransform: "uppercase"
    }
  }, "BY NOELL \xB7 01 \xB7 CA"))), /*#__PURE__*/React.createElement(Caption, {
    note: "The script becomes a system stamp. Concentric-ring O quotes the hero. Same brand DNA but operator-coded."
  }));
}

// ─── Direction 04: Family Seal ────────────────────────────
// Handcrafted / family-business. A wax-seal monogram with arc text around the O.
function Logo04_FamilySeal() {
  return /*#__PURE__*/React.createElement(ArtboardBody, {
    bg: CREAM
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 36
    }
  }, /*#__PURE__*/React.createElement(SealMark, {
    size: 188
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 600,
      fontSize: 58,
      color: WINE,
      lineHeight: 1,
      letterSpacing: "-0.02em"
    }
  }, "Ops"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Caveat', cursive",
      fontWeight: 500,
      fontSize: 32,
      color: WINE,
      lineHeight: 1,
      marginTop: 0
    }
  }, "by Noell"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 500,
      fontSize: 9,
      letterSpacing: "0.3em",
      color: WINE,
      textTransform: "uppercase",
      marginTop: 6,
      opacity: 0.65
    }
  }, "Family operated \xB7 Mission Viejo"))), /*#__PURE__*/React.createElement(Caption, {
    note: "Wax-seal monogram with arc text. Caveat handwritten for 'by Noell' \u2014 warm, personal, family. Reads as a small studio you'd actually call."
  }));
}
function SealMark({
  size
}) {
  const r = size / 2;
  const radius = r - 14;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    id: "seal-arc-top",
    d: `M ${r - radius * 0.92},${r - radius * 0.38} A ${radius * 0.92},${radius * 0.92} 0 0 1 ${r + radius * 0.92},${r - radius * 0.38}`,
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    id: "seal-arc-bot",
    d: `M ${r - radius * 0.92},${r + radius * 0.38} A ${radius * 0.92},${radius * 0.92} 0 0 0 ${r + radius * 0.92},${r + radius * 0.38}`,
    fill: "none"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: r,
    cy: r,
    r: radius,
    fill: "none",
    stroke: WINE,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: r,
    cy: r,
    r: radius - 8,
    fill: "none",
    stroke: WINE,
    strokeWidth: "0.75",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("text", {
    fill: WINE,
    fontFamily: "'Inter', sans-serif",
    fontSize: "9",
    fontWeight: "500",
    letterSpacing: "3"
  }, /*#__PURE__*/React.createElement("textPath", {
    href: "#seal-arc-top",
    startOffset: "50%",
    textAnchor: "middle"
  }, "OPS \xB7 BY NOELL")), /*#__PURE__*/React.createElement("text", {
    fill: WINE,
    fontFamily: "'Inter', sans-serif",
    fontSize: "9",
    fontWeight: "500",
    letterSpacing: "3",
    opacity: "0.7"
  }, /*#__PURE__*/React.createElement("textPath", {
    href: "#seal-arc-bot",
    startOffset: "50%",
    textAnchor: "middle"
  }, "EST \xB7 MISSION VIEJO")), /*#__PURE__*/React.createElement("text", {
    x: r,
    y: r + 24,
    textAnchor: "middle",
    fill: WINE,
    fontFamily: "'Playfair Display', serif",
    fontWeight: "600",
    fontSize: "80",
    letterSpacing: "-0.02em"
  }, "O"));
}

// ─── Direction 05: Calligraphic ───────────────────────────
// Editorial + handcrafted. Italianno (true copperplate) for "by Noell".
function Logo05_Calligraphic() {
  return /*#__PURE__*/React.createElement(ArtboardBody, {
    bg: CREAM
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontStyle: "italic",
      fontWeight: 600,
      fontSize: 196,
      color: WINE,
      lineHeight: 0.82,
      letterSpacing: "-0.04em"
    }
  }, "O"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 600,
      fontSize: 70,
      color: WINE,
      lineHeight: 0.95,
      letterSpacing: "-0.02em"
    }
  }, "Ops"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Italianno', cursive",
      fontWeight: 400,
      fontSize: 50,
      color: WINE,
      lineHeight: 0.9,
      marginTop: -6,
      marginLeft: 6
    }
  }, "by Noell"))), /*#__PURE__*/React.createElement(Caption, {
    note: "Italianno copperplate for 'by Noell'. Italic Playfair monogram with the same swooping energy. Most refined direction."
  }));
}

// ─── Direction 06: Concentric ─────────────────────────────
// Technical / operator. The O is the brand's signal motif — concentric rings.
function Logo06_Concentric() {
  return /*#__PURE__*/React.createElement(ArtboardBody, {
    bg: CREAM
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "180",
    height: "180",
    viewBox: "0 0 180 180"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "90",
    cy: "90",
    r: "86",
    fill: "none",
    stroke: WINE,
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "90",
    cy: "90",
    r: "64",
    fill: "none",
    stroke: WINE,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "90",
    cy: "90",
    r: "42",
    fill: "none",
    stroke: WINE,
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "90",
    cy: "90",
    r: "20",
    fill: WINE
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 600,
      fontSize: 64,
      color: WINE,
      lineHeight: 1,
      letterSpacing: "-0.02em"
    }
  }, "Ops"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Playfair Display', serif",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: 22,
      color: WINE,
      lineHeight: 1
    }
  }, "by Noell"))), /*#__PURE__*/React.createElement(Caption, {
    note: "The O IS the signal. Concentric rings as the mark \u2014 quotes your hero motif literally. Most distinct primary mark of the six."
  }));
}

// ─── Helpers ──────────────────────────────────────────────
function ArtboardBody({
  bg,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      background: bg,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 32,
      gap: 20
    }
  }, children);
}
function Caption({
  note
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 11,
      lineHeight: 1.5,
      color: `${PLUM}AA`,
      textAlign: "center",
      maxWidth: 440,
      fontStyle: "italic"
    }
  }, note);
}
Object.assign(window, {
  Logo01_TheItalic,
  Logo02_StackedMasthead,
  Logo03_OpsBureau,
  Logo04_FamilySeal,
  Logo05_Calligraphic,
  Logo06_Concentric
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "logo-explorations/Logos.jsx", error: String((e && e.message) || e) }); }

// logo-explorations/design-canvas.jsx
try { (() => {
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Artboards are reorderable (grip-drag), deletable, labels/titles are
// inline-editable, and any artboard can be opened in a fullscreen focus
// overlay (←/→/Esc). State persists to a .design-canvas.state.json sidecar
// via the host bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}',
  // isolation:isolate contains artboard content's z-indexes so a
  // z-indexed child (sticky navbar etc.) can't paint over .dc-header or
  // the .dc-menu popover that drops into the top of the card.
  '.dc-card{isolation:isolate;transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}',
  // Per-artboard header: grip + label on the left, delete/expand on the
  // right. Single flex row; when the artboard's on-screen width is too
  // narrow for both the label yields (ellipsis, then hidden entirely below
  // ~4ch via the container query) and the buttons stay on the row.
  '.dc-header{position:absolute;bottom:100%;left:-4px;margin-bottom:calc(4px * var(--dc-inv-zoom,1));z-index:2;', '  display:flex;align-items:center;container-type:inline-size}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px;flex:1 1 auto;min-width:0}', '.dc-grip{flex:0 0 auto;cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s,opacity .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{flex:1 1 auto;min-width:0;cursor:pointer;border-radius:4px;padding:3px 6px;', '  display:flex;align-items:center;transition:background .12s;overflow:hidden}',
  // Below ~4ch of label room: hide the label entirely, and drop the grip to
  // hover-only (same reveal rule as .dc-btns) so a narrow header is clean
  // until the card is moused.
  '@container (max-width: 110px){', '  .dc-labeltext{display:none}', '  .dc-grip{opacity:0}', '  [data-dc-slot]:hover .dc-grip{opacity:1}', '}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-labeltext .dc-editable{overflow:hidden;text-overflow:ellipsis;max-width:100%}', '.dc-labeltext .dc-editable:focus{overflow:visible;text-overflow:clip}', '.dc-btns{flex:0 0 auto;margin-left:auto;display:flex;gap:2px;opacity:0;transition:opacity .12s}', '[data-dc-slot]:hover .dc-btns,.dc-btns:has(.dc-menu){opacity:1}', '.dc-expand,.dc-kebab{width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center;', '  font:inherit;transition:background .12s,color .12s}', '.dc-expand:hover,.dc-kebab:hover{background:rgba(0,0,0,.06);color:#2a251f}',
  // Slot hosting an open menu floats above later siblings (which otherwise
  // paint on top — same z-index:auto, later DOM order) so the popup isn't
  // clipped by the next card.
  '[data-dc-slot]:has(.dc-menu){z-index:10}', '.dc-menu{position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border-radius:8px;', '  box-shadow:0 8px 28px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.05);padding:4px;min-width:160px;z-index:10}', '.dc-menu button{display:block;width:100%;padding:7px 10px;border:0;background:transparent;', '  border-radius:5px;font-family:inherit;font-size:13px;font-weight:500;line-height:1.2;', '  color:#29261b;cursor:pointer;text-align:left;transition:background .12s;white-space:nowrap}', '.dc-menu button:hover{background:rgba(0,0,0,.05)}', '.dc-menu hr{border:0;border-top:1px solid rgba(0,0,0,.08);margin:4px 2px}', '.dc-menu .dc-danger{color:#c96442}', '.dc-menu .dc-danger:hover{background:rgba(201,100,66,.1)}',
  // Chrome (titles / labels / buttons) counter-scales against the viewport
  // zoom so it stays a constant on-screen size. --dc-inv-zoom is set by
  // DCViewport on every transform update and inherits to all descendants —
  // any overlay inside the world (e.g. a TweaksPanel on an artboard) can use
  // it the same way.
  //
  // The header uses transform:scale (out-of-flow, so layout impact doesn't
  // matter) with its world-space width set to card-width / inv-zoom so that
  // after counter-scaling its on-screen width exactly matches the card's —
  // that's what lets the container query + text-overflow behave against the
  // card's visible edge at every zoom level.
  //
  // The section head uses CSS zoom instead of transform so its layout box
  // grows with the counter-scale, pushing the card row down — otherwise the
  // constant-screen-size title would overflow into the (shrinking) world-
  // space gap and overlap the artboard headers at low zoom.
  '.dc-header{width:calc((100% + 4px) / var(--dc-inv-zoom,1));', '  transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom left}', '.dc-sectionhead{zoom:var(--dc-inv-zoom,1)}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// Recursively unwrap React.Fragment so <>…</> grouping doesn't hide
// DCSection/DCArtboard children from the type-based walks below.
function dcFlatten(children) {
  const out = [];
  React.Children.forEach(children, c => {
    if (c && c.type === React.Fragment) out.push(...dcFlatten(c.props.children));else out.push(c);
  });
  return out;
}

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, hidden
// artboards, focused artboard). Order/titles/labels/hidden persist to a
// .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Fragments are flattened; wrapping in other
  // elements still opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  dcFlatten(children).forEach(sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const abs = [];
    dcFlatten(sec.props.children).forEach(ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (aid) abs.push([aid, ab]);
    });
    // hidden is scoped to one source revision — when the agent regenerates
    // (artboard-ID set changes), prior deletes don't apply to new content.
    const srcKey = abs.map(([k]) => k).join('\x1f');
    const hidden = persisted.srcKey === srcKey ? persisted.hidden || [] : [];
    const srcIds = [];
    abs.forEach(([aid, ab]) => {
      if (hidden.includes(aid)) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  // Persist viewport across reloads so the user lands back where they were
  // after an agent edit or browser refresh. The sandbox origin is already
  // per-project; pathname keeps multiple canvas files in one project apart.
  const tfKey = 'dc-viewport:' + location.pathname;
  const saveT = React.useRef(0);
  const lastPostedScale = React.useRef();
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    // Exposed for zoom-invariant chrome (labels, buttons, TweaksPanel).
    el.style.setProperty('--dc-inv-zoom', String(1 / scale));
    // Keep the host toolbar's % readout in sync with the canvas scale. Pan
    // ticks leave scale unchanged — skip the cross-frame post for those.
    if (lastPostedScale.current !== scale) {
      lastPostedScale.current = scale;
      window.parent.postMessage({
        type: '__dc_zoom',
        scale
      }, '*');
    }
    clearTimeout(saveT.current);
    saveT.current = setTimeout(() => {
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    }, 200);
  }, [tfKey]);
  React.useLayoutEffect(() => {
    const flush = () => {
      clearTimeout(saveT.current);
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    };
    try {
      const s = JSON.parse(localStorage.getItem(tfKey) || 'null');
      if (s && Number.isFinite(s.x) && Number.isFinite(s.y) && Number.isFinite(s.scale)) {
        tf.current = {
          x: s.x,
          y: s.y,
          scale: Math.min(maxScale, Math.max(minScale, s.scale))
        };
        apply();
      }
    } catch {}
    // Flush on pagehide and unmount so a reload within the 200ms debounce
    // window doesn't drop the last pan/zoom.
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // --dc-inv-zoom consumers (.dc-sectionhead's CSS zoom, each section's
      // marginBottom) reflow on every scale change, vertically shifting the
      // world layout — so a world point mathematically pinned under the cursor
      // drifts as you zoom (content creeps up on zoom-in, down on zoom-out).
      // Anchor the DOM element under the cursor instead: record its screen Y,
      // apply the transform + --dc-inv-zoom, then cancel whatever vertical
      // drift the reflow introduced so it stays put on screen.
      let marker = null,
        markerY0 = 0;
      if (k !== 1) {
        const hit = document.elementFromPoint(cx, cy);
        marker = hit && hit.closest ? hit.closest('[data-dc-slot],[data-dc-section]') : null;
        if (marker) markerY0 = marker.getBoundingClientRect().top;
      }
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
      if (marker) {
        // A pure zoom around (cx, cy) maps screen Y → cy + (Y - cy) * k. Any
        // departure after the --dc-inv-zoom reflow is the layout drift.
        const drift = marker.getBoundingClientRect().top - (cy + (markerY0 - cy) * k);
        if (Math.abs(drift) > 0.1) {
          t.y -= drift;
          apply();
        }
      }
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if ((e.ctrlKey || e.metaKey) && !isMouseWheel(e)) {
        // trackpad pinch, or ctrl/cmd + smooth-scroll mouse. Notched
        // wheels fall through to the fixed-step branch below.
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };

    // Host-driven zoom (toolbar % menu). Zooms around viewport centre so the
    // visible midpoint stays fixed — matching the host's iframe-zoom feel.
    const onHostMsg = e => {
      const d = e.data;
      if (d && d.type === '__dc_set_zoom' && typeof d.scale === 'number') {
        const r = vp.getBoundingClientRect();
        zoomAt(r.left + r.width / 2, r.top + r.height / 2, d.scale / tf.current.scale);
      } else if (d && d.type === '__dc_probe') {
        // Host's [readyGen] reset asks whether a canvas is present; it
        // fires on the iframe's native 'load', which for canvases with
        // images/fonts is after our mount-time announce, so re-announce.
        // Clear the pan-tick guard so apply() re-posts the current scale
        // even if it's unchanged — the host just reset dcScale to 1.
        window.parent.postMessage({
          type: '__dc_present'
        }, '*');
        lastPostedScale.current = undefined;
        apply();
      }
    };
    window.addEventListener('message', onHostMsg);
    // Announce canvas mode so the host toolbar proxies its % control here
    // instead of scaling the iframe element (which would just shrink the
    // viewport window of an infinite canvas). The apply() that follows emits
    // the initial __dc_zoom so the toolbar % is correct before first pinch.
    // lastPostedScale reset mirrors the __dc_probe handler: the layout
    // effect's restore-path apply() may already have posted the restored
    // scale (before __dc_present), so clear the guard to re-post it in order.
    window.parent.postMessage({
      type: '__dc_present'
    }, '*');
    lastPostedScale.current = undefined;
    apply();
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('message', onHostMsg);
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(dcFlatten(children));
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const sec = ctx && sid && ctx.section(sid) || {};
  // Must match DesignCanvas's srcKey computation exactly (it filters falsy
  // IDs), or onDelete persists a srcKey that DesignCanvas never recognizes.
  const allIds = artboards.map(a => a.props.id ?? a.props.label).filter(Boolean);
  const srcKey = allIds.join('\x1f');
  const hidden = sec.srcKey === srcKey ? sec.hidden || [] : [];
  const srcOrder = allIds.filter(k => !hidden.includes(k));
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));

  // marginBottom counter-scales so the on-screen gap between sections stays
  // constant — otherwise at low zoom the (world-space) gap collapses while
  // the screen-constant sectionhead below it doesn't, and the title reads as
  // belonging to the section above. paddingBottom below is just enough for
  // the 24px artboard-header (abs-positioned above each card) plus ~8px, so
  // the title sits tight against its own row at every zoom.
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 'calc(80px * var(--dc-inv-zoom, 1))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-sectionhead",
    style: {
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onDelete: () => ctx && ctx.patchSection(sid, x => ({
      hidden: [...(x.srcKey === srcKey ? x.hidden || [] : []), k],
      srcKey
    })),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}

// Per-artboard export (kind: 'png' | 'html'). Both paths share the same
// self-contained clone: computed styles baked in, @font-face / <img> /
// inline-style background-image urls inlined as data URIs. PNG wraps the
// clone in foreignObject→canvas at 3× the artboard's natural width×height
// (same pipeline the host uses for page captures); HTML wraps it in a
// minimal standalone document. Both are independent of viewport zoom.
async function dcExport(node, w, h, name, kind) {
  try {
    await document.fonts.ready;
  } catch {}
  const toDataURL = url => fetch(url).then(r => r.blob()).then(b => new Promise(res => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = () => res(url);
    fr.readAsDataURL(b);
  })).catch(() => url);

  // Collect @font-face rules. ss.cssRules throws SecurityError on
  // cross-origin sheets (e.g. fonts.googleapis.com) — in that case fetch
  // the CSS text directly (those endpoints send ACAO:*) and regex-extract
  // the blocks. @import and @media/@supports are walked so nested
  // @font-face rules aren't missed.
  const fontRules = [],
    pending = [],
    seen = new Set();
  const scrapeCss = href => {
    if (seen.has(href)) return;
    seen.add(href);
    pending.push(fetch(href).then(r => r.text()).then(css => {
      for (const m of css.match(/@font-face\s*{[^}]*}/g) || []) fontRules.push({
        css: m,
        base: href
      });
      for (const m of css.matchAll(/@import\s+(?:url\()?['"]?([^'")\s;]+)/g)) scrapeCss(new URL(m[1], href).href);
    }).catch(() => {}));
  };
  const walk = (rules, base) => {
    for (const r of rules) {
      if (r.type === CSSRule.FONT_FACE_RULE) fontRules.push({
        css: r.cssText,
        base
      });else if (r.type === CSSRule.IMPORT_RULE && r.styleSheet) {
        const ibase = r.styleSheet.href || base;
        try {
          walk(r.styleSheet.cssRules, ibase);
        } catch {
          scrapeCss(ibase);
        }
      } else if (r.cssRules) walk(r.cssRules, base);
    }
  };
  for (const ss of document.styleSheets) {
    const base = ss.href || location.href;
    try {
      walk(ss.cssRules, base);
    } catch {
      if (ss.href) scrapeCss(ss.href);
    }
  }
  while (pending.length) await pending.shift();
  const fontCss = (await Promise.all(fontRules.map(async rule => {
    let out = rule.css,
      m;
    const re = /url\((['"]?)([^'")]+)\1\)/g;
    while (m = re.exec(rule.css)) {
      if (m[2].indexOf('data:') === 0) continue;
      let abs;
      try {
        abs = new URL(m[2], rule.base).href;
      } catch {
        continue;
      }
      out = out.split(m[0]).join('url("' + (await toDataURL(abs)) + '")');
    }
    return out;
  }))).join('\n');
  const cloneStyled = src => {
    if (src.nodeType === 8 || src.nodeType === 1 && src.tagName === 'SCRIPT') return document.createTextNode('');
    const dst = src.cloneNode(false);
    if (src.nodeType === 1) {
      const cs = getComputedStyle(src);
      let txt = '';
      for (let i = 0; i < cs.length; i++) txt += cs[i] + ':' + cs.getPropertyValue(cs[i]) + ';';
      dst.setAttribute('style', txt + 'animation:none;transition:none;');
      if (src.tagName === 'CANVAS') try {
        const im = document.createElement('img');
        im.src = src.toDataURL();
        im.setAttribute('style', txt);
        return im;
      } catch {}
    }
    for (let c = src.firstChild; c; c = c.nextSibling) dst.appendChild(cloneStyled(c));
    return dst;
  };
  const clone = cloneStyled(node);
  clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  // Drop the card's own shadow/radius so the export is a flush w×h rect;
  // the artboard's own background (if any) is already in the computed style.
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '0';
  const jobs = [];
  clone.querySelectorAll('img').forEach(el => {
    const s = el.getAttribute('src');
    if (s && s.indexOf('data:') !== 0) jobs.push(toDataURL(el.src).then(d => el.setAttribute('src', d)));
  });
  [clone, ...clone.querySelectorAll('*')].forEach(el => {
    const bg = el.style.backgroundImage;
    if (!bg) return;
    let m;
    const re = /url\(["']?([^"')]+)["']?\)/g;
    while (m = re.exec(bg)) {
      const tok = m[0],
        url = m[1];
      if (url.indexOf('data:') === 0) continue;
      jobs.push(toDataURL(url).then(d => {
        el.style.backgroundImage = el.style.backgroundImage.split(tok).join('url("' + d + '")');
      }));
    }
  });
  await Promise.all(jobs);
  const xml = new XMLSerializer().serializeToString(clone);
  const save = (blob, ext) => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name + '.' + ext;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  if (kind === 'html') {
    const html = '<!doctype html><html><head><meta charset="utf-8"><title>' + name + '</title>' + (fontCss ? '<style>' + fontCss + '</style>' : '') + '</head><body style="margin:0">' + xml + '</body></html>';
    return save(new Blob([html], {
      type: 'text/html'
    }), 'html');
  }

  // PNG: the SVG's own width/height must be the output resolution — an
  // <img>-loaded SVG rasterizes at its intrinsic size, so sizing it at 1×
  // and ctx.scale()-ing up would just upscale a 1× bitmap. viewBox maps the
  // w×h foreignObject onto the px·w × px·h SVG canvas so the browser renders
  // the HTML at full resolution.
  const px = 3;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w * px + '" height="' + h * px + '" viewBox="0 0 ' + w + ' ' + h + '"><foreignObject width="' + w + '" height="' + h + '">' + (fontCss ? '<style><![CDATA[' + fontCss + ']]></style>' : '') + xml + '</foreignObject></svg>';
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = () => rej(new Error('svg load failed'));
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
  const cv = document.createElement('canvas');
  cv.width = w * px;
  cv.height = h * px;
  cv.getContext('2d').drawImage(img, 0, 0);
  cv.toBlob(blob => save(blob, 'png'), 'image/png');
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus,
  onDelete
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);
  const cardRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);

  // ⋯ menu: close on any outside pointerdown. Two-click delete lives inside
  // the menu — first click arms the row, second commits; closing disarms.
  React.useEffect(() => {
    if (!menuOpen) {
      setConfirming(false);
      return;
    }
    const off = e => {
      if (!menuRef.current || !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', off, true);
    return () => document.removeEventListener('pointerdown', off, true);
  }, [menuOpen]);
  const doExport = kind => {
    setMenuOpen(false);
    if (!cardRef.current) return;
    const name = String(label || id || 'artboard').replace(/[^\w\s.-]+/g, '_');
    dcExport(cardRef.current, width, height, name, kind).catch(e => console.error('[design-canvas] export failed:', e));
  };

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-header",
    "data-omelette-chrome": "",
    style: {
      color: DC.label
    },
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-btns"
  }, /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dc-kebab",
    title: "More",
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2.5",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "6",
    r: "1.1"
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "dc-menu",
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('png')
  }, "Download PNG"), /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('html')
  }, "Download HTML"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "dc-danger",
    onClick: () => {
      if (confirming) {
        setMenuOpen(false);
        onDelete();
      } else setConfirming(true);
    }
  }, confirming ? 'Click again to delete' : 'Delete'))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    // Sections whose artboards are all deleted have slotIds:[] — step past
    // them to the next non-empty section so ↑/↓ doesn't dead-end.
    const n = sectionOrder.length;
    for (let i = 1; i < n; i++) {
      const ns = sectionOrder[((secIdx + d * i) % n + n) % n];
      const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
      if (first) {
        ctx.setFocus(`${ns}/${first}`);
        return;
      }
    }
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.filter(sid => sectionMeta[sid].slotIds.length).map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "logo-explorations/design-canvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin-inbox/NoellDash.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// NoellDash.jsx — pixel-faithful recreation of noelldash.manus.space
// Sidebar (dark) + cream content area with stats, charts, funnel, lead table.

const {
  useState
} = React;

/* ─── inline Tabler-style icons (1.5px stroke) ──────────── */
const I = {
  home: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M5 12H3l9-9 9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"
  })),
  leads: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M9 5a3 3 0 1 0 6 0 3 3 0 0 0-6 0M3 21v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2"
  })),
  inbox: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M4 13h3l3 3h4l3-3h3M4 13l2-7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2l2 7M4 13v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"
  })),
  spark: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M3 17l6-6 4 4 8-8M21 7h-5M21 7v5"
  })),
  funnel: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M4 4h16l-6 8v6l-4 2v-8z"
  })),
  source: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
  })),
  settings: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 4.5a2 2 0 0 1 3 0l.5.6.8.1a2 2 0 0 1 2.1 2.1l.1.8.6.5a2 2 0 0 1 0 3l-.6.5-.1.8a2 2 0 0 1-2.1 2.1l-.8.1-.5.6a2 2 0 0 1-3 0l-.5-.6-.8-.1a2 2 0 0 1-2.1-2.1l-.1-.8-.6-.5a2 2 0 0 1 0-3l.6-.5.1-.8a2 2 0 0 1 2.1-2.1l.8-.1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
  })),
  bell: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M10 5a2 2 0 1 1 4 0 7 7 0 0 1 4 6v3a4 4 0 0 0 2 3H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6M9 17v1a3 3 0 1 0 6 0v-1"
  })),
  search: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, p), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-6-6"
  })),
  fire: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M12 12c2-3 0-5-1-6 0 4-4 4-4 8a5 5 0 0 0 10 0c0-2-1-3-2-4-1 1-2 2-3 2z"
  })),
  trend: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M3 17l6-6 4 4 8-8M14 7h7v7"
  })),
  arrowUp: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M12 19V5M5 12l7-7 7 7"
  })),
  snow: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07"
  })),
  clock: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, p), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3 2"
  })),
  check: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5L20 7"
  })),
  dollar: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M17 8a4 4 0 0 0-4-3h-2a4 4 0 0 0 0 8h2a4 4 0 0 1 0 8h-2a4 4 0 0 1-4-3M12 3v18"
  })),
  upload: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M12 17V3M5 10l7-7 7 7M5 21h14"
  })),
  plus: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })),
  layers: p => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, p), /*#__PURE__*/React.createElement("path", {
    d: "M12 4 2 9l10 5 10-5zM2 14l10 5 10-5M2 19l10 5 10-5"
  }))
};
const SVG = props => ({
  width: 16,
  height: 16,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...props
});

/* ─── sidebar ─────────────────────────────────────────────── */
function Sidebar({
  active = "leads"
}) {
  const items = [{
    id: "home",
    icon: "home",
    label: "Overview",
    count: null
  }, {
    id: "leads",
    icon: "leads",
    label: "Lead Pipeline",
    count: "147"
  }, {
    id: "inbox",
    icon: "inbox",
    label: "Inbox",
    count: "24"
  }, {
    id: "score",
    icon: "spark",
    label: "AI Score",
    count: null
  }, {
    id: "funnel",
    icon: "funnel",
    label: "Conversion",
    count: null
  }, {
    id: "source",
    icon: "source",
    label: "Lead Sources",
    count: null
  }, {
    id: "settings",
    icon: "settings",
    label: "Settings",
    count: null
  }];
  return /*#__PURE__*/React.createElement("aside", {
    className: "sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "disc"
  }, "N"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, "Noell Dash"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "Lead Intelligence"))), /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, items.map(it => {
    const Icon = I[it.icon];
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      className: "nav-item " + (active === it.id ? "active" : "")
    }, /*#__PURE__*/React.createElement(Icon, SVG()), /*#__PURE__*/React.createElement("span", null, it.label), it.count && /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, it.count));
  })), /*#__PURE__*/React.createElement("div", {
    className: "side-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "user"
  }, "Nikki Noell"), /*#__PURE__*/React.createElement("div", {
    className: "role"
  }, "Super admin \xB7 ops@"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "opsbynoell.com \u2192")));
}

/* ─── topbar ─────────────────────────────────────────────── */
function TopBar() {
  const [tf, setTf] = useState("7D");
  const [view, setView] = useState("Table");
  return /*#__PURE__*/React.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Lead Pipeline"), /*#__PURE__*/React.createElement("div", {
    className: "crumb"
  }, "Live lead intelligence \xB7 147 active leads \xB7 24 unread")), /*#__PURE__*/React.createElement("div", {
    className: "topbar-actions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tfilter"
  }, ["7D", "30D", "90D", "All Time"].map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    className: tf === p ? "active" : "",
    onClick: () => setTf(p)
  }, p))), /*#__PURE__*/React.createElement("div", {
    className: "vtoggle"
  }, ["Table", "Kanban"].map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    className: view === p ? "active" : "",
    onClick: () => setView(p)
  }, p))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-wine"
  }, /*#__PURE__*/React.createElement(I.plus, SVG({
    width: 13,
    height: 13
  })), " Quick Enroll"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-lilac"
  }, /*#__PURE__*/React.createElement(I.spark, SVG({
    width: 13,
    height: 13
  })), " Score All"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-plum"
  }, /*#__PURE__*/React.createElement(I.upload, SVG({
    width: 13,
    height: 13
  })), " Export CSV")));
}

/* ─── stat row ───────────────────────────────────────────── */
function StatRow() {
  const stats = [{
    label: "Hot Leads",
    icon: "fire",
    num: "23",
    sub: "+4 this week",
    color: "var(--nd-wine)"
  }, {
    label: "Warm Leads",
    icon: "trend",
    num: "58",
    sub: "+12 this week"
  }, {
    label: "Cold Leads",
    icon: "layers",
    num: "66",
    sub: "tracked"
  }, {
    label: "Avg Score",
    icon: "spark",
    num: "68.4",
    sub: "+3.1 vs last week"
  }, {
    label: "Avg Response",
    icon: "clock",
    num: "4m 12s",
    sub: "under 5m target"
  }, {
    label: "Pipeline Value",
    icon: "dollar",
    num: "$184k",
    sub: "weighted, 30d"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "stat-row"
  }, stats.map(s => {
    const Ic = I[s.icon];
    return /*#__PURE__*/React.createElement("div", {
      className: "stat",
      key: s.label
    }, /*#__PURE__*/React.createElement("div", {
      className: "label"
    }, /*#__PURE__*/React.createElement("span", {
      className: "icon",
      style: {
        color: s.color || "var(--nd-fg-muted)"
      }
    }, /*#__PURE__*/React.createElement(Ic, SVG({
      width: 13,
      height: 13
    }))), /*#__PURE__*/React.createElement("span", {
      className: "txt"
    }, s.label)), /*#__PURE__*/React.createElement("div", {
      className: "num"
    }, s.num), /*#__PURE__*/React.createElement("div", {
      className: "sub"
    }, s.sub));
  }));
}

/* ─── charts ─────────────────────────────────────────────── */
function HotLeadsChart() {
  const pts = [12, 14, 18, 16, 20, 22, 23];
  const max = 26,
    min = 8;
  const w = 460,
    h = 130,
    pad = 8;
  const step = (w - pad * 2) / (pts.length - 1);
  const y = v => h - pad - (v - min) / (max - min) * (h - pad * 2);
  const x = i => pad + i * step;
  const path = pts.map((v, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(v)}`).join(" ");
  const fill = `${path} L ${x(pts.length - 1)} ${h - pad} L ${x(0)} ${h - pad} Z`;
  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Hot leads \u2014 last 7 days"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: "var(--nd-fg)",
      letterSpacing: "-0.015em",
      marginTop: 6
    }
  }, "+11 net new")), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, "Updated 2m ago")), /*#__PURE__*/React.createElement("svg", {
    className: "chart-svg",
    viewBox: `0 0 ${w} ${h}`,
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "hot-fill",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#6a2c3e",
    stopOpacity: "0.18"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#6a2c3e",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: fill,
    fill: "url(#hot-fill)"
  }), /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: "#6a2c3e",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), pts.map((v, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: x(i),
    cy: y(v),
    r: "2.5",
    fill: "#6a2c3e"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 8,
      fontFamily: "var(--nd-mono)",
      fontSize: 10,
      color: "var(--nd-fg-muted)",
      letterSpacing: "0.08em"
    }
  }, ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(d => /*#__PURE__*/React.createElement("span", {
    key: d
  }, d))));
}
function LeadSourceCard() {
  const rows = [{
    name: "Referral",
    pct: 38
  }, {
    name: "Google Ads",
    pct: 24
  }, {
    name: "Organic",
    pct: 18
  }, {
    name: "LinkedIn",
    pct: 12
  }, {
    name: "Direct",
    pct: 8
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Lead source breakdown")), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, "Last 30d")), /*#__PURE__*/React.createElement("div", {
    className: "source-row"
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    className: "source-line",
    key: r.name
  }, /*#__PURE__*/React.createElement("div", {
    className: "source-name"
  }, r.name), /*#__PURE__*/React.createElement("div", {
    className: "bar-track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bar-fill",
    style: {
      width: r.pct + "%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "source-pct"
  }, r.pct, "%")))));
}

/* ─── funnel ─────────────────────────────────────────────── */
function FunnelRow() {
  const steps = [{
    lbl: "Hot",
    icon: "fire",
    num: 23,
    sub: "16% of total",
    cls: "hot"
  }, {
    lbl: "Contacted",
    icon: "trend",
    num: 41,
    sub: "within 5m",
    cls: "contacted"
  }, {
    lbl: "Booked",
    icon: "clock",
    num: 18,
    sub: "this week",
    cls: "booked"
  }, {
    lbl: "Closed",
    icon: "check",
    num: 7,
    sub: "30d trailing",
    cls: "closed"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "funnel-card"
  }, steps.map(s => {
    const Ic = I[s.icon];
    return /*#__PURE__*/React.createElement("div", {
      className: "step",
      key: s.lbl
    }, /*#__PURE__*/React.createElement("div", {
      className: "lbl"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--nd-fg-muted)"
      }
    }, /*#__PURE__*/React.createElement(Ic, SVG({
      width: 13,
      height: 13
    }))), /*#__PURE__*/React.createElement("span", {
      className: "txt"
    }, s.lbl)), /*#__PURE__*/React.createElement("div", {
      className: "num " + s.cls
    }, s.num), /*#__PURE__*/React.createElement("div", {
      className: "sub"
    }, s.sub));
  }));
}

/* ─── filter bar ─────────────────────────────────────────── */
function FilterBar() {
  const [p1, setP1] = useState(false);
  const [archived, setArchived] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "filterbar"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: 1,
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement(I.search, SVG({
    width: 14,
    height: 14,
    style: {
      position: "absolute",
      left: 11,
      top: 10,
      color: "var(--nd-fg-muted)"
    }
  })), /*#__PURE__*/React.createElement("input", {
    className: "field field-search",
    placeholder: "Search by name, email, phone...",
    style: {
      paddingLeft: 32,
      width: "100%"
    }
  })), /*#__PURE__*/React.createElement("select", {
    className: "field"
  }, /*#__PURE__*/React.createElement("option", null, "All Agents"), /*#__PURE__*/React.createElement("option", null, "Noell Support"), /*#__PURE__*/React.createElement("option", null, "Front Desk"), /*#__PURE__*/React.createElement("option", null, "Care")), /*#__PURE__*/React.createElement("select", {
    className: "field"
  }, /*#__PURE__*/React.createElement("option", null, "All Sources"), /*#__PURE__*/React.createElement("option", null, "Referral"), /*#__PURE__*/React.createElement("option", null, "Google Ads"), /*#__PURE__*/React.createElement("option", null, "Organic")), /*#__PURE__*/React.createElement("select", {
    className: "field"
  }, /*#__PURE__*/React.createElement("option", null, "All Priorities"), /*#__PURE__*/React.createElement("option", null, "P1"), /*#__PURE__*/React.createElement("option", null, "P2"), /*#__PURE__*/React.createElement("option", null, "P3")), /*#__PURE__*/React.createElement("button", {
    className: "toggle-pill " + (p1 ? "on" : ""),
    onClick: () => setP1(!p1)
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "P1 Only"), /*#__PURE__*/React.createElement("button", {
    className: "toggle-pill " + (archived ? "on" : ""),
    onClick: () => setArchived(!archived)
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Show Archived"));
}

/* ─── lead table ─────────────────────────────────────────── */
const LEADS = [{
  name: "Marcus Reeves",
  email: "marcus.reeves@gmail.com",
  score: 94,
  priority: "P1",
  intent: "HOT",
  source: "Referral",
  agent: "Front Desk",
  timeMin: 0.2,
  value: 8400
}, {
  name: "Priya Anand",
  email: "priya@lumen-medspa.com",
  score: 88,
  priority: "P1",
  intent: "HOT",
  source: "Google Ads",
  agent: "Support",
  timeMin: 3,
  value: 6200
}, {
  name: "Karen Whitley",
  email: "karen.whitley@fairview.co",
  score: 86,
  priority: "P1",
  intent: "HOT",
  source: "Direct",
  agent: "Front Desk",
  timeMin: 18,
  value: 5800
}, {
  name: "Daniel Cho",
  email: "daniel.cho@northbay.com",
  score: 74,
  priority: "P2",
  intent: "WARM",
  source: "Organic",
  agent: "Care",
  timeMin: 12,
  value: 4100
}, {
  name: "Tomás Ortega",
  email: "tomas@field.co",
  score: 71,
  priority: "P2",
  intent: "WARM",
  source: "LinkedIn",
  agent: "Support",
  timeMin: 60,
  value: 3800
}, {
  name: "Avery Lin",
  email: "avery.lin@inboundco.com",
  score: 68,
  priority: "P2",
  intent: "WARM",
  source: "Referral",
  agent: "Care",
  timeMin: 120,
  value: 3400
}, {
  name: "James Park",
  email: "jpark@field.co",
  score: 52,
  priority: "P3",
  intent: "COLD",
  source: "Google Ads",
  agent: "Support",
  timeMin: 300,
  value: 1900
}, {
  name: "Sophie Kane",
  email: "sophie@kanecollective.com",
  score: 48,
  priority: "P3",
  intent: "COLD",
  source: "Organic",
  agent: "Front Desk",
  timeMin: 1440,
  value: 1600
}, {
  name: "Hector Vance",
  email: "hector@vanceaccounting.com",
  score: 44,
  priority: "P3",
  intent: "COLD",
  source: "Direct",
  agent: "Care",
  timeMin: 2880,
  value: 1200
}];
function scoreClass(s) {
  if (s >= 90) return "s-elite";
  if (s >= 75) return "s-high";
  if (s >= 60) return "s-mid";
  return "s-low";
}
function timeClass(m) {
  if (m < 5) return "t-fresh";
  if (m <= 30) return "t-mid";
  return "t-stale";
}
function timeLabel(m) {
  if (m < 1) return Math.round(m * 60) + "s";
  if (m < 60) return Math.round(m) + "m";
  if (m < 1440) return Math.round(m / 60) + "h";
  return Math.round(m / 1440) + "d";
}
function agentClass(a) {
  return "agent-" + a.toLowerCase().replace(/\s+/g, "");
}
function intentIcon(intent) {
  if (intent === "HOT") return /*#__PURE__*/React.createElement(I.fire, SVG({
    width: 11,
    height: 11,
    strokeWidth: 2
  }));
  if (intent === "WARM") return /*#__PURE__*/React.createElement(I.arrowUp, SVG({
    width: 11,
    height: 11,
    strokeWidth: 2
  }));
  return /*#__PURE__*/React.createElement(I.snow, SVG({
    width: 11,
    height: 11,
    strokeWidth: 2
  }));
}
function LeadTable() {
  return /*#__PURE__*/React.createElement("div", {
    className: "table-card"
  }, /*#__PURE__*/React.createElement("table", {
    className: "lead-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Lead"), /*#__PURE__*/React.createElement("th", {
    className: "wine"
  }, "AI Score"), /*#__PURE__*/React.createElement("th", null, "Priority"), /*#__PURE__*/React.createElement("th", null, "Intent"), /*#__PURE__*/React.createElement("th", null, "Source"), /*#__PURE__*/React.createElement("th", null, "Agent"), /*#__PURE__*/React.createElement("th", null, "Last Touch"), /*#__PURE__*/React.createElement("th", null, "Value"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }))), /*#__PURE__*/React.createElement("tbody", null, LEADS.map(l => /*#__PURE__*/React.createElement("tr", {
    key: l.email
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: "lead-name"
  }, l.name), /*#__PURE__*/React.createElement("div", {
    className: "lead-email"
  }, l.email)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "score-num " + scoreClass(l.score)
  }, l.score)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "pri pri-" + l.priority.toLowerCase()
  }, l.priority)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "intent intent-" + l.intent.toLowerCase()
  }, intentIcon(l.intent), l.intent)), /*#__PURE__*/React.createElement("td", {
    className: "cell-muted"
  }, l.source), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "agent " + agentClass(l.agent)
  }, l.agent)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "cell-time " + timeClass(l.timeMin)
  }, timeLabel(l.timeMin))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "cell-value"
  }, "$", (l.value / 1000).toFixed(1), "k")), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-score"
  }, "Score")))))), /*#__PURE__*/React.createElement("div", {
    className: "table-foot"
  }, /*#__PURE__*/React.createElement("div", null, "Showing 9 of 147 leads"), /*#__PURE__*/React.createElement("div", {
    className: "pager"
  }, /*#__PURE__*/React.createElement("button", null, "\u2039"), /*#__PURE__*/React.createElement("button", {
    className: "active"
  }, "1"), /*#__PURE__*/React.createElement("button", null, "2"), /*#__PURE__*/React.createElement("button", null, "3"), /*#__PURE__*/React.createElement("button", null, "\u2026"), /*#__PURE__*/React.createElement("button", null, "17"), /*#__PURE__*/React.createElement("button", null, "\u203A"))));
}

/* ─── app ─────────────────────────────────────────────────── */
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: "leads"
  }), /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement(StatRow, null), /*#__PURE__*/React.createElement("div", {
    className: "chart-row"
  }, /*#__PURE__*/React.createElement(HotLeadsChart, null), /*#__PURE__*/React.createElement(LeadSourceCard, null)), /*#__PURE__*/React.createElement(FunnelRow, null), /*#__PURE__*/React.createElement(FilterBar, null), /*#__PURE__*/React.createElement(LeadTable, null))));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin-inbox/NoellDash.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Hero.jsx
try { (() => {
// Hero.jsx — signature hero with eyebrow, italic-accent headline, ambient rings,
// and the iPhone-mockup card preview.
// Lifted from: src/components/hero.tsx
function Hero({
  eyebrow = "A systems agency · Ops by Noell",
  headlineStart = "The operations layer your business",
  headlineMid = "is",
  headlineAccent = "missing.",
  body = "Every missed call, unanswered inquiry, and unprepared B2B buyer is revenue that left quietly. Ops by Noell builds the operational layer that catches it. Done for you, live in 14 days, managed by our team.",
  footnote = "Service businesses and B2B companies. Two tracks. One standard.",
  primaryCta = {
    label: "Get Your Free Revenue Signal Report",
    href: "#"
  },
  secondaryCta = {
    label: "See How It Works",
    href: "#"
  }
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1280,
      margin: "80px auto 80px",
      padding: "128px 32px 0",
      borderRadius: 24,
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
      overflow: "hidden",
      background: "var(--gradient-hero-wine)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow eyebrow-muted fade-in fade-in-delay-1",
    style: {
      position: "relative",
      zIndex: 20,
      marginBottom: 24
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "headline headline-h1 fade-in fade-in-delay-2",
    style: {
      position: "relative",
      zIndex: 20,
      textAlign: "center",
      maxWidth: 960,
      marginBottom: 16
    }
  }, headlineStart, " ", /*#__PURE__*/React.createElement("br", null), " ", headlineMid, " ", /*#__PURE__*/React.createElement("span", {
    className: "italic-accent"
  }, headlineAccent)), /*#__PURE__*/React.createElement("p", {
    className: "body-lead fade-in fade-in-delay-3",
    style: {
      position: "relative",
      zIndex: 20,
      maxWidth: 640,
      marginTop: 24,
      padding: "0 16px",
      textAlign: "center"
    }
  }, body), /*#__PURE__*/React.createElement("p", {
    className: "caption fade-in fade-in-delay-4",
    style: {
      position: "relative",
      zIndex: 20,
      maxWidth: 560,
      marginTop: 12,
      color: "rgba(245, 234, 224, 0.70)",
      textAlign: "center"
    }
  }, footnote), /*#__PURE__*/React.createElement("div", {
    className: "fade-in fade-in-delay-5",
    style: {
      position: "relative",
      zIndex: 20,
      display: "flex",
      gap: 12,
      marginTop: 40,
      marginBottom: 48,
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: primaryCta.href,
    className: "os-btn os-btn-primary"
  }, primaryCta.label), /*#__PURE__*/React.createElement("a", {
    href: secondaryCta.href,
    className: "os-btn os-btn-secondary"
  }, secondaryCta.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      minHeight: 380,
      paddingTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IphonePreview, null)), /*#__PURE__*/React.createElement(AmbientRings, null)));
}
function IphonePreview() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280,
      height: 380,
      borderRadius: 36,
      background: "linear-gradient(to bottom, #1F1219, #271520)",
      border: "8px solid #1a0d12",
      boxShadow: "0 40px 80px -10px rgba(0,0,0,0.50), 0 0 0 1px rgba(245,234,224,0.05)",
      padding: 14,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      position: "relative",
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "0 8px 4px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot dot-online",
    style: {
      width: 8,
      height: 8
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "rgba(245,234,224,0.70)",
      fontWeight: 500
    }
  }, "System active")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      textTransform: "uppercase",
      letterSpacing: "0.18em",
      color: "rgba(245,234,224,0.65)",
      fontFamily: "var(--font-mono)"
    }
  }, "today")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#271520",
      borderRadius: 16,
      padding: 12,
      border: "1px solid rgba(245,234,224,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      textTransform: "uppercase",
      letterSpacing: "0.18em",
      color: "rgba(139,42,66,0.85)",
      fontWeight: 600,
      fontFamily: "var(--font-mono)"
    }
  }, "New inquiry"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#F5EAE0",
      fontWeight: 500,
      marginTop: 2
    }
  }, "Inbound lead"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "rgba(245,234,224,0.55)"
    }
  }, "Qualified \xB7 12s")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      padding: "3px 8px",
      borderRadius: 99,
      background: "rgba(139,42,66,0.25)",
      color: "#B5415E",
      textTransform: "uppercase",
      letterSpacing: "0.15em",
      fontFamily: "var(--font-mono)",
      height: "fit-content"
    }
  }, "triggered")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      background: "#301A26",
      borderRadius: 10,
      padding: "8px 10px",
      fontSize: 11,
      color: "rgba(245,234,224,0.80)",
      lineHeight: 1.45
    }
  }, "\"Thanks for reaching out. A few quick questions to confirm we are the right fit.\"")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#8B2A42",
      borderRadius: 16,
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      textTransform: "uppercase",
      letterSpacing: "0.18em",
      color: "rgba(245,234,224,0.70)",
      fontWeight: 600,
      fontFamily: "var(--font-mono)"
    }
  }, "Revenue recovered"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 32,
      fontWeight: 700,
      color: "#F5EAE0",
      marginTop: 2,
      letterSpacing: "-0.01em"
    }
  }, "$4,200"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "rgba(245,234,224,0.65)"
    }
  }, "from 6 missed inquiries \xB7 30 days")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#301A26",
      borderRadius: 16,
      padding: 12,
      border: "1px solid rgba(139,42,66,0.10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      textTransform: "uppercase",
      letterSpacing: "0.18em",
      color: "rgba(139,42,66,0.85)",
      fontWeight: 600,
      fontFamily: "var(--font-mono)"
    }
  }, "Meeting confirmed"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#F5EAE0",
      fontWeight: 500,
      marginTop: 2
    }
  }, "Tuesday \xB7 10:00 AM"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "rgba(245,234,224,0.65)"
    }
  }, "Discovery call \xB7 30 min")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      padding: "3px 8px",
      borderRadius: 99,
      background: "#8B2A42",
      color: "#F5EAE0",
      textTransform: "uppercase",
      letterSpacing: "0.15em",
      fontFamily: "var(--font-mono)"
    }
  }, "booked"))));
}
function AmbientRings() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 900,
      height: 900,
      borderRadius: 9999,
      border: "1px solid rgba(255, 255, 255, 0.20)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 680,
      height: 680,
      borderRadius: 9999,
      border: "1px solid rgba(255, 255, 255, 0.40)",
      background: "radial-gradient(circle at center, rgba(251,240,235,1) 0%, rgba(251,240,235,0.55) 20%, rgba(255,255,255,0.35) 40%, rgba(255,255,255,0) 60%)",
      animation: "breathe 2.5s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 460,
      height: 460,
      borderRadius: 9999,
      border: "1px solid rgba(255, 255, 255, 0.10)",
      background: "rgba(39,21,32,0.05)",
      boxShadow: "0 0 200px 80px rgba(255,255,255,0.08)",
      animation: "breathe-2 3s ease-in-out infinite"
    }
  }));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Navbar.jsx
try { (() => {
// Navbar.jsx — fixed pill-shaped navbar with scroll-responsive width
// Lifted from: src/components/navbar.tsx
const {
  useState,
  useEffect
} = React;
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const menus = {
    "who": [["Service Businesses", "Consultants, agencies, salons, med spas, and more"], ["B2B & SaaS", "SaaS, AI vendors, and teams selling into enterprise"]],
    "systems": [["Systems Overview", "The full operations platform"], ["Agents", "Noell Support, Front Desk & Care"], ["Predictive Intelligence", "Signals before revenue leaves"], ["Noell Pipeline", "B2B sales operations"]],
    "platform": [["Lead Intelligence Dashboard", "Live leads, conversations, and conversion funnel", true], ["B2B Pipeline Dashboard", "Deal stages, ICP scores, and pipeline value", true], ["ROI Calculator", "Estimate your missed revenue"]]
  };
  const navStyle = {
    width: scrolled ? "70%" : "88%",
    background: scrolled ? "rgba(31, 18, 25, 0.97)" : "rgba(31, 18, 25, 0.88)",
    backdropFilter: scrolled ? "blur(12px)" : "blur(8px)",
    transform: scrolled ? "translateY(4px)" : "translateY(0)",
    boxShadow: scrolled ? "0 10px 30px -10px rgba(28,25,23,0.20)" : "none",
    transition: "all 300ms ease-in-out"
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "fixed",
      top: 8,
      left: 0,
      right: 0,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    onMouseLeave: () => setOpenMenu(null),
    style: {
      ...navStyle,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 20px",
      borderRadius: 9999,
      border: "1px solid rgba(245, 234, 224, 0.10)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "flex",
      alignItems: "center",
      padding: "4px 4px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-ops-by-noell-cream-text.png",
    alt: "Ops by Noell",
    style: {
      height: 44,
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, [["Who We Help", "who"], ["Systems", "systems"], ["Platform", "platform"]].map(([label, key]) => /*#__PURE__*/React.createElement("div", {
    key: key,
    style: {
      position: "relative"
    },
    onMouseEnter: () => setOpenMenu(key)
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      padding: "6px 12px",
      borderRadius: 9999,
      fontSize: 14,
      fontWeight: 500,
      color: openMenu === key ? "#B5415E" : "rgba(245, 234, 224, 0.80)",
      background: openMenu === key ? "rgba(139, 42, 66, 0.15)" : "transparent",
      transition: "all 150ms"
    }
  }, label, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    style: {
      transform: openMenu === key ? "rotate(180deg)" : "rotate(0)",
      transition: "transform 200ms"
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))), openMenu === key && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginTop: 12,
      width: key === "platform" ? 320 : 288,
      borderRadius: 16,
      border: "1px solid rgba(245, 234, 224, 0.10)",
      background: "rgba(31, 18, 25, 0.98)",
      backdropFilter: "blur(16px)",
      boxShadow: "0 20px 40px -10px rgba(28, 25, 23, 0.50)",
      padding: 8,
      animation: "fadeUp 180ms ease-out"
    }
  }, menus[key].map(([n, d, ext]) => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      display: "flex",
      flexDirection: "column",
      padding: "10px 14px",
      borderRadius: 12,
      transition: "background 150ms"
    },
    onMouseEnter: e => e.currentTarget.style.background = "rgba(139, 42, 66, 0.10)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "#F5EAE0",
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, n, ext && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      textTransform: "uppercase",
      letterSpacing: "0.15em",
      background: "rgba(139, 42, 66, 0.15)",
      color: "#B5415E",
      padding: "2px 6px",
      borderRadius: 99,
      fontWeight: 600
    }
  }, "Live")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "rgba(245, 234, 224, 0.55)",
      marginTop: 2
    }
  }, d)))))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      padding: "6px 12px",
      borderRadius: 9999,
      fontSize: 14,
      fontWeight: 500,
      color: "rgba(245, 234, 224, 0.80)"
    }
  }, "Pricing"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      padding: "6px 12px",
      borderRadius: 9999,
      fontSize: 14,
      fontWeight: 500,
      color: "rgba(245, 234, 224, 0.80)"
    }
  }, "About")), !scrolled && /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "os-btn os-btn-primary",
    style: {
      height: 40,
      padding: "0 20px",
      fontSize: 13
    }
  }, "Free Revenue Signal Report")));
}
window.Navbar = Navbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Sections.jsx
try { (() => {
// Sections.jsx — the homepage sections: AudienceSplit, FounderQuote, Systems, CTABlock
// Lifted from: src/components/{founder-quote,cta,systems,pci-band}.tsx + src/app/page.tsx

function AudienceSplit() {
  const items = [{
    track: "Track 01",
    title: "Service-Based Businesses",
    body: "Consultants, agencies, coaches, salons, med spas, dental practices, and professional service businesses. You deliver excellent work. Every missed call, slow follow-up, and lapsed client is revenue your front desk is losing silently.",
    bullets: ["Every missed call recovered within 5 minutes via SMS", "Lapsed clients reactivated automatically before they book elsewhere", "Live lead intelligence dashboard included with every system"],
    cta: "See how it works for service businesses",
    featured: false
  }, {
    track: "Track 02",
    title: "B2B & SaaS",
    body: "SaaS companies, AI vendors, and tech startups selling into enterprise accounts. Your pitch lands in the boardroom. Then procurement visits your website. In seven seconds, the deal either holds or collapses.",
    bullets: ["Predictive Customer Intelligence surfaces accounts before they move", "Digital presence rebuilt to survive the procurement research window", "Live B2B pipeline dashboard tracks every deal and ICP score"],
    cta: "See how it works for B2B companies",
    featured: true
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "narrow",
    style: {
      maxWidth: 1080
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      marginBottom: 16
    }
  }, "Who we work with"), /*#__PURE__*/React.createElement("h2", {
    className: "headline headline-h2"
  }, "Two types of business. ", /*#__PURE__*/React.createElement("span", {
    className: "italic-accent"
  }, "One operational standard.")), /*#__PURE__*/React.createElement("p", {
    className: "body-lead",
    style: {
      marginTop: 20,
      maxWidth: 560,
      margin: "20px auto 0",
      textAlign: "center"
    }
  }, "Tell us which describes you and we will show you exactly what we build.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 24,
      gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
      alignItems: "stretch"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.track,
    href: "#",
    className: "card " + (it.featured ? "card-featured" : ""),
    style: {
      display: "flex",
      flexDirection: "column",
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      color: "rgba(139,42,66,0.85)",
      letterSpacing: "0.20em",
      marginBottom: 12
    }
  }, it.track), /*#__PURE__*/React.createElement("h3", {
    className: "headline headline-h3",
    style: {
      marginBottom: 16,
      fontSize: 28
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      marginBottom: 24,
      flex: 1,
      color: "rgba(245, 234, 224, 0.75)"
    }
  }, it.body), /*#__PURE__*/React.createElement("ul", {
    className: "check-list",
    style: {
      marginBottom: 28
    }
  }, it.bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b
  }, /*#__PURE__*/React.createElement("span", {
    className: "check"
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "#B5415E",
      fontSize: 13,
      fontWeight: 500
    }
  }, it.cta, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\u2192")))))));
}
function FounderQuote() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "40px 0",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: "0 auto",
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 22,
      border: "1px solid rgba(245, 234, 224, 0.10)",
      background: "var(--gradient-founder-card)",
      boxShadow: "var(--shadow-raised)",
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: "280px 1fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 320
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/about-noell-family.jpg",
    alt: "James & Nikki Noell",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "top"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "40px 40px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      marginBottom: 16
    }
  }, "James & Nikki Noell \xB7 Mission Viejo, CA"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 24,
      lineHeight: 1.25,
      color: "#F5EAE0",
      letterSpacing: "-0.01em"
    }
  }, "You built this to work with clients. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "#B5415E"
    }
  }, "Not to chase them.")), /*#__PURE__*/React.createElement("p", {
    className: "body-sm",
    style: {
      marginTop: 16
    }
  }, "We build, install, and run the system so the calls get answered, the follow-ups go out, and your calendar stays full. You stay focused on the work in front of you. We do the quiet part."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot dot-online",
    style: {
      width: 6,
      height: 6
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      textTransform: "uppercase",
      letterSpacing: "0.28em",
      color: "rgba(245,234,224,0.60)"
    }
  }, "The Noells \xB7 Ops by Noell")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 11,
      color: "rgba(139,42,66,0.80)",
      textDecoration: "underline",
      textUnderlineOffset: 4,
      textDecorationColor: "rgba(139,42,66,0.30)"
    }
  }, "Our story \u2192"))))));
}
function Systems() {
  const agents = [{
    name: "Noell Support",
    role: "First touch",
    desc: "Picks up when you can't. Qualifies, books, and routes warm intent before it cools off."
  }, {
    name: "Noell Front Desk",
    role: "Intake & booking",
    desc: "Catches missed calls inside 5 minutes via SMS. Confirms, reschedules, and keeps the calendar full."
  }, {
    name: "Noell Care",
    role: "Reactivation",
    desc: "Brings lapsed clients back automatically, before they book somewhere else."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      marginBottom: 16
    }
  }, "The system"), /*#__PURE__*/React.createElement("h2", {
    className: "headline headline-h2"
  }, "Three agents. ", /*#__PURE__*/React.createElement("span", {
    className: "italic-accent"
  }, "One operations layer."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 20,
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))"
    }
  }, agents.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: a.name,
    className: "card",
    style: {
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      textTransform: "uppercase",
      letterSpacing: "0.25em",
      color: "rgba(245,234,224,0.40)"
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9,
      textTransform: "uppercase",
      letterSpacing: "0.22em",
      padding: "3px 8px",
      borderRadius: 99,
      background: "rgba(139,42,66,0.12)",
      color: "#B5415E"
    }
  }, a.role)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 26,
      fontWeight: 600,
      color: "#F5EAE0",
      marginBottom: 12,
      letterSpacing: "-0.01em"
    }
  }, a.name), /*#__PURE__*/React.createElement("p", {
    className: "body-sm"
  }, a.desc))))));
}
function CTABlock() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "64px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1080,
      margin: "0 auto",
      borderRadius: 32,
      padding: "80px 32px",
      background: "var(--gradient-cta-block)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -96,
      right: -96,
      width: 384,
      height: 384,
      borderRadius: 9999,
      background: "rgba(39,21,32,0.05)",
      filter: "blur(48px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: -96,
      left: -96,
      width: 384,
      height: 384,
      borderRadius: 9999,
      background: "rgba(39,21,32,0.05)",
      filter: "blur(48px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 10,
      textAlign: "center",
      maxWidth: 600,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow eyebrow-white",
    style: {
      marginBottom: 20
    }
  }, "The first step"), /*#__PURE__*/React.createElement("h2", {
    className: "headline",
    style: {
      fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
      color: "#fff"
    }
  }, "Find out what your operations are", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      fontWeight: 500,
      background: "linear-gradient(to bottom, #F5EAE0, #EBD9CC)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }
  }, "missing.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      color: "rgba(255,255,255,0.70)",
      fontSize: 18,
      maxWidth: 480,
      margin: "24px auto 0",
      lineHeight: 1.55
    }
  }, "In your free Revenue Signal Report, we map the leaks in your operations, front desk, and follow-up system."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: "flex",
      gap: 12,
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "os-btn os-btn-secondary",
    style: {
      background: "#271520",
      color: "#F5EAE0",
      padding: "0 32px"
    }
  }, "Get Your Free Revenue Signal Report"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "os-btn os-btn-ghost-light",
    style: {
      padding: "0 32px"
    }
  }, "See How PCI Works")), /*#__PURE__*/React.createElement("p", {
    className: "trust-line",
    style: {
      marginTop: 32
    }
  }, "No pitch. No pressure. If it's not a fit, we'll say so."))));
}
function Footer() {
  const cols = [{
    title: "Pages",
    links: ["Home", "Systems", "Pricing", "ROI Calculator", "Resources", "Revenue Signal Report", "Digital Readiness Review"]
  }, {
    title: "Service Track",
    links: ["Noell Support", "Noell Front Desk", "Noell Care", "Predictive Customer Intelligence", "For Service Businesses"]
  }, {
    title: "B2B & SaaS",
    links: ["Noell Inbound", "Noell Pipeline", "Noell Account", "For B2B & SaaS", "Digital Readiness Review"]
  }, {
    title: "Legal",
    links: ["Contact", "Privacy Policy", "Terms of Service", "SMS Policy", "Cookie Policy"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      maxWidth: 1280,
      margin: "0 auto 40px",
      borderRadius: 24,
      background: "#301A26",
      border: "1px solid rgba(245, 234, 224, 0.10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "80px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 48,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-ops-by-noell-cream-text.png",
    alt: "Ops by Noell",
    style: {
      height: 48,
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 22,
      fontWeight: 500,
      color: "#F5EAE0",
      marginTop: 24,
      lineHeight: 1.3
    }
  }, "AI-powered operations for service businesses and B2B teams. Built, installed, and managed end-to-end.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
      gap: 48,
      flex: 1,
      minWidth: 360
    }
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      color: "#C4A8A8",
      fontWeight: 500,
      marginBottom: 20
    }
  }, c.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 13,
      color: "rgba(245,234,224,0.70)"
    }
  }, l)))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: 48,
      marginTop: 48,
      borderTop: "1px solid rgba(245,234,224,0.10)",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: "#C4A8A8"
    }
  }, "\xA9 2026 Ops by Noell. Quiet operations for service businesses and B2B teams."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: "#C4A8A8"
    }
  }, "Built for both tracks. Managed end-to-end."))));
}
Object.assign(window, {
  AudienceSplit,
  FounderQuote,
  Systems,
  CTABlock,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/noell-support-chat/SupportChat.jsx
try { (() => {
// SupportChat.jsx — the floating support widget
// Lifted from: src/components/noell-support-chat.tsx
const {
  useState,
  useEffect,
  useRef
} = React;

// Tabler-style stroke icons inline (so kit is self-contained, no CDN)
const IconChat = p => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: p.size || 22,
  height: p.size || 22,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 20l1.3-3.9A8.5 8.5 0 1 1 7.5 19.5L3 20z"
}));
const IconX = p => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: p.size || 18,
  height: p.size || 18,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M18 6 6 18M6 6l12 12"
}));
const IconSend = p => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: p.size || 15,
  height: p.size || 15,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"
}));
const INITIAL = [{
  from: "agent",
  text: "Hi, I'm Noell. I pick up when you can't, book when you're busy, and keep clients coming back."
}];
const CHIPS = ["I'm missing calls", "Book an audit", "What does Noell Support do?"];
const SCRIPTED = {
  "I'm missing calls": "That's exactly what Noell Front Desk fixes. Every missed call gets a personalized SMS inside 5 minutes. Want me to set up a working session to walk your numbers?",
  "Book an audit": "Happy to. The Revenue Signal Report is a free, ~20-minute session. We map the leaks in your front desk and follow-up. What's the best phone or email to reach you?",
  "What does Noell Support do?": "I handle new-prospect intake. First response, qualification, routing, and human handoff. The system is built, installed, and managed by James and Nikki Noell."
};
function SupportChat({
  initialState = "pill"
}) {
  // initialState: "pill" | "orb" | "panel" | "conversation" | "fallback"
  const [mode, setMode] = useState(initialState);
  const [messages, setMessages] = useState(initialState === "conversation" ? [INITIAL[0], {
    from: "visitor",
    text: "I'm missing calls"
  }, {
    from: "agent",
    text: SCRIPTED["I'm missing calls"]
  }] : INITIAL);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const threadRef = useRef(null);

  // resync state on toggle from parent
  useEffect(() => {
    setMode(initialState);
    setMessages(initialState === "conversation" ? [INITIAL[0], {
      from: "visitor",
      text: "I'm missing calls"
    }, {
      from: "agent",
      text: SCRIPTED["I'm missing calls"]
    }] : INITIAL);
  }, [initialState]);
  useEffect(() => {
    if (threadRef.current) threadRef.current.scrollTop = threadRef.current.scrollHeight;
  }, [messages, typing]);
  function handleChip(c) {
    setMessages(m => [...m, {
      from: "visitor",
      text: c
    }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(m => [...m, {
        from: "agent",
        text: SCRIPTED[c]
      }]);
    }, 900);
  }
  function handleSend() {
    const t = input.trim();
    if (!t) return;
    setMessages(m => [...m, {
      from: "visitor",
      text: t
    }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(m => [...m, {
        from: "agent",
        text: "Got it. A teammate is going to follow up shortly. Anything else I should know?"
      }]);
    }, 1100);
  }
  const isPanel = mode === "panel" || mode === "conversation" || mode === "fallback";
  return /*#__PURE__*/React.createElement(React.Fragment, null, isPanel && /*#__PURE__*/React.createElement("div", {
    className: "chat-panel",
    role: "dialog",
    "aria-label": "Noell Support"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chat-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatar"
  }, "N"), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, "Noell Support"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " New prospect intake \xB7 Online")), /*#__PURE__*/React.createElement("button", {
    className: "close",
    onClick: () => setMode("pill"),
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(IconX, null))), /*#__PURE__*/React.createElement("div", {
    className: "chat-thread",
    ref: threadRef
  }, messages.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "bubble " + (m.from === "agent" ? "bubble-agent" : "bubble-visitor")
  }, m.text)), typing && /*#__PURE__*/React.createElement("div", {
    className: "typing"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), messages.length === 1 && !typing && /*#__PURE__*/React.createElement("div", {
    className: "starter-chips"
  }, CHIPS.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: "chip",
    onClick: () => handleChip(c)
  }, c)))), /*#__PURE__*/React.createElement("div", {
    className: "chat-composer"
  }, mode === "fallback" ? /*#__PURE__*/React.createElement(FallbackForm, null) : /*#__PURE__*/React.createElement("div", {
    className: "composer-row"
  }, /*#__PURE__*/React.createElement("input", {
    className: "composer-input",
    placeholder: "Type a message...",
    value: input,
    onChange: e => setInput(e.target.value),
    onKeyDown: e => e.key === "Enter" && handleSend()
  }), /*#__PURE__*/React.createElement("button", {
    className: "composer-send",
    onClick: handleSend,
    disabled: !input.trim(),
    "aria-label": "Send"
  }, /*#__PURE__*/React.createElement(IconSend, null))), /*#__PURE__*/React.createElement("p", {
    className: "legal"
  }, "Noell Support handles new-prospect intake. First response, qualification, routing, and human handoff."), /*#__PURE__*/React.createElement("p", {
    className: "legal"
  }, "By chatting, you agree to our ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Privacy Policy"), " and ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Terms"), "."))), mode === "pill" && /*#__PURE__*/React.createElement("button", {
    className: "launcher-pill",
    onClick: () => setMode("panel")
  }, /*#__PURE__*/React.createElement("span", {
    className: "orb"
  }, /*#__PURE__*/React.createElement(IconChat, {
    size: 14
  })), "Have a question? Chat with Noell"), mode === "orb" && /*#__PURE__*/React.createElement("button", {
    className: "launcher-orb",
    onClick: () => setMode("panel"),
    "aria-label": "Open chat"
  }, /*#__PURE__*/React.createElement(IconChat, {
    size: 22
  })), isPanel && /*#__PURE__*/React.createElement("button", {
    className: "launcher-orb",
    onClick: () => setMode("pill"),
    "aria-label": "Close chat"
  }, /*#__PURE__*/React.createElement(IconX, {
    size: 22
  })));
}
function FallbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  if (sent) {
    return /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: "rgba(245, 234, 224, 0.80)",
        textAlign: "center",
        padding: "8px 0"
      }
    }, "Thanks, we'll be in touch soon.");
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "composer-input",
    placeholder: "Your name",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    className: "composer-row"
  }, /*#__PURE__*/React.createElement("input", {
    className: "composer-input",
    placeholder: "Email address",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    className: "composer-send",
    disabled: !name.trim() || !email.trim(),
    onClick: () => setSent(true),
    style: {
      width: "auto",
      padding: "0 16px",
      fontSize: 13
    }
  }, "Send")));
}
window.SupportChat = SupportChat;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/noell-support-chat/SupportChat.jsx", error: String((e && e.message) || e) }); }

})();
