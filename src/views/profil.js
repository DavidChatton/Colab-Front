const profil = (data) => (`
  <div class="container form-container">
    <div class="edit-profile-header">
        <h1>Modifier le profil</h1>
    </div>
    <form>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="firstName">First Name</label>
                <input type="text" class="form-control" id="firstName" name="firstname" value="${data.firstname}" readonly autocomplete="off">
            </div>
            <div class="form-group col-md-6">
                <label for="lastName">Last Name</label>
                <input type="text" class="form-control" id="lastName" name="lastname" value="${data.lastname}"autocomplete="off">
            </div>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <div class="input-group">
                <input type="email" class="form-control" id="email" name="email" value="${data.email}"autocomplete="off"> 
            </div>
        </div>
        <div class="form-group">
            <label for="access_code">Code d'accès de la Colocation</label>
            <input type="text" class="form-control" id="access_code" value="${data.access_code}" readonly autocomplete="off">
        </div>
        <button type="submit" class="btn btn-save mt-3">Modifier</button>
    </form>
  </div>
`);
export default profil;
