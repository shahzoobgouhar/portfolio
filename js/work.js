var modal = document.getElementsByClassName("modal")[0];
var modalBox = document.getElementsByClassName("modal-box")[0];
var closeIcon = document.getElementById("closeIcon");
var closeBtn = document.getElementById("closeBtn");
var projectImg = document.getElementsByClassName("image");

var pTitle = document.getElementById("project-title");
var pDesp = document.getElementById("project-desp");
var pTools = document.getElementById("project-tools");

var description = [
  {
    title: "Valentine Week",
    description:
      "Personalized card for wach day of a Valentine week",

    tools: "AngularJS, HTML, SCSS, Javascript, Bootstrap"
  },
  {
    title: "Flight Search App",

    description:
      "Demo FLight Search App with static Data",

    tools: "Angular, HTML5, CSS and Typescript"
  }
];

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modalBox.style.display = "none";
  }
};
closeIcon.onclick = () => {
  modalBox.style.display = "none";
  modal.style.display = "none";
};
closeBtn.onclick = () => {
  modalBox.style.display = "none";
  modal.style.display = "none";
};

for (let i = 0; i < projectImg.length; i++) {
  projectImg[i].onclick = () => {
    //showing modal box
    modal.style.display = "block";
    modalBox.style.display = "block";

    //adding project details
    pTitle.innerText = description[i].title;
    pDesp.innerText = description[i].description;
    pTools.innerText = "Tools : " + description[i].tools;
  };
}
