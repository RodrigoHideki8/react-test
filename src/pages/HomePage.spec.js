import { render, screen } from '@testing-library/react';
import HomePage from './HomePage'; 
import React from 'react';

test('renders company name', () => {
  render(<HomePage />);
  const companyNameElements = screen.getAllByText(/Minha Empresa/i);
  expect(companyNameElements.length).toBeGreaterThan(0);
});