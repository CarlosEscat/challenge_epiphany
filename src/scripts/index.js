import "../styles/index.scss";
import TweenMax from "gsap/TweenMax";

console.log("webpack starterkit");

let noButton = document.querySelector(".no");
let yesButton = document.querySelector(".yes");

let allianz = document.querySelector("#allianz");
let axa = document.querySelector("#axa");
let aig = document.querySelector("#aig");
let alleanza = document.querySelector("#alleanza");
let american = document.querySelector("#american");
let europ = document.querySelector("#europ");

const buttonNext = document.querySelector(".arrowButton");
noButton.addEventListener("click", function() {
  TweenMax.to(".arrowButton", 2, {
    backgroundColor: "#ff871c"
  });
});

yesButton.addEventListener("click", function() {
  document.querySelector("p").innerHTML = "Which ones did you recommend?";
  TweenMax.to("#div1", 2, {
    rotation: 360
  });
  TweenMax.to("#div2", 2, {
    rotation: 360
  });
  TweenMax.to("#div3", 2, {
    rotation: 360
  });
  TweenMax.to("#div4", 2, {
    rotation: 360
  });
  TweenMax.to("#div5", 2, {
    rotation: 360
  });
  TweenMax.to("#div6", 2, {
    rotation: 360
  });

  allianz.style.pointerEvents = "auto";
  allianz.style.borderTopRightRadius = "25px";
  aig.style.pointerEvents = "auto";
  aig.style.borderTopRightRadius = "25px";
  alleanza.style.pointerEvents = "auto";
  alleanza.style.borderTopRightRadius = "25px";
  axa.style.pointerEvents = "auto";
  axa.style.borderTopRightRadius = "25px";
  american.style.pointerEvents = "auto";
  american.style.borderTopRightRadius = "25px";
  europ.style.pointerEvents = "auto";
  europ.style.borderTopRightRadius = "25px";
});

allianz.addEventListener("click", function() {
  buttonNext.style.backgroundColor = "#ff871c";
  document.querySelector("#div1").style.backgroundColor = "#ff871c";
});
aig.addEventListener("click", function() {
  buttonNext.style.backgroundColor = "#ff871c";
  document.querySelector("#div2").style.backgroundColor = "#ff871c";
});
alleanza.addEventListener("click", function() {
  buttonNext.style.backgroundColor = "#ff871c";
  document.querySelector("#div3").style.backgroundColor = "#ff871c";
});
american.addEventListener("click", function() {
  buttonNext.style.backgroundColor = "#ff871c";
  document.querySelector("#div4").style.backgroundColor = "#ff871c";
});
axa.addEventListener("click", function() {
  buttonNext.style.backgroundColor = "#ff871c";
  document.querySelector("#div5").style.backgroundColor = "#ff871c";
});

europ.addEventListener("click", function() {
  buttonNext.style.backgroundColor = "#ff871c";
  document.querySelector("#div6").style.backgroundColor = "#ff871c";
});
