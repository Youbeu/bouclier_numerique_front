import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../api/axiosInstance";

const SignUp = () => {
    const [formData, setFormData] = useState({ // État pour stocker les données du formulaire
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState(''); // État pour gérer les messages d'erreur
    const navigate = useNavigate(); // Hook pour naviguer vers d'autres pages

    const handleChange = (e) => {
        const { name, value } = e.target; // Récupère le nom et la valeur de l'input
        setFormData({ ...formData, [name]: value }); // Met à jour l'état du formulaire
    };

    // Fonction pour générer un mot de passe sécurisé
    const generatePassword = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?'; // Caractères possibles pour le mot de passe
        const passwordLength = 10; // Longueur du mot de passe
        let password = '';
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length); // Indice aléatoire pour choisir un caractère
            password += chars[randomIndex]; // Construit le mot de passe
        }
        setFormData({ ...formData, password }); // Met à jour l'état avec le mot de passe généré
    }; 

    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page lors de l'envoi du formulaire
        try {
            const response = await axiosInstance.post("utilisateur/inscription/", formData); // Envoie les données du formulaire à l'API
            console.log("Inscription réussie :", response.data);
            navigate('/dashboard'); // Redirection vers le tableau de bord en cas de succès
        } catch (error) {
            if (error.response && error.response.data) {
                console.error("Erreur lors de l'inscription", error.response.data);
                setError("Échec de l'inscription : " + JSON.stringify(error.response.data)); // Affiche un message d'erreur
            } else {
                console.error("Erreur inattendue", error);
                setError("Une erreur inattendue s'est produite. Veuillez réessayer.");
            }
        }
    };
    
    return ( 
        <div className="sign-up">
            <h2>Un Compte, Un Bouclier</h2>
            <p>Votre première ligne de défense commence ici. Créez un compte et prenez les commandes de votre sécurité numérique.</p>
            <form onSubmit={handleSubmit}>
                <label>Nom Complet</label>
                <input 
                    type="text" 
                    name="username"
                    required  
                    onChange={handleChange}
                    value={formData.username} 
                />
                <label>Adresse e-mail</label>
                <input 
                    type="email" 
                    name="email"
                    required 
                    onChange={handleChange}
                    value={formData.email} 
                />
                <label>Mot de passe</label>
                <div style={{display: "flex", gap: "var(--spacing-xs)", marginBottom: "var(--spacing-md)", alignItems: "center"}}>
                    <input 
                        type="password" 
                        name="password"
                        required 
                        style={{flex: 1}}  
                        onChange={handleChange}
                        value={formData.password}
                    />
                    <button type="button" className="btn-secondary" onClick={generatePassword} style={{whiteSpace: 'nowrap'}}>Générer</button>
                </div>
                {error && <p style={{color: "var(--danger)", fontSize: '0.9rem', marginBottom: 'var(--spacing-sm)'}}>{error}</p>}
                <button type="submit" className="btn-primary" style={{width: "100%"}}>Créer un compte</button>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "var(--spacing-xs)", marginTop: "var(--spacing-lg)"}}>
                    <p style={{color: 'var(--text-secondary)', margin: 0}}>Vous avez déjà un compte ?</p>
                    <Link to="/login" style={{color: 'var(--primary)', fontWeight: 600, textDecoration: 'none'}}>Connectez-vous</Link> 
                </div>
            </form>
        </div>
     );
}
 
export default SignUp;
