import { useNavigate } from 'react-router-dom';

/**
 * Composant qui affiche une page 404.
 */
const NotFound = () => {
    const navigate = useNavigate();
    
    return ( 
        <div className="not-found">
            <h2>404</h2>
            <p>La Page que vous Demandez N'existe Pas !</p>
            <button 
                className="btn-primary" 
                onClick={() => navigate('/')}
                style={{ marginTop: 'var(--spacing-lg)' }}
            >
                Retour à la Page d'Accueil
            </button>
        </div>
     );
}
 
export default NotFound;