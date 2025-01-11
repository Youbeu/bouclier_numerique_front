import { Link } from "react-router-dom";

const SignUp = () => {
    return ( 
        <div className="sign-up">
            <h2>Un Compte, Un Bouclier</h2>
            <p>Votre première ligne de défense commence ici. Créez un compte et prenez les commandes de votre sécurité numérique.</p>
            <form>
                <label>Nom Complet</label>
                <input type="text" required />
                <label>Adresse e-mail</label>
                <input type="email" required />
                <label>Mot de passe</label>
                <div style={{display: "flex", justifyContent: "space-between", marginBottom:"30px"}}>
                    <input type="password" required />
                    <button style={{color:'#f1356d'}}>Générer</button>
                </div>
                <button style={{width: "100%", color:'#f1356d'}}>Créer un compte</button>
                <div style={{display: "flex", justifyContent: "space-around", marginTop:"20px"}}>
                    <p>Vous avez déjà un compte ?</p>
                    <Link to="/login">Connectez-vous</Link>
                </div>
            </form>
        </div>
     );
}
 
export default SignUp;