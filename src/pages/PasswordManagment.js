import FloatingButton from "../components/FloatingButton";
import PasswordList from "../components/PasswordList";

const PasswordManagment = () => {
    return ( 
        <div className="password-managment" style={{width:'100%'}}>
            <h2>Gestionnaire de Mot de Passe</h2>
            <p>Gérez et Organisez Vos Mots de Passe ici.</p>
            {/* <div className="search-bar">
                <input type="text" placeholder="Rechercher un Mot de Passe" />
                <button>Rechercher</button>
            </div> */}
            <div className="content-password"> 
                <div><PasswordList /></div>
                <div><FloatingButton /></div>
            </div>

            
        </div>
     );
}
 
export default PasswordManagment;