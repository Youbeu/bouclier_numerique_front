import { useState, useEffect} from 'react';
import axiosInstance from '../api/axiosInstance';
import { useParams } from 'react-router-dom';


const PasswordDetails = () => {
    const {id} = useParams();
    const [password, setPassword] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPassword = async () => {
            try {
                const response = await axiosInstance.get(`passwords/${id}/`); 
                console.log("Mot de passe récupéré :", response.data);
                setPassword(response.data);
            } catch (err) {
                setError("Erreur lors du chargement des détails du mot de passe.");
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPassword();
    }
    , [id]);
    if (isLoading) return <p>Chargement en Cours...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;
    return ( 
        <div>
            <div className="password-details">
                <h2>Détails du Mot de Passe</h2>
                <p>Ici Vous pouvez mettre à jour les informations de votre mot de passe ou le supprimer</p>
            </div>
            <div className='details'>
                <p>Titre :</p>
                <h3>{password.title}</h3>
            </div>
            <div className='details'>
                <p>Identifiant :</p>
                <h3>{password.identifier}</h3>
            </div>
            <div className='details'>
                <p>Adresse Mail :</p>
                <h3>{password.email}</h3>
            </div>
            <div className='details'>
                <p>Mot de passe :</p>
                <h3>{password.decrypted_password}</h3>
            </div>
        </div>
     );
}
 
export default PasswordDetails;

