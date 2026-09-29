import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Clubs from '../pages/Clubs';

vi.mock('motion/react', () => {
  const motion = {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
    h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1 {...props}>{children}</h1>
    ),
  };
  return { motion, AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</> };
});

describe('Clubs page', () => {
  const renderClubs = () =>
    render(
      <MemoryRouter>
        <Clubs />
      </MemoryRouter>
    );

  it('affiche le titre "Nos Clubs"', () => {
    renderClubs();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('affiche les 9 cartes de clubs', () => {
    renderClubs();
    const buttons = screen.getAllByRole('button', { name: /Rejoindre ce club/i });
    expect(buttons).toHaveLength(9);
  });

  it('affiche le toast après un clic sur "Rejoindre"', () => {
    renderClubs();
    const btn = screen.getAllByRole('button', { name: /Rejoindre ce club/i })[0];
    fireEvent.click(btn);
    expect(screen.getByText(/Vote pour le BDE EYA/i)).toBeInTheDocument();
  });
});
