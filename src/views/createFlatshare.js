import logo from '../images/logo.png';

const createFlatshare = () => `
<section class="vh-100">
  <div class="container py-5 h-100 container-login">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style="border-radius: 1rem;">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://i.pinimg.com/originals/2f/d7/9b/2fd79b00257cfc847b90a07662055c99.jpg"
                width="643" height="945" alt=" " class="img-fluid img-create-flatshare" style="border-radius: 1rem 0 0 1rem;" />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">
                <form>
                  <div class="d-flex align-items-center mb-3 pb-1">
                    <img src="${logo}" alt="" class="d-inline-block align-text create-flatshare-logo">
                  </div>
                  <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Créer une Colocation</h5>
                  <div data-mdb-input-init class="form-outline mb-5">
                    <input type="text" id="name" class="form-control form-control-lg" placeholder="Nom de la Colocation"/>
                  </div>
                  <div data-mdb-input-init class="form-outline mb-5">
                    <input type="text" id="address" class="form-control form-control-lg" placeholder="Adresse de la Colocation"/>
                  </div>
                  <div class="pt-1 mb-4">
                    <button data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-lg btn-block" type="submit">Créer</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

export default createFlatshare;
