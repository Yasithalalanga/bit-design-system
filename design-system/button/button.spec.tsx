import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './button.js';
import { PrimaryButton, SecondaryButton, OutlineButton } from './button.composition.js';
import { vi } from 'vitest';

describe('Button Component', () => {
  it('should render primary button with correct text', () => {
    const { getByText } = render(<PrimaryButton />);
    expect(getByText('Primary Button')).toBeTruthy();
  });

  it('should render secondary button with correct text', () => {
    const { getByText } = render(<SecondaryButton />);
    expect(getByText('Secondary Button')).toBeTruthy();
  });

  it('should render outline button with correct text', () => {
    const { getByText } = render(<OutlineButton />);
    expect(getByText('Outline Button')).toBeTruthy();
  });

  it('should handle click events', () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <Button onClick={handleClick}>Click Me</Button>
    );
    
    fireEvent.click(getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not trigger click when disabled', () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <Button disabled onClick={handleClick}>
        Disabled Button
      </Button>
    );
    
    fireEvent.click(getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should apply custom className', () => {
    const { getByRole } = render(
      <Button className="custom-class">Test Button</Button>
    );
    
    expect(getByRole('button').className).toContain('custom-class');
  });

  it('should render different sizes', () => {
    const { rerender, getByRole } = render(
      <Button size="small">Small Button</Button>
    );
    expect(getByRole('button').className).toContain('small');

    rerender(<Button size="large">Large Button</Button>);
    expect(getByRole('button').className).toContain('large');
  });
});
