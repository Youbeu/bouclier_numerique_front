import { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import { Link } from 'react-router-dom';

const PasswordList = () => {
    // État pour stocker la liste des mots de passe
    const [Passwords, setPasswords] = useState([]);
    // État pour gérer l'état de chargement
    const [isLoading, setIsLoading] = useState(true);
    // État pour gérer le message de liste vide
    const [isEmpty, setIsEmpty] = useState('');
    // État pour gérer les messages d'erreur
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fonction pour récupérer les mots de passe depuis l'API
        const fetchPasswords = async () => {
            setIsLoading(true);
            try {
                // Appel API pour obtenir les mots de passe
                const response = await axiosInstance.get("passwords/");
                // Mettre à jour l'état des mots de passe avec les données de la réponse
                setPasswords(response.data);
                // Vérifier si les données de la réponse sont vides
                if (response.data.length === 0) {
                    setIsEmpty("Vous n'avez pas encore de mot de passe enregistré.");
                } else {
                    setIsEmpty('');
                }
            } catch (err) {
                // Mettre à jour l'état d'erreur en cas d'erreur lors de l'appel API
                setError("Erreur lors du chargement des mots de passe.");
                console.error(err);
            } finally {
                // Mettre à jour l'état de chargement à false après l'appel API
                setIsLoading(false);
            }
        };

        // Appeler la fonction fetchPasswords
        fetchPasswords();

        // Écouter l'événement personnalisé pour rafraîchir la liste
        const handlePasswordAdded = () => {
            fetchPasswords();
        };
        window.addEventListener('passwordAdded', handlePasswordAdded);

        // Nettoyer l'écouteur d'événement au démontage
        return () => {
            window.removeEventListener('passwordAdded', handlePasswordAdded);
        };
    }, []);

    // Afficher le message de chargement pendant la récupération des données
    if (isLoading) {
        return (
            <div className="password-list">
                <h2>Mots de Passe</h2>
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    padding: 'var(--spacing-xl)',
                    color: 'var(--text-secondary)'
                }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        border: '3px solid #e2e8f0',
                        borderTop: '3px solid var(--primary)',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                    }} />
                </div>
            </div>
        );
    }
    
    // Afficher le message d'erreur en cas d'erreur
    if (error) {
        return (
            <div className="password-list">
                <h2>Mots de Passe</h2>
                <div style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '2px solid var(--danger)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--spacing-lg)',
                    color: 'var(--danger)',
                    textAlign: 'center'
                }}>
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className="password-list">
            <h2>Mots de Passe</h2>
            <p>Voici la liste de vos mots de passe</p>
            <div className='list'>
                {/* Afficher le message si la liste des mots de passe est vide */}
                {isEmpty && (
                    <div style={{
                        gridColumn: '1 / -1',
                        background: 'var(--bg-card)',
                        borderRadius: 'var(--radius-lg)',
                        padding: 'var(--spacing-xl)',
                        textAlign: 'center',
                        boxShadow: 'var(--shadow-sm)',
                        border: '1px solid #e2e8f0'
                    }}>
                        <p style={{ 
                            color: 'var(--text-secondary)', 
                            fontSize: '1rem',
                            margin: 0
                        }}>
                            {isEmpty}
                        </p>
                    </div>
                )}
                {/* Parcourir les mots de passe et afficher chacun d'eux */}
                {Passwords.map((item, index) => (
                    <Link 
                        to={`/password/${item.id}`} 
                        key={item.id}
                        style={{ textDecoration: 'none' }}
                    >
                        <div className="password">
                            <h2>{item.title}</h2>
                            <p>********</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default PasswordList;