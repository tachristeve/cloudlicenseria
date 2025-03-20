
export const initScrollAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  const elements = document.querySelectorAll('.scroll-animation');
  elements.forEach((el) => observer.observe(el));

  return () => {
    elements.forEach((el) => observer.unobserve(el));
  };
};

export const initLazyLoading = () => {
  const blurDivs = document.querySelectorAll('.blur-load');
  
  blurDivs.forEach((div) => {
    const img = div.querySelector('img');
    
    if (img) {
      function loaded() {
        div.classList.add('loaded');
      }
      
      if (img.complete) {
        loaded();
      } else {
        img.addEventListener('load', loaded);
      }
    }
  });
};
