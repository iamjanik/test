// Inject nav
document.getElementById('nav-placeholder').innerHTML = `
<div id="topnav">
  <a class="nlogo" href="index.html">
    Müller Ingenieure
    <span class="nlogo-sep"></span>
    <span class="nlogo-sub">Straßen- und Tiefbau</span>
  </a>
  <ul class="nlinks">
    <li><a href="index.html">Startseite</a></li>
    <li><a href="ueber-uns.html">Unternehmen &#9662;</a>
      <div class="drop">
        <a href="ueber-uns.html">Über uns</a>
        <a href="ansprechpartner.html">Ansprechpartner</a>
      </div>
    </li>
    <li><a href="leistungen.html">Leistungen &#9662;</a>
      <div class="drop">
        <a href="leistungen.html">Alle Leistungen</a>
        <a href="leistungen.html#strassenbau">Straßenbau</a>
        <a href="leistungen.html#kanal">Kanalbau &amp; Entwässerung</a>
        <a href="leistungen.html#wasser">Wasserversorgung</a>
        <a href="leistungen.html#ausschreibung">Ausschreibung &amp; Bauleitung</a>
      </div>
    </li>
    <li><a href="projekte.html">Referenzen</a></li>
    <li><a href="jobs.html">Jobs</a></li>
    <li><a href="kontakt.html" class="btn ncta">Kontakt</a></li>
  </ul>
  <div class="hbg" id="hbg"><span></span><span></span><span></span></div>
</div>
<div id="mobnav">
  <a href="index.html">Startseite</a>
  <a href="ueber-uns.html">Über uns</a>
  <a href="ansprechpartner.html">Ansprechpartner</a>
  <a href="leistungen.html">Leistungen</a>
  <a href="projekte.html">Referenzen</a>
  <a href="jobs.html">Jobs</a>
  <a href="kontakt.html">Kontakt</a>
</div>`;

// Inject footer
document.getElementById('footer-placeholder').innerHTML = `
<footer>
  <div class="fm">
    <div class="fbrand">
      <div class="flogo">Müller Ingenieure</div>
      <p>Ihr verlässlicher Partner für Straßen- und Tiefbau, Kanal- und Wasserversorgungsnetze in Hessen und Umgebung.</p>
    </div>
    <div class="fc"><h4>Leistungen</h4><ul>
      <li><a href="leistungen.html#strassenbau">Straßenbau</a></li>
      <li><a href="leistungen.html#kanal">Kanalbau</a></li>
      <li><a href="leistungen.html#wasser">Wasserversorgung</a></li>
      <li><a href="leistungen.html#ausschreibung">Ausschreibung</a></li>
    </ul></div>
    <div class="fc"><h4>Unternehmen</h4><ul>
      <li><a href="ueber-uns.html">Über uns</a></li>
      <li><a href="ansprechpartner.html">Ansprechpartner</a></li>
      <li><a href="projekte.html">Referenzen</a></li>
      <li><a href="jobs.html">Jobs</a></li>
    </ul></div>
    <div class="fc"><h4>Kontakt</h4><address>
      Musterstraße 12<br>35390 Gießen<br><br>
      0641 / 123 456 0<br>info@mueller-ingenieure.de
    </address></div>
  </div>
  <div class="fbot">
    <p>© 2025 Müller Ingenieure GmbH. Alle Rechte vorbehalten.</p>
    <div><a href="impressum.html">Impressum</a><a href="datenschutz.html">Datenschutz</a></div>
  </div>
</footer>`;

// Active nav highlight
var path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('#topnav .nlinks > li > a').forEach(function(a) {
  if(a.getAttribute('href') === path) a.classList.add('active');
});

// Mobile nav toggle
document.getElementById('hbg').addEventListener('click', function() {
  document.getElementById('mobnav').classList.toggle('open');
});
document.addEventListener('click', function(e) {
  var mn = document.getElementById('mobnav'), hb = document.getElementById('hbg');
  if(mn && hb && !mn.contains(e.target) && !hb.contains(e.target)) mn.classList.remove('open');
});
