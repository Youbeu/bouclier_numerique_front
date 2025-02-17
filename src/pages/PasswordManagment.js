import FloatingButton from "../components/FloatingButton";
import PasswordList from "../components/PasswordList";

const PasswordManagment = () => {
    return ( 
        <div className="password-managment" style={{width:'100%'}}>
            <h2>Gestionnaire de Mot de Passe</h2>
            <p>Gérez et Organisez Vos Mots de Passe ici.</p>
            <div className="content-password"> 
                <div><PasswordList /></div> {/* Composant pour afficher la liste des mots de passe */}
                <div><FloatingButton /></div> {/* Composant pour le bouton flottant d'action */}
            </div>
        </div>
     );
}
 
export default PasswordManagment; 
