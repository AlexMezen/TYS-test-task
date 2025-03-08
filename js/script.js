const burgerMenu = document.getElementById('burger-menu');
const menuOverlay = document.getElementById('menu-overlay');
const closeIcon = document.getElementById('close-icon');

burgerMenu.addEventListener('click', () => {
  menuOverlay.style.display = 'flex';
  menuOverlay.classList.remove('hide');
});

closeIcon.addEventListener('click', () => {
  menuOverlay.classList.add('hide');
  setTimeout(() => {
    menuOverlay.style.display = 'none';
  }, 500);
});

menuOverlay.addEventListener('click', (e) => {
  if (e.target === menuOverlay) {
    menuOverlay.classList.add('hide');
    setTimeout(() => {
      menuOverlay.style.display = 'none';
    }, 500);
  }
});
document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.scroll-container__content');
    const thumb = document.querySelector('.scroll-container__scrollbar-thumb');
    
    // Установка начальной высоты скролла
    function updateScrollbar() {
      const contentHeight = content.scrollHeight;
      const visibleHeight = content.clientHeight;
      const scrollRatio = visibleHeight / contentHeight;
      
      thumb.style.height = (scrollRatio * 100) + '%';
      
      // Позиция скролла
      const scrollPosition = content.scrollTop / (contentHeight - visibleHeight);
      const thumbPosition = scrollPosition * (visibleHeight - thumb.offsetHeight);
      thumb.style.top = thumbPosition + 'px';
    }
    
    // Отслеживание события скролла
    content.addEventListener('scroll', updateScrollbar);
    
    // Перетаскивание скролла мышью
    let isDragging = false;
    let startY, startScrollTop;
    
    thumb.addEventListener('mousedown', function(e) {
      isDragging = true;
      startY = e.clientY;
      startScrollTop = content.scrollTop;
      document.body.style.userSelect = 'none'; // Запрет выделения текста при перетаскивании
    });
    
    document.addEventListener('mousemove', function(e) {
      if (!isDragging) return;
      
      const deltaY = e.clientY - startY;
      const contentHeight = content.scrollHeight;
      const visibleHeight = content.clientHeight;
      
      const scrollRatio = contentHeight / visibleHeight;
      content.scrollTop = startScrollTop + (deltaY * scrollRatio);
    });
    
    document.addEventListener('mouseup', function() {
      isDragging = false;
      document.body.style.userSelect = '';
    });
    
    // Инициализация
    updateScrollbar();
    
    // Обновление при изменении размера окна
    window.addEventListener('resize', updateScrollbar);
  });