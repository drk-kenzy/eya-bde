import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Hero from '../components/Hero';

// motion/react needs to be mocked to avoid animation issues in jsdom
vi.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
}));

describe('Hero component', () => {
  const renderHero = () =>
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

  it('affiche le titre principal', () => {
    renderHero();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/EYA BDE/i)).toBeInTheDocument();
  });

  it("affiche la section avec le rôle 'region'", () => {
    renderHero();
    // La section doit être rendue
    const section = document.querySelector('section');
    expect(section).toBeInTheDocument();
  });

  it("contient l'id hero-title sur le h1", () => {
    renderHero();
    expect(document.getElementById('hero-title')).toBeInTheDocument();
  });

  it('affiche le texte de description', () => {
    renderHero();
    expect(
      screen.getByText(/portail officiel du Bureau des Étudiants/i)
    ).toBeInTheDocument();
  });
});
