import { useState, useEffect} from 'react';
import axiosInstance from '../api/axiosInstance';
import { Link } from 'react-router-dom';

const PasswordList = () => {
    const [Passwords, setPasswords] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEmpty, setIsEmpty]= useState('');
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchPasswords = async () => {
            try {
                const response = await axiosInstance.get("passwords/");
                setPasswords(response.data);
                if(response.data.length === 0){
                    setIsEmpty("Vous n'avez pas encore de mot de passe enregistré.");
                }
            } catch (err) {
                setError("Erreur lors du chargement des mots de passe.");
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPasswords();
    }, []);

    if (isLoading) return <p>Chargement des mots de passe...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;
    return ( 
        <div className="password-list" style={{gap:'20px'}}>
            <h2>Mots de Passe</h2>
            <p>Voici la liste de vos mots de passe</p>
            <div className='list'>
                {isEmpty && <p style={{color:'red'}}>{isEmpty}</p>}
                {Passwords.map((item, index) => (
                    <div className="password" key={index}>
                        <Link to={`/password/${item.id}`} key={item.id} className="password">
                            <h2>{item.title}</h2>
                            <p>********</p>
                        </Link>
                    </div>
                )
                )}
            </div>
        </div>
     );
}
 
export default PasswordList;