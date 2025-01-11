import { Home, Logout } from '@mui/icons-material';
import {React, useState} from 'react';
import { FaUser, FaBars } from 'react-icons/fa';
import { GiPadlock } from 'react-icons/gi';
import { GrConfigure } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
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
            'path':'/',
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
                    <NavLink to={item.path} key={index} className="link" activeClassName="active">
                        <div className="icon" >{item.icon}</div>
                        {isOpen && <div className="link-text"> {item.name}</div>}
                    </NavLink>
                ))}
            </div>
        </div>
        <><main>{children}</main></></>
     );
}
 
export default Sidebar;