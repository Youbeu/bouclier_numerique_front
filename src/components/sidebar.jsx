import { Home, Logout } from '@mui/icons-material';
import {React, useState} from 'react';
import { FaUser, FaBars } from 'react-icons/fa';
import { GiPadlock } from 'react-icons/gi';
import { GrConfigure } from 'react-icons/gr';
import { NavLink, useNavigate } from 'react-router-dom';
import axiosInstance from "../api/axiosInstance";

/**
 * Composant Sidebar qui affiche une barre latérale avec des éléments de menu.
 */
const Sidebar = ({children}) => {
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        try {
            await axiosInstance.post("utilisateur/deconnexion/"); // Appel à l'API de déconnexion
            localStorage.removeItem("access_token"); // Suppression du token
            localStorage.removeItem("refresh_token"); // Suppression du token refresh si utilisé
            navigate("/login"); // Redirection vers la page de connexion
        } catch (error) {
            alert("Erreur lors de la déconnexion", error);
        }
    };
    const menuItems = [
        {
            'path':'/dashboard',
            'name':'Tableau De Bord',
            'icon':<Home />
        },
        {
            'path':'/password-managment',
            'name':'Mots de passe',
            'icon':<GiPadlock/>
        },
        {
            'path':'/user-profile',
            'name':'Mon Profil',
            'icon':<FaUser/>
        },
        {
            'path':'/about',
            'name':'A Propos',
            'icon':<GrConfigure/>
        },
        {
            'action': handleLogout,
            'name':'Se Déconnecter',
            'icon':<Logout/>
        },
    ]
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => {setIsOpen(!isOpen);}
    return ( 
        <>
        <div className="container">
            <div className={`sidebar ${!isOpen ? 'collapsed' : ''}`}>
                <div className="top-section">
                    <div className="bars" onClick={toggle}>
                        <FaBars color='white'/>
                    </div>
                    <h2>Le Bouclier Numérique</h2>
                </div>
                {menuItems.map((item, index) => (
                    item.action ? (
                        <div key={index} className="link" onClick={() => item.action()} style={{cursor: "pointer"}}>
                            <div className="icon">{item.icon}</div>
                            {isOpen && <div className="link-text">{item.name}</div>}
                        </div>
                    ) : (
                        <NavLink 
                            to={item.path} 
                            key={index} 
                            className={({ isActive }) => `link ${isActive ? 'active' : ''}`}
                        >
                            <div className="icon">{item.icon}</div>
                            {isOpen && <div className="link-text">{item.name}</div>}
                        </NavLink>
                    )
                ))}

            </div>
        </div>
        <><main>{children}</main></></>
     );
}
 
export default Sidebar;