import React from 'react';
import CardStatistic from '../components/CardStatistic';
import PasswordList from '../components/PasswordList';

const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <h2>Tableau De Bord</h2>
            <p>Centre Des Opérations</p>
            <div className='card-statistic'>
                <h2>Les Statistiques</h2>
                <div style={{display:'flex', justifyContent:'space-around', width:'100%'}}>
                    <CardStatistic title="Total Mot de Passe" value="15" />
                    <CardStatistic title="Total Mot de Passe Faible" value="15" />
                    <CardStatistic title="Total Mot de Passe Fort" value="15" />
                </div>
                <PasswordList />
            </div>
        </div>
        
     );
}
 
export default Dashboard;