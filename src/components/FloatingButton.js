import {React, useState} from "react";
import axiosInstance from "../api/axiosInstance";

function FloatingButton() {

    const [formData, setFormData] = useState({
        title: '',
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axiosInstance.post("passwords/", formData);
            setError('');
            setFormData({
                title: '',
                username: '',
                email: '',
                password: ''
            });
        } catch (error) {
            if (error.response && error.response.data) {
                setError("Échec de l'ajout du mot de passe : " + JSON.stringify(error.response.data));
            } else {
                setError("Une erreur inattendue s'est produite. Veuillez réessayer.");
            }
        }
        finally {
            setIsLoading(false);
            window.location.reload();
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
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Mot de Passe" 
                            required
                            onChange={handleChange} 
                            value={formData.password} 
                        />
                        <p style={{color:'red'}}>{error}</p>
                        <button>
                            {isLoading ? "Ajout en cours..." : "Ajouter le Mot de Passe"}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
    }

export default FloatingButton;
