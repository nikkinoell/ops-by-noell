// Stub dataLayer + gtag immediately so any early gtag() calls queue correctly.
// No network request happens here — the actual script is injected after first paint.
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-01DGCY0GXZ');
gtag('config', 'AW-18123945519', { allow_enhanced_conversions: true });

// Meta Pixel stub — queues fbq() calls before fbevents.js arrives.
!function(f, b, e, v, n, t, s) {
  if (f.fbq) return;
  n = f.fbq = function() {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n; n.loaded = true; n.version = '2.0'; n.queue = [];
}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '792219100378130');
fbq('track', 'PageView');

function _obzLoadAnalytics() {
  // Inject gtag.js (GA4 + Google Ads) — async, no render impact
  var g = document.createElement('script');
  g.async = true;
  g.src = 'https://www.googletagmanager.com/gtag/js?id=AW-18123945519';
  document.head.appendChild(g);

  // Inject fbevents.js — async, no render impact
  var f = document.createElement('script');
  f.async = true;
  f.src = 'https://connect.facebook.net/en_US/fbevents.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(f, s);

  // Meta Pixel noscript beacon (appended to body for no-JS fallback)
  var ns = document.createElement('noscript');
  var img = document.createElement('img');
  img.height = 1; img.width = 1; img.style.cssText = 'display:none';
  img.src = 'https://www.facebook.com/tr?id=792219100378130&ev=PageView&noscript=1';
  ns.appendChild(img);
  document.body.appendChild(ns);
}

// Inject after first paint: requestIdleCallback when available, load event as fallback.
if ('requestIdleCallback' in window) {
  requestIdleCallback(_obzLoadAnalytics, { timeout: 3000 });
} else {
  window.addEventListener('load', _obzLoadAnalytics);
}
