import applications, { slate } from "./data.js";

function openTab(evt) {
  var i, tabcontent, tablinks;
  const status = {
    pending: "pending",
    accepted: "accepted",
    "not-accepted": "not-accepted",
    offsite: "offsite",
  };

  const tab = evt.target.id.slice(0, -4);
  document.getElementById("status").className = status[tab];

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
  console.log();
  document.getElementById("jobs-count").innerHTML =
    document.getElementById(tab).childElementCount;
}

document.getElementById("pending-tab").addEventListener("click", openTab);
document.getElementById("accepted-tab").addEventListener("click", openTab);
document.getElementById("not-accepted-tab").addEventListener("click", openTab);
document.getElementById("offsite-tab").addEventListener("click", openTab);
document.getElementById("pending").style.display = "block";

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

document.getElementById("jobs-count").innerHTML =
  document.getElementById("pending").childElementCount;
export default openTab;
