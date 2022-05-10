const applicatons = [
  {
    company: "AvantStay",
    logo: "./images/AvantStay",
    position: "Frontend (React) Engineer",
    status: "offsite",
    date: "May 6",
  },
  {
    company: "ButterflyMX",
    logo: "./images/ButterflyMX",
    position: "Front End Engineer (Remote)",
    status: "offsite",
    date: "May 5",
  },
  {
    company: "Zeblok Computational",
    logo: "./images/Zeblok",
    position: "Full Stack Developer",
    status: "pending",
    date: "May 5",
  },
  {
    company: "Lunchclub",
    logo: "./images/Lunchclub",
    position: "Front-end Software Engineer",
    status: "offsite",
    date: "May 5",
  },
  {
    company: "Lucid",
    logo: "./images/Lucid",
    position: "Frontend Engineer II",
    status: "offsite",
    date: "May 5",
  },
  {
    company: "Gametime United",
    logo: "./images/Gametime",
    position: "Mid-level Frontend Engineer",
    status: "pending",
    date: "May 5",
  },
  {
    company: "Kombai",
    logo: "./images/Kombai",
    position: "Product Engineer, Frontend",
    status: "pending",
    date: "May 5",
  },
  {
    company: "Neliti",
    logo: "./images/Neliti",
    position: "Front-end Developer",
    status: "pending",
    date: "May 5",
  },
  {
    company: "Mavenwit",
    logo: "./images/Mavenwit",
    position: "Front End Developer",
    status: "pending",
    date: "May 5",
  },
  {
    company: "SPACENOS",
    logo: "./images/Spacenos",
    position: "Web Developer - ReactJs, Remote",
    status: "accepted",
    date: "May 5",
  },
  {
    company: "Organize",
    logo: "./images/Organize",
    position: "Frontend Engineer",
    status: "accepted",
    date: "May 4",
  },
  {
    company: "NFTBooking",
    logo: "./images/NFTBooking",
    position: "Frontend Engineer",
    status: "not-accepted",
    date: "May 4",
  },
  {
    company: "Kappa London",
    logo: "./images/Kappa",
    position: "Front End Developer (JavaScript)",
    status: "not-accepted",
    date: "May 4",
  },
  {
    company: "Across",
    logo: "./images/Across",
    position: "Front End Engineer",
    status: "not-accepted",
    date: "May 3",
  },
  {
    company: "TruTrip",
    logo: "./images/TruTrip",
    position: "Frontend Developer",
    status: "not-accepted",
    date: "Apr 28",
  },
  {
    company: "CADDi",
    logo: "./images/CADDi",
    position: "Senior Frontend Engineer",
    status: "not-accepted",
    date: "Apr 28",
  },
  {
    company: "eDRV",
    logo: "./images/EDRV",
    position: "Back End Engineer",
    status: "pending",
    date: "Apr 20",
  },
  {
    company: "Protokol",
    logo: "./images/Protokol",
    position: "Senior React Developer",
    status: "not-accepted",
    date: "Apr 20",
  },
  {
    company: "Noetica AI",
    logo: "./images/Noetica",
    position: "Senior Software Engineer",
    status: "not-accepted",
    date: "Apr 20",
  },
  {
    company: "SchoolMaker",
    logo: "./images/SchoolMaker",
    position: "Hiring talented Full-Stack Engineer for fast-growing SaaS company [Full-time+Remote]",
    status: "accepted",
    date: "Apr 20",
  },
  {
    company: "Stampix",
    logo: "./images/Stampix",
    position: "Senior Software Engineer",
    status: "accepted",
    date: "Apr 20",
  },
];

export const slate = (job) => {
  return `
  <div class="application d-flex gap-3 p-3 border rounded w-100 w-md-75">
    <img
      class="company-logo"
      src="./${job.logo}.webp"
      width="70"
      height="70"
      alt="company logo"
    />
    <div class="details w-100">
      <div class="company d-flex align-items-center justify-content-between">
        <h3>${job.company}</h3>
        <svg
          height="16"
          width="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          class="angel-color"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 21a.997.997 0 00.707-.293l8-8a.999.999 0 000-1.414l-8-8a.999.999 0 10-1.414 1.414L14.586 12l-7.293 7.293A.999.999 0 008 21z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <span class="text-md text-slate-700">${job.position}</span>
      <div class="date-applied date">
        <span>Applied on</span>
        <span class="text-uppercase">${job.date}</span>
      </div>
    </div>
  </div>`
};

export default applicatons;