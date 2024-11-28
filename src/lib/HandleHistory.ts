export const ScrollToWelcome = (event: Event) => {
  event.preventDefault();
  const target = document.getElementById('welcomesection');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '');
  }
};

export const ScrollToAbout = (event: Event) => {
  event.preventDefault();
  const target = document.getElementById('aboutsection');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '');
  }
};

export const ScrollToProjects = (event: Event) => {
  event.preventDefault();
  const target = document.getElementById('projectsection');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '');
  }
}

export const ScrollToExperience = (event: Event) => {
  event.preventDefault();
  const target = document.getElementById('experiencesection');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '');
  }
}

export const ScrollToContact = (event: Event) => {
  event.preventDefault();
  const target = document.getElementById('contactsection');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '');
  }
}
