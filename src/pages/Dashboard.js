import {React, useState, useEffect} from 'react';
import CardStatistic from '../components/CardStatistic';
import PasswordList from '../components/PasswordList';
import axiosInstance from '../api/axiosInstance';


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
            setTotalPassword(response.data.total_passwords);
            setTotalWeakPassword(response.data.weak_passwords);
            setTotalStrongPassword(response.data.strong_passwords);
        })
        .catch((error) => {
            console.error("Erreur lors de la récupération des statistiques", error);
        });
    }, [accessToken]);

    return ( 
        <div className="dashboard">
            <h2>Tableau De Bord</h2>
            <p>Centre Des Opérations</p>
            <div className='card-statistic'>
                <h2>Les Statistiques</h2>
                <div style={{display:'flex', justifyContent:'space-around', width:'100%'}}>
                    <CardStatistic title="Total Mot de Passe" value={totalPassword} />
                    <CardStatistic title="Total Mot de Passe Faible" value={totalWeakPassword} />
                    <CardStatistic title="Total Mot de Passe Fort" value={totalStrongPassword} />
                </div>
                <PasswordList />
            </div>
        </div>
        
     );
}
 
export default Dashboard;