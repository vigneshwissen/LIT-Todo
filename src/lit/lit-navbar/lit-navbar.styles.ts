import { designSystem } from '../../design-system';

export const navbarStyles = `
:host {
  display: block;
  width: 100%;
}

.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${designSystem.spacing.lg};
  padding: ${designSystem.spacing.lg} ${designSystem.spacing.xl};
  border-radius: ${designSystem.radius.xl};
  background: ${designSystem.colors.surface.default};
  border: none;
  box-shadow: 
    ${designSystem.shadows.outer.lg},
    -8px -8px 20px rgba(255, 255, 255, 0.05);
}

.brand {
  font-size: ${designSystem.typography.fontSize.xl};
  font-weight: ${designSystem.typography.fontWeight.bold};
  color: ${designSystem.colors.text.primary};
  letter-spacing: 0.5px;
}

.tabs {
  display: flex;
  gap: ${designSystem.spacing.sm};
}

button {
  border: 0;
  background: transparent;
  color: ${designSystem.colors.text.tertiary};
  padding: ${designSystem.spacing.sm} ${designSystem.spacing.lg};
  border-radius: ${designSystem.radius.lg};
  font-size: ${designSystem.typography.fontSize.base};
  cursor: pointer;
  transition: ${designSystem.transition.base};
  font-weight: ${designSystem.typography.fontWeight.medium};
}

button.active {
  background: ${designSystem.colors.surface.pressed};
  color: ${designSystem.colors.interactive.accent};
  box-shadow: 
    ${designSystem.shadows.outer.sm},
    -4px -4px 10px rgba(255, 255, 255, 0.03);
}

button:hover {
  color: ${designSystem.colors.text.secondary};
  background: rgba(96, 165, 250, 0.1);
}

button.active:hover {
  color: ${designSystem.colors.interactive.accent};
}
`;
