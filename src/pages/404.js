import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>404</h2>
            <p>La Page que vous Demandez N'existe Pas !</p>
            <Link to="/dashbord">Retour à la Page d'Accueil...</Link>
        </div>
     );
}
 
export default NotFound;