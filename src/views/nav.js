import logo from '../images/logo.png';

const nav = (isLoggedIn) => (`
<nav class="navbar navbar-expand-lg bg-body-white p-0">
<div class="container-fluid">
  <img src="${logo}" alt="logo du site" width="110" height="110">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav d-flex align-items-center">
    ${isLoggedIn ? `
       ${window.location.pathname !== '/evenements' ? `
      <li class="nav-item">
        <a class="nav-link" href="/evenements">Evenements</a>
      </li>
        ` : ''}
        ${window.location.pathname !== '/mes-taches' ? `
          <li class="nav-item">
            <a class="nav-link" href="/mes-taches">Mes Taches</a>
          </li>
        ` : ''}
        ${window.location.pathname !== '/depenses' ? `
          <li class="nav-item">
            <a class="nav-link" href="/tableau-de-bord">Mes depenses</a>
          </li>
        ` : ''}
        ${window.location.pathname !== '/cree-un-message' ? `
          <li class="nav-item">
            <a class="nav-link" href="/cree-un-message">Message</a>
          </li>
        ` : ''}
        ${window.location.pathname !== '/tableau-de-bord' ? `
          <li class="nav-item">
            <a class="nav-link" href="/tableau-de-bord">Tableau de Bord</a>
          </li>
        ` : ''}
        ${window.location.pathname !== '/profil' ? `
          <li class="nav-item">
          <a class="nav-link" href="/profil"><i class="fa-solid fa-user"></i></a>
          </li>
        ` : ''}
        <i id="btn-logout" class="fa-solid fa-arrow-right-from-bracket btn-logout"></i>
        ` : `
        <button id="btn-register" class="btn-connect">
          <a href="/inscription" class="my-link">S'inscrire / Se connecter</a>
        </button>`}
    </ul>
  </div>
</div>
</nav>
`);
export default nav;
