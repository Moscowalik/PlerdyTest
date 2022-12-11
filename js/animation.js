function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('block-show');
    }
  });
}

let options = {
  threshold: [0.2],
};
let observer = new IntersectionObserver(onEntry, options);
let heroImgs = document.querySelectorAll('.hero__SecondaryImg');

for (let heroImg of heroImgs) {
  observer.observe(heroImg);
}

// if (heroImgs) observer.observe(heroImgs);
