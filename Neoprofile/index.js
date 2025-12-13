const words = ["Vishan", "Web Developer", "Student", "Learner"];
let i = 0,
  j = 0,
  currentWord = "",
  isDeleting = false;
const typed = document.getElementById("typed");

function type() {
  currentWord = words[i];
  typed.textContent = currentWord.substring(0, j);

  if (!isDeleting && j < currentWord.length) j++;
  else if (isDeleting && j > 0) j--;
  else if (!isDeleting && j === currentWord.length) isDeleting = true;
  else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 80 : 120);
}
type();

document.getElementById("downloadBtn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "Vishan_dev_CV.pdf";
  link.download = "Vishan_dev_CV.pdf";
  link.click();
});
const time = document.querySelector("#clock");

setInterval(function () {
  let clock = new Date();
  time.innerHTML = clock.toLocaleTimeString();

}, 1000);