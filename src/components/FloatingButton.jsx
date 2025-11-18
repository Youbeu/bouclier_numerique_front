import { React, useState } from "react";
import axiosInstance from "../api/axiosInstance";

function FloatingButton() {
    const [formData, setFormData] = useState({
        title: '',
        identifier: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await axiosInstance.post("passwords/", formData);
            setError('');
            setFormData({
                title: '',
                identifier: '',
                email: '',
                password: ''
            });
            setShowModal(false); // Fermer la popup après l'ajout
        } catch (error) {
            setError("Échec de l'ajout du mot de passe.");
        } finally {
            setIsLoading(false);
            // Déclencher un événement pour rafraîchir la liste des mots de passe
            window.dispatchEvent(new CustomEvent('passwordAdded'));
        }
    };

    function generatePassword() {
        const length = 12;
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
        let password = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
            password += charset.charAt(Math.floor(Math.random() * n));
        }
        setFormData({ ...formData, password: password });
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div style={{ width: '100%' }}>
            <button 
                onClick={() => setShowModal(true)} 
                className="floating-button"
                aria-label="Ajouter un nouveau mot de passe"
            >
                <span style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '2rem',
                    lineHeight: 1
                }}>
                    +
                </span>
            </button>

            {showModal && (
                <div className="modal" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>Ajouter un Nouveau Mot de Passe</h3>
                        <form onSubmit={handleSubmit}>
                            <label>Titre</label>
                            <input
                                type="text"
                                name="title"
                                required
                                placeholder="Nom du site ou de l'application"
                                onChange={handleChange}
                                value={formData.title}
                            />
                            <label>Identifiant</label>
                            <input
                                type="text"
                                name="identifier"
                                placeholder="Identifiant Associé"
                                onChange={handleChange}
                                value={formData.identifier}
                            />
                            <label>Email Associé</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Associé"
                                onChange={handleChange}
                                value={formData.email}
                            />
                            <label>Mot de Passe</label>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Mot de Passe"
                                    required
                                    onChange={handleChange}
                                    value={formData.password}
                                />
                                <button type='button' onClick={toggleShowPassword} className="btn-success" style={{whiteSpace: 'nowrap'}}>
                                    {showPassword ? "Cacher" : "Montrer"}
                                </button>
                            </div>
                            <button type='button' onClick={generatePassword} className="btn-secondary" style={{width:'100%'}}>Générer un mot de passe</button>
                            {error && <p style={{ color: 'var(--danger)', fontSize: '0.9rem' }}>{error}</p>}
                            <div style={{display: 'flex', gap: 'var(--spacing-xs)', width:'100%'}}>
                                <button type='submit' disabled={isLoading} className="btn-primary" style={{flex: 1}}>
                                    {isLoading ? "Ajout en cours..." : "Ajouter"}
                                </button> 
                                <button type='button' className="cancel-button" style={{flex: 1}} onClick={() => setShowModal(false)}>Annuler</button>  
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FloatingButton;
