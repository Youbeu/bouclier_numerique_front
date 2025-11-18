import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  test('affiche la page onboarding par défaut', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(
      screen.getByText(/Bienvenue dans Le Bouclier Numérique/i)
    ).toBeInTheDocument();
  });
});
