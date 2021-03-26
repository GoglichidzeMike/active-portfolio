const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav__middle");
  const navLinks = document.querySelectorAll(".nav__middle li");
  const socialLink = document.querySelectorAll(".nav-sb img");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.35s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    socialLink.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.35s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// $(window).mousemove(function (event) {
//   $("#hero_left_bg-image").css({
//     "margin-left": -(event.pageX * 0.01),
//     "margin-top": -(event.pageY * 0.01),
//   });
//   $(".image-1").css({
//     "margin-top": -(event.pageX * 0.01),
//     "margin-right": -(event.pageY * 0.01),
//   });
//   $(".image-2").css({
//     "margin-bottom": -(event.pageX * 0.01),
//     "margin-right": -(event.pageY * 0.01),
//   });
//   $(".hero__image").css({
//     "margin-bottom": -(event.pageX * 0.01),
//     "margin-right": -(event.pageY * 0.01),
//   });
// });

const text = document.querySelector(".letterByLetter");
const strText = text.textContent.trim();
const splitText = strText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  let char = splitText[i] === " " ? "&nbsp;" : splitText[i];
  text.innerHTML += '<span class="individual">' + char + "</span>";
}

$(".individual").bind(
  "webkitAnimationEnd mozAnimationEnd animationend",
  function () {
    $(this).removeClass("animated");
  }
);

$(".individual").hover(function () {
  $(this).addClass("animated");
});
