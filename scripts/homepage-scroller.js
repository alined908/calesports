
const scrollPercent = (e) => {
  const root = document.documentElement;
  return ((e && e.top) || root.scrollTop)
    / ((root.scrollHeight) - root.clientHeight) * 100;
};

const homepageHeader = document.getElementById('homepage-header');

const homepageChildren = Array.from(document.getElementsByClassName('home-para')).map((e) => {
  const child = {
    e,
    testBounds(){
      const ePos = scrollPercent(e.getBoundingClientRect());
      if (ePos >= 0 && ePos <= 17.5){
        e.classList.add('test');
      }
      else if (e.classList.contains('test')) {
        e.classList.remove('test');
      }
    },
  };
  return child;
});

document.onscroll = () => {
  const scrolled = scrollPercent();
  if (scrolled >= 4) {
    homepageHeader.classList.add('active');
  } else {
    homepageHeader.classList.remove('active');
  }
  homepageChildren.forEach((e) => {
    e.testBounds();
  });
};
