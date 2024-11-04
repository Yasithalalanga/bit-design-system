import { Button } from './button.js';

export const PrimaryButton = () => {
  return <Button variant="primary">Primary Button</Button>;
};

export const SecondaryButton = () => {
  return <Button variant="secondary">Secondary Button</Button>;
};

export const OutlineButton = () => {
  return <Button variant="outline">Outline Button</Button>;
};

export const ButtonSizes = () => {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  );
};

export const DisabledButtons = () => {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button disabled variant="primary">Disabled Primary</Button>
      <Button disabled variant="secondary">Disabled Secondary</Button>
      <Button disabled variant="outline">Disabled Outline</Button>
    </div>
  );
};

export const InteractiveButton = () => {
  return (
    <Button onClick={() => alert('Button clicked!')}>
      Click me!
    </Button>
  );
};
