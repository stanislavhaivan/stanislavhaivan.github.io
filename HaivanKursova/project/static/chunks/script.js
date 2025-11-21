document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('addListingModal');
    if (!modal) return;
  
    const overlay = modal.querySelector('[data-modal-overlay]');
    const dialog = modal.querySelector('[data-modal-dialog]');
    const closeButtons = modal.querySelectorAll('[data-modal-close]');
    const form = modal.querySelector('#addListingForm');
    const openButtons = document.querySelectorAll('[data-modal-open="add-listing"]');
  
    const openModal = () => {
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };
  
    const closeModal = () => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };
  
    openButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
      });
    });
 
    closeButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
      });
    });
 
    if (overlay) {
      overlay.addEventListener('click', () => {
        closeModal();
      });
    }
  
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.reset();
        closeModal();
      });
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const upBtn = document.getElementById('scrollToTop');
    if (!upBtn) return;
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        upBtn.classList.add('is-visible');
      } else {
        upBtn.classList.remove('is-visible');
      }
    });
  
    upBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });