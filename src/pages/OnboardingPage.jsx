import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingPage = () => {
    const [index, setIndex] = useState(1); // État pour suivre l'index de la page actuelle
    const navigate = useNavigate(); // Hook pour naviguer entre les pages

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
        if (index < pages.length) { // Vérifie si l'index est inférieur à la longueur des pages
            setIndex(index + 1); // Incrémente l'index pour passer à la page suivante
        }
    };

    return (
        <div className="onboarding">
            {/* Indicateur de progression */}
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: 'var(--spacing-xs)', 
                marginBottom: 'var(--spacing-lg)' 
            }}>
                {pages.map((_, i) => (
                    <div
                        key={i}
                        style={{
                            width: i + 1 === index ? '24px' : '8px',
                            height: '8px',
                            borderRadius: 'var(--radius-full)',
                            background: i + 1 === index 
                                ? 'var(--primary)' 
                                : '#cbd5e1',
                            transition: 'all var(--transition-base)',
                            cursor: 'pointer'
                        }}
                        onClick={() => setIndex(i + 1)}
                    />
                ))}
            </div>
            
            <h2>{pages[index - 1].title}</h2>
            <p>{pages[index - 1].description}</p>
            {index === 1 && (
                <h3>👉 Prêt à entrer dans un monde où la sécurité n'est pas un luxe, mais une nécessité ?</h3>
            )}
            <div style={{ width: "100%", display: "flex", justifyContent: "center", flexWrap: 'wrap', gap: 'var(--spacing-sm)' }}>
                {index < pages.length && (
                    <>
                        {(index === 1 || index === 2) && (
                            <button
                                className="btn-secondary"
                                onClick={() => setIndex(pages.length)}
                            >
                                Passer
                            </button>
                        )}
                        <button className="btn-primary" onClick={handleNext}>
                            Suivant →
                        </button>
                    </>
                )}
                {index === pages.length && (
                    <>
                        <button 
                            className="btn-primary" 
                            onClick={() => navigate('/login')}
                        >
                            Se Connecter
                        </button>
                        <button 
                            className="btn-secondary" 
                            onClick={() => navigate('/sign-up')}
                        >
                            S'inscrire
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default OnboardingPage; 
