// src/App.spec.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  test('renders correctly', () => {
    render(<App />);
    
    const viteLogo = screen.getByAltText(/vite logo/i);
    const reactLogo = screen.getByAltText(/react logo/i);
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();

    const title = screen.getByText(/vite \+ react/i);
    expect(title).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();
  });

  test('increments count when button is clicked', () => {
    render(<App />);

    const button = screen.getByRole('button', { name: /count is 0/i });
    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');
    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 2');
  });

  test('renders the correct informational texts', () => {
    render(<App />);
    
    const infoText = screen.getByText(/click on the vite and react logos to learn more/i);
    expect(infoText).toBeInTheDocument();
    
    const editText = screen.getByText(/edit/i);
    const codeText = screen.getByText(/src\/app.tsx/i);
    const saveText = screen.getByText(/and save to test hmr/i);

    expect(editText).toBeInTheDocument();
    expect(codeText).toBeInTheDocument();
    expect(saveText).toBeInTheDocument();
  });
});