const $ = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => Array.from(p.querySelectorAll(s));

$('#year').textContent = new Date().getFullYear();

const root = document.documentElement;
const themeBtn = $('#themeBtn');
const THEME_KEY = 'theme-pref';
const setTheme = t => { root.setAttribute('data-theme', t); localStorage.setItem(THEME_KEY, t); themeBtn.textContent = t==='light' ? '🌞' : '🌙'; };
setTheme(localStorage.getItem(THEME_KEY) || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light':'dark'));
themeBtn.addEventListener('click', () => setTheme(root.getAttribute('data-theme')==='light' ? 'dark' : 'light'));

// Menu toggle removed - navigation links hidden

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in-view'); io.unobserve(e.target); } });
}, {threshold:.2});
$$('.fade-up').forEach(el => io.observe(el));

const grid = $('#projectsGrid');
const buttons = $$('.filter-btn');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const tag = btn.dataset.filter;
    buttons.forEach(b => b.classList.remove('btn-primary'));
    btn.classList.add('btn-primary');
    $$('.project', grid).forEach(card => {
      const ok = tag === 'all' || card.dataset.tags.split(' ').includes(tag);
      card.style.display = ok ? '' : 'none';
    });
  });
});



const lightbox = $('#lightbox');
const lightboxImg = $('#lightboxImg');
const lightboxTitle = $('#lightboxTitle');
const lightboxCounter = $('#lightboxCounter');
const lightboxThumbs = $('#lightboxThumbs');
const lightboxClose = $('#lightboxClose');
const lightboxPrev = $('#lightboxPrev');
const lightboxNext = $('#lightboxNext');

let currentImages = [];
let currentIndex = 0;
let currentProjectTitle = '';

function openLightbox(images, title, startIndex = 0) {
  currentImages = images;
  currentIndex = startIndex;
  currentProjectTitle = title;
  updateLightbox();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function updateLightbox() {
  if (currentImages.length === 0) return;
  lightboxImg.src = currentImages[currentIndex];
  lightboxTitle.textContent = currentProjectTitle;
  lightboxCounter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
  lightboxThumbs.innerHTML = '';
  currentImages.forEach((img, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'lightbox-thumb' + (i === currentIndex ? ' active' : '');
    thumb.innerHTML = `<img src="${img}" alt="thumb" />`;
    thumb.addEventListener('click', () => { currentIndex = i; updateLightbox(); });
    lightboxThumbs.appendChild(thumb);
  });
}

function goLightbox(dir) {
  currentIndex = (currentIndex + dir + currentImages.length) % currentImages.length;
  updateLightbox();
}

$$('.btn-preview').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = btn.closest('.project');
    const images = JSON.parse(card.dataset.preview || '[]');
    const title = card.querySelector('h3').textContent;
    openLightbox(images, title, 0);
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => goLightbox(-1));
lightboxNext.addEventListener('click', () => goLightbox(1));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') goLightbox(-1);
  if (e.key === 'ArrowRight') goLightbox(1);
});

const styleFocus = document.createElement('style');
styleFocus.textContent = `:focus-visible{outline:3px solid var(--primary); outline-offset:2px; border-radius:10px}`;
document.head.appendChild(styleFocus);