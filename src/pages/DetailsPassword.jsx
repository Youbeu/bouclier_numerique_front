import { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import { useParams, useNavigate } from 'react-router-dom';

/**
 * Cette page permet de consulter, mettre à jour et supprimer les détails d'un mot de passe spécifique.
 */
const PasswordDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [password, setPassword] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    
    const [formData, setFormData] = useState({
        title: '',
        identifier: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        const fetchPassword = async () => {
            try {
                const response = await axiosInstance.get(`passwords/${id}/`);
                setPassword(response.data);
                setFormData({
                    title: response.data.title || '',
                    identifier: response.data.identifier || '',
                    email: response.data.email || '',
                    password: '',
                });
            } catch (err) {
                setError("Erreur lors du chargement des détails du mot de passe.");
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPassword();
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const updatedData = { ...formData };

        if (!updatedData.password) {
            delete updatedData.password;
        }

        try {
            const response = await axiosInstance.put(`passwords/${id}/update/`, updatedData);
            setPassword(response.data);
            setShowForm(false);
        } catch (err) {
            setError("Impossible de mettre à jour les informations.");
        }
    };

    const handleDelete = async () => {
        try {
            await axiosInstance.delete(`passwords/${id}/delete/`);
            setShowDeletePopup(false);
            navigate('/password-managment');
        } catch (err) {
            setError("Erreur lors de la suppression.");
        }
    };

    if (isLoading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 'var(--spacing-xl)',
                minHeight: '400px'
            }}>
                <div style={{
                    width: '50px',
                    height: '50px',
                    border: '3px solid #e2e8f0',
                    borderTop: '3px solid var(--primary)',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                }} />
            </div>
        );
    }
    
    if (error) {
        return (
            <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                border: '2px solid var(--danger)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--spacing-lg)',
                color: 'var(--danger)',
                textAlign: 'center',
                margin: 'var(--spacing-lg)'
            }}>
                {error}
            </div>
        );
    }

    return (
        <div>
            <div className="password-details">
                <h2>Détails du Mot de Passe</h2>
                <p>Ici vous pouvez mettre à jour les informations de votre mot de passe ou le supprimer</p>
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
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-lg)' }}>
                <button className="btn-primary" onClick={() => setShowForm(true)} style={{flex: 1}}>Mettre à jour</button>
                <button className="btn-danger" onClick={() => setShowDeletePopup(true)} style={{flex: 1}}>Supprimer</button>
            </div>

            {/* Formulaire de mise à jour */}
            {showForm && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Mettre à jour les informations</h3>
                        <form onSubmit={handleSubmit}>
                            <label>Titre :</label>
                            <input type="text" name="title" value={formData.title} onChange={handleChange} required />

                            <label>Identifiant :</label>
                            <input type="text" name="identifier" value={formData.identifier} onChange={handleChange} />

                            <label>Email :</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                            <label>Nouveau Mot de Passe :</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Laisser vide si inchangé" />

                            <div style={{display: 'flex', gap: 'var(--spacing-xs)', marginTop: 'var(--spacing-sm)'}}>
                                <button type="submit" className="btn-primary" style={{flex: 1}}>Sauvegarder</button>
                                <button type="button" className="cancel-button" style={{flex: 1}} onClick={() => setShowForm(false)}>Annuler</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Popup de confirmation de suppression */}
            {showDeletePopup && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Êtes-vous sûr de vouloir supprimer ce mot de passe ?</h3>
                        <p style={{color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)'}}>Cette action est irréversible.</p>
                        <div style={{display: 'flex', gap: 'var(--spacing-xs)'}}>
                            <button className="delete-button" onClick={handleDelete} style={{flex: 1}}>Oui, Supprimer</button>
                            <button className="cancel-button" onClick={() => setShowDeletePopup(false)} style={{flex: 1}}>Annuler</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PasswordDetails;
