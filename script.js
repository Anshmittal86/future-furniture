const acordionElem = document.querySelectorAll(".service__acordion");
const marqueeTopEl = document.querySelector(".marquee__top");
const marqueeBottomEl = document.querySelector(".marquee__bottom");
const imageMarqueeTopEl = document.querySelector(".image__marquee__top");
const imageMarqueeMiddleEl = document.querySelector(".image__marquee__middle");
const imageMarqueeBottomEl = document.querySelector(".image__marquee__bottom");

fetch("./data.json")
  .then((res) => res.json())
  .then((text) => {
    text.buttons1.forEach((btn) => {
      const { id, name } = btn;
      marqueeTopEl.innerHTML += `
      <div role="button" id="${id}" class="btn marquee__btn">
            / ${name}
          </div>
      `;
    });

    text.buttons2.forEach((btn) => {
      const { id, name } = btn;
      marqueeBottomEl.innerHTML += `
      <div role="button" id="${id}" class="btn marquee__btn">
            / ${name}
          </div>
      `;
    });

    text.images1.forEach((image) => {
      const { id, width, src } = image;
      imageMarqueeTopEl.innerHTML += `
        <div class="image__marquee__div" 
          id="${id}"
          style="
          width: ${width};
          background-image: url(${src});
          background-position: center;
          background-size: cover;
          "
        ></div>
      `;
    });

    text.images2.forEach((image) => {
      const { id, width, src } = image;
      imageMarqueeMiddleEl.innerHTML += `
        <div class="image__marquee__div" 
          id="${id}"
          style="
          width: ${width};
          background-image: url(${src});
          background-position: center;
          background-size: cover;
          "
        ></div>
      `;
    });

    text.images3.forEach((image) => {
      const { id, width, src } = image;
      imageMarqueeBottomEl.innerHTML += `
        <div class="image__marquee__div" 
          id="${id}"
          style="
          width: ${width};
          background-image: url(${src});
          background-position: center;
          background-size: cover;
          "
        ></div>
      `;
    });
  });

function marqueeAnimations() {
  gsap.to(".marquee__top", {
    transform: "translateX(-200%)",
    duration: 150,
    repeat: -1,
    ease: "none",
  });

  gsap.to(".marquee__bottom", {
    transform: "translateX(200%)",
    duration: 150,
    repeat: -1,
    ease: "none",
  });

  document.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
      gsap.to(".image__marquee__top", {
        transform: "translateX(-200%)",
        duration: 100,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".image__marquee__middle", {
        transform: "translateX(200%)",
        duration: 100,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".image__marquee__bottom", {
        transform: "translateX(-200%)",
        duration: 100,
        repeat: -1,
        ease: "none",
      });
    } else {
      gsap.to(".image__marquee__top", {
        transform: "translateX(200%)",
        duration: 60,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".image__marquee__middle", {
        transform: "translateX(-200%)",
        duration: 60,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".image__marquee__bottom", {
        transform: "translateX(200%)",
        duration: 60,
        repeat: -1,
        ease: "none",
      });
    }
  });
}

function acordionAnimations() {
  acordionElem.forEach((elem) => {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mousemove", (dets) => {
      let diffY = dets.clientY - elem.getBoundingClientRect().top - 50;
      let diffX = dets.clientX - elem.getBoundingClientRect().left - 40;

      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;

      gsap.to(elem.querySelector(".acordion__img"), {
        opacity: 1,
        ease: Power1,
        top: diffY,
        left: diffX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 1),
      });

      gsap.to(
        elem.querySelector(".service__acordion > div:nth-child(2) > span"),
        {
          rotate: -70,
        }
      );
    });

    elem.addEventListener("mouseleave", (dets) => {
      gsap.to(elem.querySelector(".acordion__img"), {
        opacity: 0,
        ease: Power3,
      });

      gsap.to(
        elem.querySelector(".service__acordion > div:nth-child(2) > span"),
        {
          rotate: 50,
        }
      );
    });
  });
}

marqueeAnimations();
acordionAnimations();
