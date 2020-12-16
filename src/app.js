const bannerBtn = document.querySelector('.banner-button');
const banner = document.querySelector('.banner');
const slideshowWrapper = document.querySelector('.slideshow-wrapper');
const slideshow = document.querySelector('.slideshow');

handleClick = () => {
  banner.style.display = 'none';
  slideshowWrapper.style.cssText = 'opacity: 1; visibility: visible';
  slideshow.style.animation = 'slideshowAnimation 24s 5';
};

banner.addEventListener('click', handleClick);
