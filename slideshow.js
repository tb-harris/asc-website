const slideshow = {
  slides: ["img/slideshow/p1.jpg", "img/slideshow/p2.jpg", "img/slideshow/p3.jpg", "img/slideshow/p4.jpg"],
  iCurrent: 0,
  image: document.getElementById("slideshow-img"),
  // Begins process of moving next slide (fades out, then calls to update image)
  transition: function() {
    this.image.classList.remove("unfaded");
    this.image.classList.add("faded");
    setTimeout(() => { this.updateImage() }, 2000);
  },
  // Updates image, fades back in, and sets timer for next transition
  updateImage: function() {
    // Update index
    this.iCurrent++;
    if (this.iCurrent >= this.slides.length) {
      this.iCurrent = 0;
    }

    // Set next slide
    this.image.src = this.slides[this.iCurrent];

    // Start fading back in
    this.image.classList.remove("faded");
    this.image.classList.add("unaded");

    // Set timer for next transition
    setTimeout(() => { this.transition() }, 6000);
  },
  // Start slideshow after delay
  start: function() {
    setTimeout(() => { this.transition() }, 6000);
  }
};

slideshow.start();
