import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'; 
import axiosInstance from '../api/axiosInstance'; 

const Login = () => {
    // Définition des états locaux pour l'email, le mot de passe, les erreurs et le statut de chargement
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate(); 

    // Fonction pour gérer les changements dans les champs de saisie
    const handleChange = (e) => {
        const { name, value } = e.target; 
        if (name === 'email') setEmail(value); 
        if (name === 'password') setPassword(value); 
    };

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêche le comportement par défaut de l'envoi du formulaire
        setIsLoading(true); // Indique que le chargement a commencé
        try {
            // Envoi des données de connexion à l'API
            const response = await axiosInstance.post("utilisateur/connexion/", { email, password });
            console.log("Connexion réussie :", response.data); // Journalisation des données de réponse en cas de succès

            // Stockage des tokens d'accès et de rafraîchissement dans le localStorage pour une utilisation future
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);

            // Navigation vers le tableau de bord après une connexion réussie
            navigate('/dashboard');
        } catch (error) {
            // Gestion des erreurs de connexion
            const errorMessage = error.response?.data?.detail || "Identifiants incorrects."; // Message d'erreur par défaut
            console.error("Erreur lors de la connexion", error.response?.data); // Journalisation de l'erreur
            setError(errorMessage); // Mise à jour de l'état d'erreur
        } finally {
            setIsLoading(false); 
        }
    };

    return (
        <div className="login-form">
            <h2>Accédez à Votre Forteresse Numérique</h2>
            <p>Entrez vos identifiants pour déverrouiller votre espace sécurisé.</p>
            <form onSubmit={handleSubmit}> 
                <label>Adresse e-mail</label>
                <input name='email' value={email} onChange={handleChange} type="email" required /> 
                <label>Mot de passe</label>
                <input name='password' value={password} onChange={handleChange} type="password" required /> 
                {error && <p style={{ color: 'var(--danger)', marginTop: 'var(--spacing-xs)', fontSize: '0.9rem' }}>{error}</p>}
                <button type="submit" className="btn-primary" style={{ width: "100%", marginTop: 'var(--spacing-md)' }} disabled={isLoading}>
                    {isLoading ? "Connexion en cours..." : "Déverrouiller Mon Accès"} 
                </button>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "var(--spacing-xs)", marginTop: "var(--spacing-lg)" }}>
                    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Vous n'avez pas de compte ?</p>
                    <Link to="/sign-up" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Inscrivez-vous</Link> 
                </div>
            </form>
        </div>
    );
}

export default Login; 
