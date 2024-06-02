const profil = () => (`
<div class="container form-container">
    <div class="edit-profile-header">
        <h1>Edit profile</h1>
        <img src="https://www.la-spa.fr/app/app/uploads/2023/07/prendre-soin_duree-vie-chat.jpg" alt="Profile Picture" class="profile-picture">
    </div>
    <form>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="firstName">First Name</label>
                <input type="text" class="form-control" id="firstName" value="Mehrab">
            </div>
            <div class="form-group col-md-6">
                <label for="lastName">Last Name</label>
                <input type="text" class="form-control" id="lastName" value="Bozorgi">
            </div>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <div class="input-group">
                <input type="email" class="form-control" id="email" value="Mehrabbozorgi.business@gmail.com">
                <div class="input-group-append">
                    <span class="input-group-text"><i class="fas fa-check-circle" style="color: green;"></i></span>
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control" id="address" value="33062 Zboncak isle">
        </div>
        <div class="form-group">
            <label for="contactNumber">Contact Number</label>
            <input type="text" class="form-control" id="contactNumber" value="58077.79">
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="city">City</label>
                <input type="text" class="form-control" id="city" value="Mehrab">
            </div>
            <div class="form-group col-md-6">
                <label for="state">State</label>
                <input type="text" class="form-control" id="state" value="Bozorgi">
            </div>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <div class="input-group">
                <input type="password" class="form-control" id="password" value="sbdfbnd65sfvdb s">
                <div class="input-group-append">
                    <span class="input-group-text"><i class="fas fa-check-circle" style="color: green;"></i></span>
                </div>
            </div>
        </div>
        <button type="button" class="btn btn-cancel">Cancel</button>
        <button type="submit" class="btn btn-save">Save</button>
    </form>
</div>
`);
export default profil;
