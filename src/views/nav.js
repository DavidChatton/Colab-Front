import logo from '../images/logo.png';

export default () => (`
<nav class="navbar navbar-expand-lg bg-body-white p-0">
  <div class="container-fluid">
    <img src="${logo}" alt="logo du site" width="110" height="110">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav d-flex align-items-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Calendrier</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/tableau-de-bord">Tableau de Bord</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa-solid fa-user"></i></a>
        </li>
          <button id="btn-register" class="btn-connect">
            <a href="/inscription" class="my-link">S'inscrire / Se connecter</a>
          </button>
      </ul>
    </div>
  </div>
</nav>
`);
