import { Home, Logout } from '@mui/icons-material';
import {React, useState} from 'react';
import { FaUser, FaBars } from 'react-icons/fa';
import { GiPadlock } from 'react-icons/gi';
import { GrConfigure } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import axiosInstance from "../api/axiosInstance";

/**
 * Composant Sidebar qui affiche une barre latérale avec des éléments de menu.
 */
const Sidebar = ({children}) => {
    const handleLogout = async () => {
        
        try {
            await axiosInstance.post("utilisateur/deconnexion/"); // Appel à l'API de déconnexion
            localStorage.removeItem("access_token"); // Suppression du token
            localStorage.removeItem("refresh_token"); // Suppression du token refresh si utilisé
            window.location.href = "/login"; // Redirection vers la page de connexion
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
            <div className="sidebar" style={{width: isOpen ? '230px' : '80px',}}>
                <div className="top-section">
                    <div className="bars">
                        <FaBars color='white' onClick={toggle}/>
                    </div>
                    {isOpen && <h2 style={{marginLeft: isOpen? '40px':'0px'}}>Le Bouclier Numérique</h2> }
                </div>
                {menuItems.map((item, index) => (
                    item.action ? (
                        <div key={index} className="link" onClick={() => item.action()} style={{cursor: "pointer"}}>
                            <div className="icon">{item.icon}</div>
                            {isOpen && <div className="link-text">{item.name}</div>}
                        </div>
                    ) : (
                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
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