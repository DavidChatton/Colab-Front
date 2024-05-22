import imgbackground from '../../images/background-image.jpg';

const login = () => `
<section>
<img src='${imgbackground}'class='login-background' alt=''>
<div class='bg-form'>
    <div class='login-wrapper'>
        <div class='login-card'>
            <h2 class='login-title'><i class='fas fa-user-circle login-icon'></i> 
            Connexion
            </h2>
            <form method='post' class='login-form' id='loginForm'>
                <div class='input-group'>
                    <i class='fas fa-user input-icon-login'></i>
                    <input type='email' id='username' name='email' placeholder='Adresse Mail' required>
                </div>
                <div class='input-group'>
                    <i class='fas fa-lock input-icon-login'></i>
                    <input type='password' id='password' name='password' placeholder='Mot de passe' required>
                    <span id='toggle-password' class='toggle-password'>
                        <i class='fas fa-eye input-icon-eye-login'></i>
                    </span>
                    <p id='passwordMessage'></p>
                </div>
                <div class="login-footer">
                    Vous n'avez pas de compte ? <a href="/inscription">Crée en un</a>
                </div>
                
                <button type='submit' class='login-button'>Connexion</button>
            </form>
            <div class='login-footer'>
                <a href='?page=register'>S'enregistrer</a>
            </div>
        </div>
    </div>
</div>
</section>
`;

export default login;
