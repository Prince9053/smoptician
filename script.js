'use strict';

/* ── Topbar height → push header down ── */
(function () {
  const topbar = document.getElementById('topbar');
  const header = document.getElementById('header');
  function setOffset() {
    if (topbar && header) header.style.top = topbar.offsetHeight + 'px';
  }
  setOffset();
  window.addEventListener('resize', setOffset);
})();

/* ── Header scroll ── */
(function () {
  const header = document.getElementById('header');
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
})();

/* ── Mobile menu ── */
(function () {
  const btn = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  btn.addEventListener('click', function () {
    mobileNav.classList.toggle('open');
    btn.innerHTML = mobileNav.classList.contains('open')
      ? '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
      : '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
  });
  document.querySelectorAll('#mobile-nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      mobileNav.classList.remove('open');
      btn.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    });
  });
})();

/* ── Smooth scroll nav ── */
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    var target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

/* ── Hero cycling word ── */
(function () {
  var words = ['Clarity.', 'Comfort.', 'Confidence.', 'Vision.'];
  var idx = 0;
  var el = document.getElementById('cycling-word');
  setInterval(function () {
    el.classList.add('hidden');
    setTimeout(function () {
      idx = (idx + 1) % words.length;
      el.textContent = words[idx];
      el.classList.remove('hidden');
    }, 430);
  }, 2200);
})();

/* ── Hero particles ── */
(function () {
  var wrap = document.getElementById('particles-wrap');
  for (var i = 0; i < 22; i++) {
    var p = document.createElement('div');
    p.className = 'particle';
    p.style.left = (i * 4.6 + 2) + '%';
    p.style.animationDelay = (i * 0.38) + 's';
    p.style.animationDuration = (6 + i * 0.22) + 's';
    wrap.appendChild(p);
  }
})();

/* ── Product filter ── */
(function () {
  var btns = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.product-card');
  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var cat = btn.dataset.cat;
      cards.forEach(function (card) {
        card.style.display = (cat === 'All' || card.dataset.cat === cat) ? '' : 'none';
      });
    });
  });
})();

/* ── Testimonials carousel ── */
(function () {
  var reviews = [
    { name: 'Rahul Sharma', loc: 'Chembur, Mumbai', text: 'Best optical store in Chembur! Got my prescription glasses done in no time. The staff is super knowledgeable and helped me pick the perfect frame. Highly recommend SM Optician!', product: 'Prescription Glasses', init: 'R', color: '#38BDF8' },
    { name: 'Priya Mehta', loc: 'Ghatkopar, Mumbai', text: 'Bought polarized sunglasses here and the quality is amazing. Very affordable prices for such premium quality. Will definitely come back for my contact lenses too!', product: 'Polarized Sunglasses', init: 'P', color: '#818cf8' },
    { name: 'Anil Desai', loc: 'Govandi, Mumbai', text: 'The blue cut glasses I got here have completely reduced my eye strain after long hours on the computer. The optician gave great advice. Excellent service every time.', product: 'Blue Cut Glasses', init: 'A', color: '#34d399' },
    { name: 'Sunita Patil', loc: 'Kurla, Mumbai', text: 'Got customised frames fitted perfectly to my prescription. The team was so patient and thorough. My entire family now gets their eyewear from SM Optician only!', product: 'Custom Frame Fitting', init: 'S', color: '#fb923c' },
    { name: 'Vikram Joshi', loc: 'Mankhurd, Mumbai', text: 'Great collection of branded frames at very reasonable prices. The staff helped me choose between Ray-Ban and Fastrack — ended up loving my new sunglasses!', product: 'Designer Sunglasses', init: 'V', color: '#f472b6' },
    { name: 'Meena Iyer', loc: 'Chembur, Mumbai', text: 'Tried colored contact lenses for the first time here. The optician guided me through the fitting process patiently. Very professional and friendly service!', product: 'Contact Lenses', init: 'M', color: '#a78bfa' }
  ];

  var active = 0;
  var stars = '★★★★★';

  function starHTML(n) { return '<span class="star-filled">' + '★'.repeat(n) + '</span>'; }

  function render() {
    var r = reviews[active];
    // featured
    document.getElementById('rev-stars').innerHTML = starHTML(5);
    document.getElementById('rev-text').textContent = '"' + r.text + '"';
    document.getElementById('rev-avatar').style.background = r.color;
    document.getElementById('rev-avatar').textContent = r.init;
    document.getElementById('rev-name').textContent = r.name;
    document.getElementById('rev-loc').textContent = r.loc;
    document.getElementById('rev-product').textContent = r.product;
    // dots
    document.querySelectorAll('.review-dot').forEach(function (d, i) {
      d.classList.toggle('active', i === active);
      d.style.width = i === active ? '24px' : '8px';
    });
    // mini cards
    document.querySelectorAll('.review-card').forEach(function (c, i) {
      c.classList.toggle('active', i === active);
    });
  }

  // Build mini cards
  var cardsWrap = document.getElementById('reviews-cards');
  reviews.forEach(function (r, i) {
    var div = document.createElement('div');
    div.className = 'review-card' + (i === 0 ? ' active' : '');
    div.innerHTML = '<div class="rc-top"><div class="rc-avatar" style="background:' + r.color + '">' + r.init + '</div><div><div class="rc-name">' + r.name + '</div><div class="rc-loc">' + r.loc + '</div></div><div class="rc-stars"><span class="star-filled" style="font-size:.7rem">★★★★★</span></div></div><p class="rc-text">"' + r.text + '"</p>';
    div.addEventListener('click', function () { active = i; render(); clearInterval(timer); timer = setInterval(advance, 4000); });
    cardsWrap.appendChild(div);
  });

  // Build dots
  var dotsWrap = document.getElementById('review-dots');
  reviews.forEach(function (_, i) {
    var btn = document.createElement('button');
    btn.className = 'review-dot' + (i === 0 ? ' active' : '');
    btn.style.width = i === 0 ? '24px' : '8px';
    btn.addEventListener('click', function () { active = i; render(); clearInterval(timer); timer = setInterval(advance, 4000); });
    dotsWrap.appendChild(btn);
  });

  function advance() { active = (active + 1) % reviews.length; render(); }
  var timer = setInterval(advance, 4000);
  render();
})();

/* ── Gallery lightbox ── */
(function () {
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lightbox-img');
  document.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {
      lbImg.src = item.querySelector('img').src;
      lb.classList.add('open');
    });
  });
  document.getElementById('lightbox-close').addEventListener('click', function () { lb.classList.remove('open'); });
  lb.addEventListener('click', function (e) { if (e.target === lb) lb.classList.remove('open'); });
})();

/* ── Contact form ── */
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('f-name').value;
    var phone = document.getElementById('f-phone').value;
    var product = document.getElementById('f-product').value;
    var address = document.getElementById('f-address').value;
    var message = document.getElementById('f-message').value;
    var text = 'Hello! I\'d like to enquire about SM Optician.\n\nName: ' + name + '\nPhone: ' + phone + '\nProduct: ' + product + '\nAddress: ' + address + '\nMessage: ' + message;
    window.open('https://wa.me/917276589234?text=' + encodeURIComponent(text), '_blank');
    form.style.display = 'none';
    var success = document.getElementById('form-success');
    success.classList.add('show');
    setTimeout(function () { success.classList.remove('show'); form.style.display = ''; form.reset(); }, 4000);
  });
})();
