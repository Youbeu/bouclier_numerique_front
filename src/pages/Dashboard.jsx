import {React, useState, useEffect} from 'react';
import CardStatistic from '../components/CardStatistic';
import PasswordList from '../components/PasswordList';
import axiosInstance from '../api/axiosInstance';
import { Lock, LockOpen, Security } from '@mui/icons-material';


const Dashboard = () => {
    const [totalPassword, setTotalPassword] = useState(0);
    const [totalWeakPassword, setTotalWeakPassword] = useState(0);
    const [totalStrongPassword, setTotalStrongPassword] = useState(0);
    const accessToken = localStorage.getItem('access_token');

    useEffect(() => {
        axiosInstance.get('passwords/statistics/', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then((response) => {
            setTotalPassword(response.data["Total Mot de Passe"]);
            setTotalWeakPassword(response.data["Total Mot de Passe Faible"]);
            setTotalStrongPassword(response.data["Total Mot de Passe Fort"]);
        })
        .catch((error) => {
            console.error("Erreur lors de la récupération des statistiques", error);
        });
    }, [accessToken]);
    

    return ( 
        <div className="dashboard">
            <h2>Tableau de Bord</h2>
            <p>Vue d'ensemble de vos mots de passe</p>
            <div className='card-statistic'>
                <h2>Les Statistiques</h2>
                <div className="statistics-grid">
                    <CardStatistic title="Total Mot de Passe" value={totalPassword} icon={<Lock />} />
                    <CardStatistic title="Total Mot de Passe Faible" value={totalWeakPassword} icon={<LockOpen />} />
                    <CardStatistic title="Total Mot de Passe Fort" value={totalStrongPassword} icon={<Security />} />
                </div>
                <PasswordList />
            </div>
        </div>
        
     );
}
 
export default Dashboard;