
  let darkmode = localStorage.getItem('darkmode');
  const themeSwitch = document.getElementById('theme-switch');
  const logo = document.getElementById('logo');

  const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    logo.src = '/images/logo-kivan-dark.png';
  };

  const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
    logo.src = '/images/logo-kivan-light.png';
  };

  // On load
  if (darkmode === "active") {
    enableDarkmode();
  } else {
    disableDarkmode();
  }

  themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
  });

