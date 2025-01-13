import {React, useState} from "react";

function FloatingButton() {

    const [showDiv, setShowDiv] = useState(false);
    const handleClick = () => {
        setShowDiv(!showDiv);
    };

    return (
        <div style={{width:'100%'}}>
            {!showDiv && (<button onClick={handleClick}  className="floating-button">+</button>)}
            {showDiv && (<button onClick={handleClick}  className="floating-button">-</button>)}
            {showDiv && (
                <div className="add-password">
                    <div className="close"  >
                        <button  onClick={handleClick}>X</button>
                    </div>
                    <h2>Ajouter un Nouveau Mot de Passe</h2>
                    <form>
                        <label>Titre</label>
                        <input type="text"  placeholder="Nom du site ou de l'application" required/>
                        <label>Identifiant</label>
                        <input type="text" placeholder="Identifiant Associé"/>
                        <label>Email Associé</label>
                        <input type="email" placeholder="Email Associé"/>
                        <label>Mot de Passe</label>
                        <input type="password" placeholder="Mot de Passe"  required/>
                        <button >Enregistrer</button>
                    </form>
                </div>
            )}
        </div>
    );
    }

export default FloatingButton;
