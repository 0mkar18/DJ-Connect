// modal.js
document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startBtn');
  const modal = document.getElementById('roleModal');
  const closeBtn = document.getElementById('closeModal');
  const roleBtns = document.querySelectorAll('.role-btn');

  function openModal(){
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');


    // lock background scroll
    document.documentElement.style.overflow = 'hidden';
  }
  function closeModal(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    document.documentElement.style.overflow = '';
  }

  startBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);


  // click outside modal-panel closes
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });


  // ESC key closes
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  
  // role button click: store role and redirect
  roleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const role = btn.dataset.role;        // "user" or "dj"
      const href = btn.dataset.href;       // "user.html" or "dashboard.html"
      try { sessionStorage.setItem('role', role); } catch(e) { /* ignore */ }
      // small delay to show press animation, then redirect
      btn.disabled = true;
      setTimeout(() => { window.location.href = href; }, 180);
    });
  });
});
