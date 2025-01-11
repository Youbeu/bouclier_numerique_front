import { Link } from 'react-router-dom';


const Login = () => {
    return ( 
        <div className="sign-up">
            <h2>Accédez à Votre Forteresse Numérique</h2>
            <p>Entrez vos identifiants pour déverrouiller votre espace sécurisé. Chaque connexion renforce votre contrôle dans la guerre numérique.</p>
            <form>
                <label>Adresse e-mail</label>
                <input type="email" required />
                <label>Mot de passe</label>
                <input type="password" required />
                <button style={{width: "100%", color:'#f1356d', marginTop:'20px'}}>Déverrouiller Mon Accès</button>
                <div style={{display: "flex", justifyContent: "space-around", marginTop:"20px"}}>
                    <p>Vous n'avez pas de compte ?</p>
                    <Link to="/sign-up">Inscrivez-vous</Link>
                </div>
            </form>
        </div>
     );
}
 
export default Login;