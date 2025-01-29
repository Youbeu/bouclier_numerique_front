import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axiosInstance.post("utilisateur/connexion/", { email, password });
            console.log("Connexion réussie :", response.data);
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            setIsLoggedIn(true);
            navigate('/dashboard');
        } catch (error) {
            const errorMessage = error.response?.data?.detail || "Identifiants incorrects.";
            console.error("Erreur lors de la connexion", error.response?.data);
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="sign-up">
            <h2>Accédez à Votre Forteresse Numérique</h2>
            <p>Entrez vos identifiants pour déverrouiller votre espace sécurisé.</p>
            <form onSubmit={handleSubmit}>
                <label>Adresse e-mail</label>
                <input name='email' value={email} onChange={handleChange} type="email" required />
                <label>Mot de passe</label>
                <input name='password' value={password} onChange={handleChange} type="password" required />
                <p style={{ color: 'red' }}>{error}</p>
                <button type="submit" style={{ width: "100%", color: '#f1356d', marginTop: '20px' }} disabled={isLoading}>
                    {isLoading ? "Connexion en cours..." : "Déverrouiller Mon Accès"}
                </button>
                <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
                    <p>Vous n'avez pas de compte ?</p>
                    <Link to="/sign-up">Inscrivez-vous</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;