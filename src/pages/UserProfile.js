const UserProfile = () => {
    return ( 
        <div> 
            <h2>Profile Utilisateur</h2>
            <p>Consultez et Modifiez votre Profil</p>
            <div className="user-profile">
                <div className="user-profile-info">
                    <h2>Informations Personnelles</h2>
                    <div className="user-profile-info-item">
                        <span>Nom:</span>
                        <p>John Doe</p>
                    </div>
                    <div className="user-profile-info-item">
                        <span>Email:</span>
                        <p>johndoe@gmail.com</p>
                    </div>
                    <div className="user-profile-info-item">
                        <span>Numéro de Téléphone:</span>
                        <p>+225 07 07 07 07</p>
                    </div>
                    <div className="user-profile-info-item">
                        <span>Adresse:</span>
                        <p>Abidjan, Côte d'Ivoire</p>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <button className="profile-button">Mettre à jour</button>  
                        <button className="profile-button">Supprimer le compte</button> 
                    </div>  
                </div> 
                     
            </div>        

        </div>
     );
}
 
export default UserProfile;