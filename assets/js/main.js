
// Mobile nav
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
}

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Slider
const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');
let current = 0;
function showSlide(i){
  const slides = document.querySelectorAll('.slide');
  slides.forEach((s,idx)=>{
    s.classList.toggle('active', idx===i);
  });
  dots.forEach((d,idx)=>d.classList.toggle('active', idx===i));
  current = i;
}
dots.forEach((d,idx)=>d.addEventListener('click', ()=>showSlide(idx)));
setInterval(()=>{
  const total = document.querySelectorAll('.slide').length;
  showSlide((current+1)%total);
}, 5000);

// Contact form (mailto fallback)
function handleContactSubmit(e){
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const name = data.get('name');
  const email = data.get('email');
  const phone = data.get('phone');
  const message = data.get('message');
  const body = encodeURIComponent(
    'Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\n\nMessage:\n' + message
  );
  window.location.href = 'mailto:skenterprises.patna01@gmail.com?subject=Website Enquiry - ' + encodeURIComponent(name) + '&body=' + body;
  return false;
}
