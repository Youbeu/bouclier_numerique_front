import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

function FloatingButton() {

    const [formData, setFormData] = useState({
        title: '',
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Fonction pour générer un mot de passe sécurisé
    const generatePassword = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
        const passwordLength = 12;
        let password = '';
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        setFormData({ ...formData, password });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post("passwords/", formData);
            console.log("Mot de passe ajouté :", response.data);
            setError('');
            setFormData({
                title: '',
                username: '',
                email: '',
                password: ''
            });
        } catch (error) {
            if (error.response && error.response.data) {
                console.error("Erreur lors de l'ajout du mot de passe", error.response.data);
                setError("Échec de l'ajout du mot de passe : " + JSON.stringify(error.response.data));
            } else {
                console.error("Erreur inattendue", error);
                setError("Une erreur inattendue s'est produite. Veuillez réessayer.");
            }
        }
    };



    const [showDiv, setShowDiv] = useState(false);
    const handleClose = () => {
        setShowDiv(!showDiv);
        setFormData({
            title: '',
            username: '',
            email: '',
            password: ''
        });
    };

    return (
        <div style={{width:'100%'}}>
            {!showDiv && (<button onClick={handleClose}  className="floating-button">+</button>)}
            {showDiv && (<button onClick={handleClose}  className="floating-button">-</button>)}
            {showDiv && (
                <div className="add-password">
                    <div className="close"  >
                        <button  onClick={handleClose}>X</button>
                    </div>
                    <h2>Ajouter un Nouveau Mot de Passe</h2>
                    <form>
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
                            name="username" 
                            placeholder="Identifiant Associé"
                            onChange={handleChange} 
                            value={formData.username} 
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
                        <div style={{display: "flex", justifyContent: "space-between", marginBottom:"30px", alignItems: "center"}}>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Mot de Passe" 
                                required
                                onChange={handleChange} 
                                value={formData.password} 
                            />
                            <button style={{color:'white'}} type="button" onClick={generatePassword}>Générer</button>
                        </div>
                        <button onClick={handleSubmit}>Enregistrer</button>
                    </form>
                </div>
            )}
        </div>
    );
    }

export default FloatingButton;
