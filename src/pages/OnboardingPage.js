import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingPage = () => {
    const [index, setIndex] = useState(1);
    const navigate = useNavigate();

    // Données pour les pages d'onboarding
    const pages = [
        {
            title: "Bienvenue dans Le Bouclier Numérique",
            description:
                "Bienvenue dans Le Bouclier Numérique, votre allié ultime dans la guerre numérique. Ici, vos secrets les plus précieux — vos mots de passe — seront protégés par un arsenal de technologies de pointe. Votre rôle est simple mais crucial : reprendre le contrôle de votre sécurité numérique. Notre mission est de transformer vos données en une forteresse imprenable.",
        },
        {
            title: "Le Bouclier qui Défie les Hackers",
            description:
                "Chaque mot de passe que vous enregistrez ici sera protégé par un cryptage digne des agences les plus secrètes. Mais ce n’est pas tout : Le Bouclier Numérique ne se contente pas de protéger. Il évalue et renforce chaque mot de passe pour vous garantir une défense sans faille.",
        },
        {
            title: "Prenez les Commandes",
            description:
                "Le tableau de bord, c’est votre QG. Depuis cet espace, vous aurez un contrôle total sur vos données.",
        },
    ];

    // Fonction pour passer à la page suivante
    const handleNext = () => {
        if (index < pages.length) {
            setIndex(index + 1);
        }
    };

    return (
        <div className="onboarding">
            <h2>{pages[index - 1].title}</h2>
            <p>{pages[index - 1].description}</p>
            {index === 1 && (
                <h3>👉 Prêt à entrer dans un monde où la sécurité n’est pas un luxe, mais une nécessité ?</h3>
            )}
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                {index < pages.length && (
                    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        {index === 2 && (
                            <button
                                onClick={() => setIndex(pages.length)}
                                style={{ marginRight: "10px" }}
                            >
                                Passer
                            </button>
                        )}
                        <button onClick={handleNext}>Suivant</button>
                    </div>
                )}
                {index === pages.length && (
                    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <button onClick={() => navigate('/login')} style={{ marginRight: "10px" }}>Se Connecter</button>
                        <button onClick={() => navigate('/sign-up')}>S'inscrire</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OnboardingPage;
