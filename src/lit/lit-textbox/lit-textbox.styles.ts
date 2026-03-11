import { designSystem } from '../../design-system';

export const textboxStyles = `
:host {
  display: inline-flex;
  width: 100%;
}

input {
  width: 100%;
  border: none;
  border-radius: ${designSystem.radius.lg};
  background: ${designSystem.colors.surface.pressed};
  color: ${designSystem.colors.text.primary};
  padding: ${designSystem.spacing.md} ${designSystem.spacing.lg};
  font-size: ${designSystem.typography.fontSize.base};
  outline: none;
  transition: ${designSystem.transition.base};
  box-shadow: 
    ${designSystem.shadows.inset.md},
    inset -4px -4px 10px rgba(255, 255, 255, 0.02);
}

input::placeholder {
  color: ${designSystem.colors.text.muted};
}

input:focus {
  box-shadow: 
    ${designSystem.shadows.inset.md},
    inset -4px -4px 10px rgba(255, 255, 255, 0.02),
    0 0 0 3px rgba(96, 165, 250, 0.1);
  color: ${designSystem.colors.text.secondary};
}
`;
