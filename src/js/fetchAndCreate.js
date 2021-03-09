// Output Elements
const
  aboutContainer = document.querySelector('.about-container'),
  skillsContainer = document.querySelector('.skills-container'),
  workContainer = document.querySelector('.work'),
  studiesContainer = document.querySelector('.studies'),
  portfolioContainer = document.querySelector('.portfolio-container');



/* Gets all bio with GET request
  * @param        {object}        fetchData       fetchData.bios[0].id/heading/bio/img_src
*/
const createBio = (fetchData) => {
  const bio = fetchData.about;

  aboutContainer.innerHTML += `
    <div class="avatar-container">
      <div class="avatar" style="background: url('${bio.img_src}') no-repeat center center/cover"></div>
    </div>

    <div>
          <div>
            <h3>${bio.heading}</h3>
            <p>${bio.bio}</p>
          </div>
        </div>
  `
};



/* Gets all skills with GET request
  * @param        {object}        fetchData       fetchData.skills
*/
const createSkills = (fetchData) => {
  const skills = fetchData.skills;

  skills.forEach(skill => {
    skillsContainer.innerHTML += `
      <div class="skill">
        <i class="${skill.icon} fa-3x" aria-hidden="true"></i>
        <span>${skill.name}</span>
      </div>
    `
  })
};



/* Gets all jobs with GET request
  * @param        {object}        fetchData       fetchData.jobs
*/
const createWork = (fetchData) => {
  const jobs = fetchData.jobs;

  jobs.forEach(job => {
    workContainer.innerHTML += `
      <div class="resume-item">
        <h4>${job.company}</h4>
        <span>${job.title}</span><br>
        <span>${job.date_start} – ${job.date_end}</span>
        <p>${job.descr}</p>
      </div>
    `;
  });
};



/* Gets all studies with GET request
  * @param        {object}        fetchData       fetchData.courses
*/
const createStudies = (fetchData) => {
  const courses = fetchData.studies;

  courses.forEach(course => {
    studiesContainer.innerHTML += `
      <div class="resume-item">
        <h4>${course.title}</h4>
        <span>${course.institution}</span><br>
        <span>${course.date_start} – ${course.date_end}</span>
        <p>${course.descr}</p>
      </div>
    `;
  });
};


const isIos = () => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

/* Gets all jobs with GET request
  * @param        {object}        fetchData       fetchData.projects
*/
const createPortfolio = (fetchData) => {
  const projects = fetchData.projects;

  projects.forEach(project => {
    portfolioContainer.innerHTML += `
      <a href="${project.prj_url}" class="portfolio-item_link" target="_blank">
        <div class="portfolio-item" style="background: url(${project.img_src}) no-repeat center center/cover">
          <div class="portfolio-item_overlay">
            <div class="portfolio-item_content">
              <h3>${project.title}</h3>
              <p>${project.descr}</p>
            </div>
          </div>
        </div>
      </a>
    `
  });

  if (isIos()) {
    document.querySelectorAll('.portfolio-item_overlay').forEach(e => elementDisplay(e, 'block'));
  }

};


window.addEventListener("load",
  // fetchAndCreate(aboutUrl, createBio),
  createBio(portfolio),
  createSkills(portfolio),
  createWork(portfolio),
  createStudies(portfolio),
  createPortfolio(portfolio)
);
