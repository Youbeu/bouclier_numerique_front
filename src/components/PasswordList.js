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
            try {
                // Appel API pour obtenir les mots de passe
                const response = await axiosInstance.get("passwords/");
                // Mettre à jour l'état des mots de passe avec les données de la réponse
                setPasswords(response.data);
                // Vérifier si les données de la réponse sont vides
                if (response.data.length === 0) {
                    setIsEmpty("Vous n'avez pas encore de mot de passe enregistré.");
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
    }, []);

    // Afficher le message de chargement pendant la récupération des données
    if (isLoading) return <p>Chargement des mots de passe...</p>;
    // Afficher le message d'erreur en cas d'erreur
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div className="password-list" style={{ gap: '20px' }}>
            <h2>Mots de Passe</h2>
            <p>Voici la liste de vos mots de passe</p>
            <div className='list'>
                {/* Afficher le message si la liste des mots de passe est vide */}
                {isEmpty && <p style={{ color: 'red' }}>{isEmpty}</p>}
                {/* Parcourir les mots de passe et afficher chacun d'eux */}
                {Passwords.map((item, index) => (
                    <div className="password" key={index}>
                        <Link to={`/password/${item.id}`} key={item.id} className="password">
                            <h2>{item.title}</h2>
                            <p>********</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PasswordList;