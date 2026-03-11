import { designSystem } from '../../design-system';

export const checkboxStyles = `
:host {
  display: inline-flex;
}

label {
  display: inline-flex;
  align-items: center;
  gap: ${designSystem.spacing.lg};
  cursor: pointer;
  user-select: none;
  color: ${designSystem.colors.text.primary};
  font-size: ${designSystem.typography.fontSize.lg};
  font-weight: ${designSystem.typography.fontWeight.medium};
}

input[type='checkbox'] {
  width: ${designSystem.componentSizes.checkbox.size};
  height: ${designSystem.componentSizes.checkbox.size};
  cursor: pointer;
  appearance: none;
  background: ${designSystem.colors.surface.pressed};
  border: ${designSystem.componentSizes.checkbox.borderWidth} solid ${designSystem.colors.border.light};
  border-radius: ${designSystem.radius.md};
  transition: ${designSystem.transition.base};
  box-shadow: ${designSystem.shadows.inset.sm}, ${designSystem.shadows.outer.sm};
  position: relative;
  flex-shrink: 0;
}

input[type='checkbox']:hover {
  border-color: ${designSystem.colors.border.medium};
  box-shadow: ${designSystem.shadows.inset.sm}, ${designSystem.shadows.outer.sm};
}

input[type='checkbox']:checked {
  background: linear-gradient(135deg, ${designSystem.colors.interactive.accent} 0%, ${designSystem.colors.interactive.accentHover} 100%);
  border-color: ${designSystem.colors.interactive.accent};
  box-shadow: ${designSystem.shadows.inset.sm}, 0 2px 8px rgba(59, 130, 246, 0.3);
}

input[type='checkbox']:checked::after {
  content: '✓';
  position: absolute;
  inset-block: 0;
  inset-inline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  font-size: ${designSystem.typography.fontSize.base};
  line-height: 1;
}

.checked {
  text-decoration: line-through;
  color: ${designSystem.colors.text.muted};
}
`;
