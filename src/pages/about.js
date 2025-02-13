const About = () => {
    return (
        <div className="about-container">
            <h1>À propos de notre projet</h1>

            <section className="about-section">
                <h2>Introduction</h2>
                <p>
                    <strong>Le Bouclier Numérique</strong> est une application sécurisée de gestion des mots de passe, conçue pour aider les utilisateurs à stocker et gérer leurs informations sensibles en toute sécurité.
                </p>
            </section>

            <section className="about-section">
                <h2>Le Problème</h2>
                <p>
                    De nombreuses personnes utilisent des mots de passe faibles ou réutilisent les mêmes mots de passe sur plusieurs sites, ce qui les rend vulnérables aux cyberattaques.
                </p>
            </section>

            <section className="about-section">
                <h2>Notre Solution</h2>
                <p>
                    Nous offrons une plateforme sécurisée utilisant des techniques avancées de chiffrement pour stocker et protéger vos mots de passe, afin que vous puissiez naviguer sur Internet en toute sérénité.
                </p>
            </section>

            <section className="about-section">
                <h2>Fonctionnalités Clés</h2>
                <ul>
                    <li>Stockage sécurisé des mots de passe</li>
                    <li>Génération automatique de mots de passe forts</li>
                    <li>Authentification sécurisée des utilisateurs</li>
                    <li>Mise à jour et suppression facile des informations</li>
                </ul>
            </section>

            <section className="about-section">
                <h2>Conclusion</h2>
                <p>
                    Notre objectif est de permettre à chacun de gérer ses mots de passe en toute simplicité et en toute sécurité. <br />
                    Avec <strong>Le Bouclier Numérique</strong>, protégez vos informations et adoptez de meilleures habitudes en matière de cybersécurité.
                </p>
            </section>
        </div>
    );
};

export default About;
