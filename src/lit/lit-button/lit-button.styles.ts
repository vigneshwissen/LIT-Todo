import { designSystem } from '../../design-system';

export const buttonStyles = `
:host {
  display: inline-block;
}

button {
  border: 0;
  border-radius: ${designSystem.radius.lg};
  padding: ${designSystem.spacing.md} ${designSystem.spacing.xl};
  font-size: ${designSystem.typography.fontSize.base};
  font-weight: ${designSystem.typography.fontWeight.semibold};
  cursor: pointer;
  transition: ${designSystem.transition.base};
  background: ${designSystem.colors.surface.default};
  color: ${designSystem.colors.text.primary};
  box-shadow: ${designSystem.shadows.outer.md};
}

button:hover {
  box-shadow: ${designSystem.shadows.outer.lg};
  color: ${designSystem.colors.interactive.accent};
}

button:active {
  box-shadow: ${designSystem.shadows.inset.md};
}

button.ghost {
  background: transparent;
  color: ${designSystem.colors.text.tertiary};
  box-shadow: none;
}

button.ghost:hover {
  background: rgba(96, 165, 250, 0.1);
  color: ${designSystem.colors.interactive.accent};
  box-shadow: none;
}

button:disabled {
  background: ${designSystem.colors.surface.pressed};
  color: ${designSystem.colors.text.muted};
  cursor: not-allowed;
  box-shadow: ${designSystem.shadows.inset.md};
}

button:disabled:hover {
  box-shadow: ${designSystem.shadows.inset.md};
}

button.ghost:disabled {
  background: transparent;
  color: ${designSystem.colors.text.muted};
}
`;
