// 导航高亮
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.3 });

sections.forEach(s => observer.observe(s));

// 图片懒加载
const imgs = document.querySelectorAll('img');
const imgObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      imgObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

imgs.forEach(img => {
  img.style.opacity = '0';
  img.style.transform = 'translateY(16px)';
  img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  imgObserver.observe(img);
});
