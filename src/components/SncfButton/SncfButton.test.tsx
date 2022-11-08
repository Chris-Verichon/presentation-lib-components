import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { SncfButton } from './SncfButton';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@storybook/testing-library';

describe("Button", () => {
  test('renders button connection', () => {
    render(<SncfButton label='Connection' />);
    const textElement = screen.getByText(/Connection/i);
    expect(textElement).toBeInTheDocument();
  });

  test('hover button', async () => {
    render(<SncfButton label='Connection' primary/>);
    const button = screen.getByRole('button');
    userEvent.hover(button);
    expect(button).toHaveClass('sncf-button--hover');
  });

  test('click call function', () => {
    const handleClick = jest.fn();
    render(<SncfButton label='Connection' onClick={handleClick}/>)
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
})
