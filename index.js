import applications, { slate } from "./data.js";

function openTab(evt) {
  // Declare all variables
  var i, tabcontent, tablinks;
  const tab = (evt.target.id).slice(0, -4);
  
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
};

document.getElementById("pending-tab").addEventListener("click", openTab);
document.getElementById("accepted-tab").addEventListener("click", openTab);
document.getElementById("not-accepted-tab").addEventListener("click", openTab);
document.getElementById("offsite-tab").addEventListener("click", openTab);
const pending = document.getElementById("pending").style.display = "block";

applications.forEach((job) => {
  let app = slate(job);
  if (job.status === "pending") {
    document.getElementById("pending").innerHTML += app;
  }

  if (job.status === "accepted") {
    document.getElementById("accepted").innerHTML += app;
  }

  if (job.status === "not-accepted") {
    document.getElementById("not-accepted").innerHTML += app;
  }

  if (job.status === "offsite") {
    document.getElementById("offsite").innerHTML += app;
  }
});

export default openTab;
