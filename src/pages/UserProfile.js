import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

const UserProfile = () => {
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [formData, setFormData] = useState({ password: "", confirmPassword: "" });
    const [userData, setUserData] = useState({ username: "", email: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // Récupération des informations de l'utilisateur au chargement du composant
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axiosInstance.get("utilisateur/profile/");
                setUserData(response.data);
            } catch (err) {
                setError("Erreur lors de la récupération du profil.");
            }
        };

        fetchUserData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        setSuccess("");

        if (formData.password !== formData.confirmPassword) {
            setError("Les mots de passe ne correspondent pas.");
            setIsLoading(false);
            return;
        }

        try {
            await axiosInstance.put("utilisateur/update-password/", { password: formData.password });
            setSuccess("Mot de passe mis à jour avec succès !");
            setFormData({ password: "", confirmPassword: "" });
            setShowPasswordModal(false);
        } catch (err) {
            setError("Erreur lors de la mise à jour du mot de passe.");
        } finally {
            setIsLoading(false);
        }
    };

    // Gestion de la suppression du compte
    const handleDeleteAccount = async () => {
        try {
            await axiosInstance.delete("utilisateur/delete-user/");
            alert("Votre compte a été supprimé avec succès !");
            navigate("/login"); // Redirection vers la page de connexion après suppression
        } catch (err) {
            setError("Erreur lors de la suppression du compte.");
        }
    };

    return (
        <div>
            <h2>Profil Utilisateur</h2>
            <p>Consultez et Modifiez votre Profil</p>
            <div className="user-profile">
                <div className="user-profile-info">
                    <h2>Informations Personnelles</h2>
                    <div className="user-profile-info-item">
                        <span>Nom:</span>
                        <p>{userData.username || "Chargement..."}</p>
                    </div>
                    <div className="user-profile-info-item">
                        <span>Email:</span>
                        <p>{userData.email || "Chargement..."}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button className="profile-button" onClick={() => setShowPasswordModal(true)}>
                            Mettre à jour Mot de Passe
                        </button>
                        <button className="profile-button" onClick={() => setShowDeleteModal(true)}>
                            Supprimer le compte
                        </button>
                    </div>
                </div>
            </div>

            {/* Popup de mise à jour du mot de passe */}
            {showPasswordModal && (
                <div className="modal" onClick={() => setShowPasswordModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Modifier le Mot de Passe</h2>
                        <form onSubmit={handleSubmit}>
                            <label>Nouveau Mot de Passe</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Entrer le nouveau mot de passe"
                                required
                                onChange={handleChange}
                                value={formData.password}
                            />
                            <label>Confirmer le Mot de Passe</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirmer le mot de passe"
                                required
                                onChange={handleChange}
                                value={formData.confirmPassword}
                            />
                            {error && <p style={{ color: "red" }}>{error}</p>}
                            {success && <p style={{ color: "green" }}>{success}</p>}
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <button type="submit" disabled={isLoading}>
                                    {isLoading ? "Mise à jour..." : "Mettre à jour"}
                                </button>
                                <button type="button" onClick={() => setShowPasswordModal(false)}>Annuler</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Popup de confirmation de suppression */}
            {showDeleteModal && (
                <div className="modal" onClick={() => setShowDeleteModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Confirmer la Suppression</h2>
                        <p>Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.</p>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <button className="delete-button" onClick={handleDeleteAccount}>
                                Oui, Supprimer
                            </button>
                            <button className="cancel-button" onClick={() => setShowDeleteModal(false)}>
                                Annuler
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
