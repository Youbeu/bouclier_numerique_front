import React from 'react';
import CardStatistic from '../components/CardStatistic';
const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <h2>Tableau De Bord</h2>
            <p>Centre Des Opérations</p>
            <div className='card-statistic'>
                <h2>Les Statistiques</h2>
                <CardStatistic title="Yo les mec J'assure Grave" value="15" />
            </div>
        </div>
        
     );
}
 
export default Dashboard;