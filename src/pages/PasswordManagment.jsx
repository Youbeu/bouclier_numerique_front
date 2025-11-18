import FloatingButton from "../components/FloatingButton";
import PasswordList from "../components/PasswordList";

const PasswordManagment = () => {
    return ( 
        <div className="password-managment" style={{
            width: '100%',
            animation: 'fadeInUp 0.6s ease'
        }}>
            <h2 style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: 'var(--spacing-xs)'
            }}>
                Gestionnaire de Mots de Passe
            </h2>
            <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                marginBottom: 'var(--spacing-xl)'
            }}>
                Gérez et organisez vos mots de passe
            </p>
            <div style={{ width: '100%' }}> 
                <PasswordList />
                <FloatingButton />
            </div>
        </div>
     );
}
 
export default PasswordManagment; 
